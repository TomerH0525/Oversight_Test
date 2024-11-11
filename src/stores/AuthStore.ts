import User from '@/models/User';
import { configureStore, createSlice } from '@reduxjs/toolkit';

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers:
 { 
    login(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const { login, logout   
 } = authSlice.actions;

const authStore = configureStore({
  reducer: authSlice.reducer
});

export default authStore;
export type RootState = ReturnType<typeof authStore.getState>;   

export type AppDispatch = typeof authStore.dispatch;