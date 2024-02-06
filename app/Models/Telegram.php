<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Telegram extends Model
{
    use HasFactory;

    protected $table = 'telegram',

    $fillable = [
        'full_name',
        'username',
        'description',
        'image',
        'follow',
        'account_id',
        'user_id',
        'profile_url',
    ];
}
