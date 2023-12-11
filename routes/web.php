<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\ManagerController;
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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/', function () {
//     return Inertia::render('Login');
// })->name('login');
// Route::controller(AuthenticatedSessionController::class)
//     ->group(function () {
//         Route::post('login', 'store')->name('login.post');
//         Route::post('logout', 'destroy')->name('logout.post');
//     });

Route::middleware(['auth'])->group(function () {
    Route::middleware([UserRoleAccess::class . ':manager'])->group(function () {
        Route::controller(ManagerController::class)->group(function () {
            Route::get('dashboard', 'index')->name('dashboard');
        });

        Route::get('/transactions', function () {
            return Inertia::render('Managers/Transactions');
        })->name('transactions');

        Route::get('/trade', function () {
            return Inertia::render('Managers/Trade');
        })->name('trade');

        Route::get('/statistics', function () {
            return Inertia::render('Managers/Statistics');
        })->name('statistics');
    });

    Route::middleware([UserRoleAccess::class . ':admin'])->group(function () {
        Route::controller(AdminController::class)->group(function () {
            Route::get('dashboard', 'index')->name('dashboard');
        });

        Route::get('/cards', function () {
            return Inertia::render('Admin/Cards');
        })->name('cards');

        Route::get('/payments', function () {
            return Inertia::render('Admin/Payments');
        })->name('Payments');

        Route::get('/statistics', function () {
            return Inertia::render('Admin/Statistics');
        })->name('statistics');

        Route::get('/transactions', function () {
            return Inertia::render('Admin/Transactions');
        })->name('transactions');

        Route::get('/users', function () {
            return Inertia::render('Admin/Users');
        })->name('users');

        Route::get('/users-view', function () {
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
