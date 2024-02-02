<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Instagram extends Model
{
    use HasFactory;

    protected $table = 'instagram';

    protected $fillable = [
        'full_name',
        'username',
        'image',
        'followed_by',
        'follow',
        'user_id',
        'account_id',
    ];
}
