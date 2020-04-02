import { TodoState } from "./Model";
import { TodoService } from "./DataAccess";

let service = new TodoService([]);

service.add({
  name: "Pick up drycleaning",
  state: TodoState.New
});
service.add({
  name: "Go to supermarket",
  state: TodoState.Complete
});
service.add({
  name: "Fix the bike",
  state: TodoState.Active
});

// service.delete(2);

let todos = service.getAll();
todos.forEach(todo =>
  console.log(`${todo.id} ${todo.name} [${TodoState[todo.state]}]`)
);

let selected = service.getById(1);
console.log(
  `Selecionado: ${selected.id} ${selected.name} [${TodoState[selected.state]}]`
);
