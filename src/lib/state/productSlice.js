import { createSlice } from "@reduxjs/toolkit";
import { saveProducts } from "./actions";

const productSlice = createSlice({
  name: "array",
  initialState: [],
  reducers: {
    fillItems(state, action) {
      action?.payload?.forEach((item) => {
        state.push(item);
      });
    },
    addItem(state, action) {
      state.push(action.payload);
      saveProducts(state);
    },
    removeItem(state, action) {
      const newState = [...state];
      newState.splice(action.payload, 1);
      saveProducts(newState);
      return newState;
    },
    clearArray(state) {
      saveProducts([]);
      return [];
    },
  },
});

export const { addItem, removeItem, clearArray, fillItems } =
  productSlice.actions;

export default productSlice.reducer;
