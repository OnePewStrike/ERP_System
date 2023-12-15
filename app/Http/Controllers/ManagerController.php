<?php

namespace App\Http\Controllers;

use App\Models\ManagerTransactions;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ManagerController extends Controller
{
    public function index() {
        return Inertia::render('Managers/Dashboard', [
            'transactions' => ManagerTransactions::get()
        ]);
    }
}
