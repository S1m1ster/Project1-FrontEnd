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
            console.log("Employee has created a ticket: ",res.data);
            return res.data;
        }
        catch(e) {
            console.log(e);
            return thunkAPI.rejectWithValue('failed to create ticket');
        }
    }
);

type reimbursementStatus = {
    id?: number,
    type: number
}

export const viewReimbursements = createAsyncThunk(
    'viewEmployeeReimbursement',
   async (credentials: reimbursementStatus, thunkAPI) => {
    try{
        if(credentials.id === undefined){
            const res = await axios.get(`http://localhost:8000/viewAllReimbursement/${credentials.type}`);
            console.log("Manager sees all reimbursement by type requested: ",res.data);
            return res.data;
        }
        else{
            const res = await axios.get(`http://localhost:8000/viewReimbursement/${credentials.id}/${credentials.type}`);
            console.log("Employee sees their reimbursements by type: ",res.data);
            return res.data;
        }
    }
    catch(e){
        console.log(e);
        return thunkAPI.rejectWithValue('failed to get reimbursements');
    }
   }
)

type employeeId = {
    id: number,
}

export const viewReimbursementsOfEmployee = createAsyncThunk(
    'viewAllOfEmployee',
   async (credentials: employeeId, thunkAPI) => {
    try{
        const res = await axios.get(`http://localhost:8000/viewAllOfEmployee/${credentials.id}`);
        console.log("Manager sees reimbursement by specific employee: ",res.data);
        return res.data;
    }
    catch(e){
        console.log(e);
        return thunkAPI.rejectWithValue("failed to get employee's reimbursements");
    }
   }
)

type status = {
    id: number,
    managerId: number,
    status: number
}

export const acceptOrDenyRequestReimbursement = createAsyncThunk(
    'acceptordenyReimbursement',
   async (credentials:status, thunkAPI) => {
    try{
        const res = await axios.patch('http://localhost:8000/approveDeny', credentials);
        console.log("Manager accepts or denies reimbursement: ",res.data);
        return res.data;
    }
    catch(e){
        console.log(e);
        return thunkAPI.rejectWithValue("failed to approve or deny request");
    }
   }
)

type reimbursementId = {
    id: number
}

export const getReimbursementsOfEmployee = createAsyncThunk(
    'getReimbursement',
   async (credentials: reimbursementId, thunkAPI) => {
    try{
        const res = await axios.get(`http://localhost:8000/getReimbursement/${credentials.id}`);
        console.log("Manager gets reimbursement by id: ",res.data);
        return res.data;
    }
    catch(e){
        console.log(e);
        return thunkAPI.rejectWithValue("failed to get employee's reimbursements");
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
        builder.addCase(viewReimbursements.pending, (state, action) => {
            state.loading = true;
        });

        builder.addCase(viewReimbursements.fulfilled, (state, action) => {
            state.tickets = action.payload;
            state.error = false;
            state.loading = false;
        });

        builder.addCase(viewReimbursements.rejected, (state, action) => {
            state.error = true;
            state.loading = false;
        });

        builder.addCase(viewReimbursementsOfEmployee.pending, (state, action) => {
            state.loading = true;
        });

        builder.addCase(viewReimbursementsOfEmployee.fulfilled, (state, action) => {
            state.tickets = action.payload;
            state.error = false;
            state.loading = false;
        });

        builder.addCase(viewReimbursementsOfEmployee.rejected, (state, action) => {
            state.error = true;
            state.loading = false;
        });

        builder.addCase(acceptOrDenyRequestReimbursement.pending, (state, action) => {
            state.loading = true;
        });

        builder.addCase(acceptOrDenyRequestReimbursement.fulfilled, (state, action) => {
            state.ticket = action.payload;
            state.error = false;
            state.loading = false;
        });

        builder.addCase(acceptOrDenyRequestReimbursement.rejected, (state, action) => {
            state.error = true;
            state.loading = false;
        });


        builder.addCase(getReimbursementsOfEmployee.pending, (state, action) => {
            state.loading = true;
        });

        builder.addCase(getReimbursementsOfEmployee.fulfilled, (state, action) => {
            state.ticket = action.payload;
            state.error = false;
            state.loading = false;
        });

        builder.addCase(getReimbursementsOfEmployee.rejected, (state, action) => {
            state.error = true;
            state.loading = false;
        });
    }

})

export const { toggleError } = ReimbursementSlice.actions;

export default ReimbursementSlice.reducer;