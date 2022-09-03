import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../interfaces/interfaces";

interface InitialStateUser {
  id: string;
  username: string;
  token: string;
  isLogged: boolean;
}
const initialStateUser: InitialStateUser = {
  id: "",
  username: "",
  token: "",
  isLogged: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState: initialStateUser,
  reducers: {
    logInUser: (state, action: PayloadAction<User>) => action.payload,

    logOutUser: (state) => initialStateUser,
  },
});

const usersReducer = usersSlice.reducer;
export const {
  logInUser: logInUserActionCreator,
  logOutUser: logOutUserActionCreator,
} = usersSlice.actions;

export default usersReducer;
