<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'id' => 1,
                'name' => 'Artist',
            ],
            [
                'id' => 2,
                'name' => 'Blogger',
            ],
            [
                'id' => 3,
                'name' => 'Digital creator',
            ],
            [
                'id' => 4,
                'name' => 'Photographer',
            ],
            [
                'id' => 5,
                'name' => 'Entrepreneur',
            ],
            [
                'id' => 6,
                'name' => 'Public figure',
            ],
        ];

        foreach ($data as $item) {
            Category::updateOrCreate(
                [
                    'id' => $item['id']
                ],
                [
                    'name' => $item['name'],
                ],
            );
        }
    }
}
