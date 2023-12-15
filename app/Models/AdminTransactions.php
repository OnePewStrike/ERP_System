<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

enum Status: string {
    case successful = 'successful';
    case pending = 'pending';
    case processing = 'processing';
    case cancelled = 'cancelled';
}

/**
 * App\Models\AdminTransactions
 *
 * @property int $id
 * @property string $name
 * @property string $card
 * @property float $amount
 * @property string $date
 * @property string $status
 * @method static \Database\Factories\AdminTransactionsFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|AdminTransactions newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AdminTransactions newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AdminTransactions query()
 * @method static \Illuminate\Database\Eloquent\Builder|AdminTransactions whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AdminTransactions whereName($value)
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
        'email',
        'card',
        'amount',
        'date',
        'status'
    ];
}
