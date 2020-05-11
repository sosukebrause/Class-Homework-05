$(document).ready(function () {
  var textArray = [];
  textInput = "";
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
  // these are labels for the days of the week
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var hours = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6];
  // these are human-readable month name labels, in order
  var month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // these are the days of the week for each month, in order
  var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // renderDays();
  function renderDays() {
    for (var i = 0; i < days.length; i++) {
      $(`.container`).append(`${days[i]}:
    <div class="input-group mt-2 mb-2">
    <input type="text" class="form-control" placeholder="Schedule an event">
    <div class="input-group-append" id="button-addon4">
    <button class="btn btn-outline-success" type="button">Enter</button>
    <button class="btn btn-outline-danger" type="button">Clear</button>
    </div>
    </div>`);
    }
  }
  // renderMonth();
  function renderMonth() {
    for (var m = 1; m < daysInMonth[0] + 1; m++) {
      $(`#months`)
        .append(`<div class="col-md-1 col-sm-1 card border-light mb-3" style="min-width: 16rem; max-height: 12rem;">
            <div class="card-header">${m}</div>
            <div class="card-body">
            <h6 class="card-title">Light card</h6>
            <p class="card-text">Some quick example text..</p>
          </div>
        </div>`);
    }
  }
});
$("#btnSubmit").on("click", function (event) {
  event.preventDefault();
  textInput = $("#textInput").val();
  if (textInput.length > 0) {
    textArray.push(textInput);
    showAlert("You have succesfully added a todo", "primary");
    renderTodos();
  } else {
    showAlert("Text can not be empty", "danger");
  }
  function showAlert(str, type) {
    $("#alert").show();
    $("#alert").attr("class", `alert alert-${type}`);
    $("#alert").text(str);

    window.setTimeout(function () {
      $("#alert").hide();
    }, 1000);
  }
  $("#alert").on$("click", function () {
    $("#alert").hide();
  });
});
