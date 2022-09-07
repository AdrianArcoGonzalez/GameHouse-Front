import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Game as IGame } from "../../interfaces/interfaces";

const initialStateGames: IGame[] = [];

export const gamesSlice = createSlice({
  name: "games",
  initialState: initialStateGames,
  reducers: {
    getAllGames: (state, action: PayloadAction<IGame[]>) => [...action.payload],
    deleteGame: (state, action: PayloadAction<string>) =>
      state.filter((game) => game.id !== action.payload),
  },
});

const gamesReducer = gamesSlice.reducer;
export const {
  getAllGames: getAllGamesActionCreator,
  deleteGame: deleteGameActionCreator,
} = gamesSlice.actions;

export default gamesReducer;
