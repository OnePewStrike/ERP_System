<?php

use App\Models\ManagerTransactions;
use App\Models\ManagerTransactionStatus;
use App\Models\ManagerTransactionType;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('manager_transactions', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('type');
            $table->string('value');
            $table->string('return');
            $table->string('status');
            $table->string('date');
            $table->timestamps();
        });

        ManagerTransactions::create([
            'name' => 'United States Bank',
            'type' => 'Credit',
            'value' => '$100',
            'return' => '#18000',
            'status' => 'Completed',
            'date' => '01/14/2019'
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('manager_transactions');
    }
};
