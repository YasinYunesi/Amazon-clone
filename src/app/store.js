import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../features/sidebar";
import basketReducer from "../features/basket";

export default configureStore({
  reducer: {
    sidebar: sidebarReducer,
    basket: basketReducer,
  },
});
