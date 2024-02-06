<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TikTok extends Model
{
    use HasFactory;

    protected $table = 'tiktok';

    protected $fillable = [
        'full_name',
        'username',
        'image',
        'followed_by',
        'follow',
        'account_id',
        'user_id',
        'profile_url',
    ];
}
