import { createSlice } from "@reduxjs/toolkit";
import { logOut } from '../auth/operations';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: ""
  };

export const contactsSlice = createSlice({
        name: 'contacts',
        initialState,
        reducers: {
          onFilter: (state, action) => {
            state.filter = action.payload;
          }
        },

        extraReducers: {
          // fetch
          [fetchContacts.pending](state) {
            state.contacts.isLoading = true;
          },
          [fetchContacts.fulfilled](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items = action.payload;
          },
          [fetchContacts.rejected](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = action.payload;
          },
          // post
          [addContact.pending](state) {
            state.contacts.isLoading = true;
          },
          [addContact.fulfilled](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items.push(action.payload);
          },
          [addContact.rejected](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = action.payload;
          },
           // delete
          [deleteContact.pending](state) {
            state.contacts.isLoading = true;
          },
          [deleteContact.fulfilled](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            console.log(action.payload.id);
            const index = state.contacts.items.findIndex(
              contact => contact.id === action.payload.id
            );
            state.contacts.items.splice(index, 1);
          },
          [deleteContact.rejected](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = action.payload;
          },
          }
        })

        export const contactsReducer = contactsSlice.reducer;
        export const { onFilter } = contactsSlice.actions;