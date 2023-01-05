import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.error](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // addContact: {
    //   reducer(state, action) {
    //     state.push(action.payload);
    //   },
    //   prepare(name, number) {
    //     return {
    //       payload: {
    //         name,
    //         number,
    //       },
    //     };
    //   },
    // },
    // deleteContact(state, action) {
    //   const index = state.findIndex(contact => contact.id === action.payload);
    //   state.splice(index, 1);
    // },
  },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
