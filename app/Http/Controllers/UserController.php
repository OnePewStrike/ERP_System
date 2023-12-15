<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(){
        return Inertia::render("Admin/Users", [
            'users' => User::get(),
        ]);
    }

    public function update(UpdateUserRequest $request, User $users)
    {
        $validated = $request->validated();

        $users->update($validated);

        return back();
    }
}
