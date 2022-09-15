import { createSlice } from "@reduxjs/toolkit";

const initialState = { numOfCakes: 10 };

export const cakeSlice = createSlice({
  name: "cake",

  initialState,
  reducers: {
    ordered: (state) => {
      if (state.numOfCakes != 0) state.numOfCakes -= 1;
    },
    restocked: (state, action) => {
      state.numOfCakes = action.payload;
    },
  },
});
