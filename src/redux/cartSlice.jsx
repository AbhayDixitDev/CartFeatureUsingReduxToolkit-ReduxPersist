
import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart2:[]
    },
    reducers:{
        addToCart: (state,action)=>{
        let flag = false;

            state.cart2.filter((item)=>{
               if( item.id===action.payload.id     ){
                   flag = true;
               }         
        })  
        if(flag){
            message.error("item already in cart")
        }
        else{
            state.cart2.push(action.payload);
            message.success("item added Successfully")
        }

        },
        removeCart: (state,action)=>{
            state.cart2 = state.cart2.filter((item)=>{
               return item.id!==action.payload
            });    
            message.error("item removed successfully")       

        },
        increaseQuantity: (state,action)=>{
            state.cart2 = state.cart2.map((item)=>{
                if(item.id===action.payload){
                    return {...item,quantity:item.quantity+1}
                }
                return item;
            })
        },
        decreaseQuantity: (state,action)=>{
            let flag = false;
            state.cart2 = state.cart2.map((item)=>{
                if(item.id===action.payload && item.quantity==1){
                 message.error("quantity cannot be less than 1")                    
                }
                else{
                    return {...item,quantity:item.quantity-1}
                }
                return item;

            })
    }
}
})

export default cartSlice.reducer;
export const {addToCart,removeCart,increaseQuantity,decreaseQuantity} = cartSlice.actions;