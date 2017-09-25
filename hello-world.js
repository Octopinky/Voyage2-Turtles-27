// var myButton = document.getElementById("clickButton");
var myText = document.getElementById("clock");

// myButton.addEventListener('click', doSomething, false)


function doSomething() {
    var d = new Date();
    var clock = d.getTime();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    var day = d.getDate();
    myText.textContent = hours + ":" + minutes + ":" + seconds;
}

setInterval(function(){
    doSomething();
    console.log("do something");
}, 1000);
