import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "array",
  initialState: [],
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
    removeItem(state, action) {
      return state.filter((item) => item !== action.payload);
    },
    clearArray(state) {
      return [];
    },
  },
});

export const { addItem, removeItem, clearArray } = productSlice.actions;

export default productSlice.reducer;
