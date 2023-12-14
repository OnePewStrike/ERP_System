<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index() {
        return Inertia::render("Admin/Users", [
            'users' => User::get(),
        ]);
    }

    public function store(StoreUserRequest $request) {
        $validated = $request->validated();

        User::create([
            ...$validated,
        ]);

        return back();
    }

    public function update(UpdateUserRequest $request, User $user)
    {
        $validated = $request->validated();

        $user->update($validated);

        return back();
    }

    public function destroy(User $user) {
        $user->delete();

        return back();
    }
}
