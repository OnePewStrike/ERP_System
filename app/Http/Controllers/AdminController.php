<?php

namespace App\Http\Controllers;

use App\Models\AdminTransactions;
use App\Models\Cards;
use App\Models\Payments;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index() {
        $totalUsers = User::count();
        $totalTransactions = AdminTransactions::count();

        return Inertia::render('Admin/Dashboard', [
            'cards' => Cards::get(),
            'payments' => Payments::get(),
            'transactions' => AdminTransactions::get(),
            'totalUsers' => $totalUsers,
            'totalTransactions' => $totalTransactions
        ]);
    }
}
