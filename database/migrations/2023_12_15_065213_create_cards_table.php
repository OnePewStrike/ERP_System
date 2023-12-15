<?php

use App\Models\Cards;
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
            $table->string("name");
            $table->string("image_path");
            $table->string("flag_path");
            $table->string("color");
            $table->timestamps();
        });

        $data = [
            [
                'name' => 'Amazon Card',
                'image_path' => '/images/cards/amazon.png',
                'flag_path' => '/images/flags/usa.png',
                'color' => 'bg-gradient-to-b from-blue-300 to-teal-400',
            ],
            [
                'name' => 'iTunes Card',
                'image_path' => '/images/cards/itunes.png',
                'flag_path' => '/images/flags/canada.png',
                'color' => 'bg-gradient-to-b from-indigo-500 to-violet-700',
            ],
            [
                'name' => 'Google Play Card',
                'image_path' => '/images/cards/google_play.png',
                'flag_path' => '/images/flags/australia.png',
                'color' => 'bg-slate-700',
            ],
            [
                'name' => 'Steam Card',
                'image_path' => '/images/cards/steam.png',
                'flag_path' => '/images/flags/usa.png',
                'color' => 'bg-gradient-to-b from-indigo-500 to-violet-400',
            ],
            [
                'name' => 'Other Cards',
                'image_path' => '/images/cards/others.png',
                'flag_path' => '/images/flags/usa.png',
                'color' => 'bg-slate-700',
            ],
        ];

        foreach ($data as $cardData) {
            Cards::create($cardData);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cards');
    }
};
