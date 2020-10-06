import { createAction } from "@reduxjs/toolkit";

export const fetchUserStart = createAction('app/fetchUserStart', name=>{
    return {payload:name}
});
export const fetchUserSuccess = createAction('app/fetchUserSuccess', result=>{
    return {payload:result}
});
export const fetchUserError = createAction('app/fetchUserError', ()=>{
    return { payload:null}
});
