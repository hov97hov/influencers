<?php

namespace App\Interface\Controllers;

use App\Http\Requests\RegisterUserRequest;
use App\Interface\LoginInterface;
use Illuminate\Http\JsonResponse;

class LoginController extends Controller
{
    protected LoginInterface $loginService;
    public function __construct(LoginInterface $loginService)
    {
        $this->loginService = $loginService;
    }

    /**
     * @param RegisterUserRequest $request
     * @return JsonResponse
     */
    public function registerUser(RegisterUserRequest $request): JsonResponse
    {
        $result = $this->loginService->registerUser($request->all());

        return response()->json([
            'status' => $result['status'],
            'message' => $result['message'],
        ]);
    }
}
