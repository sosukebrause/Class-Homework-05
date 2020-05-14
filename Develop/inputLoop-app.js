function initiateInputs() {
  for (i = 1; i < 12; i++) {
    $(`#btnSave${i}`).on("click", function () {
      var userText = $(`#input${i}`).val();
      localStorage.setItem("Event", JSON.stringify({ task: userText }));
      console.log($("#input1").val("Event"));

      renderData();
      // refresh();
    });
    function renderData() {
      var item = JSON.parse(localStorage.getItem("Event"));
      console.log(item.task);

      if (item != null) {
        $(`#input${i}`).val(item.task);
      }
    }
    // function refresh() {
    //   $(`#input${i}`).val("");
    // }
    console.log(`#input${i}`);
  }
}
initiateInputs();
