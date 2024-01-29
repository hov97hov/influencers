<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;
use Laravel\Socialite\Facades\Socialite;
use Symfony\Component\HttpFoundation\RedirectResponse;

class LoginController extends Controller
{

    public function test()
    {
        $app_token = file_get_contents('https://graph.facebook.com/oauth/access_token?client_id=293649753711357&client_secret=3d7c51b4e9ab9edc0b1760dd04cf8c1c&grant_type=client_credentials');

        dd($app_token);
    }

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
        $user = Socialite::driver('facebook')->user();

        return Inertia::render('Home', [
            'user' => $user
        ]);
    }

}
