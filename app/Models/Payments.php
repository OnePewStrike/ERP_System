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
 * @property \Illuminate\Support\Carbon $created_at
 * @property \Illuminate\Support\Carbon $updated_at
 *
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Payments newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Payments newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Payments query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Payments whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Payments whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Payments whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Payments whereAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Payments whereDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Payments whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Payments whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Payments whereUpdatedAt($value)
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

