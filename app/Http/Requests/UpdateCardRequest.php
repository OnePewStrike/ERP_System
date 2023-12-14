<?php

namespace App\Http\Requests;

use App\Models\CardCurrency;
use App\Models\CardType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class UpdateCardRequest extends FormRequest
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
            'name' => ['string'],
            'image_path' => ['string'],
            'flag_path' => ['string'],
            'color' => ['string'],
            'type' => [New Enum(CardType::class)],
            'currency' => [New Enum(CardCurrency::class)]
        ];
    }
}
