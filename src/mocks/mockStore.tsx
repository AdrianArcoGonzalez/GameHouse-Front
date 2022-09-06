import { configureStore, createReducer } from "@reduxjs/toolkit";
import { Game, User } from "../interfaces/interfaces";
import { mockGameArray } from "./mockGame";

const initialUserState = {
  username: "",
  id: "",
  isLogged: true,
  token: "",
};

const initialGameState: Game[] = mockGameArray;

const userInitialState = { ...initialUserState, isLogged: true };
const gameInitialState = { ...initialGameState, mockGameArray };

const mockUserReducer = createReducer<User>(userInitialState, (builder) => {
  builder.addDefaultCase((state: User) => state);
});
const mockGameReducer = createReducer<Game[]>(gameInitialState, (builder) => {
  builder.addDefaultCase((state: Game[]) => state);
});

const mockStore = configureStore({
  reducer: {
    user: mockUserReducer,
    game: mockGameReducer,
  },
});

export default mockStore;