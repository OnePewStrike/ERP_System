<?php

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
            $table->string('return');
            $table->enum('status', [
                'Completed',
                'Failed',
                'In Progress',
            ]);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('manager_transactions');
    }
};
