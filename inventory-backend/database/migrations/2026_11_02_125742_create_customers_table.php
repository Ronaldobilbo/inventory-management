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
        Schema::create('customers', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->foreignId('user_id')
                ->unique()
                ->constrained(
                    'users'
                )->cascadeOnDelete();
            $table->string('phone', 15)->nullable();
            $table->string('foto_profil', 100)->nullable();
            $table->string('gender', 15)->nullable();
            $table->string('date_of_birth', 15)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};
