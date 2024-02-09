<?php

namespace App\Interface;


interface UserInterface
{
    /**
     * @param $filter
     * @return mixed
     */
    public function getUsers($filter): mixed;
}
