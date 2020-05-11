$(document).ready(function () {
  // these are labels for the days of the week
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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
  var textArray = [];
  textInput = "";
  $("#date-my").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
  renderWeek();
  function renderWeek() {
    for (var i = 0; i < days.length; i++) {
      $(`.container`).append(`${days[i]}:
    <div class="input-group mt-2 mb-2">
      <input type="text" class="form-control" placeholder="Schedule an event">
      <div class="input-group-append" id="button-addon4">
        <button class="btn btn-outline-primary" type="button">Button</button>
        <button class="btn btn-outline-danger" type="button">Button</button>
      </div>
  </div>`);
    }
  }
  // function loop() {
  //   var m = 1;
  //   for (m; m < daysInMonth[0]; m++) {
  //     console.log(m);

  //     var x = 1;
  //     for (x; x <= 7; x++) {
  //       $(`#months`)
  //         .append(`<div class="col-md-1 col-sm-1 card border-light mb-3" style="min-width: 16rem; max-height: 12rem;">
  //   <div class="card-header">${m}</div>
  //   <div class="card-body">
  //     <h6 class="card-title">${days[x]}</h6>
  //     <p class="card-text">Some quick example text..</p>
  //   </div>
  // </div>`);
  //     }
  //   }
  // }
  // loop();
  // for (let x = 0; x < days.length; x++) {
  // console.log(weekDay);

  //       for (var m = 1; m < daysInMonth[0] + 1; m++)
  //       (var x = 0; x < days.length; x++) {
  //         $(`#months`)
  //           .append(`<div class="col-md-1 col-sm-1 card border-light mb-3" style="min-width: 16rem; max-height: 12rem;">
  //   <div class="card-header">${m}</div>
  //   <div class="card-body">
  //     <h6 class="card-title">${days[x]}</h6>
  //     <p class="card-text">Some quick example text..</p>
  //   </div>
  // </div>`);
  //       }
  //     }
  //   }
  //   dayLoop();
  //   renderMonth();
  //   function renderMonth() {
  //     for (var m = 1; m < daysInMonth[0] + 1; m++) {
  //       $(`#months`)
  //         .append(`<div class="col-md-1 col-sm-1 card border-light mb-3" style="min-width: 16rem; max-height: 12rem;">
  //   <div class="card-header">${m}</div>
  //   <div class="card-body">
  //     <h6 class="card-title">Light card</h6>
  //     <p class="card-text">Some quick example text..</p>
  //   </div>
  // </div>`);
  //     }
  //   }
});

// for (var i = 0; i < textArray.length; i++) {
//   $(`.container`).prepend(`
//     <div class="input-group">
//       <input type="text" class="form-control" placeholder="Schedule an event">
//       <div class="input-group-append" id="button-addon4">
//         <button class="btn btn-outline-secondary" type="button">Button</button>
//         <button class="btn btn-outline-secondary" type="button">Button</button>
//       </div>
//   </div>`);
// }

reDAY_OBJECT = dayObject;
