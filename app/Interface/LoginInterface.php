<?php

namespace App\Interface;


interface LoginInterface
{
    /**
     * @param array $data
     * @return array
     */
    public function createInstagramUser(array $data): array;

    /**
     * @param array $data
     * @return array
     */
    public function createTwitterUser(array $data): array;

    /**
     * @return string
     */
    public function updateInstagramUsers(): string;

    /**
     * @return string
     */
    public function updateTwitterUsers(): string;
}
