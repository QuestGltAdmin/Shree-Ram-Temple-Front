import { all, takeLatest } from "redux-saga/effects";

// uncomment when actions grow largee
// import * as action from "../reducers/actionLabels/reducerActionLabels";

import {
  registerSaga,
  userLoginSaga,
} from "./auth/authSaga";

// tmep
// console.log(action.getRatesSaga.type);
// console.log(action.loginSaga.type);



export function* watchAuthentication() {
  yield all([takeLatest("auth/userLoginSaga", userLoginSaga)]);
  yield all([takeLatest("auth/registerSaga", registerSaga)]);
}


