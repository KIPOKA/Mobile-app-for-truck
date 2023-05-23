//import the confihuration from the reduxjs/toolkit
import { configureStore } from "@reduxjs/toolkit";
// import the nav redure
import navReduser from "./slices/navSlice";
export const store = configureStore({
    //the global layer out
    reducer: {
        nav: navReduser,
    }
})