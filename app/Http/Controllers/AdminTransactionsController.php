<?php

namespace App\Http\Controllers;

use App\Models\AdminTransactions;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminTransactionsController extends Controller
{
    public function index() {
        return Inertia::render("Admin/Transactions", [
            'transactions' => AdminTransactions::all(),
        ]);
    }

    public function destroy(AdminTransactions $adminTransactions) {
        $adminTransactions->delete();

        return back();
    }
}
