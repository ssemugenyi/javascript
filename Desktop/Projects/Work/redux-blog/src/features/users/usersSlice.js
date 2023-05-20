import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const initialState = [
  //   { id: 0, name: "Isaac mukisa" },
  //   { id: 1, name: "Isaac ssemugenyi" },
  //   { id: 2, name: "Shanita Mukisa" },
  //   { id: 3, name: "ssemugenyi Mukisa" },
];

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  try {
    const response = await axios.get(USERS_URL);
    return [...response.data];
  } catch (err) {
    return err.message;
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (stste, action) => {
      return action.payload;
    });
  },
});
export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
