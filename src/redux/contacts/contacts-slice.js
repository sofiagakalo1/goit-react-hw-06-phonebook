import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = [];

const contactsSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addContact: {
      reducer: (state, { payload }) => [...state, payload],
      prepare: newContact => {
        return {
          payload: {
            ...newContact,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact: (state, { payload }) =>
      state.filter(item => item.id !== payload),
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
