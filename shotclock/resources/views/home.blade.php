@extends('layouts.app')

@section('content')
@if (Auth::guest())
  <input type="hidden" id="logged" value="false">
@else
  <input type="hidden" id="logged" value="true">
@endif

<div class="container">
  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <div class="panel panel-default">
        <div class="panel-heading">
          {{date("l m/d/Y")}}
          &nbsp;
          <input type="text" name="new-name" id="person-name">
          <button class="new-person" id="male">add <i class="fas fa-mars"></i></button>
          <button class="new-person" id="female">add <i class="fas fa-venus"></i></button>
        </div>

        <div class="panel-body">
        

        <table class="table" id="tablersky">
          <thead>
            <th>Name</th>
            <th>Drinks</th>
            <th>Drinks in System</th>
            <th>BAC est</th>
            <th>Last Drink</th>
            <th>+Drink</th>
            <th>-Drink</th>
          </thead>

          <tbody>
          </tbody>
        </table>
        
        </div>
      </div>


    </div>
  </div>
</div>
@endsection
