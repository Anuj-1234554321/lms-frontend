import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
import {toast} from 'react-hot-toast';
import axiosInstance from '../../Helpers/axiosInstance'
const initialState = {
    isLoggedIn: localStorage.getItem('token') || false,
    role: localStorage.getItem('role') || "",
    data: localStorage.getItem('data') || {}
};

export const createAccount = createAsyncThunk("/auth/signup",async(data)=>{
       try
       {
        const res = axiosInstance.Post("user/register",data);
        toast.promise(res,{
            loading:"Wait! for create your Account",
            success : (data)=>{
                return data?.data?.message;
            },
            error:"Failed to create Account"
        })

       }
       catch(error)
       {
        toast.error(error?.response?.data?.message)
       }
})


const authSlice = createSlice({

    name: 'auth',
    initialState,
    reducers:{},

});


//export const  {} = authSlice.actions;
export default authSlice.reducer;