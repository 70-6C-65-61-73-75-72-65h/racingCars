import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { racesSheduled } from "@src/constants";

const fetchScheduledRaces = createAsyncThunk(
  "races/fetchScheduledRacesStatus",
  async (_, thunkAPI) => {
    const response = await new Promise((resolve, reject) =>
      setTimeout(() => resolve(racesSheduled), 500)
    );
    console.log(response);

    return response;
  }
);

// Then, handle actions in your reducers:
const scheduledRaces = createSlice({
  name: "races",
  initialState: { scheduledRaces: null, loading: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchScheduledRaces.pending, (state) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    });
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchScheduledRaces.fulfilled, (state, action) => {
      // Add user to the state array
      if (state.loading === "pending") {
        state.loading = "idle";
        state.scheduledRaces = action.payload;
      }
    });

    builder.addCase(fetchScheduledRaces.rejected, (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.error = action.error;
      }
    });
  },
});
console.log(scheduledRaces.actions);
export { fetchScheduledRaces };
// export const { increment, decrement, incrementByAmount } = racesSlice.actions;
export default scheduledRaces;
// dispatch(fetchUserById(123));
