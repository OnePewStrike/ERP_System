<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreManagerTransactionRequest;
use App\Http\Requests\UpdateAdminTransactionRequest;
use App\Models\AdminTransactions;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminTransactionsController extends Controller
{
    public function index() {
        return Inertia::render("Admin/Transactions", [
            'transactions' => AdminTransactions::get(),
        ]);
    }

    public function store(StoreManagerTransactionRequest $request) {
        $validated = $request->validated();

        AdminTransactions::create([
            ...$validated,
        ]);

        return back();
    }

    public function update(UpdateAdminTransactionRequest $request, AdminTransactions $adminTransaction)
    {
        $validated = $request->validated();

        $adminTransaction->update($validated);

        return back();
    }

    public function destroy(AdminTransactions $adminTransactions) {
        $adminTransactions->delete();

        return back();
    }
}
