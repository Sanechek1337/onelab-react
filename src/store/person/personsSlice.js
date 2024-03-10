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
    editPerson: (state, action) => {
      state.personsList = state.personsList.map((person) =>
        person.id === action.payload.id
          ? { ...person, ...action.payload }
          : person
      );
    },
  },
});

export const { addPerson, removePerson, editPerson } = personsSlice.actions;

export default personsSlice.reducer;
