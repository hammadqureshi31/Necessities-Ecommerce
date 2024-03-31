import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/addToCartSlice'
import profileSlice from "./slices/profileSlice";

export const store = configureStore({
    reducer:{
        cart: cartReducer,
        profile: profileSlice
    }
})