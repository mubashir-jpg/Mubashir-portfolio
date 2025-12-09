<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class about extends Model
{
    protected $table = 'abouts';

    protected $fillable = [
  'name',
  'contact',
  'location',
  'eduction',
  'level'
    ];
    public function about(){
        return $this->belongsTo(personalInformation::class);
    }
}
