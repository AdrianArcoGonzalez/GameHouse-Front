import { configureStore, createReducer } from "@reduxjs/toolkit";
import { Game, User } from "../interfaces/interfaces";
import { mockGameArray } from "./mockGame";

const initialUserState = {
  username: "admin",
  id: "123123123",
  isLogged: true,
  token: "123123123.123123123.1231231",
};

const initialGameState: Game[] = mockGameArray;

const initialUIState = {isLoading:true}
const userInitialState = { ...initialUserState, isLogged: true };
const gameInitialState = { ...initialGameState, mockGameArray };

const mockUserReducer = createReducer<User>(userInitialState, (builder) => {
  builder.addDefaultCase((state: User) => state);
});
const mockGameReducer = createReducer<Game[]>(gameInitialState, (builder) => {
  builder.addDefaultCase((state: Game[]) => state);
});
const mockUIReducer = createReducer(initialUIState, (builder) => {
  builder.addDefaultCase((state) => state);
});


const mockStore = configureStore({
  reducer: {
    ui: mockUIReducer,
    user: mockUserReducer,
    games: mockGameReducer,
  },
});

export default mockStore;
