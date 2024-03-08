import { configureStore } from '@reduxjs/toolkit';
import personReducer from './person/personsSlice';

export const store = configureStore({
  reducer: {
    persons: personReducer,
  },
});
