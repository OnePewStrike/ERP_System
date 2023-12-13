<?php

namespace App\Http\Requests;

use App\Models\ManagerTransactionStatus;
use App\Models\ManagerTransactionType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class UpdateManagerTransactionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'   => ['string'],
            'type'   => [ new Enum(ManagerTransactionType::class)],
            'value'  => ['string'],
            'return' => ['string'],
            'status' => [new Enum(ManagerTransactionStatus::class)],
            'date'   => ['date'],
        ];
    }
}
