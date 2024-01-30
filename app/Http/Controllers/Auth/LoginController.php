<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Exception;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
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

    /**
     * @return \Illuminate\Http\RedirectResponse|RedirectResponse
     */
    public function redirectToTikTok()
    {
        return Socialite::driver('tiktok')->redirect();
    }

    /**
     * Obtain the user information from TikTok.
     *
     * @return \Illuminate\Http\Response
     */
    public function handleTikTokCallback(): \Illuminate\Http\Response
    {
        try {
            $user = Socialite::driver('tiktok')->user();
            dd($user);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    /**
     * @return \Illuminate\Http\RedirectResponse|RedirectResponse
     */
    public function redirectToInstagram()
    {
        return Socialite::driver('instagram')->redirect();
    }

    public function handleInstagramCallback()
    {
        try {
            $user = Socialite::driver('instagram')->user();
            dd($user);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }
}
