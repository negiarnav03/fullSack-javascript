import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
    reducer: todoReducer // it is an object, we can pass multiple reducers here
})



