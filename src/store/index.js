import toDoReducer from "./toDoReducer";
import countReducer from "./countReducer";
import themeReducer from "./themeReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { countReducer, toDoReducer, themeReducer },
});

export default store;
