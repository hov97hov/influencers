<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * @return HasOne
     */
    public function instagram(): HasOne
    {
        return $this->hasOne(Instagram::class, 'user_id');
    }

    /**
     * @return HasOne
     */
    public function twitter(): HasOne
    {
        return $this->hasOne(Twitter::class, 'user_id');
    }

    /**
     * @return HasOne
     */
    public function telegram(): HasOne
    {
        return $this->hasOne(Telegram::class, 'user_id');
    }

    /**
     * @return HasOne
     */
    public function youtube(): HasOne
    {
        return $this->hasOne(Youtube::class, 'user_id');
    }

    /**
     * @return HasOne
     */
    public function tiktok(): HasOne
    {
        return $this->hasOne(TikTok::class, 'user_id');
    }

    /**
     * @return HasOne
     */
    public function userDetail(): HasOne
    {
        return $this->hasOne(UserDetail::class, 'user_id');
    }
}
