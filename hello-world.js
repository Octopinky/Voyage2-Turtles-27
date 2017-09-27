$(document).ready(function(){
  //cross out todo
    $('.todo_list').on("click", "li", function changeCSS(){
        $(this).toggleClass('todo_completed');

    });

    // delete todo
    $('.todo_list').on("click",'.todo_X', function deleteTodo(e){
      // prevent "bubble up"
      e.stopPropagation();

      $(this).parent().fadeOut(500, function removeAfterFadeOut(){
          $(this).remove();
    });
});

  //add todo
  $('.todo_input').keypress(function hitEnter(e){
    if(e.which == 13){
    var todoText = $(this).val();
    $(this).val('');

    $('.todo_list').prepend('<li class="todo_item"><span class="todo_X">X</span> ' + todoText +  ' </li>');
    }
  })
});


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
