import React, { useState } from "react";

import Todo from "../models/todo";

type todoContextObj = {
  items: Todo[];
  onAddTodo: (text: string) => void;
  onRemoveTodo: (id: string) => void;
};

export const TodoContext = React.createContext<todoContextObj>({
  items: [],
  onAddTodo: () => {},
  onRemoveTodo: (id: string) => {},
});

const TodoContextProvider: React.FC = (props) => {
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

  const contextValue: todoContextObj = {
    items: todos,
    onAddTodo: addTodoHandler,
    onRemoveTodo: removeTodoHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
