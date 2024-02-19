<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Carbon;

class UserRepository
{
    /**
     * @param $filter
     * @return LengthAwarePaginator
     */
    public function getUsers($filter): LengthAwarePaginator
    {
        return User::query()
            ->when($filter->search != "", function ($search) use ($filter) {
                return $search->whereHas(strtolower($filter->platform), function ($query) use ($filter){
                    $query->where('full_name', 'like', "%{$filter->search}%");
                });
            })
            ->when($filter->platform, function ($platform) use ($filter) {
                return $platform->whereHas(strtolower($filter->platform), function ($query) use ($filter) {
                    $query->with(strtolower($filter->platform));
                });
            })
            ->when($filter->categories, function ($categories) use ($filter) {
                return $categories->whereHas('categories', function ($query) use ($filter) {
                    $query->whereIn('category_id', $filter->categories);
                });
            })
            ->when(isset($filter->accountType), function ($accountType) use ($filter) {
                return $accountType->whereHas('userDetail', function ($query) use ($filter) {
                    $query->where('account_type', (bool)$filter->accountType);
                });
            })
            ->when($filter->location, function ($location) use ($filter) {
                return $location->whereHas('userDetail', function ($query) use ($filter) {
                    $query->where('language', $filter->location);
                });
            })
            ->when($filter->gender, function ($gender) use ($filter) {
                return $gender->whereHas('userDetail', function ($query) use ($filter) {
                    $query->where('gender', $filter->gender);
                });
            })
            ->when($filter->age, function ($query) use ($filter) {
                return $query->where(function ($query) use ($filter) {
                    foreach ($filter->age as $ageRange) {
                        if (strpos($ageRange, '<') !== false) {
                            $isTrue = true;
                            $maxAge = (int)trim(str_replace('<', '', $ageRange));
                            $toDate = Carbon::now()->subYears($maxAge + 1); // Adjusted for "<"
                            $fromDate = Carbon::now();
                        } elseif (strpos($ageRange, '+') !== false) {
                            $isTrue = false;
                            $minAge = (int)trim(str_replace('+', '', $ageRange));
                            $toDate = Carbon::now()->subYears(40);
                            $fromDate = Carbon::now()->subYears($minAge);
                        } else {
                            $isTrue = true;
                            $ageBoundaries = explode(' - ', $ageRange);
                            $minAge = (int)$ageBoundaries[0];
                            $maxAge = (int)$ageBoundaries[1];

                            $fromDate = Carbon::now()->subYears($maxAge);
                            $toDate = Carbon::now()->subYears($minAge);
                        }

                        if ($isTrue) {
                            $query->orWhereHas('userDetail', function ($query) use ($fromDate, $toDate) {
                                $query->whereBetween('birthday', [$fromDate, $toDate]);
                            });
                        } else {
                            $query->orWhereHas('userDetail', function ($query) use ($fromDate, $toDate) {
                                $query->where('birthday', '<=', $toDate);
                            });
                        }
                    }
                });
            })
            ->when($filter->searchFollowerCountLeft, function ($platform) use ($filter) {
                return $platform->whereHas(strtolower($filter->platform), function ($query) use ($filter) {
                    $query->where('follow', '>=', $filter->searchFollowerCountLeft);
                });
            })
            ->when($filter->searchFollowerCountRight, function ($platform) use ($filter) {
                return $platform->whereHas(strtolower($filter->platform), function ($query) use ($filter) {
                    $query->where('follow', '<=', $filter->searchFollowerCountRight);
                });
            })
            ->when($filter->numberPosts, function ($platform) use ($filter) {
                return $platform->whereHas(strtolower($filter->platform), function ($query) use ($filter) {
                    $count = (int)trim(str_replace('>', '', $filter->numberPosts));
                    $query->where('post_count', '>=', $count);
                });
            })


            ->with(['categories', 'userDetail',
                'instagram' => function ($query) {
                    $query->orderBy('follow', 'DESC');
                },
                'twitter' => function ($query) {
                    $query->orderBy('follow', 'DESC');
                },
                'youtube' => function ($query) {
                    $query->orderBy('follow', 'DESC');
                },
                'tiktok' => function ($query) {
                    $query->orderBy('follow', 'DESC');
                },
                'telegram' => function ($query) {
                    $query->orderBy('follow', 'DESC');
                },
            ])
            ->where('status', true)
            ->paginate(10);
    }
}
