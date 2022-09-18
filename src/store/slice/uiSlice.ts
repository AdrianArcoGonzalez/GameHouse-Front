import { createSlice } from "@reduxjs/toolkit";

interface InitialStateUI {
  isLoading: boolean;
}
export const initialStateUI: InitialStateUI = {
  isLoading: false,
};

export const UISlice = createSlice({
  name: "users",
  initialState: initialStateUI,
  reducers: {
    isLoading: (state) => ({ ...state, isLoading: !state.isLoading }),
  },
});

const UIReducer = UISlice.reducer;
export const { isLoading: isLoadingActionCreator } = UISlice.actions;

export default UIReducer;
