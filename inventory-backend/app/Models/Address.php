<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $fillable = [
        'customer_id',
        'label',
        'province',
        'city',
        'district',
        'village',
        'postal_code',
        'is_primary',
        'address_detail'
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }
}
