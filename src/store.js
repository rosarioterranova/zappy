import { configureStore } from "@reduxjs/toolkit";

import propertiesReducer from "./slices/propertiesSlice";

export default configureStore({
  reducer: {
    properties: propertiesReducer,
  },
});
