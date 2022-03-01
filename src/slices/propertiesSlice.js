import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { ROOM_TYPES, REQUEST_STATUS } from "../helpers/constants";

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
      status: REQUEST_STATUS.IDLE,
      error: "null",
    },
    propertiesData: [],
    propertiesFiltered: [],
    typeFiltersDefault: true,
    availableFilterDefault: true,
    typeFilters: ROOM_TYPES.map((type) => ({ label: type, value: false })),
    availableFilter: false,
  },
  reducers: {
    filterProperties(state, action) {
      let dataFilteredResult = [...state.propertiesData];

      //Filter on Types
      if (!state.typeFiltersDefault) {
        const typesToFilter = state.typeFilters
          .filter((filter) => filter.value === true)
          .map((filter) => filter.label);
        dataFilteredResult = dataFilteredResult.filter((property) =>
          typesToFilter.includes(property.type)
        );
      }

      //Filter propertiesFiltered on Availability
      if (!state.availableFilterDefault) {
        dataFilteredResult = dataFilteredResult.filter(
          (property) => property.available === state.availableFilter
        );
      }

      state.propertiesFiltered = dataFilteredResult;
    },
    updateTypeFilters(state, action) {
      state.typeFiltersDefault = false;
      state.typeFilters = action.payload;
    },
    updateAvailableFilter(state, action) {
      state.availableFilterDefault = false;
      state.availableFilter = action.payload;
    },
    resetFilters(state, action) {
      state.propertiesFiltered = state.propertiesData;
      state.typeFiltersDefault = true;
      state.availableFilterDefault = true;
      state.typeFilters = ROOM_TYPES.map((type) => ({
        label: type,
        value: false,
      }));
      state.availableFilter = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProperties.pending, (state, action) => {
        state.fetchPropertiesRequest.status = REQUEST_STATUS.PENDING;
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.propertiesData = action.payload;
        state.propertiesFiltered = action.payload;
        state.fetchPropertiesRequest.status = REQUEST_STATUS.FULFILLED;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.fetchPropertiesRequest.status = REQUEST_STATUS.REJECTED;
      });
  },
});

export const {
  filterProperties,
  updateTypeFilters,
  updateAvailableFilter,
  resetFilters,
} = propertiesSlice.actions;

export default propertiesSlice.reducer;

export const selectFetchPropertiesRequest = (state) =>
  state.properties.fetchPropertiesRequest;
export const selectPropertiesData = (state) => state.properties.propertiesData;
export const selectPropertiesFiltered = (state) =>
  state.properties.propertiesFiltered;
export const selectTypeFilters = (state) => state.properties.typeFilters;
export const selectAvailableFilter = (state) =>
  state.properties.availableFilter;
