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
            $table->enum('type', [
                'Credit',
                'Debit',
            ]);
            $table->string('value');
            $table->string('return');
            $table->enum('status', [
                'Completed',
                'Failed',
                'In Progress',
            ]);
            $table->timestamps();
        });

        ManagerTransactions::create([
            'name' => 'United States Bank',
            'type' => ManagerTransactionType::credit->value,
            'value' => '$100',
            'return' => '#18000',
            'status' => ManagerTransactionStatus::completed->value,
            'date' => '14/01/2019'
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
