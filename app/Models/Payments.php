<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Payments
 *
 * @property int $id
 * @property string $email
 * @property string $type
 * @property string $amount
 * @property string $date
 * @property string $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Payments newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Payments newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Payments query()
 * @method static \Illuminate\Database\Eloquent\Builder|Payments whereAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payments whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payments whereDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payments whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payments whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payments whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payments whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payments whereUpdatedAt($value)
 */

class Payments extends Model
{
    use HasFactory;

    protected $fillable = [
        'email',
        'type',
        'amount',
        'date',
        'status'
    ];
}

