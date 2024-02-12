<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    /**
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Home');
    }

    /**
     * @param Request $request
     * @return void
     */
    public function setLocale(Request $request): void
    {
        session(['my_locale' => $request->lang]);
    }
}
