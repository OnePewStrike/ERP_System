<?php

use App\Models\Payments;
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
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->string('email');
            $table->string('type');
            $table->decimal('amount');
            $table->string('date');
            $table->string('status');
            $table->timestamps();
        });

        Payments::create([
            'email' => 'ramonridwan@gmail.com',
            'type' => 'User',
            'amount' => '100',
            'date' => '1/12/2002',
            'status' => 'Pending',
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
