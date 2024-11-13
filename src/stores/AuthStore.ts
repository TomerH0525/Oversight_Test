import User from '@/models/User';
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

//for this demo ill be only saving the username and clientType in real practice it will be different
//there needs to be a token to validate the user when trying to reach backend
//and more public user information
interface AuthState {
  user: User | null;

}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers:
  //simple reducers for demo purposes
 { 
  //login saves username and clientType only for this demo.
    login: (state, action: PayloadAction<User>) => {
      console.log("store trying to update state");
      state.user = action.payload;
      console.log(state.user);
      
    },
    //logout empties the user state in the store with a null value
    logout: (state) => {
      state.user = null;
    },
  },
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;


export const authStore = configureStore({
    reducer: authSlice.reducer
})

export type RootState = ReturnType<typeof authStore.getState>
export type AppDispach = typeof authStore.dispatch