import { createSlice } from "@reduxjs/toolkit";

interface IUser {
	email : string
}

// Slice
const userSlice = createSlice({
	name: "user",
	initialState: {
		user:undefined ,
	} as {user?: IUser},
	reducers: {
		userLogin: (state, action) => {
			state.user = action.payload;
		},
		userLogout: (state, action) => {
			state.user = undefined;
		},
	},
});

export const { userLogin, userLogout} = userSlice.actions

export default userSlice.reducer
