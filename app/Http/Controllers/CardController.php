<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCardRequest;
use App\Http\Requests\UpdateCardRequest;
use App\Models\Card;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CardController extends Controller
{
    public function index() {
        return Inertia::render("Admin/Cards", [
            'cards' => Card::get(),
        ]);
    }

    public function store(StoreCardRequest $request) {
        $validated = $request->validated();

        Card::create([
            ...$validated,
        ]);

        return back();
    }

    public function update(UpdateCardRequest $request, Card $card)
    {
        $validated = $request->validated();

        $card->update($validated);

        return back();
    }

    public function destroy(Card $card) {
        $card->delete();

        return back();
    }
}
