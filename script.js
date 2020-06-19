

  var entrada1 = '10:00';
  var saida1 = '12:00';
  var entrada2 = '13:00';
  var saida2 = '18:00';

  document.querySelectorAll('.hora').forEach(function(hour, index, arr){
    const nameHourSplit = hour.getAttribute('id').split('_');
    const typeHour = nameHourSplit[nameHourSplit.length-1]
    switch(typeHour){
      case 'txtEntrada1': 
        hour.value = entrada1;
        break;
      case 'txtSaida1': 
        hour.value = saida1;
        break;
      case 'txtEntrada2': 
        hour.value = entrada2;
        break;
      case 'txtSaida2': 
        hour.value = saida2;
        break;
      default: break;
    }
  });



//   document.querySelector('#btnFastHour').addEventListener('click', function(){
//     alert('1')
//     fastHour();
//   });

//   function fastHour(){
//     // alert("2");

//   }
  
// });