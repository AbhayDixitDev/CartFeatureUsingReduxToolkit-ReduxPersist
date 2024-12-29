
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart2:[]
    },
    reducers:{
        addToCart: (state,action)=>{
            state.cart2.push(action.payload);
        },
        removeCart: (state,action)=>{
            state.cart2 = state.cart2.filter((item)=>{
               return item.id!==action.payload
            });           

        }
    }
})

export default cartSlice.reducer;
export const {addToCart,removeCart} = cartSlice.actions;