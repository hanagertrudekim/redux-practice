import { createSlice } from "@reduxjs/toolkit";

const toDoReducer = createSlice({
  name: "toDo",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      return state.filter((toDo) => action.payload.id !== toDo.id);
    },
    edit: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        if (action.payload.id === state[i].id) {
          state[i].text = prompt();
        }
      }
    },
  },
});

export default toDoReducer.reducer;
export const { add, remove, edit } = toDoReducer.actions;
