<?php

namespace App\Interface;

use App\Http\Resources\UserCollection;

interface UserInterface
{
    /**
     * @param $filter
     * @return UserCollection
     */
    public function getUsers($filter): UserCollection;
}
