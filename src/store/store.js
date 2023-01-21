import { configureStore } from "@reduxjs/toolkit";
import questionsSlice from "./questionsSlice";

const store = configureStore({
  reducer: {
    questions: questionsSlice.reducer,
  },
});

export default store;
