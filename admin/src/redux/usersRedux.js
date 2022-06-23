import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
   name: 'users',
   initialState: {
      users: [],
      isFetching: false,
      error: false
   },
   reducers: {
      // GET ALL
      getAllUsersStart: (state) => {
         state.isFetching = true;
         state.error = false;
      },
      getAllUsersSuccess: (state, action) => {
         state.isFetching = false;
         state.users = action.payload;
      },
      getAllUsersFailure: (state) => {
         state.isFetching = false;
         state.error = true;
      },

      deleteUserStart: (state) => {
         state.isFetching = true;
         state.error = false;
      },
      deleteUserSuccess: (state, action) => {
         state.isFetching = false;
         state.users.splice(
            state.users.findIndex((item) => item._id === action.payload),
            1
         )
      },
      deleteUserFailure: (state) => {
         state.isFetching = false;
         state.error = true;
      }
   }
})

export const { getAllUsersStart, getAllUsersSuccess, getAllUsersFailure, deleteUserStart, deleteUserSuccess, deleteUserFailure } = usersSlice.actions;

export default usersSlice.reducer;