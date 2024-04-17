import { ADD_TODO, DELETE_TODO } from "./type";

const initialState = {
  todos: [],
};

export const todosReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, payload],
      };

    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== payload),
      };

    default:
      return state;
  }
};
