const {createSlice} from "@reduxjs/toolkit"

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
      }
   }
})