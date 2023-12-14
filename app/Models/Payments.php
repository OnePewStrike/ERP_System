<?php

namespace App\Models;

enum PaymentUserType: string {
    case agent = 'Agent';
    case user = 'User';
}

enum PaymentStatus: string {
    case paid = 'Paid';
    case processing = 'Processing';
    case cancelled = 'Cancelled';
    case pending = 'Pending';
}

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Payments
 *
 * @property int $id
 * @property string $email
 * @property string $card
 * @property float $amount
 * @property \Illuminate\Support\Carbon $date
 * @property string $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Database\Factories\PaymentsFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Payments newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Payments newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Payments query()
 * @method static \Illuminate\Database\Eloquent\Builder|Payments whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payments whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payments whereCard($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payments whereAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payments whereDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payments whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payments whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payments whereUpdatedAt($value)
 * @mixin \Eloquent
 */

class Payments extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'email',
        'type',
        'amount',
        'date',
        'status',
    ];
}

