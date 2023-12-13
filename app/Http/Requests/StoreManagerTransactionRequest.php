<?php

namespace App\Http\Requests;

use App\Models\ManagerTransactionStatus;
use App\Models\ManagerTransactionType;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class StoreManagerTransactionRequest extends FormRequest
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
            'name'   => ['required', 'string'],
            'type'   => ['required', new Enum(ManagerTransactionType::class)],
            'value'  => ['required', 'string'],
            'return' => ['required', 'string'],
            'status' => ['required', new Enum(ManagerTransactionStatus::class)],
            'date'   => ['required', 'date'],
        ];
    }
}
