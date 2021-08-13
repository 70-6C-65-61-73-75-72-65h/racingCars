// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// // import { userAPI } from "./userAPI";
// import regeneratorRuntime from "regenerator-runtime";

// // First, create the thunk
// const fetchUserById = createAsyncThunk("users/fetch", async (userId) => {
//   // const response = await new Promise((resolve, reject) =>
//   //   setTimeout(() => resolve(userId), 300)
//   // );
//   return userId;
// });

// // Then, handle actions in your reducers:
// const usersSlice = createSlice({
//   name: "users",
//   initialState: { entities: [], loading: "idle" },
//   reducers: {
//     // standard reducer logic, with auto-generated action types per reducer
//   },
//   extraReducers: (builder) => {
//     // Add reducers for additional action types here, and handle loading state as needed
//     builder.addCase(fetchUserById.fulfilled, (state, action) => {
//       // Add user to the state array
//       state.entities.push(action.payload);
//     });
//   },
// });

// export { fetchUserById };
// export default usersSlice.reducer;
// // Later, dispatch the thunk as needed in the app
// // dispatch(fetchUserById(123));
