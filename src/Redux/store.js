import {configureStore} from '@reduxjs/toolkit';
import authSliceReducer from './Slices/authSlice.js';

const store = configureStore({
    reduces:{
        auth:authSliceReducer,
    },
    devTools: true
})

export default store;