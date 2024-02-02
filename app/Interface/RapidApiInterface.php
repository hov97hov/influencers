<?php

namespace App\Interface;


interface RapidApiInterface
{
    public function get(string $host, string $url, string $key);

    public function post(string $host, string $url, string $key, array $data);
}
