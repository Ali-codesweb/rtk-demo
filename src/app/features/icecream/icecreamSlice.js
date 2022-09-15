import { createSlice } from "@reduxjs/toolkit";
import { cakeSlice } from "../cake/cakeSlice";

const initialState = { icecream: 20 };

export const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      if (state.icecream != 0) {
        state.icecream -= 1;
      }
    },
    restocked: (state, action) => {
      state.icecream = action.payload;
    },
  },
  // extraReducers: {
  //   ["cake/ordered"]: (state) => {
  //     state.icecream--;
  //   },
  // },
  // extraReducers: (builder) => {
  //   builder.addCase(cakeSlice.actions.ordered, (state) => {
  //     state.icecream--;
  //   });
  // },
});
