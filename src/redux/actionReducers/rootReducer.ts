import { createSlice } from "@reduxjs/toolkit";

export interface initialStateRoot {
  isDark: boolean;
}

const initialState: initialStateRoot = {
  isDark: false,
};
export const userSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      state.isDark = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = userSlice.actions;
export default userSlice.reducer;
