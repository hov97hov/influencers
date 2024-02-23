<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Twitter extends Model
{
    use HasFactory;

    protected $table = 'twitter';

    protected $fillable = [
        'full_name',
        'username',
        'image',
        'followed_by',
        'follow',
        'user_id',
        'account_id',
        'profile_url',
        'post_count',
    ];

    /**
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

}
