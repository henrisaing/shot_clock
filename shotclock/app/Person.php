<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
  protected $fillable =[
    'name',
    'gender',
    'dis',
    'last_drink'
  ];

  public function record(){
    return $this->belongsTo(Record::class);
  }

  public function drinks(){
    return $this->hasMany(Drink::class);
  }
}
