import { useRef, useContext } from "react";

import { TodoContext } from "../store/todo-context";

import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const TodosCtx = useContext(TodoContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // const enteredText = todoTextInputRef.current?.value; //if we are not sure whether current will be undefined or defined
    const enteredText = todoTextInputRef.current!.value; // as we are sure that current in the scenario that we use it can't be null

    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }

    TodosCtx.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Enter a Todo</label>
      <input id="text" type="text" ref={todoTextInputRef} />
      <button type="submit">Add todo</button>
    </form>
  );
};

export default NewTodo;
