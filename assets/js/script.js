// current date & time
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

var taskList = {
    "9": [],
    "10": [],
    "11": [],
    "12": [],
    "13": [],
    "14": [],
    "15": [],
    "16": [],
    "17": []
}

// adding tasks to local storage
var savedTask = function() {
    localStorage.setItem("taskList", JSON.stringify(taskList));
}

// load tasks into their proper container
var loadTask = function() {
    var loadedTask = JSON.parse(localStorage.getItem("taskList"));
    if (loadedTask) {
        taskList = loadedTask

    }

}