@extends('layouts.app')

@section('content')
<div class="container">
  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <div class="panel panel-default">
        <div class="panel-heading">?????</div>

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
            <tr>
              <td>bob</td>
              <td>4.3</td>
              <td>4.3</td>
              <td>0.03</td>
              <td><?php echo(new DateTime())->format('H:i:s') ?></td>
              <td><button><i class="fas fa-plus"></i></button></td>
            </tr>
          </tbody>
        </table>
        <input type="text" name="new-name" id="person-name">
        <button class="new-person" id="male">add <i class="fas fa-mars"></i></button>
        <button class="new-person" id="female">add <i class="fas fa-venus"></i></button>
          <!-- @if (session('status'))
            <div class="alert alert-success">
              {{ session('status') }}
            </div>
          @endif

          You are logged in! 
          {{ print_r(session('status')) }} -->
        </div>
      </div>
    </div>
  </div>
</div>
@endsection
