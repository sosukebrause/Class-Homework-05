$(document).ready(function () {
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
  // var currentTime = moment().format("h:mm:ss a");
  // $("#time").text(`${currentTime}`);
  function updateTime() {
    let currentLiveTime = moment().format("h:mm:ss a");
    $("#time").text(currentLiveTime);
  }
  setInterval(updateTime, 1000);
  // var textArray = [];
  // textInput = "";

  let startOf = moment().startOf("day").add(8, "h").format("dddd, h:mm a");
  $(".container").prepend(`<h1>${startOf}</h1>`);

  function initializeHours() {
    let currentHour = moment().format("h a");

    let hours = {};
    for (i = 1; i < 12; i++) {
      hours[i] = `Event:${i}`;
      // console.log(i);
      var txt2 = moment()
        .startOf("day")
        .add(9 + i, "h")
        .format("h a");
      console.log(i + 7);
      if (txt2 == currentHour) {
        timeClass = "present";
      } else if (txt2 < currentHour) {
        timeClass = "past";
      } else {
        timeClass = "future";
      }
      // console.log([i]);
      var form = `${txt2}<div class="input-group">
  <input type="text" class="form-control" placeholder="input text" aria-label="Recipient's username with two button addons" aria-describedby="button-addon4">
  <div class="input-group-append" id="button-addon4">
    <button class="btn btn-outline-secondary" type="button">Button</button>
    <button class="btn btn-outline-secondary" type="button">Button</button>
  </div>
</div>`;
      $(".timeblock").append(`<div class="${timeClass}">
<h3 id = "${txt2}"> ${form}</h3>
</div>`);
    }
    return hours;
  }
  initializeHours();
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
