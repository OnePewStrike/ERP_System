<?php

namespace App\Http\Requests;

use App\Models\PaymentStatus;
use App\Models\PaymentUserType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;


class UpdatePaymentRequest extends FormRequest
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
            'email' => ['string'],
            'type' => [new Enum(PaymentUserType::class)],
            'amount' => ['float'],
            'date' => ['date'],
            'status' => [new Enum(PaymentStatus::class)],
        ];
    }
}
