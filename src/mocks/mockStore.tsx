import { configureStore, createReducer } from "@reduxjs/toolkit";
import { User } from "../interfaces/interfaces";

const initialUserState = {
  username: "",
  id: "",
  isLogged: true,
  token: "",
};

const userInitialState = { ...initialUserState, isLogged: true };

const mockUserReducer = createReducer<User>(userInitialState, (builder) => {
  builder.addDefaultCase((state: User) => state);
});

const mockStore = configureStore({
  reducer: {
    user: mockUserReducer,
  },
});

export default mockStore;
