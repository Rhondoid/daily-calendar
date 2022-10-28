// get UI working to match markup

const today=moment();
$("#currentDay").text(today.format('MMMM Do YYYY'));
console.log(moment())

var timeBlock = "textarea";

var textArea =[];
var currentHour= moment(moment()).format("hh");
var currentDay = "today";
var timeblock_8am = document.getElementById("8am-timeblock")
var timeblock_9am = document.getElementById("9am-timeblock")


var eventText8am = document.getElementById("8amEventText")
var eventText9am= document.getElementById("9amEventText")
var eventText10am= document.getElementById("10amEventText")

console.log(currentHour)

eventText8am.value = localStorage.getItem("8amEventText");
eventText9am.value = localStorage.getItem("9amEventText");
eventText10am.value = localStorage.getItem("10amEventText");

console.log(localStorage.getItem("8amEventText"));

if(timeblock_8am.id == currentHour){
    timeblock_8am.style.backgroundColor= 'red'
}

function saveEvent(thisElement) {
    var textEventId = thisElement.previousElementSibling.id;
    var textEventElement = document.getElementById(textEventId);
    localStorage.setItem(textEventId, textEventElement.value);
}

//get currentHour, make for loop to loop through array of element
// localStorage.setItem('textArea);