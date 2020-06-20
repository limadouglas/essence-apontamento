var entryHour1 = document.getElementById('entryHour1');
var exitHour1 = document.getElementById('exitHour1');
var entryHour2 = document.getElementById('entryHour2');
var exitHour2 = document.getElementById('exitHour2');

var hoursSubmit = document.getElementById('hoursSubmit');
var onlyEmpty =document.getElementById("onlyEmpty");

function displayHours() {
  chrome.storage.local.get(['hours', 'isOnlyEmpty'], function(object) {
    if(!!object.hours) {
      entryHour1.value = object.hours.entryHour1;
      exitHour1.value = object.hours.exitHour1;
      entryHour2.value = object.hours.entryHour2;
      exitHour2.value = object.hours.exitHour2;
      onlyEmpty.checked = object.isOnlyEmpty;
    }
  });
}

displayHours();

hoursSubmit.onclick = function(event) {
  let hours = {
    entryHour1: entryHour1.value, 
    exitHour1: exitHour1.value, 
    entryHour2: entryHour2.value, 
    exitHour2: exitHour2.value
  };

  let isOnlyEmpty = onlyEmpty.checked;
  
  chrome.storage.local.set({hours, isOnlyEmpty}, function(){
    chrome.tabs.executeScript(null, {
      file: 'content_script.js'
    });
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {updateHours:true, hours, isOnlyEmpty }, function(response) {
        console.log(response);
      });
    });
  });

}

