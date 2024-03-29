<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\JoinController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\SearchController;
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

// set locale lange
Route::post('/locale/set', [HomeController::class, 'setLocale']);
