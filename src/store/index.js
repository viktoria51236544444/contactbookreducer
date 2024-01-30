import { configureStore } from "@reduxjs/toolkit";
import contactRedusers from "./ContactSlice";
export default configureStore({
  reducer: {
    contacts: contactRedusers,
  },
});
