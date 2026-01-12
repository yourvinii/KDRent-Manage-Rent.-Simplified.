import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isAuth: false,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.isAuth = true;
    },
    clearUser(state) {
      state.user = null;
      state.isAuth = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
