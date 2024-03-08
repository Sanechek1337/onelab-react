import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  persons: [],
}

export const personsSlice = createSlice({
  name: 'persons',
  initialState,
  reducers: {
    addPerson: (state, action) => {
      state.persons.push(action.payload)
    },
    removePerson: (state, action) => {
      state.persons = state.persons.filter(
        (person) =>
          person.name !== action.payload.name &&
          person.surname !== action.payload.surname &&
          person.phone !== action.payload.phone
      )
    },
  },
})

export const { addPerson, removePerson } = personsSlice.actions

export default personsSlice.reducer
