<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AdminTransactionsController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\CardsController;
use App\Http\Controllers\ManagerController;
use App\Http\Controllers\ManagerTransactionsController;
use App\Http\Controllers\PaymentsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\UserRoleAccess;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
    return Inertia::render('Auth/Login');
})->name('login');
Route::controller(AuthenticatedSessionController::class)
    ->group(function () {
        Route::post('login', 'store')->name('login.post');
        Route::post('logout', 'destroy')->name('logout.post');
    });

Route::middleware(['auth'])->group(function () {
    Route::middleware([UserRoleAccess::class . ':manager'])->group(function () {
        Route::controller(ManagerController::class)->group(function () {
            Route::get('dashboard', 'index')->name('dashboard');
        });

        Route::resource('manager-transactions', ManagerTransactionsController::class);

        Route::get('manager-trade', function () {
            return Inertia::render('Managers/Trade');
        })->name('trade');

        Route::get('manager-statistics', function () {
            return Inertia::render('Managers/Statistics');
        })->name('manager-statistics');
    });

    Route::middleware([UserRoleAccess::class . ':admin'])->group(function () {
        Route::controller(AdminController::class)->group(function () {
            Route::get('overview', 'index')->name('overview');
        });

        Route::resource('admin-cards', CardsController::class);
        Route::resource('admin-payments', PaymentsController::class)->names('admin.payments');

        Route::get('admin-statistics', function () {
            return Inertia::render('Admin/Statistics');
        })->name('admin-statistics');

        Route::resource('admin-transactions', AdminTransactionsController::class);

        Route::get('admin-users', function () {
            return Inertia::render('Admin/Users');
        })->name('users');

        Route::get('admin-users-view', function () {
            return Inertia::render('Admin/UsersView');
        })->name('users-view');
    });
});




Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';


        // Route::get('manager-transactions', [ManagerTransactionsController::class, 'index'])->name('manager-transactions');
        // Route::post('manager-transactions', [ManagerTransactionsController::class, 'store']);
        // Route::put('manager-transactions', [ManagerTransactionsController::class, 'update'])->name('manager-transactions.edit');
        // Route::delete('manager-transactions', [ManagerTransactionsController::class, 'destroy'])->name('manager-transactions.destroy');


        // Route::get('admin-payments', [PaymentsController::class, 'index'])->name('admin-payments');
        // Route::post('admin-payments', [PaymentsController::class, 'store']);
        // Route::put('admin-payments', [PaymentsController::class, 'update'])->name('admin-payments.edit');
        // Route::delete('admin-payments', [PaymentsController::class, 'destroy'])->name('admin-payments.destroy');
