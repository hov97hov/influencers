<?php

namespace App\Interface\Controllers;

use App\Interface\UserInterface;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SearchController extends Controller
{
    protected UserInterface $userService;

    public function __construct(UserInterface $userService)
    {
        $this->userService = $userService;
    }

    /**
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('SearchPage');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\Response|Application|ResponseFactory
     */
    public function getUsers(Request $request): \Illuminate\Http\Response|Application|ResponseFactory
    {
        return response($this->userService->getUsers($request));
    }
}
