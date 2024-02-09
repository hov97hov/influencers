<?php

namespace App\Service;

use App\Http\Resources\UserResource;
use App\Interface\UserInterface;
use App\Repositories\UserRepository;

class UserService implements UserInterface
{
    private UserRepository $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * @param $filter
     * @return mixed
     */
    public function getUsers($filter): mixed
    {
        $result = $this->userRepository->getUsers($filter);
        $data = UserResource::collection($result->items());
//        $result->appends($filter->all());

        return $data;
    }
}
