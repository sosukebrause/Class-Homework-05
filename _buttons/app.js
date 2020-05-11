$(document).ready(function () {
  var textInput = "";
  var textArray = [];
  $("#alert").hide();
  $("#cardContainer").hide();
  $("#btnSubmit").on("click", function (event) {
    event.preventDefault();
    textInput = $("#textInput").val();
    if (textInput.length > 0) {
      textArray.push(textInput);
      showAlert("You have succesfully added a todo", "primary");
      renderTodos();
    } else {
      showPop("Pop up Alert", "info");
      showAlert("Text can not be empty", "danger");
    }
  });
  function renderTodos() {
    $("#textInput").val("");
    $("#cardContainer").html("");
    $("#cardContainer").show();

    for (var i = 0; i < textArray.length; i++) {
      $("#cardContainer").prepend(`
      <div class="card mb-3">
        <div class="card-body">
          <p>
              ${textArray[i]}
          </p>
          <div class="text-right">
            <button data-id=${i} class="btnSucess btn btn-success" style="width: 100px;">
              Edit
            </button>
            <button id="btnDelete" data-id=${i} class="btnDanger btn btn-danger" style="width: 100px;">
              Danger
            </button>
          </div>
        </div>
      </div>`);
    }
    var cardList = document.getElementById("cardContainer");
    console.log(cardList);
    function deleteCard() {
      cardList.removeChild(cardList.childNodes[0]);
    }
    $(document).on("click", "#btnDelete", function (event) {
      event.preventDefault();
      deleteCard();
    });
  }

  // $(document).on("click", ".btn", function () {
  // console.log($(this));
  // });

  // $(document).on("click", `data-id=${"2"}`),
  //   function () {
  //     console.log("hello");
  //   };

  // make alert go away on setTimeout function or on click function
  function showAlert(str, type) {
    $("#alert").show();
    $("#alert").attr("class", `alert alert-${type}`);
    $("#alert").text(str);
    // window.setTimeout(function () {
    //   $("#alert").hide();
    // }, 3000);
  }
  function showPop(str, type) {
    $("#pop").show();
    $("#pop").attr("class", `alert alert-${type}`);
    $("#pop").text(str);
  }
  $(`#pop`).on("click", function () {
    $("#pop").hide();
  });
  // window.setTimeout(function () {
  //   $("#pop").hide();
  // }, 3000);
});
