<?php

namespace App\Service;

use App\Interface\LoginInterface;
use App\Interface\RapidApiInterface;
use App\Models\Instagram;
use App\Models\Telegram;
use App\Models\TikTok;
use App\Models\Twitter;
use App\Models\User;
use App\Models\UserDetail;
use App\Models\Youtube;
use Carbon\Carbon;
use Illuminate\Support\Arr;

class LoginService implements LoginInterface
{
    private RapidApiInterface $rapidApiService;

    public function __construct(RapidApiInterface $rapidApiService)
    {
        $this->rapidApiService = $rapidApiService;
    }

    /**
     * @param array $data
     * @return string
     */
    public function registerUser(array $data): string
    {

        $user = User::where('email', Arr::get($data, 'email'))->first();

        if ($user) {
            return 'There is already a user in this email';
        }

        $createNewUser = User::create([
            'name' => Arr::get($data, 'first_name'). ' ' .  Arr::get($data, 'last_name'),
            'email' => Arr::get($data, 'email'),
        ]);

        if (!$createNewUser) {
            return 'Registration failed, an error occurred!';
        }

        $date = Carbon::createFromFormat('d/m/Y', Arr::get($data, 'birthday'))->format('d/m/Y');

        $createUSerDetail = UserDetail::create([
            'first_name' =>Arr::get($data, 'first_name'),
            'last_name' => Arr::get($data, 'last_name'),
            'phone' => Arr::get($data, 'phone'),
            'influencer_name' => Arr::get($data, 'influencer_name'),
            'facebook' => Arr::get($data, 'facebook'),
            'instagram' => Arr::get($data, 'instagram'),
            'tiktok' => Arr::get($data, 'tiktok'),
            'youtube' => Arr::get($data, 'youtube'),
            'twitter' => Arr::get($data, 'twitter'),
            'telegram' => Arr::get($data, 'telegram'),
            'account_type' => Arr::get($data, 'account_type'),
            'gender' => Arr::get($data, 'gender'),
            'birthday' => $date,
            'language' => Arr::get($data, 'language'),
            'additional_information' => Arr::get($data, 'additional_information'),
            'user_id' =>  $createNewUser->id,
        ]);

        if (!$createUSerDetail) {
            User::find($createNewUser->id)->delete();

            return 'Registration failed, an error occurred!';
        }

        if ($createUSerDetail->instagram != '') {
            $InstagramUserInfo = $this->rapidApiService->get(
                config('app.instagram_host'),
                config('app.instagram_profile_url').'?username='.$createUSerDetail->instagram,
                config('app.rapid_api_key'));

            if ($InstagramUserInfo) {
                $this->createInstagramUser($InstagramUserInfo, $createNewUser->id);
            }
        }

        if ($createUSerDetail->twitter != '') {
            $twitterDetails = [
                'username' => $createUSerDetail->twitter,
            ];

            $twitterUserInfo = $this->rapidApiService->rapidApiDataWithParams(
                config('app.twitter_host'),
                config('app.twitter_profile_url'),
                config('app.rapid_api_key'), $twitterDetails, 'post'
            );

            if ($twitterUserInfo) {
                $this->createTwitterUser($twitterUserInfo, $createNewUser->id);
            }
        }

        if ($createUSerDetail->telegram != '') {
            $telegramDetails = [
                'user' => $createUSerDetail->telegram,
            ];

            $telegramUserInfo = $this->rapidApiService->rapidApiDataWithParams(
                config('app.telegram_host'),
                config('app.telegram_profile_url'),
                config('app.rapid_api_key'),
                $telegramDetails, 'get');

            if (!isset($telegramUserInfo['error'])) {
                $this->createTelegramUser($telegramUserInfo, $createNewUser->id);
            }
        }

        if ($createUSerDetail->youtube != '') {
            $details = [
                'id' => $createUSerDetail->youtube,
                'hl' => 'en',
                'gl' => 'US',
            ];
            $YoutubeChannelInfo = $this->rapidApiService->rapidApiDataWithParams(
                config('app.youtube_host'),
                config('app.youtube_profile_url'),
                config('app.rapid_api_key'),
                $details, 'get');

            if ($YoutubeChannelInfo) {
                $this->createYoutubeChanel($YoutubeChannelInfo, $createNewUser->id);
            }
        }

        if ($createUSerDetail->tiktok != '') {
            $details = [
                'username' => $createUSerDetail->tiktok,
            ];
            $tiktokUserInfo = $this->rapidApiService->rapidApiDataWithParams(
                config('app.tiktok_host'),
                config('app.tiktok_profile_url'),
                config('app.rapid_api_key'),
                $details, 'get');

            if (!isset($tiktokUserInfo['error'])) {
                $this->createTiktokUser($tiktokUserInfo, $createNewUser->id);
            }
        }

        return 'Registration has been completed successfully';
    }

