@extends('layouts.app')

@section('content')
<div class="container">
  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <div class="panel panel-default">
        <div class="panel-heading">Active</div>

        <div class="panel-body">
        

        <table class="table" id="tablersky">
          <thead>
            <th>Name</th>
            <th>Drinks</th>
            <th>Drinks in System</th>
            <th>BAC est</th>
            <th>Last Drink</th>
            <th>Add Drink</th>
          </thead>

          <tbody>
          </tbody>
        </table>
        
        <input type="text" name="new-name" id="person-name">
        <button class="new-person" id="male">add <i class="fas fa-mars"></i></button>
        <button class="new-person" id="female">add <i class="fas fa-venus"></i></button>
        </div>
      </div>


    </div>
  </div>
</div>
@endsection
