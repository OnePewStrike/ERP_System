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
class AdminTransactions extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'name',
        'card',
        'number',
        'amount',
        'date',
        'status'
    ];
}
