import Todo from "./models/todo";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];

  const addTodoHandler = (todoTxet: string) => {};

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
