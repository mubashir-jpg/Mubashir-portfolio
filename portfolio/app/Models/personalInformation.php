<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class personalInformation extends Model
{
    protected $table = 'personal_information';
    protected $fillable = [
      'name',
      'email',
      'url',
      'position',
      'linkdin',
      'github'
    ];

    public function projects(){
        return $this->hasMany(project::class);
    }
public function about(){
    return $this->hasMany(about::class);
}

public function skill(){
    return $this->hasMany(skill::class);
}
    
}
