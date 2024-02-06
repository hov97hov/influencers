<?php

namespace App\Service;

use App\Interface\RapidApiInterface;
use Illuminate\Support\Facades\Http;

class RapidApiService implements RapidApiInterface
{

    public function get(string $host, string $url, string $key)
    {
        return Http::withHeaders([
            'x-rapidapi-host' => $host,
            'x-rapidapi-key' => $key,
        ])->get($url)->json();
    }

    public function rapidApiDataWithParams(string $host, string $url, string $key, array $data, $method)
    {
        return Http::withHeaders([
            'x-rapidapi-host' => $host,
            'x-rapidapi-key' => $key,
            'content-type' => 'application/json',
        ])->$method($url, $data)->json();
    }
}
