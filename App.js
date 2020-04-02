System.register(["./Model", "./DataAccess"], function (exports_1, context_1) {
    "use strict";
    var Model_1, DataAccess_1, service, todos, selected;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Model_1_1) {
                Model_1 = Model_1_1;
            },
            function (DataAccess_1_1) {
                DataAccess_1 = DataAccess_1_1;
            }
        ],
        execute: function () {
            service = new DataAccess_1.TodoService([]);
            service.add({
                name: "Pick up drycleaning",
                state: Model_1.TodoState.New
            });
            service.add({
                name: "Go to supermarket",
                state: Model_1.TodoState.Complete
            });
            service.add({
                name: "Fix the bike",
                state: Model_1.TodoState.Active
            });
            // service.delete(2);
            todos = service.getAll();
            todos.forEach(todo => console.log(`${todo.id} ${todo.name} [${Model_1.TodoState[todo.state]}]`));
            selected = service.getById(1);
            console.log(`Selecionado: ${selected.id} ${selected.name} [${Model_1.TodoState[selected.state]}]`);
        }
    };
});
