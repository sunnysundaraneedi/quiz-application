import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    category: "",
    difficulty: "",
    type: "",
    amount: 10,
    score: 0,
  },
  reducers: {
    change: (state, action) => {
      const data = action.payload.dataFields;
      return { ...state, ...data };
    },

    changeScore: (state, action) => {
      state.score++;
    },

    reset: (state) => {
      state.category = "";
      state.difficulty = "";
      state.type = "";
      state.amount = 10;
      state.score = 0;
    },
  },
});

export const questionsActions = questionsSlice.actions;
export default questionsSlice;
