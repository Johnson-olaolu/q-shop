import { createSlice } from "@reduxjs/toolkit";
import { ICategory, IProduct } from "../services/types";

interface ICartStore {
  cartItems?: { product: IProduct; number: number }[];
}

// Slice
const categorySlice = createSlice({
  name: "category",
  initialState: {
    cartItems: undefined,
  } as ICartStore,
  reducers: {
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    addCartItem: (state, action) => {
      let newItems = state.cartItems;
      newItems?.push(action.payload);
      state.cartItems = newItems;
    },
    removeCartItem: (state, action) => {
      let newItems = state.cartItems?.filter((item) => item.product.id !== action.payload.id);

      state.cartItems = newItems;
    },
  },
});

export const { setCategories, removeCategories } = categorySlice.actions;

export default categorySlice.reducer;
