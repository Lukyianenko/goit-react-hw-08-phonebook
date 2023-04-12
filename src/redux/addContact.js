import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://642feb6eb289b1dec4bd1967.mockapi.io";

export const addContact = createAsyncThunk(
    "Contacts/addContacts",
    async (contact, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", { ...contact });
        console.log(contact);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );