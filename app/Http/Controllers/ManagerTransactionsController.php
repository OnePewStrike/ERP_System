<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreManagerTransactionRequest;
use App\Http\Requests\UpdateManagerTransactionRequest;
use Illuminate\Http\Request;
use App\Models\ManagerTransactions;
use Inertia\Inertia;

class ManagerTransactionsController extends Controller
{
    public function index(){
        return Inertia::render("Managers/Transactions", [
            'transactions' => ManagerTransactions::get(),
        ]);
    }

    public function store(StoreManagerTransactionRequest $request) {
        $validated = $request->validated();

        ManagerTransactions::create([
            ...$validated,
        ]);

        return back();
    }

    public function update(UpdateManagerTransactionRequest $request, ManagerTransactions $managerTransaction)
    {
        $validated = $request->validated();

        $managerTransaction->update($validated);

        return back();
    }
    public function destroy(ManagerTransactions $managerTransactions)
    {
        $managerTransactions->delete();
        return back();
    }
}
