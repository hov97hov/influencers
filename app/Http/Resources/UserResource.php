<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'name' => $this->name,
            'instagram' => $this->instagram,
            'twitter' => $this->twitter,
            'youtube' => $this->youtube,
            'tiktok' => $this->tiktok,
            'telegram' => $this->telegram,
            'user_detail' => $this->userDetail,
            'categories' => $this->categories,
        ];
    }
}
