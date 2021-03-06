<<<<<<< HEAD
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
=======
import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isFetching: false,
    error: false,
    notifyAdd: false,
    notifyUpdate: true,
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
      );
    },
    deleteUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateUserSuccess: (state, action) => {
      state.isFetching = false;
      state.users[
        state.users.findIndex((user) => user._id === action.payload.id)
      ] = action.payload.user;
      state.notifyUpdate = true;
    },
    updateUserEnd: (state) => {
      state.notifyUpdate = false;
    },
    updateUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    addUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addUserSuccess: (state, action) => {
      state.isFetching = false;
      state.users.push(action.payload);
      state.notifyAdd = true;
    },
    addUserEnd: (state) => {
      state.notifyAdd = false;
    },
    addUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getAllUsersStart,
  getAllUsersSuccess,
  getAllUsersFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  updateUserEnd,
  addUserFailure,
  addUserEnd,
  addUserStart,
  addUserSuccess,
} = usersSlice.actions;

export default usersSlice.reducer;
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
