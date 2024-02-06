<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\JoinController;
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
Route::get('/search', [SearchController::class, 'index']);
Route::get('/join', [JoinController::class, 'index']);

Route::get('/login/facebook', [LoginController::class, 'redirectToFacebook']);
Route::get('/login/facebook/callback',  [LoginController::class, 'handleFacebookCallback']);

Route::get('/login/tiktok', [LoginController::class, 'redirectToTikTok']);
Route::get('/login/tiktok/callback', [LoginController::class, 'handleTikTokCallback']);

Route::get('login/instagram', [LoginController::class, 'redirectToInstagram']);
Route::get('login/instagram/callback', [LoginController::class, 'handleInstagramCallback']);

Route::get('login/twitter', [LoginController::class, 'redirectToTwitter']);
Route::get('login/twitter/callback', [LoginController::class, 'handleTwitterCallback']);

Route::get('/login/google', [LoginController::class, 'redirectToGoogle']);
Route::get('/login/google/callback', [LoginController::class, 'handleGoogleCallback']);

