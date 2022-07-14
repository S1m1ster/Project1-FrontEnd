import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IReimbrusement } from '../Interfaces/IReimbursement';
import axios, { responseEncoding } from 'axios';


interface ReimbursementSliceState{
    loading: boolean,
    error: boolean,
    isPending?: boolean,
    ticket?: IReimbrusement,
    tickets?: IReimbrusement[]
   

}

const initialReimbursementState: ReimbursementSliceState = {
    loading: false,
    error: false,
    isPending: true
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

type reimbursementStatus = {
    id: number,
    type: number
}
const id = 2;
const type = 1;
export const viewEmployeeReimbursements = createAsyncThunk(
    'viewEmployeeReimbursement',
   async (credentials: reimbursementStatus, thunkAPI) => {
    try{
        const res = await axios.get(`http://localhost:8000/viewReimbursement/${credentials.id}/${credentials.type}`);
        return res.data;
    }
    catch(e){
        console.log(e);
        return thunkAPI.rejectWithValue('failed to get reimbursements');
    }
   }
)

export const ReimbursementSlice = createSlice({
    name: 'reimbursement',
    initialState: initialReimbursementState,

    reducers: {
        toggleError: (state) => {
            state.error = !state.error;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(viewEmployeeReimbursements.pending, (state, action) => {
            state.loading = true;
        });

        builder.addCase(viewEmployeeReimbursements.fulfilled, (state, action) => {
            state.tickets = action.payload;
            state.error = false;
            state.loading = false;
        });

        builder.addCase(viewEmployeeReimbursements.rejected, (state, action) => {
            state.error = true;
            state.loading = false;
        });
    }

})

export const { toggleError } = ReimbursementSlice.actions;

export default ReimbursementSlice.reducer;