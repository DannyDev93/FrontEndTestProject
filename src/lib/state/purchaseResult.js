import { createSlice } from "@reduxjs/toolkit";

const purchaseResultSlice = createSlice({
  name: "array",
  initialState: [],
  reducers: {
    fillItemsResult(state, action) {
      action?.payload?.forEach((item) => {
        state.push(item);
      });
    },
    clearArrayResult() {
      return [];
    },
  },
});

export const { clearArrayResult, fillItemsResult } =
  purchaseResultSlice.actions;

export default purchaseResultSlice.reducer;
