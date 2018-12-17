var counter = 0;

$(document).ready(function(){
  start();

  

  // $('#new-person').click(function(){
  //   counter++;
  //   var name = $('#person-name').val();

  //   $('#tablersky tbody:last-child').append('<tr>'
  //     +'<td> '+name+' </td>'
  //     +' </tr>');
  // });
});

// $( "td" ).hover(
//     function(){
//       $(this).addClass("highlight");
//     },function(){
//       $(this).removeClass("highlight");
//     }
//   );
$( '#tablersky tbody' ).on('mouseover mouseout', 'td',
    function(){
      $(this).toggleClass("highlight");
    }
  );

// adds new persons name, adds 1 drink + timestamp, resets name field
$('#new-person').click(function(){
  counter++;
  var name = $('#person-name').val();

  $('#tablersky tbody:last-child').append('<tr class=app-row id=row-'+counter+'>'
    +'<td class=name id=name-'+counter+'> '+name+' </td>'
    +'<td class=drinks id=drinks-'+counter+'> 1 </td>'
    +'<td class=dis id=dis-'+counter+'> 1 </td>'
    +'<td class=bal id=bal-'+counter+'> '+0.003+' </td>'
    // +'<td> '+(new Date()).getTime()+' </td>'
    +'<td class=time id=time-'+counter+'> '+(new Date()).toLocaleTimeString()+' </td>'
    // +'<td> '+Date.now().getHours()+' </td>'
    +'<td class=add id=add-'+counter+'> <button>+</button> </td>'
    +' </tr>');

  $('#person-name').val('');
});

// add drink button click
$('#tablersky tbody').on('click', 'td.add button', function(){

    // gets current row that button was pressed in
    var row = $(this).parent().attr('id').split("-")[1];
    // console.log(row);

    // equivilant to i++, ugly
    $('#drinks-'+row).text(parseFloat($('#drinks-'+row).text(), 10) + 1);
    $('#dis-'+row).text(parseFloat($('#dis-'+row).text(), 10) + 1);

    //update last drink timestamp
    $('#time-'+row).text((new Date()).toLocaleTimeString());
});

function start(){
  // console.log((new Date()).toLocaleTimeString());
  updateDIS();
  setTimeout(start, 5000);
}

function updateDIS(){
  $('.app-row').each(function(){
    // console.log(this);
    var row = $(this).attr('id').split('-')[1];
    // console.log(row);

    var dis = $('#dis-'+row).text();
    console.log(dis);
    // $('#dis-'+row).text('96');
    // if negative
    if(parseFloat(dis) < 0){
      $('dis-'+row).text('0');
      // console.log('neg');
    }

    // if positive
    if(parseFloat(dis) > 0){
      // $('#dis-'+row).text('69');
      $('#dis-'+row).text((parseFloat($('#dis-'+row).text(), 10) - 0.0014).toFixed(4));
      console.log('positive');
    }
  });
}
// function startTime() {
//     var today = new Date();
//     var h = today.getHours();
//     var m = today.getMinutes();
//     var s = today.getSeconds();
//     m = checkTime(m);
//     s = checkTime(s);
//     // $('div.clock').html(h + ":" + m + ":" + s);
//     $('div.clock').html(today);
//     var t = setTimeout(startTime, 500);
// }