<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInstagramTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('instagram', function (Blueprint $table) {
            $table->id();
            $table->string('full_name')->nullable();
            $table->string('username')->nullable();
            $table->text('image')->nullable();
            $table->bigInteger('followed_by')->nullable();
            $table->bigInteger('follow')->nullable();
            $table->bigInteger('account_id')->nullable();

            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('instagram');
    }
}
