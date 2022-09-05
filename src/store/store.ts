import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import gamesReducer from "./slice/gamesSlice";
import usersReducer from "./slice/usersSlice";

export const store = configureStore({
  reducer: { user: usersReducer, games: gamesReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
