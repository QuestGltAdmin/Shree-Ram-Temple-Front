import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"; // Fix the import statement
import authReducer from "./reducers/authReducer";
import {
  watchAuthentication,
} from "./sagas/watcherSagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});


sagaMiddleware.run(watchAuthentication);

