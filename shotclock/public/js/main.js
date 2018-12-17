var counter = 0;

$(document).ready(function(){
  

  

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

  $('#tablersky tbody:last-child').append('<tr id=row-'+counter+'>'
    +'<td class=name id=name-'+counter+'> '+name+' </td>'
    +'<td class=drinks id=drinks-'+counter+'> '+counter+' </td>'
    +'<td class=bal id=bal-'+counter+'> '+0.003+' </td>'
    // +'<td> '+(new Date()).getTime()+' </td>'
    +'<td class=time id=time-'+counter+'> '+(new Date()).toLocaleTimeString()+' </td>'
    // +'<td> '+Date.now().getHours()+' </td>'
    +'<td class=add id=add-'+counter+'> <button>+</button> </td>'
    +' </tr>');

  $('#person-name').val('');
});

$('#tablersky tbody').on('click', 'td.add button', function(){
    console.log(this);
});