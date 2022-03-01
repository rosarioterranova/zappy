import { configureStore } from "@reduxjs/toolkit";

import propertiesReducer from "../features/propertiesSlice";

export default configureStore({
  reducer: {
    properties: propertiesReducer,
  },
});
