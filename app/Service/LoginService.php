<?php

namespace App\Service;

use App\Interface\LoginInterface;
use App\Interface\RapidApiInterface;
use App\Models\Instagram;
use App\Models\Twitter;

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
    public function createInstagramUser(array $data): array
    {
        $user = Instagram::where('account_id', $data['id'])->first();

        if ($user) {
            return [
                'status' => false,
                'message' => 'The user of this Instagram is already registered'
            ];
        }

        $createNewInstagramUser = Instagram::create([
            'full_name' => $data['full_name'],
            'username' => $data['username'],
            'image' => $data['profile_pic_url_hd'],
            'follow' => $data['edge_follow']['count'],
            'followed_by' => $data['edge_followed_by']['count'],
            'account_id' => $data['id'],
        ]);

        if ($createNewInstagramUser) {
            return [
                'status' => true,
                'message' => 'The user of this Instagram has been successfully registered'
            ];
        }

        return [
            'status' => false,
            'message' => 'an error has occurred, the user is not registering'
        ];
    }

    /**
     * @param array $data
     * @return array
     */
    public function createTwitterUser(array $data): array
    {
        $user = Twitter::where('account_id', $data['user_id'])->first();

        if ($user) {
            return [
                'status' => false,
                'message' => 'The user of this Twitter is already registered'
            ];
        }

        $createNewInstagramUser = Twitter::create([
            'full_name' => $data['name'],
            'username' => $data['username'],
            'image' => $data['profile_pic_url'],
            'follow' => $data['follower_count'],
            'followed_by' => $data['following_count'],
            'account_id' => $data['user_id'],
        ]);

        if ($createNewInstagramUser) {
            return [
                'status' => true,
                'message' => 'The user of this Twitter has been successfully registered'
            ];
        }

        return [
            'status' => false,
            'message' => 'an error has occurred, the user is not registering'
        ];
    }

    public function updateInstagramUsers(): string
    {
        $instagramUsers = Instagram::query()->get();

        if (!count($instagramUsers)) {
            return 'no users found';
        }

        foreach ($instagramUsers as $instagramUser) {
            $userInfo = $this->rapidApiService->get(config('app.instagram_host'), config('app.instagram_profile_url').'?username='.$instagramUser->username, config('app.rapid_api_key'));

            Instagram::query()
                ->where(['account_id' => $userInfo['id'], 'username' => $userInfo['username']])
                ->update([
                    'full_name' => $userInfo['full_name'],
                    'image' => $userInfo['profile_pic_url_hd'],
                    'follow' => $userInfo['edge_follow']['count'],
                    'followed_by' => $userInfo['edge_followed_by']['count'],
                ]);
        }

        return 'Instagram Users updated';
    }

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
            $userInfo = $this->rapidApiService->post(config('app.twitter_host'), config('app.twitter_profile_url'), config('app.rapid_api_key'), $details);

            Twitter::query()
                ->where(['account_id' => $userInfo['user_id'], 'username' => $userInfo['username']])
                ->update([
                    'full_name' => $userInfo['name'],
                    'image' => $userInfo['profile_pic_url'],
                    'follow' => $userInfo['follower_count'],
                    'followed_by' => $userInfo['following_count'],
                ]);
        }

        return 'Twitter Users updated';
    }
}
