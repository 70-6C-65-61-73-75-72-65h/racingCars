import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { racesData, acceptableYears, IRaceData } from "@src/constants";

const fetchRacesByYear = createAsyncThunk(
  "races/fetchRacesByYearStatus",
  async (year: string) => {
    try {
      const response = await new Promise((resolve, reject) =>
        setTimeout(
          () => resolve(racesData.filter((rd) => rd.year === year)),
          500
        )
      );
      console.log(response);

      return response;
    } catch (error) {}
  }
);

// Then, handle actions in your reducers:
const racesSlice = createSlice({
  name: "races",
  initialState: {
    maxMonthCount: null,
    raceList: null,
    loading: "idle",
    error: null,
    chosenYear: acceptableYears[acceptableYears.length - 1],
  },
  reducers: {
    setYear: (state, action) => (state.chosenYear = action.payload),
    // to make relative percatage representation
    setMaxCount: (state) => {
      state.maxMonthCount = state.raceList.reduce(
        (acum, item) => (item.count > acum ? item.count : acum),
        0
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRacesByYear.pending, (state) => {
        if (state.loading === "idle") {
          state.loading = "pending";
        }
      })
      // Add reducers for additional action types here, and handle loading state as needed
      .addCase(fetchRacesByYear.fulfilled, (state, action) => {
        // Add user to the state array
        if (state.loading === "pending") {
          state.loading = "idle";
          state.raceList = action.payload;
          racesSlice.caseReducers.setMaxCount(state);
        }
      })
      .addCase(fetchRacesByYear.rejected, (state, action) => {
        if (state.loading === "pending") {
          state.loading = "idle";
          state.error = action.error;
        }
      });
  },
});
export { fetchRacesByYear };
export const { setYear, setMaxCount } = racesSlice.actions;
export default racesSlice.reducer;
