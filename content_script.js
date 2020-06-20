
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.updateHours){
      updateHour(request.hours, request.isOnlyEmpty);
      sendResponse({success: true});
    }

    sendResponse({success: false});
  }
);


function updateHour(hours, isOnlyEmpty){
  document.querySelectorAll('.hora').forEach(function(hour){

    if(hour.parentNode.style.backgroundColor !== 'rgb(192, 192, 192)'){
      const nameHourSplit = hour.getAttribute('id').split('_');
      const typeHour = nameHourSplit[nameHourSplit.length-1]
      
      if(!isOnlyEmpty || !hour.value.trim()){
        switch(typeHour){
          case 'txtEntrada1': 
            hour.value = hours.entryHour1;
            break;
          case 'txtSaida1': 
            hour.value = hours.exitHour1;
            break;
          case 'txtEntrada2': 
            hour.value = hours.entryHour2;
            break;
          case 'txtSaida2': 
            hour.value = hours.exitHour2;
            break;
          default: break;
        }
      }
    }
  });
}