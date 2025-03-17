import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice"
import cartReducer from '../features/cart/cartSlice'
import wishListReducer from '../features/wishlist/wishListSlice'
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
    reducer:{
        products : productsReducer,
        cart: cartReducer,
        wishlist: wishListReducer,
        auth:authReducer,
    }
})