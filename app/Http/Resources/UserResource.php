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
            'instagram' => $this->instagram->orderBy('follow', 'DESC'),
            'twitter' => $this->twitter->orderBy('follow', 'DESC'),
            'youtube' => $this->youtube->orderBy('follow', 'DESC'),
            'tiktok' => $this->tiktok->orderBy('follow', 'DESC'),
            'telegram' => $this->telegram->orderBy('follow', 'DESC'),
            'user_detail' => $this->userDetail,
            'categories' => $this->categories,
        ];
    }
}
