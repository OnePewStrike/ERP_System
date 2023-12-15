<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePaymentRequest;
use App\Http\Requests\UpdatePaymentRequest;
use App\Models\Payments;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PaymentsController extends Controller
{
    public function index(){
        return Inertia::render("Admin/Payments", [
            'payments' => Payments::get(),
        ]);
    }

    public function store(StorePaymentRequest $admin_payment) {

        $validated = $admin_payment->validated();

        Payments::create($validated);

        return back();
    }

    public function update(UpdatePaymentRequest $admin_payment, Payments $payments)
    {
        $validated = $admin_payment->validated();

        $payments->update($validated);

        return back();
    }
    public function destroy(Payments $payments)
    {
        $payments->delete();
        return back();
    }
}
