<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCardRequest;
use App\Http\Requests\UpdateCardRequest;
use App\Models\Cards;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CardsController extends Controller
{
    public function index(){
        return Inertia::render("Admin/Cards", [
            'cards' => Cards::get(),
        ]);
    }

    public function store(StoreCardRequest $cards) {

        $validated = $cards->validated();

        Cards::create($validated);

        return back();
    }

    public function update(UpdateCardRequest $cards, Cards $card)
    {
        $validated = $cards->validated();

        $card->update($validated);

        return back();
    }
    public function destroy(Cards $card)
    {
        $card->delete();
        return back();
    }
}
