$(document).ready(function () {
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h a"));
  // var currentTime = moment().format("h:mm:ss a");
  // $("#time").text(`${currentTime}`);
  // var textArray = [];
  function updateTime() {
    let currentLiveTime = moment().format("h:mm:ss a");
    $("#time").text(currentLiveTime);
  }
  setInterval(updateTime, 1000);
  // textInput = "";

  // let startOf = moment().startOf("day").add(8, "h").format("dddd, h:mm a");
  // $(".container").prepend(`<h1>${startOf}</h1>`);

  function initializeHours() {
    let currentHour = moment().format("h a");

    let hours = {};
    for (var i = 1; i < 12; i++) {
      hours[i] = `Event${i}`;
      //console.log(i);
      var txt2 = moment()
        .startOf("day")
        .add(9 + i, "h")
        .format("h a");
      // console.log(i + 7);
      if (txt2 == currentHour) {
        timeClass = "present";
      } else if (txt2 < currentHour) {
        timeClass = "past";
      } else {
        timeClass = "future";
      }
      // console.log([i]);
      //
      //var taskEvent = JSON.parse(window.localStorage.getItem("Event"+i));
      var taskEvent = JSON.parse(window.localStorage.getItem(`Event${i}`));
      var task = "";
      if (taskEvent !== null) {
        task = taskEvent.task;
      }
      var form = `${txt2}
      <div class="input-group">
      <textarea id = "input${i}" type="text" class="textarea form-control" placeholder="input text"></textarea>
      <div class="input-group-append" id="button-addon4">
      <button id = "btnDelete${i}" data-id="${i}" class="btn-danger btn-delete" type="button">Clear</button>
      <button id = "btnSave${i}" data-id="${i}" class="saveBtn btn-success btn-save" type="button">Save</button>

  </div>
</div>
`;
      $(".timeblock")
        .append(`<div style="margin-top: 20px;" class="${timeClass}">
<h3 id = "${txt2}"></h3>
${form}
</div> <br>
<div class="description;" id="task${i}">${task}</div>
`);
    }
    return hours;
  }
  initializeHours();

  $(document).on("click", ".btn-save", function (e) {
    e.preventDefault();

    var id = $(this).attr("data-id");

    //$(this).attr("style", "display: none;");
    var userText = $(`#input${id}`).val();
    console.log(userText);
    // console.log($("#input1").val("Event"));
    // console.log(typeof userText); //this returns string//
    //  localStorage.setItem("Data", "setting item for data1");
    localStorage.setItem(`Event${id}`, JSON.stringify({ task: userText }));
    g = document.createElement("li");
    g.setAttribute("id", `task${id}`);
    $(`#task${id}`).append(g);
    g.append(userText);
  });

  $(document).on("click", ".btn-delete", function (e) {
    e.preventDefault();
    var id = $(this).attr("data-id");
    window.localStorage.removeItem(`Event${id}`);
    $(`#task${id}`).text("");
  });
  //REFRESH FUNCTION
  $(document).on("click", ".btn-save", function (e) {
    e.preventDefault();
    var id = $(this).attr("data-id");
    $(`#input${id}`).val("");
  });

  //am not sure how to use the return function for either the hours object or the  `i`, what to console log it or how to bracket them for reuse...

  // function renderData() {
  //   var item = JSON.parse(localStorage.getItem("Event"));
  //   console.log(item.task);

  //   if (item != null) {
  //   }
  // }
  // function refresh() {
  //   $("#input1").val("");
  // }

  // var input1 = document.getElementById("input1");
  // console.log(input1);
  // var text10 = $("#input1").val();
  // console.log(text10);
  // var dayObects = initializeHours();

  // function timeClassify(dayObects) {
  // let currentTime = moment().format("h");

  //   let hours = dayObects;
  //   if (hours == currentTime) {
  //     timeClass = "present";
  //   } else if (hours < currentTime) {
  //     timeClass = "past";
  //   } else {
  //     timeClass = "future";
  //   }
  //   return timeClass;
  // }
  // timeClassify();

  // $(".timeblock").append(txt2);

  // $(".timeblock").append(txt2);

  // console.log(task);

  // function initializeDayObject() {
  //   // DAY_OBJECT = {
  //   // 1: "",
  //   //   #2: "",
  //   //   #24: "",
  //   // #}
  //   let dayObject = {};
  //   for (let i = 9; i <= 21; i++) {
  //     dayObject[i] = `Event: ${i}`;
  //   }
  //   return dayObject;
  // }
  // // console.log(initializeDayObject);
  // var DAY_OBJECT = initializeDayObject();
  // console.log(DAY_OBJECT);
  //   Object.keys(DAY_OBJECT).forEach(function (time, index) {
  //     // console.log(time, DAY_OBJECT[time]);
  //     let currentTime = moment().format("h");
});
