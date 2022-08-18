import { createSlice } from "@reduxjs/toolkit";
import { ICategory } from "../services/types";

interface ICategoryStore {
  categories?: ICategory[];
}

// Slice
const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: undefined,
  } as ICategoryStore,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    removeCategories: (state, action) => {
      state.categories = undefined;
    },
  },
});

export const { setCategories, removeCategories } = categorySlice.actions;

export default categorySlice.reducer;
