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

    public function store(StoreCardRequest $request) {

        $validated = $request->validated();

        Cards::create($validated);

        return back();
    }

    public function update(UpdateCardRequest $request, Cards $admin_card)
    {
        $validated = $request->validated();

        $admin_card->update($validated);

        return back();
    }
    public function destroy(Cards $admin_card)
    {
        $admin_card->delete();
        return back();
    }
}
