import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishListItems: [],
    totalCount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToWishList: (state, action) => {
      state.wishListItems.push({ ...action.payload, count: 1 });
      state.totalCount += 1;
      state.totalPrice += action.payload.price;
    },

   
    removeFromWishList: (state, action) => {
      // Remove item by filtering it out
      state.wishListItems = state.wishListItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.totalCount -= 1;
    },
  },
});

export const {  addToWishList, removeFromWishList } = wishListSlice.actions;
export default wishListSlice.reducer;
