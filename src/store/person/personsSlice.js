import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  personsList: [],
};

export const personsSlice = createSlice({
  name: 'persons',
  initialState,
  reducers: {
    addPerson: (state, action) => {
      state.personsList.push({ ...action.payload, id: uuidv4() });
    },
    removePerson: (state, action) => {
      state.personsList = state.personsList.filter(
        (person) => person.id !== action.payload.id
      );
    },
  },
});

export const { addPerson, removePerson } = personsSlice.actions;

export default personsSlice.reducer;
