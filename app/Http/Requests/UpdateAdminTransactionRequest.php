<?php

namespace App\Http\Requests;

use App\Models\AdminTransactionStatus;
use Illuminate\Foundation\Http\FormRequest;

class UpdateAdminTransactionRequest extends FormRequest
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
            'card' => ['string'],
            'amount' => ['float'],
            'date' => ['date'],
            'status' => [new Enum(AdminTransactionStatus::class)]
        ];
    }
}
