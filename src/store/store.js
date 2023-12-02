import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "../slice/ListContactSlice"
import themeSlice from "../slice/ThemeSlice";
export default configureStore({
  reducer: {
    listContact: contactSlice,
    theme: themeSlice
  }
})

