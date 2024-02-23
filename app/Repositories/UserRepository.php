<?php

namespace App\Repositories;

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
        $modelClass = 'App\\Models\\' . $filter->platform;

        return $modelClass::query()
            ->whereHas('user', function ($user) use ($filter) {
                $user->where('status', true)->with('categories', 'userDetail');
            })

            ->when($filter->categories, function ($categories) use ($filter) {
                return $categories->whereHas('user', function ($user) use ($filter) {
                    $user->whereHas('categories', function ($query) use ($filter) {
                        $query->whereIn('category_id', $filter->categories);
                    });
                });
            })

            ->when($filter->gender, function ($gender) use ($filter) {
                return $gender->whereHas('user.userDetail', function ($query) use ($filter) {
                    $query->where('gender', (string)$filter->gender);
                });
            })

            ->when(isset($filter->accountType), function ($accountType) use ($filter) {
                return $accountType->whereHas('user.userDetail', function ($query) use ($filter) {
                    $query->where('account_type', (bool)$filter->accountType);
                });
            })

            ->when($filter->age, function ($query) use ($filter) {
                return $query->where(function ($query) use ($filter) {
                    foreach ($filter->age as $ageRange) {
                        if (str_contains($ageRange, '<')) {
                            $isTrue = true;
                            $maxAge = (int)trim(str_replace('<', '', $ageRange));
                            $fromDate = Carbon::now()->subYears($maxAge + 1);
                            $toDate = Carbon::now();
                        } elseif (str_contains($ageRange, '+')) {
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
                            $query->orWhereHas('user.userDetail', function ($query) use ($fromDate, $toDate) {
                                $query->whereBetween('birthday', [$fromDate, $toDate]);
                            });
                        } else {
                            $query->orWhereHas('user.userDetail', function ($query) use ($fromDate, $toDate) {
                                $query->where('birthday', '<=', $toDate);
                            });
                        }
                    }
                });
            })

            ->when($filter->location, function ($location) use ($filter) {
                return $location->whereHas('user.userDetail', function ($query) use ($filter) {
                    $query->where('location', $filter->location);
                });
            })

            ->when($filter->numberPosts, function ($numberPosts) use ($filter) {
                $count = (int)trim(str_replace('>', '', $filter->numberPosts));
                $numberPosts->where('post_count', '>=', $count);
            })

            ->when($filter->searchFollowerCountRight, function ($searchFollowerCountRight) use ($filter) {
                $searchFollowerCountRight->where('follow', '<=', $filter->searchFollowerCountRight);
            })

            ->when($filter->searchFollowerCountLeft, function ($searchFollowerCountLeft) use ($filter) {
                $searchFollowerCountLeft->where('follow', '>=', $filter->searchFollowerCountLeft);
            })

            ->when($filter->search != "", function ($search) use ($filter) {
                $search->where('full_name', 'like', "%{$filter->search}%");
            })

            ->when($filter->negativeKeywords, function ($negativeKeywords) use ($filter) {
                $negativeKeywords->where('full_name', 'not like', "%{$filter->negativeKeywords}%")
                    ->where('username', 'not like', "%{$filter->negativeKeywords}%");
            })

            ->when($filter->requiredKeywords, function ($requiredKeywords) use ($filter) {
                $requiredKeywords->where('full_name', 'like', "%{$filter->requiredKeywords}%")
                    ->orWhere('username', 'like', "%{$filter->requiredKeywords}%");
            })

            ->orderBy('follow', 'desc')
            ->paginate($filter->per_page, ['*'], 'users', $filter->page);
    }
}
