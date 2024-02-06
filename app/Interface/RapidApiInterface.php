<?php

namespace App\Interface;


interface RapidApiInterface
{
    /**
     * @param string $host
     * @param string $url
     * @param string $key
     */
    public function get(string $host, string $url, string $key);

    /**
     * @param string $host
     * @param string $url
     * @param string $key
     * @param array $data
     * @param $method
     */
    public function rapidApiDataWithParams(string $host, string $url, string $key, array $data, $method);
}
