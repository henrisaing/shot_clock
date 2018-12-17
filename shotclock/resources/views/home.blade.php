@extends('layouts.app')

@section('content')
<div class="container">
  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <div class="panel panel-default">
        <div class="panel-heading">Dashboard</div>

        <div class="panel-body">
        

        <table class="table" id="tablersky">
          <thead>
            <th>Name</th>
            <th>Drinks</th>
            <th>BAL est</th>
            <th>?last drink?</th>
            <th>Add Drink</th>
          </thead>

          <tbody>
            <tr>
              <td>bob</td>
              <td>4.3</td>
              <td>0.03</td>
              <td><?php echo(new DateTime())->format('Y-m-d H:i:s') ?></td>
              <td><button>+</button></td>
            </tr>
          </tbody>
        </table>
        <input type="text" name="new-name" id="person-name"><button id="new-person">add person</button>
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
