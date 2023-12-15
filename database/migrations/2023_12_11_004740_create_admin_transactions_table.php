<?php

use App\Models\AdminTransactions;
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
        Schema::create('admin_transactions', function (Blueprint $table) {
            $table->id();
            $table->string('email');
            $table->string('card');
            $table->decimal('amount');
            $table->string('date');
            $table->string('status');
            $table->timestamps();
        });

        AdminTransactions::create([
            'email' => 'ramonridwan@gmail.com',
            'card' => 'iTunes Card',
            'amount' => '4200',
            'date' => '1/12/2002',
            'status' => 'Successful',
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admin_transactions');
    }
};
