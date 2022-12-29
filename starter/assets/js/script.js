var timeDisplayEl = $("#currentDay")

function displayTime(){
 let rightNow=moment().format("DD MMM YYYY [at] hh:mm:ss a")
 timeDisplayEl.text(rightNow)
 
}

setInterval(displayTime,1000); 

// textarea elements
 var saveBttn = $(".btn saveBtn col-md-1")
 var containerEl = $(".container");
// var time9am = $("#hour-9");
// var time10am = $("#hour-10");
// var time11am = $("#hour-11");
// var time12pm = $("#hour-12");
// var time1pm = $("#hour-13");
// var time2pm = $("#hour-14");
// var time3pm = $("#hour-15");
// var time4pm = $("#hour-16");
// var time5pm = $("#hour-17");

// var scheduleArray = [
//     time9am,
//     time10am,
//     time11am,
//     time12pm,
//     time1pm,
//     time2pm,
//     time3pm,
//     time4pm,
//     time5pm,
// ];
    //loading local storage as soon as page loads

    $("#hour-9.col-md-10 description").val(localStorage.getItem("9am"));
    $("#hour-10.inputValue").val(localStorage.getItem("10am"));
    $("#hour-11.inputValue").val(localStorage.getItem("11am"));
    $("#hour-12.inputValue").val(localStorage.getItem("12pm"));
    $("#hour-13.inputValue").val(localStorage.getItem("1pm"));
    $("#hour-14.inputValue").val(localStorage.getItem("2pm"));
    $("#hour-15.inputValue").val(localStorage.getItem("3pm"));
    $("#hour-16.inputValue").val(localStorage.getItem("4pm"));
    $("#hour-17.inputValue").val(localStorage.getItem("5pm"));


    // change the rows to show wether they are in past present or future
    // let now = moment().format("dd");
    // for (let i = 0; i < scheduleArray.length; i++) {
    //     scheduleArray[i].removeClass("future past present");

    //     if (now > scheduleArray[i].data("hour")) {
    //         scheduleElArray[i].addClass("past");

    //     } else if (now === scheduleArray[i].attr("data-hour")) {
    //         scheduleArray[i].addClass("present");

    //     } else {

    //         scheduleArray[i].addClass("future");
    //     }
    // }
    // setting function to link html time and actual time and color coding

    var currentHour = moment().hour()

    $(".col-md-1 hour").each(function(){
        var textArea = $(this)
        var hour=parseInt(textArea.attr("text-value"));


        if (hour<currentHour){
            textArea.addClass('.past')
        } else if (hour>currentHour){
            textArea.addClass('.future')
        } else {
            textArea.addClass('.present')
        };
    })
       //to save to local storage when save button pressed
  
    $(".btn saveBtn col-md-1").on('click', function (event){
        event.preventDefault();

        var todoInput = $(this).siblings(".inpValue").val();
        var timeEl=$(this).parent(".row").attr("id");

        localStorage.setItem(timeEl, todoInput);        

        
    });


