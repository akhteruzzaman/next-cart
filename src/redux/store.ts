import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import counterReducer from "./counterSlice";


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
  },
});

// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;