<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Record extends Model
{
  protected $fillable = [
    'name'
  ];

  public static function user(){
    return $this->belongsTo(User::class);
  }

  public static function persons(){
    return $this->hasMany(Person::class);
  }
}
