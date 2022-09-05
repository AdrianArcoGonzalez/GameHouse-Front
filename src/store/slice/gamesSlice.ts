import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game as IGame } from "../../interfaces/interfaces";

const initialStateGames: IGame[] = [];

export const gamesSlice = createSlice({
  name: "games",
  initialState: initialStateGames,
  reducers: {
    getAllGames: (state, action: PayloadAction<IGame[]>) => [...action.payload],
  },
});

const gamesReducer = gamesSlice.reducer;
export const { getAllGames: getAllGamesActionCreator } = gamesSlice.actions;

export default gamesReducer;
