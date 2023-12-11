<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ManagerTransactions;
use Inertia\Inertia;

class ManagerTransactionsController extends Controller
{
    public function index(){
        return Inertia::render("Manager/Transactions", [
            'transactions' => ManagerTransactions::all(),
        ]);
    }
    public function destroy(ManagerTransactions $managerTransactions)
    {
        $managerTransactions->delete();

        return back();
    }
}
