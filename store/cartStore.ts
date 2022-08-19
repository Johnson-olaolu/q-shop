import { createSlice } from "@reduxjs/toolkit";
import { ICategory, IProduct } from "../services/types";

interface ICartStore {
  cartItems: { product: IProduct; number: number }[];
}

// Slice
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
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
    updateCartItem: (state, action) => {
      let newItems = state.cartItems;
      const itemToUpdate = action.payload;
      const itemToUpdateIndex = newItems?.findIndex((i) => i.product.id === itemToUpdate.product.id);
      newItems?.splice(itemToUpdateIndex as number, 1, itemToUpdate);
      state.cartItems = newItems;
    },
    removeCartItem: (state, action) => {
      let newItems = state.cartItems?.filter((item) => item.product.id !== action.payload.id);
      console.log(action.payload);
      console.log(newItems);
      state.cartItems = newItems;
    },
    clearCartItems: (state) => {
      state.cartItems = [];
    },
  },
});

export const { setCartItems, addCartItem, removeCartItem, clearCartItems, updateCartItem } = cartSlice.actions;

export default cartSlice.reducer;
