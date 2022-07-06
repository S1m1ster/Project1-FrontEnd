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
            //axios.defaults.withCredentials = true;
            const res = await axios.post('http://localhost:8000/login', credentials);
            userData = res.data;
            console.log(res.data)
            return {
                userId: res.data.userId,
                username: res.data.username,
                password: res.data.password,
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                email: res.data.email,
                role: res.data.userPair_role.roleId
            }
        }
        catch (e) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    }
);

export const logout = createAsyncThunk(
    "/logout",
   async (thunkAPI) => {
    
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

        checkState.addCase(logout.fulfilled, (state, action) => {
            state.user = undefined;
            state.isLoggedIn = false;
        });
    }
})

export const { toggleError } = UserSlice.actions;

export default UserSlice.reducer;