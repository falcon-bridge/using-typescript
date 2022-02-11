import Todo from "./models/todo";
import Todos from "./components/todos";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