    /**
     * @param array $data
     * @param $userId
     * @return array
     */
    public function createInstagramUser(array $data, $userId = null): array
    {
        $user = Instagram::where('account_id', Arr::get($data,'id'))->first();

        if ($user) {
            return [
                'status' => false,
                'message' => 'The user of this Instagram is already registered'
            ];
        }

        $createNewInstagramUser = Instagram::create([
            'full_name' => Arr::get($data,'full_name'),
            'username' => Arr::get($data,'username'),
            'image' => Arr::get($data,'profile_pic_url_hd'),
            'follow' => Arr::get($data,'edge_follow.count'),
            'followed_by' => Arr::get($data,'edge_followed_by.count'),
            'account_id' => Arr::get($data,'id'),
            'profile_url' => 'https://www.instagram.com/'.Arr::get($data,'username'),
            'user_id' => $userId,
        ]);

        if (!$createNewInstagramUser) {
            return [
                'status' => false,
                'message' => 'an error has occurred, the user is not registering'
            ];
        }

        return [
            'status' => true,
            'message' => 'The user of this Instagram has been successfully registered'
        ];
    }

    /**
     * @param array $data
     * @param $userId
     * @return array
     */
    public function createTwitterUser(array $data, $userId = null): array
    {
        $user = Twitter::where('account_id', Arr::get($data, 'user_id'))->first();

        if ($user) {
            return [
                'status' => false,
                'message' => 'The user of this Twitter is already registered'
            ];
        }

        $createNewInstagramUser = Twitter::create([
            'full_name' => Arr::get($data, 'name'),
            'username' => Arr::get($data, 'username'),
            'image' => Arr::get($data, 'profile_pic_url'),
            'follow' => Arr::get($data, 'follower_count'),
            'followed_by' => Arr::get($data, 'following_count'),
            'account_id' => Arr::get($data, 'user_id'),
            'user_id' => $userId,
            'profile_url' => 'https://twitter.com/'.Arr::get($data,'username'),
        ]);

        if (!$createNewInstagramUser) {
            return [
                'status' => false,
                'message' => 'an error has occurred, the user is not registering'
            ];
        }

        return [
            'status' => true,
            'message' => 'The user of this Twitter has been successfully registered'
        ];
    }

    /**
     * @return string
     */
    public function updateInstagramUsers(): string
    {
        $instagramUsers = Instagram::query()->get();

        if (!count($instagramUsers)) {
            return 'no users found';
        }

        foreach ($instagramUsers as $instagramUser) {
            $userInfo = $this->rapidApiService->get(
                config('app.instagram_host'),
                config('app.instagram_profile_url').'?username='.$instagramUser->username,
                config('app.rapid_api_key')
            );

            Instagram::query()
                ->where(['account_id' => Arr::get($userInfo, 'id'), 'username' => Arr::get($userInfo, 'username')])
                ->update([
                    'full_name' => Arr::get($userInfo, 'full_name'),
                    'image' => Arr::get($userInfo, 'profile_pic_url_hd'),
                    'follow' => Arr::get($userInfo, 'edge_follow.count'),
                    'followed_by' => Arr::get($userInfo, 'edge_followed_by.count'),
                ]);
        }

        return 'Instagram Users updated';
    }

