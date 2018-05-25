'use strict';
// TODO implement the presentation logic
var todos;
var dones;
$('form').submit(function(event) {
    event.preventDefault();
    var $input=$(this).find('input');
    var res=$input.val();
    logic.addTask(res);
    $input.val('');
    $('ul:first').empty();
    todos=logic.listTodos();
    todos.forEach(function(task) {
        var $taskItem = $('<li class="list-group-item list-group-item-action flex-column align-items-start"></li>');
        $taskItem.append(task.text);

        var $taskButton = $('<button class="btn btn-primary">✔️</button>');

        $taskButton.click(function() {
            logic.markTaskDone(task.id);
            
            $('ul:last').empty();
            dones=logic.listDones();
            $taskItem.remove(); 
            dones.forEach(function(task) {
                var $taskItem = $('<li class="list-group-item list-group-item-action flex-column align-items-start"></li>');
                $taskItem.append(task.text);

                var $taskButton = $('<button class="btn btn-primary">❌</button>');

                $taskButton.click(function() {
                    logic.removeTask(task.id);
                    $taskItem.remove();
                    dones=logic.listDones();
                });

                $taskItem.append($taskButton);

                $('ul:last').append($taskItem);
                todos=logic.listTodos();
            });
            
        });

        $taskItem.append($taskButton);

        $('ul:first').append($taskItem);
    });
});



