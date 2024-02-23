<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SocialResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'full_name' => $this->full_name,
            'username' => $this->username,
            'image' => $this->image,
            'followed_by' => $this->followed_by,
            'follow' => $this->follow,
            'profile_url' => $this->profile_url,
            'post_count' => $this->post_count,
            'user_id' => $this->user_id,
            'user' => UserResource::make($this->user)
        ];
    }
}
