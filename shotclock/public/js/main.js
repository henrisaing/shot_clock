var counter = 0;

$(document).ready(function(){
  start();
});

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
    +'<td class=bac id=bac-'+counter+'> '+0.000+' </td>'
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

    // updates BAC
    $('#bac-'+row).text(calculateBAC(row));
});

function start(){
  // console.log((new Date()).toLocaleTimeString());
  updateRows();
  setTimeout(start, 5000);
}


function updateRows(){
  $('.app-row').each(function(){
    var row = $(this).attr('id').split('-')[1];

    var dis = $('#dis-'+row).text();


    // double IF BLOCK depreciates Drinks in System
    // and sets to 0 if negative
    // if negative
    if(parseFloat(dis) < 0){
      $('#dis-'+row).text('0');
    }
    // if positive
    //0.0014 for 1dr/hr , others for testing
    if(parseFloat(dis) > 0){
      $('#dis-'+row).text((parseFloat($('#dis-'+row).text(), 10) - 0.0014).toFixed(4));
    }

    // calculates BAC
    $('#bac-'+row).text(calculateBAC(row));

    // colors rows according to BAC
    if(calculateBAC(row) > 0.06){
      $(this).removeClass('yellow green').addClass('red');
    } else if (calculateBAC(row) > 0.03 && calculateBAC(row) < 0.06){
      $(this).removeClass('red green').addClass('yellow');
    } else {
      $(this).removeClass('yellow red').addClass('green');
    }

  });
}

// BAC CALC
// accepts row
// returns bac #
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

  bac = ((0.806 * parseFloat(drinks) * 1.2)/(bodyWater * weight)).toFixed(4);

  return bac;
}