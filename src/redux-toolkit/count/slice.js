import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 1,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  // name/action : counter.increment, counter/decrement
  reducers: {
    increment: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state, action) => {
      state.count -= action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
