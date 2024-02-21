<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserDetail extends Model
{
    use HasFactory;

    protected $table = 'user_detail';

    protected $fillable = [
        'first_name',
        'last_name',
        'phone',
        'location',
        'facebook',
        'instagram',
        'tiktok',
        'youtube',
        'twitter',
        'telegram',
        'account_type',
        'gender',
        'birthday',
        'language',
        'additional_information',
        'user_id',
    ];
}
