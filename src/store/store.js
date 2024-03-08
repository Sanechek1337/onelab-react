import { configureStore } from '@reduxjs/toolkit'
import { personDataSlice } from './person/personDataSlice'

export const store = configureStore({
  reducer: {
    personData: personDataSlice,
  },
})
