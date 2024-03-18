import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import purchaseResultReducer from "./purchaseResult";
const store = configureStore({
  reducer: {
    array: productReducer,
    arrayResult: purchaseResultReducer,
  },
});

export default store;
