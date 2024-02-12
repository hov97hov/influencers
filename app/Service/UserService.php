<?php

namespace App\Service;

use App\Http\Resources\UserCollection;
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
     * @return UserCollection
     */
    public function getUsers($filter): UserCollection
    {
        $result = $this->userRepository->getUsers($filter);
        $data = UserResource::collection($result);

        return new UserCollection($result);
    }
}
