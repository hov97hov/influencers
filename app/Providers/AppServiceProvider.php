<?php

namespace App\Providers;

use App\Interface\LoginInterface;
use App\Interface\RapidApiInterface;
use App\Service\LoginService;
use App\Service\RapidApiService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public $singletons = [

    ];

    public function register(): void
    {
        $this->app->bind(RapidApiInterface::class, RapidApiService::class);
        $this->app->bind(LoginInterface::class, LoginService::class);
    }

}
