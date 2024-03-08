import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  surname: "",
  phone: "",
};

export const personDataSlice = createSlice({
  name: "personData",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setSurname: (state, action) => {
      state.surname = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
  },
});

export const { setName, setSurname, setPhone } = personDataSlice.actions;

export default personDataSlice.reducer;
