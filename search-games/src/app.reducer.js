import { fetchUserError, fetchUserStart, fetchUserSuccess } from "./app.action";
import { createReducer } from "@reduxjs/toolkit"

const initialState ={
    result: null,
    isLoading: false,
}

const reducer = createReducer(initialState,{
    [fetchUserStart.type] : (state)=>{
        state.isLoading = true;
    },
    [fetchUserSuccess.type] : (state, action) => {
        const result = action.payload
        state.result = result;
        state.isLoading = false;
    },
    [fetchUserError.type] : (state) => {
        state.result = null;
        state.isLoading = false;
    } 
})

export default reducer;
export const mySelector = state => state.appReducer.result