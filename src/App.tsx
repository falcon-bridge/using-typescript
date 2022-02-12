import { useState } from "react";

import Todo from "./models/todo";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

function App() {
  // const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoTxet: string) => {
    const newTodo = new Todo(todoTxet);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
