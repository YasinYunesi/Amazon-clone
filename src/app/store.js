import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../features/sidebar";

export default configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});
