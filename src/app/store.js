import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { cakeSlice } from "./features/cake/cakeSlice";
import { icecreamSlice } from "./features/icecream/icecreamSlice";
import { createLogger } from "redux-logger";
import { userSlice } from "./features/user/userSlice";

const logger = createLogger();

const store = configureStore({
  reducer: {
    cake: cakeSlice.reducer,
    icecream: icecreamSlice.reducer,
    user: userSlice.reducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
