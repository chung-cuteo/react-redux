import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("todos/fetchTodo", async () => {
  return (await axios.get("https://jsonplaceholder.typicode.com/todos")).data;
});
