import { createSlice } from "@reduxjs/toolkit";

const ThemeReducer = createSlice({
  name: "theme",
  initialState: "light",
  reducers: {
    change: (state, action) => {
      if (state === "light") {
        return (state = "dark");
      } else if (state === "dark") {
        return (state = "light");
      }
    },
  },
});

export default ThemeReducer.reducer;
export const { change } = ThemeReducer.actions;
