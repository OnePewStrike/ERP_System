<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreManagerTransactionRequest;
use App\Http\Requests\UpdateManagerTransactionRequest;
use Illuminate\Http\Request;
use App\Models\ManagerTransactions;
use App\Models\ManagerTransactionStatus;
use App\Models\ManagerTransactionType;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rules\Enum;
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

        ManagerTransactions::create($validated);

        return back();
    }

    public function update(UpdateManagerTransactionRequest $request, ManagerTransactions $manager_transaction)
    {
        $validated = $request->validated();

        $manager_transaction->update($validated);

        return back();
    }
    public function destroy(ManagerTransactions $manager_transaction)
    {
        $manager_transaction->delete();
        return back();
    }
}
