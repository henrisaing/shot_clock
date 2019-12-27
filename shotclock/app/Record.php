<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Record extends Model
{
    //
  public static function user(){
    return $this->belongsTo(User::class);
  }

  public static function person(){
    return $this->hasMany(Person::class);
  }
}
