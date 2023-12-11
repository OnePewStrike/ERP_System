<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

enum Type: string {
    case credit = 'credit';
    case debit = 'debit';
};

/**
 * App\Models\ManagerTransactions
 *
 * @property int $id
 * @property string $name
 * @property Type $type
 * @property string $return
 * @property string $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Database\Factories\ManagerTransactionsFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerTransactions newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerTransactions newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerTransactions query()
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerTransactions whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerTransactions whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerTransactions whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerTransactions whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerTransactions whereReturn($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerTransactions whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerTransactions whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class ManagerTransactions extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'name',
        'type',
        'return',
        'status',
    ];
}
