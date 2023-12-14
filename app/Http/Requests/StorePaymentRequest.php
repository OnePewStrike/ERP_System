<?php

namespace App\Http\Requests;

use App\Models\PaymentStatus;
use App\Models\PaymentUserType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class StorePaymentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'email' => ['required', 'string'],
            'type' => ['required', new Enum(PaymentUserType::class)],
            'amount' => ['required', 'float'],
            'date' => ['required', 'date'],
            'status' => ['required', new Enum(PaymentStatus::class)],
        ];
    }
}
