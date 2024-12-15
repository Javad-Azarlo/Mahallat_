import { configureStore } from "@reduxjs/toolkit";
import  tokenSlice  from "../Services/funcRequest";

const store = configureStore({
  reducer: {
    token: tokenSlice,
  },
});

export default store;
