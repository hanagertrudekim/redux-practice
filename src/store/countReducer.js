import { createSlice } from "@reduxjs/toolkit";

const countReducer = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    countUp: (state, action) => {
      return (state = state + 1);
    },
    countDown: (state, action) => {
      return (state = state - 1);
    },
  },
});

export default countReducer.reducer;
export const { countUp, countDown } = countReducer.actions;
