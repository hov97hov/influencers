<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Exception;
use Inertia\Inertia;
use Inertia\Response;
use Laravel\Socialite\Facades\Socialite;
use Symfony\Component\HttpFoundation\RedirectResponse;

class LoginController extends Controller
{

    /**
     * @return \Illuminate\Http\RedirectResponse|RedirectResponse
     */
    public function redirectToFacebook()
    {
        return Socialite::driver('facebook')->redirect();
    }

    /**
     * @return Response
     */
    public function handleFacebookCallback(): Response
    {

        try {
            $user = Socialite::driver('facebook')->user();


            dd($user);

            return Inertia::render('Home', [
                'user' => $user
            ]);


        } catch (Exception $e) {
            dd($e->getMessage());
        }
    }
}
