<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class JoinController extends Controller
{
    /**
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('JoinForm');
    }
}
