import { configureStore } from "@reduxjs/toolkit";
import { categorySlice, ModelSlice } from "./slices";
const store = configureStore({
  reducer: {
      category: categorySlice.reducer,
      model: ModelSlice.reducer
  },
});

export default store;