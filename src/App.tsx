import TodoContextProvider from "./store/todo-context";

import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

function App() {
  return (
    <TodoContextProvider>
      <NewTodo />
      <Todos />
    </TodoContextProvider>
  );
}

export default App;
