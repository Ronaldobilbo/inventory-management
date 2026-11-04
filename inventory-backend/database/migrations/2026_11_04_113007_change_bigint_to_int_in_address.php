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
        Schema::table('addresses', function (Blueprint $table) {
            $table->unsignedInteger('customer_id')->change();
            $table->foreign('customer_id')->references('id')->on('customers')->cascadeOnDelete();
            $table->string('province', 50)->change();
            $table->string('city', 50)->change();
            $table->string('district', 50)->change();
            $table->string('village', 50)->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('address', function (Blueprint $table) {
            //
        });
    }
};
