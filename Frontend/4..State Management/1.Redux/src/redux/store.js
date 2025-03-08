import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter/counterSlice';
import { productsApi } from "./service/dummyData";
import { setupListeners } from "@reduxjs/toolkit/query";
export const store = configureStore({
    reducer:{
        //give any name to intial key
        counter: counterReducer,
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(productsApi.middleware),

});
setupListeners(store.dispatch);