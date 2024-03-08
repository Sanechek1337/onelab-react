import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personsList: [],
};

export const personsSlice = createSlice({
  name: 'persons',
  initialState,
  reducers: {
    addPerson: (state, action) => {
      state.personsList.push(action.payload);
    },
    removePerson: (state, action) => {
      state.personsList = state.personsList.filter(
        (person) =>
          person.name !== action.payload.name ||
          person.surname !== action.payload.surname ||
          person.phoneNumber !== action.payload.phoneNumber
      );
    },
  },
});

export const { addPerson, removePerson } = personsSlice.actions;

export default personsSlice.reducer;
