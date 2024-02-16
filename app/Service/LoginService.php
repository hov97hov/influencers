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
use Illuminate\Support\Arr;
use Illuminate\Support\Carbon;
use Mockery\Exception;

class LoginService implements LoginInterface
{
    private RapidApiInterface $rapidApiService;

    public function __construct(RapidApiInterface $rapidApiService)
    {
        $this->rapidApiService = $rapidApiService;
    }

    /**
     * @param array $data
     * @return array
     */
    public function registerUser(array $data): array
    {
        try {
            $createNewUser = $this->createNewUser($data);
            $createNewUser->categories()->attach($data['selectCategories']);
            $this->createUserDetail($data, $createNewUser->id);

            return [
                'status' => true,
                'message' => 'Registration has been completed successfully'
            ];

        } catch (Exception $exception) {

            return [
                'status' => false,
                'message' => $exception->getMessage()
            ];
        }
    }

    /**
     * @param $userDetail
     * @param $userId
     * @return bool
     */
    public function createUserSocialMedia($userDetail, $userId): bool
    {
        $user = User::where('id', $userId)->first();

        $user->instagram()->delete();
        $user->telegram()->delete();
        $user->tiktok()->delete();
        $user->twitter()->delete();
        $user->youtube()->delete();

        $socialMediaPlatforms = ['instagram', 'twitter', 'telegram', 'youtube', 'tiktok'];

        foreach ($socialMediaPlatforms as $platform) {
            if ($userDetail[$platform]) {
                $details = [];

                switch ($platform) {
                    case 'instagram':
                        $details = $userDetail;
                        break;
                    case 'twitter':
                        $details['username'] = $userDetail['twitter'];
                        break;
                    case 'telegram':
                        $details['user'] = $userDetail['telegram'];
                        break;
                    case 'youtube':
                        $details = [
                            'id' => $userDetail['youtube'],
                            'hl' => 'en',
                            'gl' => 'US',
                        ];
                        break;
                    case 'tiktok':
                        $details['username'] = $userDetail['tiktok'];
                        break;
                }

                $userInfo = $this->rapidApiService->{$platform . 'Api'}($details);
                if (!isset($userInfo['error'])) {
                    $methodName = 'create' . ucfirst($platform) . 'User';
                    $this->$methodName($userInfo, $userId);
                }
            }
        }

        return true;
    }

    /**
     * @param $data
     * @return mixed
     */
    public function createNewUser($data): mixed
    {
        return User::create([
            'name' => Arr::get($data, 'first_name') . ' ' . Arr::get($data, 'last_name'),
            'email' => Arr::get($data, 'email'),
        ]);
    }

    /**
     * @param $data
     * @param $userId
     * @return mixed
     */
    public function createUserDetail($data, $userId): mixed
    {
        $date = Arr::get($data, 'birthday');
        $carbonDate = Carbon::parse($date);
        $formattedDate = $carbonDate->format('Y-m-d');

        return UserDetail::create([
            'first_name' => Arr::get($data, 'first_name'),
            'last_name' => Arr::get($data, 'last_name'),
            'phone' => Arr::get($data, 'phone'),
            'influencer_name' => Arr::get($data, 'influencer_name'),
            'facebook' => Arr::get($data, 'facebook'),
            'instagram' => Arr::get($data, 'instagram'),
            'tiktok' => Arr::get($data, 'tiktok'),
            'youtube' => Arr::get($data, 'youtube'),
            'twitter' => Arr::get($data, 'twitter'),
            'telegram' => Arr::get($data, 'telegram'),
            'category' => Arr::get($data, 'category'),
            'account_type' => Arr::get($data, 'account_type.value'),
            'gender' => Arr::get($data, 'gender'),
            'birthday' => $formattedDate,
            'language' => Arr::get($data, 'language'),
            'additional_information' => Arr::get($data, 'additional_information'),
            'user_id' => $userId,
        ]);
    }

    /**
     * @param array $data
     * @param $userId
     * @return bool
     */
    public function createInstagramUser(array $data, $userId = null): bool
    {
        $user = Instagram::where('account_id', Arr::get($data,'id'))->first();

        if ($user) {
            return false;
        }

        $createNewInstagramUser = Instagram::create([
            'full_name' => Arr::get($data,'full_name'),
            'username' => Arr::get($data,'username'),
            'image' => Arr::get($data,'profile_pic_url_hd'),
            'follow' => Arr::get($data,'edge_follow.count'),
            'followed_by' => Arr::get($data,'edge_followed_by.count'),
            'account_id' => Arr::get($data,'id'),
            'post_count' => Arr::get($data,'edge_owner_to_timeline_media.count'),
            'profile_url' => 'https://www.instagram.com/'.Arr::get($data,'username'),
            'user_id' => $userId,
        ]);

        if (!$createNewInstagramUser) {
            return false;
        }

        return true;
    }

    /**
     * @param array $data
     * @param $userId
     * @return bool
     */
    public function createTwitterUser(array $data, $userId = null): bool
    {
        $user = Twitter::where('account_id', Arr::get($data, 'user_id'))->first();

        if ($user) {
            return false;
        }

        $createNewInstagramUser = Twitter::create([
            'full_name' => Arr::get($data, 'name'),
            'username' => Arr::get($data, 'username'),
            'image' => Arr::get($data, 'profile_pic_url'),
            'follow' => Arr::get($data, 'follower_count'),
            'followed_by' => Arr::get($data, 'following_count'),
            'account_id' => Arr::get($data, 'user_id'),
            'post_count' => Arr::get($data,'number_of_tweets'),
            'user_id' => $userId,
            'profile_url' => 'https://twitter.com/'.Arr::get($data,'username'),
        ]);

        if (!$createNewInstagramUser) {
            return false;
        }

        return true;
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
                    'post_count' => Arr::get($userInfo,'edge_owner_to_timeline_media.count'),
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
                    'post_count' => Arr::get($userInfo,'number_of_tweets'),
                ]);
        }

        return 'Twitter Users updated';
    }

    /**
     * @param array $data
     * @param $userId
     * @return bool
     */
    public function createYoutubeUser(array $data, $userId = null): bool
    {
        $YoutubeUser = Youtube::where('channel_id',  Arr::get($data, 'channelId'))->first();

        if ($YoutubeUser) {
            return false;
        }

        $createNewYoutubeChannel = Youtube::create([
            'channel_id' => Arr::get($data, 'channelId'),
            'full_name' => Arr::get($data, 'title'),
            'username' => Arr::get($data, 'username'),
            'image' => Arr::get($data, 'avatar.2.url'),
            'follow' => Arr::get($data, 'stats.subscribers'),
            'description' => Arr::get($data, 'description'),
            'post_count' => Arr::get($data,'stats.videos'),
            'user_id' => $userId,
            'profile_url' => 'https://www.youtube.com/'.Arr::get($data,'username'),
        ]);

        if (!$createNewYoutubeChannel) {
            return false;
        }

        return true;
    }

    /**
     * @return string
     */
    public function updateYoutubeUser(): string
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
                    'post_count' => Arr::get($userInfo,'stats.videos'),
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
    public function updateTelegramUser(): string
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
            'post_count' => Arr::get($data,'data.stats.videoCount'),
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
                        'post_count' => Arr::get($tiktokUserInfo,'data.stats.videoCount'),
                    ]);
            }
        }

        return 'Tiktok users updated';
    }
}
