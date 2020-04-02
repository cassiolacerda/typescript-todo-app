System.register([], function (exports_1, context_1) {
    "use strict";
    var _lastId, TodoService;
    var __moduleName = context_1 && context_1.id;
    function generateTodoId() {
        return (_lastId += 1);
    }
    return {
        setters: [],
        execute: function () {
            _lastId = 0;
            TodoService = class TodoService {
                constructor(todos) {
                    this.todos = todos;
                }
                add(todo) {
                    todo.id = generateTodoId();
                    this.todos.push(todo);
                    return todo;
                }
                delete(todoId) {
                    var toDelete = this.getById(todoId);
                    var deletedIndex = this.todos.indexOf(toDelete);
                    this.todos.splice(deletedIndex, 1);
                }
                getAll() {
                    var clone = JSON.stringify(this.todos);
                    return JSON.parse(clone);
                }
                getById(todoId) {
                    var filtered = this.todos.filter(x => x.id == todoId);
                    if (filtered.length) {
                        return filtered[0];
                    }
                    return null;
                }
            };
            exports_1("TodoService", TodoService);
        }
    };
});
