const NewTodo = () => {
  const submitHandler = (event: React.FocusEvent) => {
    event.preventDefault();
  };

  return (
    <form>
      <label htmlFor="text">Enter a Todo</label>
      <input id="text" type="text" />
      <button type="submit">Add todo</button>
    </form>
  );
};

export default NewTodo;
