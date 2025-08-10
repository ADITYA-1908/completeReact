import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Features/CounterSlice/counterSlice.js";
import todoReducer from "../Features/TodoSlice/TodoSlice.js";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    counter: counterSlice,
  },
});
export default store;
