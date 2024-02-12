<?php

use App\Interface\Controllers\HomeController;
use App\Interface\Controllers\JoinController;
use App\Interface\Controllers\LoginController;
use App\Interface\Controllers\SearchController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', [HomeController::class, 'index'])->name('home');

Route::post('/register/user', [LoginController::class, 'registerUser']);
Route::get('/users', [SearchController::class, 'getUsers']);

Route::get('/search', [SearchController::class, 'index']);
Route::get('/join', [JoinController::class, 'index']);
