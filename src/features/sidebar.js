import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { animation: false, animation_n: false },
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    activate: (state) => {
      state.value.animation = true;
      state.value.animation_n = false;
    },
    disable: (state) => {
      state.value.animation_n = true;
      state.value.animation = false;
    },
  },
});

export const { activate, disable } = sidebarSlice.actions;
export default sidebarSlice.reducer;