    /**
     * @return string
     */
    public function updateTwitterUsers(): string
    {
        $twitterUsers = Twitter::query()->get();

        if (!count($twitterUsers)) {
            return 'no users found';
        }

        foreach ($twitterUsers as $twitterUser) {
            $details = [
                'username' => $twitterUser->nickname,
                'user_id' => $twitterUser->account_id,
            ];
            $userInfo = $this->rapidApiService->rapidApiDataWithParams(
                config('app.twitter_host'), config('app.twitter_profile_url'),
                config('app.rapid_api_key'), $details, 'post'
            );

            Twitter::query()
                ->where(['account_id' => $userInfo['user_id'], 'username' => $userInfo['username']])
                ->update([
                    'full_name' => Arr::get($userInfo, 'name'),
                    'image' => Arr::get($userInfo, 'profile_pic_url'),
                    'follow' => Arr::get($userInfo, 'follower_count'),
                    'followed_by' => Arr::get($userInfo, 'following_count'),
                ]);
        }

        return 'Twitter Users updated';
    }

    /**
     * @param array $data
     * @param $userId
     * @return array
     */
    public function createYoutubeChanel(array $data, $userId = null): array
    {
        $YoutubeUser = Youtube::where('channel_id',  Arr::get($data, 'channelId'))->first();

        if ($YoutubeUser) {
            return [
                'status' => false,
                'message' => 'The channel of this Youtube is already registered'
            ];
        }

        $createNewYoutubeChannel = Youtube::create([
            'channel_id' => Arr::get($data, 'channelId'),
            'full_name' => Arr::get($data, 'title'),
            'username' => Arr::get($data, 'username'),
            'image' => Arr::get($data, 'avatar.2.url'),
            'follow' => Arr::get($data, 'stats.subscribers'),
            'description' => Arr::get($data, 'description'),
            'user_id' => $userId,
            'profile_url' => 'https://www.youtube.com/'.Arr::get($data,'username'),
        ]);

        if (!$createNewYoutubeChannel) {
            return [
                'status' => false,
                'message' => 'an error has occurred, the user is not registering'
            ];
        }

        return [
            'status' => true,
            'message' => 'The channel of this Youtube has been successfully registered'
        ];
    }

    /**
     * @return string
     */
    public function updateYoutubeChanel(): string
    {
        $youtubeChannels = Youtube::query()->get();

        if (!count($youtubeChannels)) {
            return 'no users found';
        }

        foreach ($youtubeChannels as $youtubeChannel) {
            $details = [
                'id' => $youtubeChannel->channel_id,
                'hl' => 'en',
                'gl' => 'US',
            ];
            $userInfo = $this->rapidApiService->rapidApiDataWithParams(
                config('app.youtube_host'),
                config('app.youtube_profile_url'),
                config('app.rapid_api_key'),
                $details, 'get');

            Youtube::query()
                ->where('channel_id', Arr::get($userInfo, 'channelId'))
                ->update([
                    'full_name' => Arr::get($userInfo, 'title'),
                    'username' => Arr::get($userInfo, 'username'),
                    'image' => Arr::get($userInfo, 'avatar.2.url'),
                    'follow' => Arr::get($userInfo, 'stats.subscribers'),
                    'description' => Arr::get($userInfo, 'description'),
                ]);
        }

        return 'Youtube chanel updated';
    }

    /**
     * @param array $data
     * @param $userId
     * @return array
     */
    public function createTelegramUser(array $data, $userId = null): array
    {
        $telegramUser = Telegram::where('username', Arr::get($data, 'username'))->first();

        if ($telegramUser) {
            return [
                'status' => false,
                'message' => 'The user of this Telegram is already registered'
            ];
        }

        $createNewTelegramUser = Telegram::create([
            'full_name' => Arr::get($data, 'title'),
            'username' => Arr::get($data, 'username'),
            'account_id' => Arr::get($data, 'id'),
            'image' => Arr::get($data, 'photo'),
            'follow' => Arr::get($data, 'subscribers'),
            'description' => Arr::get($data, 'about'),
            'user_id' => $userId,
            'profile_url' => 'https://t.me/'.Arr::get($data,'username'),
        ]);

        if (!$createNewTelegramUser) {
            return [
                'status' => false,
                'message' => 'an error has occurred, the user is not registering'
            ];
        }

        return [
            'status' => true,
            'message' => 'The user of this Telegram has been successfully registered'
        ];
    }

