<?php

namespace App\Http\Controllers;

use App\Models\ManagerTransactions;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ManagerController extends Controller
{
    public function index() {
        $totalUsers = User::count();
        $totalTransactions = ManagerTransactions::count();

        return Inertia::render('Managers/Dashboard', [
            'transactions' => ManagerTransactions::get(),
            'totalUsers' => $totalUsers,
            'totalTransactions' => $totalTransactions
        ]);
    }
}
