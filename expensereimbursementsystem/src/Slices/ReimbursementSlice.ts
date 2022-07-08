import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IReimbrusement } from '../Interfaces/IReimbursement';
import axios from 'axios';

interface ReimbursementSliceState{
    loading: boolean,
    error: boolean,
    ticket?: IReimbrusement,
    myPending?: IReimbrusement[],
    myResolved?: IReimbrusement[],
    allPending?: IReimbrusement[],
    allResolved?: IReimbrusement[]

}

const initialReimbursementState: ReimbursementSliceState = {
    loading: false,
    error: false
};

type createTicket = {
    id: number,
    amount: number,
    description: string,
    type: number
}

export const createTicket = createAsyncThunk(
    'createTicket',
    async (credentials: createTicket, thunkAPI) => {
        try{
            const res = await axios.post('http://localhost:8000/create', credentials);
            return res.data;
        }
        catch(e) {
            console.log(e);
            return thunkAPI.rejectWithValue('failed to create ticket');
        }
    }
);

export const ReimbursementSlice = createSlice({
    name: 'reimbursement',
    initialState: initialReimbursementState,

    reducers: {
        toggleError: (state) => {
            state.error = !state.error;
        },
    }

})

export const { toggleError } = ReimbursementSlice.actions;

export default ReimbursementSlice.reducer;