    /**
     * @return string
     */
    public function updateTelegramChanel(): string
    {
        $telegramChannels = Telegram::query()->get();

        if (!count($telegramChannels)) {
            return 'no users found';
        }

        foreach ($telegramChannels as $telegramChannel) {
            $details = [
                'user' => $telegramChannel->username,
            ];

            $userInfo = $this->rapidApiService->rapidApiDataWithParams(
                config('app.telegram_host'),
                config('app.telegram_profile_url'),
                config('app.rapid_api_key'),
                $details, 'get');

            if (!isset($userInfo['error'])) {
                Telegram::query()
                    ->where('username', Arr::get($userInfo, 'username'))
                    ->update([
                        'full_name' => Arr::get($userInfo, 'title'),
                        'account_id' => Arr::get($userInfo, 'id'),
                        'username' => Arr::get($userInfo, 'username'),
                        'image' => Arr::get($userInfo, 'photo'),
                        'follow' => Arr::get($userInfo, 'subscribers'),
                        'description' => Arr::get($userInfo, 'about'),
                    ]);
            }
        }

        return 'Telegram chanel updated';
    }

    /**
     * @param array $data
     * @param $userId
     * @return array
     */
    public function createTiktokUser(array $data, $userId = null): array
    {
        $TiktokUser = TikTok::where('account_id',  Arr::get($data, 'data.user.id'))->first();

        if ($TiktokUser) {
            return [
                'status' => false,
                'message' => 'The user of this Tiktok is already registered'
            ];
        }

        $createNewTiktokUser = TikTok::create([
            'full_name' => Arr::get($data, 'data.user.nickname'),
            'username' => Arr::get($data, 'data.user.uniqueId'),
            'image' =>  Arr::get($data, 'data.user.avatarMedium'),
            'followed_by' => Arr::get($data, 'data.stats.followingCount'),
            'follow' => Arr::get($data, 'data.stats.followerCount'),
            'account_id' => Arr::get($data, 'data.user.id'),
            'user_id' => $userId,
            'profile_url' => 'https://www.tiktok.com/@'.Arr::get($data, 'data.user.uniqueId'),
        ]);

        if (!$createNewTiktokUser) {
            return [
                'status' => false,
                'message' => 'an error has occurred, the user is not registering'
            ];
        }

        return [
            'status' => true,
            'message' => 'The user of this Tiktok has been successfully registered'
        ];
    }

    /**
     * @return string
     */
    public function updateTiktokUsers(): string
    {
        $tiktokUsers = TikTok::query()->get();

        if (!count($tiktokUsers)) {
            return 'no users found';
        }

        foreach ($tiktokUsers as $tiktokUser) {
            $details = [
                'username' => $tiktokUser->username,
            ];

            $tiktokUserInfo = $this->rapidApiService->rapidApiDataWithParams(
                config('app.tiktok_host'),
                config('app.tiktok_profile_url'),
                config('app.rapid_api_key'),
                $details, 'get');

            if (!isset($userInfo['error'])) {
                TikTok::query()
                    ->where('username', Arr::get($tiktokUserInfo, 'data.user.uniqueId'))
                    ->update([
                        'full_name' => Arr::get($tiktokUserInfo, 'data.user.nickname'),
                        'image' =>  Arr::get($tiktokUserInfo, 'data.user.avatarMedium'),
                        'followed_by' => Arr::get($tiktokUserInfo, 'data.stats.followingCount'),
                        'follow' => Arr::get($tiktokUserInfo, 'data.stats.followerCount'),
                        'account_id' => Arr::get($tiktokUserInfo, 'data.user.id'),
                    ]);
            }
        }

        return 'Tiktok users updated';
    }
}
