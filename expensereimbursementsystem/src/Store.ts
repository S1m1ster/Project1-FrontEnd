import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Slices/UserSlice';
import reimbursementReducer from './Slices/ReimbursementSlice';

export const Store = configureStore({
    reducer: {
        user: userReducer,
        reimbursement: reimbursementReducer
        
    }
});


export type RootState = ReturnType<typeof Store.getState>;


export type AppDispatch = typeof Store.dispatch;