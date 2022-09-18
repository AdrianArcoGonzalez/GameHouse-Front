import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import gamesReducer from "./slice/gamesSlice";
import UIReducer from "./slice/uiSlice";
import usersReducer from "./slice/usersSlice";

export const store = configureStore({
  reducer: { user: usersReducer, games: gamesReducer, ui:UIReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
