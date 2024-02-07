<?php

namespace App\Service;

use App\Interface\RapidApiInterface;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Http;

class RapidApiService implements RapidApiInterface
{

    public function get(string $host, string $url, string $key)
    {
        return Http::withHeaders([
            'x-rapidapi-host' => $host,
            'x-rapidapi-key' => $key,
        ])
            ->get($url)->json();
    }

    public function rapidApiDataWithParams(string $host, string $url, string $key, array $data, $method)
    {
        return Http::withHeaders([
            'x-rapidapi-host' => $host,
            'x-rapidapi-key' => $key,
            'content-type' => 'application/json',
        ])
            ->$method($url, $data)->json();
    }


    /**
     * @param $data
     */
    public function instagramApi($data)
    {
        return $this->get(
            config('app.instagram_host'),
            config('app.instagram_profile_url') . '?username=' . Arr::get($data, 'instagram'),
            config('app.rapid_api_key'));
    }

    /**
     * @param $data
     */
    public function twitterApi($data)
    {
        return $this->rapidApiDataWithParams(
            config('app.twitter_host'),
            config('app.twitter_profile_url'),
            config('app.rapid_api_key'), $data, 'post'
        );
    }

    /**
     * @param $data
     */
    public function telegramApi($data)
    {
        return $this->rapidApiDataWithParams(
            config('app.telegram_host'),
            config('app.telegram_profile_url'),
            config('app.rapid_api_key'),
            $data, 'get');
    }

    /**
     * @param $data
     */
    public function youtubeApi($data)
    {
        return $this->rapidApiDataWithParams(
            config('app.youtube_host'),
            config('app.youtube_profile_url'),
            config('app.rapid_api_key'),
            $data, 'get');
    }

    /**
     * @param $data
     */
    public function tiktokApi($data)
    {
        return $this->rapidApiDataWithParams(
            config('app.tiktok_host'),
            config('app.tiktok_profile_url'),
            config('app.rapid_api_key'),
            $data, 'get');
    }
}
