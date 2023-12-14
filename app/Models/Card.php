<?php

namespace App\Models;

enum CardType: string {
    case bitcon = 'Bitcoin';
    case amazon = 'Amazon Card';
    case steam = 'Steam Card';
    case itunes = 'iTunes Card';
    case etherium = 'Etherium';
    case uber = 'Uber';
}

enum CardCurrency: string {
    case usd = "US Dollars";
    case eur = "Euro";
    case gbp = "Great British Pound";
    case jpy = "Japanese Yen";
    case aud = "Australian Dollar";
    case cad = "Canadian Dollar";
}

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Card
 *
 * @property int $id
 * @property string $name
 * @property string $image_path
 * @property string $flag_path
 * @property string $color
 * @property string $type
 * @property string $currency
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Database\Factories\CardFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Card newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Card newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Card query()
 * @method static \Illuminate\Database\Eloquent\Builder|Card whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Card whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Card whereImagePath($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Card whereFlagPath($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Card whereColor($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Card whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Card whereCurrency($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Card whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Card whereUpdatedAt($value)
 * @mixin \Eloquent
 */

class Card extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'name',
        'image_path',
        'flag_path',
        'color',
        'currency',
        'type'
    ];
}
