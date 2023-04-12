import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://642feb6eb289b1dec4bd1967.mockapi.io";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",

    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/contacts");
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );