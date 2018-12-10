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

$('#new-person').click(function(){
  counter++;
  var name = $('#person-name').val();

  $('#tablersky tbody:last-child').append('<tr id=row-'+counter+'>'
    +'<td> '+name+' </td>'
    +'<td> '+counter+' </td>'
    // +'<td> '+(new Date()).getTime()+' </td>'
    +'<td> '+(new Date()).toLocaleTimeString()+' </td>'
    // +'<td> '+Date.now().getHours()+' </td>'
    +' </tr>');

  $('#person-name').val('');
});