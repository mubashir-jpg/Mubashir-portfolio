<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class project extends Model
{
    protected $table = 'projects';

    protected $fillable = [
   'pname',
   'title',
   'description',
   'language'
    ];
    public function personalInformation(){
        return $this->belongsTo(personalInformation::class);
    }
}
