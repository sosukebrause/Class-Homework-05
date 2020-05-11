$(document).ready(function () {
  console.log("hello");

  var textInput = "";
  var textArray = [];

  $("#btnSubmit").on("click", function (event) {
    event.preventDefault();
    textInput = $("#textInput").val();
    console.log(textInput);

    textArray.push(textInput);
    console.log(textArray);
    $("#textInput").val("");
    // $(".todoContainer").append(`<h5>${textInput}</h5>`);
    $(".todoContainer").html("");
    for (var i = 0; i < textArray.length; i++)
      $(".todoContainer").append(`<p>${textArray[i]}</p>`);
    $(".delete").html("<h5>H4 overwritten</h5>");
  });
});
