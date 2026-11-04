<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('passkeys', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
            $table->increments('id')->change();
            $table->unsignedInteger('user_id')->change();
            $table->string('name', 100)->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('passkeys', function (Blueprint $table) {
            //
        });
    }
};
