import { ADD_TODO, DELETE_TODO } from "./type";
import axios from "axios";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const addTodoAsync = () => async (dispatch) => {
  const res = (await axios.get("https://jsonplaceholder.typicode.com/todos/1"))
    .data;
  dispatch(
    addTodo({
      name: res.title,
      id: Math.random(),
    })
  );
};
