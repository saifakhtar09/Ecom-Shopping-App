import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartItems",
  initialState: {
    cartItems: [],
    totalCount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push({ ...action.payload, count: 1 });
      state.totalCount += 1;
      state.totalPrice += action.payload.price;
    },
    increaseCount: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.count += 1;
        state.totalPrice += item.price;
      }
    },
    decreaseCount: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item && item.count > 0) {
        item.count -= 1;
        state.totalPrice -= item.price;
        if (item.count === 0) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload
          );
          state.totalCount -= 1;
        }
      }
    },
    removeFromCart: (state, action) => {
      
     

      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
     
      
      state.totalPrice -=  action.payload.count * action.payload.price;
      state.totalCount -= 1;
    },
    clearCart:(state,action) =>{
      state.cartItems = [];
      state.totalCount= 0;
      state.totalPrice=0;
    }
  },
});

export const { addToCart, removeFromCart, increaseCount, decreaseCount,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
