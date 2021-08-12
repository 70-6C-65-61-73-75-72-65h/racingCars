import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { racesData } from "@src/constants";

const fetchRacesByYear = createAsyncThunk(
  "races/fetchRacesByYearStatus",
  async (year: string, thunkAPI) => {
    const response = await new Promise((resolve, reject) =>
      setTimeout(() => resolve(racesData.filter((rd) => rd.year === year)), 500)
    );
    console.log(response);

    return response;
  }
);

// Then, handle actions in your reducers:
const racesSlice = createSlice({
  name: "races",
  initialState: { races: null, loading: "idle", error: null, chosenYear: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRacesByYear.pending, (state) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    });
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchRacesByYear.fulfilled, (state, action) => {
      // Add user to the state array
      if (state.loading === "pending") {
        state.loading = "idle";
        state.races = action.payload;
      }
    });

    builder.addCase(fetchRacesByYear.rejected, (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.error = action.error;
      }
    });
  },
});
export { fetchRacesByYear };
export default racesSlice.reducer;
