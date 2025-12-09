<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class skill extends Model
{
    protected $table = "skills";
    protected $fillable = [
        'sname',
        'level',
        'experince'
    ];
    public function skill(){
        return $this->belongsTo(personalInformation::class);
    }
}
