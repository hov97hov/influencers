<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class UserRepository
{
    /**
     * @param $filter
     * @return LengthAwarePaginator
     */
    public function getUsers($filter): LengthAwarePaginator
    {
        return User::query()
            ->with('userDetail')
            ->where('status', true)
            ->paginate(2);
    }
}
