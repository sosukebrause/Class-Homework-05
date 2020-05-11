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

  let startOf = moment().subtract(6, "h").endOf("hour").format("h a");
  let endOf = moment().subtract(6, "h").endOf("day").format("h a");
  $(".container").prepend(`<h1>${startOf}</h1>`);
  $(".container").prepend(`<h1>${endOf}</h1>`);

  var form = `<form>
      <input id="inputText" type="text" placeholder="input text here" />
      <button id="submitbtn" type="submit">
        Submit
      </button>
    </form>`;

  function initializeHours() {
    let currentTime = moment().format("h");

    let hours = {};
    for (i = 1; i < 12; i++) {
      hours[i] = `Event:${i}`;
      console.log(i);
      var txt2 = moment()
        .subtract(18 - i, "h")
        .endOf("hour")
        .format("h a");

      if ([i] == currentTime) {
        timeClass = "present";
      } else if ([i] < currentTime) {
        timeClass = "past";
      } else {
        timeClass = "future";
      }
      console.log([i]);
      $(".timeblock").append(`<div class="${timeClass}">
<h3>${txt2} ${form}</h3>
</div>`);
    }
    return hours;
  }
  initializeHours();
  // var dayObects = initializeHours();

  // function timeClassify(dayObects) {
  let currentTime = moment().format("h");

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
