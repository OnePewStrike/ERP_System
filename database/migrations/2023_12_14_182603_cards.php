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
        Schema::create('cards', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('image_path');
            $table->string('file_path');
            $table->string('color');
            $table->enum('currency', [
                'US Dollars',
                'Euro',
                'Great British Pound',
                'Japanese Yen',
                'Australian Dollar',
                'Canadian Dollar'
            ]);
            $table->enum('type', [
                'Bitcoin',
                'Amazon Card',
                'Steam Card',
                'iTunes Card',
                'Etherium',
                'Uber'
            ]);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cards');
    }
};
