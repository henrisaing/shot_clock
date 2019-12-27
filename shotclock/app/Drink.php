<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Drink extends Model
{
  protected $fillable =[
    'value'
  ];

  public function person(){
    return $this->belongsTo(Person::class);
  }
}
