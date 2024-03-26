import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem: (state,action)=>{
            state.push(action.payload)
        },
        deleteItem: (state, action) => {
            const { id } = action.payload;
            return state.filter(item => item.id !== id);
        }
    }
})

export const { addItem } = cartSlice.actions
export const { deleteItem } = cartSlice.actions 
export default cartSlice.reducer;