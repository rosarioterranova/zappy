import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProperties = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const res = await fetch(
      "https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties"
    );
    const data = await res.json();
    return data;
  }
);

const propertiesSlice = createSlice({
  name: "properties",
  initialState: {
    fetchPropertiesRequest: {
      status: "idle",
      error: "null",
    },
    propertiesData: [],
    propertiesFiltered: [],
  },
  reducers: {
    filterProperties(state, action) {},
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProperties.pending, (state, action) => {
        state.fetchPropertiesRequest.status = "pending";
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.propertiesData = action.payload;
        state.propertiesFiltered = action.payload;
        state.fetchPropertiesRequest.status = "fulfilled";
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.fetchPropertiesRequest.status = "rejected";
      });
  },
});

export const { filterProperties } = propertiesSlice.actions;

export default propertiesSlice.reducer;

export const selectPropertiesData = (state) => state.properties.propertiesData;
export const selectPropertiesFiltered = (state) =>
  state.properties.propertiesFiltered;
