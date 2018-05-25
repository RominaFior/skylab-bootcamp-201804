'use strict';

var $listTodo = $('#todo-list');
var $listDone = $('#done-list');

// ADD TASK
$('form').submit(function(e) {
    e.preventDefault();

    $('.msg').empty();

    var $input = $(this).find('input[type=text]');

    var desc = $input.val();

    try {
        var id = logic.addTask(desc);

        // ADD TASK TO THE DOM LIST
        $listTodo.prepend(
            '<li class="list-group-item"><span>' +
                desc +
                '</span> <button class="done float-right btn btn-link" title="Done" data-id="' +
                id +
                '">✅</button></li>'
        );

        $(this)[0].reset();
    } catch (error) {
        $('.msg').html('<div class="alert alert-danger">' + error + '</div>');
        btn - outline - danger;
    }
});

// MARK TASK DONE
$listTodo.on('click', '.done', function(e) {
    var id = +$(this).data('id');

    var desc = $(this)
        .prev('span')
        .text()
        .trim();

    logic.markTaskDone(id);

    var el = $(this).closest('li');
    removeLi(el);

    // ADD TASK DONE TO THE DOM LIST
    $listDone.prepend(
        '<li class="list-group-item"><span>' +
            desc +
            '</span> <button class="remove float-right btn btn-link" title="Remove" data-id="' +
            id +
            '">❌</button></li>'
    );

    if ($listTodo.find('li').length <= 0) {
        $listTodo.closest('h2').html('hola');
    }
});

// REMOVE TASK
$listDone.on('click', '.remove', function() {
    var id = +$(this).data('id');
    var el = $(this).closest('li');

    var $modal = $('#remove-task');

    $modal.modal('show');

    $modal.on('shown.bs.modal', function(e) {
        $(document).on('click', '#btn-remove', function() {
            logic.removeTask(id);

            removeLi(el);

            $modal.modal('hide');
        });
    });
});

function removeLi(el) {
    $(el)
        .closest('li')
        .remove();
}

$('#search').on('keyup', function(e) {
    if ($listTodo.find('li').length > 0) {
        var text = $(this).val();

        if (text.trim() !== '') {
            searchTask(text);
        } else {
            console.log('hola');
            $listTodo.find('li').show();
        }
    }
});

function searchTask(text) {
    setTimeout(function() {
        $listTodo.find('li').hide();

        $listTodo.find('li:contains("' + text + '")').show();
    }, 500);
}
