$("#formAdd").submit(function (event) {
    event.preventDefault();
    var $input = $(this).find("input");
    var text = $input.val();
    //console.log($input.val());
    logic.addTask(text);
    $input.val('');

    addNewLi(text);
});

function addNewLi(text) {
    var inputId = logic.addTask(text);
    var $elementLi = $("<li></li>");
    var $check = $("<button>&check;</button>");
    //$check.click(changeLiStatus(inputId));
    $check.click(function () {
        changeLiStatus(inputId);
    });
    $elementLi.attr("id", inputId)
        .text(text)
        .append($check);
    $("#toDoUl").append($elementLi);
}

function changeLiStatus(inputId) {    
    var $li = $("#" + inputId);
    $("#doneUl").append($li);
}


