import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux-toolkit/count/slice";
import { addTodo, deleteTodo } from "./redux-toolkit/todo/slice";
import { useState } from "react";
import { fetchTodos } from "./redux-toolkit/todo/action";

function App() {
  const dispatch = useDispatch();
  const { todos, pending } = useSelector((state) => state.todos);
  const count = useSelector((state) => state.count.count);
  const [todo, setTodo] = useState("");

  function handleIncrease() {
    dispatch(increment(5));
  }

  function handleDecrease() {
    dispatch(decrement(5));
  }

  function handleAddTodo() {
    dispatch(
      addTodo({
        name: todo,
        id: Math.random(),
      })
    );
    setTodo("");
  }

  function handleDelete(id) {
    dispatch(deleteTodo(id));
  }

  const fetchTodo = async () => {
    dispatch(fetchTodos());
  };

  return (
    <>
      <h1>Hello</h1>
      <h2>count</h2>
      <p>{count}</p>
      <button onClick={handleIncrease} type="button">
        Increase
      </button>
      <button onClick={handleDecrease} type="button">
        Increase
      </button>
      <h2>todo list</h2>

      {pending === "pending" ? (
        <h1>...pending</h1>
      ) : (
        <>
          {todos.map((todo, i) => (
            <li key={i}>
              <div>
                {todo.name}
                <button type="button" onClick={() => handleDelete(todo.id)}>
                  X
                </button>
              </div>
            </li>
          ))}
        </>
      )}

      <input type="text" onChange={(e) => setTodo(e.target.value)} />
      <button onClick={handleAddTodo} type="button">
        Submit add todo
      </button>

      <button onClick={fetchTodo} type="button">
        fetch todo all from api
      </button>
    </>
  );
}

export default App;
