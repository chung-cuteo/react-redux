import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos } from "./action";

const initialState = {
  todos: [],
  loading: "idle",
};

export const todoSlice = createSlice({
  name: "counter",
  initialState,
  // name/action : counter.increment, counter/decrement
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos.push(action.payload);
      state.loading = "succeeded";
    });
    builder.addCase(fetchTodos.rejected, (state) => {
      state.todos = [];
      state.loading = "failed";
    });
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
