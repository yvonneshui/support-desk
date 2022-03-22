import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

//register 
export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
			console.log(user)
    } catch (error) {

    }
  }
)
//login
export const login = createAsyncThunk(
  'auth/login',
  async (user, thunkAPI) => {
    try {
			console.log(user)
    } catch (error) {

    }
  }
)
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
	extraReducers: (builder) => {}
})

export default authSlice.reducer
