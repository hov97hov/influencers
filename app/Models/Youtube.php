<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Youtube extends Model
{
    use HasFactory;

    protected $table = 'youtube';

    protected $fillable = [
        'full_name',
        'username',
        'description',
        'image',
        'followed_by',
        'follow',
        'channel_id',
        'user_id',
        'profile_url',
    ];
}
