<?php

namespace App\Repositories;


use App\Models\User;

class UserRepository
{
    /**
     * @param $filter
     * @return mixed
     */
    public function getUsers($filter)
    {
        return User::paginate(2);
    }
}
