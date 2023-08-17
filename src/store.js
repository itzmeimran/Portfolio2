import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { colorSlice } from "./colorSlices";

export const rootReducer = combineReducers({
  colors: colorSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
