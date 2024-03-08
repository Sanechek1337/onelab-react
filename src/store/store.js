import { configureStore } from '@reduxjs/toolkit';
import { personsSlice } from './person/personsSlice';

export const store = configureStore({
  reducer: {
    persons: personsSlice,
  },
});
