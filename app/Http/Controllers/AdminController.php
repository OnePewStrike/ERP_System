<?php

namespace App\Http\Controllers;

use App\Models\AdminTransactions;
use App\Models\Card;
use App\Models\Payments;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index() {
        return Inertia::render('Admin/Dashboard', [
            'cards' => Card::get(),
            'payments' => Payments::get(),
            'transactions' => AdminTransactions::get(),
        ]);
    }
}
