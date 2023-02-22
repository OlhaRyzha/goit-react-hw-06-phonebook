import { createSlice } from '@reduxjs/toolkit';
import { CONTACTS } from 'components/App';
import storage from 'helpers/storage';

const initialState = {
  contacts: storage.load('contacts-list') ?? CONTACTS,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    setContacts(state, action) {
      state.contacts = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setContacts, setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
