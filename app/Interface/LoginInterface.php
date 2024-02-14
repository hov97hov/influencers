<?php

namespace App\Interface;


interface LoginInterface
{
    /**
     * @param array $data
     * @return array
     */
    public function registerUser(array $data): array;


    /**
     * @return string
     */
    public function updateInstagramUsers(): string;

    /**
     * @return string
     */
    public function updateTwitterUsers(): string;

    /**
     * @return string
     */
    public function updateYoutubeUser(): string;

    /**
     * @return string
     */
    public function updateTelegramUser(): string;

    /**
     * @return string
     */
    public function updateTiktokUsers(): string;

    /**
     * @param $userDetail
     * @param $userId
     * @return bool
     */
    public function createUserSocialMedia($userDetail, $userId): bool;
}
