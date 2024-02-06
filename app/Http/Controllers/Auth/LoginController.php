<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Interface\LoginInterface;
use App\Interface\RapidApiInterface;
use Exception;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use Inertia\Response;
use Laravel\Socialite\Facades\Socialite;
use Symfony\Component\HttpFoundation\RedirectResponse;

class LoginController extends Controller
{
    protected RapidApiInterface $rapidApiService;
    protected LoginInterface $loginService;
    public function __construct(RapidApiInterface $rapidApiService, LoginInterface $loginService)
    {
        $this->rapidApiService = $rapidApiService;
        $this->loginService = $loginService;
    }

    /**
     * @return \Illuminate\Http\RedirectResponse|RedirectResponse
     */
    public function redirectToFacebook(): RedirectResponse|\Illuminate\Http\RedirectResponse
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

            $response = Http::get("https://graph.facebook.com/v19.0/{$user->id}", [
                'access_token' => $user->token,
            ])->json();


            dd($response);
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
    public function redirectToTikTok(): RedirectResponse|\Illuminate\Http\RedirectResponse
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
    public function redirectToInstagram(): RedirectResponse|\Illuminate\Http\RedirectResponse
    {
        return Socialite::driver('instagram')->redirect();
    }

    public function handleInstagramCallback(): Response|string
    {
        try {
            $user = Socialite::driver('instagram')->user();
            $userInfo = $this->rapidApiService->get(
                config('app.instagram_host'),
                config('app.instagram_profile_url').'?username='.$user->getName(),
                config('app.rapid_api_key'));
            $result = $this->loginService->createInstagramUser($userInfo);

            return Inertia::render('Home', [
                'data' => [
                    'status' => $result['status'],
                    'message' => $result['message'],
                ]
            ]);

        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    /**
     * @return \Illuminate\Http\RedirectResponse|RedirectResponse
     */
    public function redirectToTwitter(): RedirectResponse|\Illuminate\Http\RedirectResponse
    {
        return Socialite::driver('twitter')->redirect();
    }

    public function handleTwitterCallback(): Response|string
    {
        try {
            $user = Socialite::driver('twitter')->user();
            $details = [
                'username' => $user->nickname,
                'user_id' => $user->id,
            ];

            $userInfo = $this->rapidApiService->post(
                config('app.twitter_host'),
                config('app.twitter_profile_url'),
                config('app.rapid_api_key'), $details
            );
            $result = $this->loginService->createTwitterUser($userInfo);

            return Inertia::render('Home', [
                'data' => [
                    'status' => $result['status'],
                    'message' => $result['message'],
                ]
            ]);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    /**
     * @return RedirectResponse|\Illuminate\Http\RedirectResponse
     */
    public function redirectToGoogle(): RedirectResponse|\Illuminate\Http\RedirectResponse
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback()
    {
        $user = Socialite::driver('google')->user();

        dd($user);
    }
}
