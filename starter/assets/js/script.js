var timeDisplayEl = $("#currentDay")

function displayTime(){
 let rightNow=moment().format("DD MMM YYYY [at] hh:mm:ss a")
 timeDisplayEl.text(rightNow)
 
}

setInterval(displayTime,1000); 
$("#text-area-9am").css({"background-color":"yellow", "border":"2px solid red"})

$("text-area-9am").css({"background-color": "red"});

// textarea elements
var saveBtn = $(".btn saveBtn col-md-1");
var containerEl = $(".container");
var message9 = $("#hour-9");
var message10 = $("#hour-10");
var message11 = $("#hour-11");
var message12 = $("#hour-12");
var message13 = $("#hour-13");
var message14 = $("#hour-14");
var message15 = $("#hour-15");
var message14 = $("#hour-16");
var message15 = $("#hour-17");


$("").on("click", function(){
  localStorage.setItem("9am-notes", message9)
  let nineAmTextAreaValue=localStorage.getItem("9am-notes")
  textBox.text(nineAmTextAreaValue)
})
$("").on("click", function(){
  localStorage.setItem("10am-notes", message10)
  let nineAmTextAreaValue=localStorage.getItem("10am-notes")
  textBox.text(nineAmTextAreaValue)
})
$("").on("click", function(){
  localStorage.setItem("11am-notes", message11)
  let nineAmTextAreaValue=localStorage.getItem("11am-notes")
  textBox.text(nineAmTextAreaValue)
})
$("").on("click", function(){
  localStorage.setItem("12pm-notes", message12)
  let nineAmTextAreaValue=localStorage.getItem("12pm-notes")
  textBox.text(nineAmTextAreaValue)
})
$("").on("click", function(){
  localStorage.setItem("1pm-notes", message13)
  let nineAmTextAreaValue=localStorage.getItem("1pm-notes")
  textBox.text(nineAmTextAreaValue)
})
$("").on("click", function(){
  localStorage.setItem("2pm-notes", message14)
  let nineAmTextAreaValue=localStorage.getItem("2pm-notes")
  textBox.text(nineAmTextAreaValue)
})
$("").on("click", function(){
  localStorage.setItem("3pm-notes", message15)
  let nineAmTextAreaValue=localStorage.getItem("3pm-notes")
  textBox.text(nineAmTextAreaValue)
})
$("").on("click", function(){
  localStorage.setItem("4pm-notes", message16)
  let nineAmTextAreaValue=localStorage.getItem("4pm-notes")
  textBox.text(nineAmTextAreaValue)
})
$("").on("click", function(){
  localStorage.setItem("5pm-notes", message17)
  let nineAmTextAreaValue=localStorage.getItem("5pm-notes")
  textBox.text(nineAmTextAreaValue)
})

    //load to local storage

    // $("#hour-9.inputValue").val(localStorage.getItem("9am"));
    // $("#hour-10.inputValue").val(localStorage.getItem("10am"));
    // $("#hour-11.inputValue").val(localStorage.getItem("11am"));
    // $("#hour-12.inputValue").val(localStorage.getItem("12pm"));
    // $("#hour-13.inputValue").val(localStorage.getItem("1pm"));
    // $("#hour-14.inputValue").val(localStorage.getItem("2pm"));
    // $("#hour-15.inputValue").val(localStorage.getItem("3pm"));
    // $("#hour-16.inputValue").val(localStorage.getItem("4pm"));
    // $("#hour-17.inputValue").val(localStorage.getItem("5pm"));

       //to save to local storage when save button pressed
  
    $(".saveBtn").on('click', function (event){
        event.preventDefault();

        var todoInput = $(this).siblings(".inputValue").val();
        var timeEl=$(this).parent(".row").attr("id");

        localStorage.setItem(timeEl, todoInput);        

        
    });

    var currentHour = moment().hours();
    $("inputValue").each(function (){
      var calendarHour = parseInt($(this).attr("id"));
    

    // conditions when to display a certain colour

    if (calendarHour === currentHour) {
      $(this).addClass('present');
      $(this).removeClass('future');
      $(this).removeClass('past');

    } else if (calendarHour > currentHour) {
      $(this).addClass('future');
      $(this).removeClass('past');
      $(this).removeClass('present');
    } else {
      $(this).addClass('past');
      $(this).removeClass('future');
      $(this).removeClass('present');
    $(this).prop("disabled", true) ; 
    } 
  }); 
    
    

