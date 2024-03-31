import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: 'profile',
    initialState: { loginuser: false },
    reducers: {
        userProfile: (state, action) => {
            const { loginuser } = action.payload;
            state.loginuser = loginuser;
        }
    }
});

export const { userProfile } = profileSlice.actions;
export default profileSlice.reducer;
