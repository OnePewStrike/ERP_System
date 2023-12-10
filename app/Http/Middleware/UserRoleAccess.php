<?php

/**
 * Custom middleware to determine if certain user roles can access a specific route
 * Routes must be defined as these examples in the middleware name:
 *  roles:admin
 *  roles:admin,scorekeeper
 */


namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class UserRoleAccess
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, ...$roles): Response
    {
        $user = Auth::user();

        foreach ($roles as $role) {
            if ($user->type === $role) {
                return $next($request);
            }
        }

        return back();
    }
}
