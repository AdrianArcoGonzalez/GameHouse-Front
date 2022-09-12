import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../interfaces/interfaces";
import initialState from "../../utils/initialState";

interface InitialStateUser {
  id: string;
  username: string;
  token: string;
  isLogged: boolean;
}
const emptyUser: InitialStateUser = {
  id: "",
  username: "",
  token: "",
  isLogged: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState: initialState() as User,
  reducers: {
    logInUser: (state, action: PayloadAction<User>) => action.payload,

    logOutUser: (state) => emptyUser,
  },
});

const usersReducer = usersSlice.reducer;
export const {
  logInUser: logInUserActionCreator,
  logOutUser: logOutUserActionCreator,
} = usersSlice.actions;

export default usersReducer;
