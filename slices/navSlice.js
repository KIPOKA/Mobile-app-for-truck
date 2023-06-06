//create the importation of the create slice
import { createSlice } from "@reduxjs/toolkit";


// create the object of the travelling information
 const initialState= {
    origin: null,
    destination: null,
    travelTimeInformation:null
 }

 //create the slice and the data layer

 export const navSlice= createSlice({
    name: 'nav',
    initialState,
    reducer:{
        setOrigin:(state, action)=>{
            state.origin= action.payload;
        },
        setDestination:(state, action)=>{
            state.destination= action.payload;
        },
        setTravelTimeInformation:(state, action)=>{
            state.travelTimeInformation= action.payload;
        }

    }
 })

 export const{setOrigin,setDestination, setTravelTimeInformation} = navSlice.actions;

 //grab the information for the layer
 export const selectOrigin =(state) => state.nav.origin; 
 export const selectDestination =(state) => state.nav.destination; 
 export const selectTravelTimeInformation =(state) => state.nav.travelTimeInformation;

 export default navSlice.reducer;