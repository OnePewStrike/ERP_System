<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Cards
 *
 * @property int $id
 * @property string $name
 * @property string $image_path
 * @property string $flag_path
 * @property string $color
 * @method static \Database\Factories\CardsFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Cards newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Cards newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Cards query()
 * @method static \Illuminate\Database\Eloquent\Builder|Cards whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cards whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cards whereImagePath($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cards whereFlagPath($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cards whereColor($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cards whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cards whereUpdatedAt($value)
 * @mixin \Eloquent
 */

class Cards extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'image_path',
        'flag_path',
        'color'
    ];
}
