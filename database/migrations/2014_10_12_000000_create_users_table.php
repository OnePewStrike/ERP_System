<?php

use App\Models\User;
use App\Models\UserType;
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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->enum('type', [
                'admin',
                'manager',
            ]);
            $table->string('phone')->nullable();
            $table->string('nationality')->nullable();
            $table->string('status')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

        User::create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
            'password' => '12345',
            'type' => UserType::admin->value,
            'nationality' => 'Filipino',
            'phone' => '09123456789',
            'status' => 'Active',
        ]);

        User::create([
            'name' => 'Manager',
            'email' => 'manager@example.com',
            'password' => '12345',
            'type' => UserType::manager->value,
            'nationality' => 'Filipino',
            'phone' => '09123456789',
            'status' => 'Active',
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
