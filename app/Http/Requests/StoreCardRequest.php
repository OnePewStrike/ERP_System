<?php

namespace App\Http\Requests;

use App\Models\CardCurrency;
use App\Models\CardType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class StoreCardRequest extends FormRequest
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
            'name' => ['required', 'string'],
            'image_path' => ['required', 'string'],
            'flag_path' => ['required', 'string'],
            'color' => ['required', 'string'],
            'type' => ['required', New Enum(CardType::class)],
            'currency' => ['required', New Enum(CardCurrency::class)]
        ];
    }
}
