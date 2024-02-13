<?php

use App\Admin\Controllers\AdminApprovedUserController;
use App\Admin\Controllers\AdminRegisteredUserController;
use Illuminate\Routing\Router;

Admin::routes();

Route::group([
    'prefix'        => config('admin.route.prefix'),
    'namespace'     => config('admin.route.namespace'),
    'middleware'    => config('admin.route.middleware'),
    'as'            => config('admin.route.prefix') . '.',
], function (Router $router) {
    $router->get('/', 'HomeController@index')->name('home');
    $router->resource('users/register', AdminRegisteredUserController::class);
    $router->resource('users/approved', AdminApprovedUserController::class);
});
