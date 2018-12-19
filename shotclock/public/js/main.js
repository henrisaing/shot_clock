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
$('.new-person').click(function(){
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
    +'<td class=add id=add-'+counter+'> <button><i class="fas fa-plus"></i></button> </td>'
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
    var row = $(this).attr('id').split('-')[1];

    var dis = $('#dis-'+row).text();


    // if negative
    if(parseFloat(dis) < 0){
      $('#dis-'+row).text('0');
    }

    // if positive
    //0.0014 for 1dr/hr , others for testing
    if(parseFloat(dis) > 0){
      $('#dis-'+row).text((parseFloat($('#dis-'+row).text(), 10) - 0.0014).toFixed(4));
    }
  });
}

// BAC CALC
function calculateBAC(row){
  // formula
  // (0.806 * drinks * 1.2) / (bodyWaterK * weight)
  //avg male = 80kg, female = 76kg
  //bodyWater k male = 0.58, female = 0.49
  var bac;

  // ASSUMING MALE JUST FOR TESTING
  var drinks = $('#dis-'+row).text();
  var bodyWater = 0.58;
  var weight = 80;

  return bac;
}