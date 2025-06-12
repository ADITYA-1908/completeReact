import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../Features/CounterSlice/counterSlice.js";
import TodoReducer from "../Features/TodoSlice/TodoSlice.js";

const store = configureStore({
  reducer: {
    todos: TodoReducer,
    counter: counterSlice.reducer,
  },
});
export default store;
