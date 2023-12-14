<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

enum AdminTransactionStatus: string {
    case successful = 'Successful';
    case pending = 'Pending';
    case processing = 'Processing';
    case cancelled = 'Cancelled';
}

/**
 * App\Models\AdminTransactions
 *
 * @property int $id
 * @property string $email
 * @property string $card
 * @property float $amount
 * @property \Illuminate\Support\Carbon $date
 * @property string $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Database\Factories\AdminTransactionsFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|AdminTransactions newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AdminTransactions newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AdminTransactions query()
 * @method static \Illuminate\Database\Eloquent\Builder|AdminTransactions whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AdminTransactions whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AdminTransactions whereCard($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AdminTransactions whereAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AdminTransactions whereDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AdminTransactions whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AdminTransactions whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AdminTransactions whereUpdatedAt($value)
 * @mixin \Eloquent
 */

class AdminTransactions extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'email',
        'card',
        'amount',
        'date',
        'status'
    ];
}
