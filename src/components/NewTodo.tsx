const NewTodo = () => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Enter a Todo</label>
      <input id="text" type="text" />
      <button type="submit">Add todo</button>
    </form>
  );
};

export default NewTodo;
