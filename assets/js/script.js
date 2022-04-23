// current date & time
var today = $("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

var hour9 = 9;
var hour10 = 10;
var hour11 = 11;
var hour12 = 12;
var hour1 = 1;
var hour2 = 2;
var hour3 = 3;
var hour4 = 4;
var hour5 = 5;

// variable defining the current time of day
var currentTime = moment().format("h");

// textarea color changing for each hour
// 9AM
if (currentTime < hour9) {
    $(".9am").addClass("past");
} else if (currentTime > hour9) {
    $(".9am").addClass("future");
} else if (currentTime = hour9) {
    $(".9am").addClass("present");
}

// 10AM
if (currentTime < hour10) {
    $(".10am").addClass("past");
} else if (currentTime > hour10) {
    $(".10am").addClass("future");
} else if (currentTime = hour10) {
    $(".10am").addClass("present");
}

// 11AM
if (currentTime < hour11) {
    $(".11am").addClass("past");
} else if (currentTime > hour11) {
    $(".11am").addClass("future");
} else if (currentTime = hour11) {
    $(".11am").addClass("present");
}

// 12PM
if (currentTime < hour12) {
    $(".12pm").addClass("past");
} else if (currentTime > hour12) {
    $(".12pm").addClass("future");
} else if (currentTime = hour12) {
    $(".12pm").addClass("present");
}

// 1PM
if (currentTime < hour1) {
    $(".1pm").addClass("future");
} else if (currentTime > hour1) {
    $(".1pm").addClass("past");
} else if (currentTime = hour1) {
    $(".1pm").addClass("present");
}

// 2PM
if (currentTime < hour2) {
    $(".2pm").addClass("future");
} else if (currentTime > hour2) {
    $(".2pm").addClass("past");
} else if (currentTime = hour2) {
    $(".2pm").addClass("present");
}

// 3PM
if (currentTime < hour3) {
    $(".3pm").addClass("future");
} else if (currentTime > hour3) {
    $(".3pm").addClass("past");
} else if (currentTime = hour3) {
    $(".3pm").addClass("present");
}

// 4PM
if (currentTime < hour4) {
    $(".4pm").addClass("future");
} else if (currentTime > hour4) {
    $(".4pm").addClass("past");
} else if (currentTime = hour4) {
    $(".4pm").addClass("present");
}

// 5PM
if (currentTime < hour5) {
    $(".5pm").addClass("future");
} else if (currentTime > hour5) {
    $(".5pm").addClass("past");
} else if (currentTime = hour5) {
    $(".5pm").addClass("present");
}


// on click of save button, save content in textarea to local storage
$(".saveBtn").on("click", function () {
    var value = $(this).siblings(".user-text").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
});

// get ietm from local storage for each hour
$("#hour9 .user-text").val(localStorage.getItem("hour9"));
$("#hour10 .user-text").val(localStorage.getItem("hour10"));
$("#hour11 .user-text").val(localStorage.getItem("hour11"));
$("#hour12 .user-text").val(localStorage.getItem("hour12"));
$("#hour1 .user-text").val(localStorage.getItem("hour1"));
$("#hour2 .user-text").val(localStorage.getItem("hour2"));
$("#hour3 .user-text").val(localStorage.getItem("hour3"));
$("#hour4 .user-text").val(localStorage.getItem("hour4"));
$("#hour5 .user-text").val(localStorage.getItem("hour5"));
