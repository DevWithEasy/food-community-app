import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : 'auth',
    initialState : {
        isAuth : false,
        user : {},
    },
    reducers : {
        addAuth : (state,action)=>{
            state.isAuth = true;
            state.user = action.payload
        },
        removeAuth : (state,action)=>{
            state.isAuth = false;
            state.user = {}
        }
    }
})

export const {addAuth,removeAuth} = authSlice.actions
export default authSlice.reducer