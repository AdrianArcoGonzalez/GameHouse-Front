import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game as IGame } from "../../interfaces/interfaces";

interface InitialStateGames {
  games: IGame[];
}
const initialStateGames: InitialStateGames = {
  games: [],
};

export const gamesSlice = createSlice({
  name: "games",
  initialState: initialStateGames,
  reducers: {
    getAllGames: (state, action: PayloadAction) => action.payload,
  },
});

const gamesReducer = gamesSlice.reducer;
export const { getAllGames: getAllGamesActionCreator } = gamesSlice.actions;

export default gamesReducer;
