import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./redux/cartSlice"
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistedReducer = persistReducer({key:"root",storage},cartSlice)

const store = configureStore({
    reducer:{
        cart:persistedReducer
    }
})

const persistor = persistStore(store); 

export {persistor};
export default store;
