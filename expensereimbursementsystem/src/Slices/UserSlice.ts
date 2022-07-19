import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from '../Interfaces/IUser';
import axios from 'axios';

interface UserSliceState{
    loading: boolean;
    error: boolean;
    user?: IUser;
    users?: IUser[];
    isLoggedIn?: boolean;
    currentProfile?: IUser;
}

const initialUserState: UserSliceState = {
    loading: false,
    error: false,
    isLoggedIn: false
};


type Login = {
    email: string;
    password: string;
};

let userData:any;

export const loginUser = createAsyncThunk(
    'login',
    async (credentials: Login, thunkAPI) => {
        try {
            const res = await axios.post('http://localhost:8000/login', credentials);
            userData = res.data;
            console.log("User has logged in: ",res.data);
            return {
                userId: res.data.userId,
                username: res.data.username,
                password: res.data.password,
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                email: res.data.email,
                userPair_role: res.data.userPair_role,
            }
        }
        catch (e) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    }
);

type UpdateAccount = {
    userId?: number,
    username?: string,
    password?: string,
    firstName?: string,
    lastName?: string,
    email?: string,
}

export const updateUser = createAsyncThunk(
    'update',
   async (credentials: UpdateAccount, thunkAPI) => {
    try{
        const res = await axios.patch('http://localhost:8000/updateAccount', credentials);
        console.log("User has updated account: ",res.data);
        return res.data;
    }
    catch(e){
        console.log(e);
        return thunkAPI.rejectWithValue('updating user failed');
    }
    
   }
);

export const getEmployees = createAsyncThunk(
    'getEmployees',
    async (thunkAPI) => {
        try {
            const res = await axios.get('http://localhost:8000/viewEmployees');
            console.log("manager view all employees: ",res.data);
            return res.data;
        }
        catch (e) {
            return console.log("Failed to get users");
        }
    }
);



export const logout = createAsyncThunk(
    "/logout",
   async (thunkAPI) => {
    try{
        console.log("User has logged out");
    } catch(e){
        console.log(e);
    }
   }
);



export const UserSlice = createSlice({
    name: 'user',
    initialState: initialUserState,

    reducers: {
        toggleError: (state) => {
            state.error = !state.error;
        },
    },

    extraReducers: (checkState) => {
        checkState.addCase(loginUser.pending, (state, action) => {
            state.loading = true;
        });

        checkState.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.error = false;
            state.loading = false;
            state.isLoggedIn = true;
        });

        checkState.addCase(loginUser.rejected, (state, action) => {
            state.error = true;
            state.loading = false;
        });

        checkState.addCase(updateUser.pending, (state, action) => {
            state.loading = true;
        });

        checkState.addCase(updateUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.error = false;
            state.loading = false;
            state.isLoggedIn = true;
        });

        checkState.addCase(updateUser.rejected, (state, action) => {
            state.error = true;
            state.loading = false;
        });

        checkState.addCase(logout.fulfilled, (state, action) => {
            state.user = undefined;
            state.isLoggedIn = false;
        });

        checkState.addCase(getEmployees.pending, (state, action) => {
            state.loading = true;
        });

        checkState.addCase(getEmployees.fulfilled, (state, action) => {
            state.users = action.payload;
            state.error = false;
            state.loading = false;
            state.isLoggedIn = true;
        });

        checkState.addCase(getEmployees.rejected, (state, action) => {
            state.error = true;
            state.loading = false;
        });
    }
})

export const { toggleError } = UserSlice.actions;

export default UserSlice.reducer;