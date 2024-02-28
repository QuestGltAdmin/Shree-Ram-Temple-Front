import { put, call } from "redux-saga/effects";
import axios from "../../../http/axios/axios_main";
import { catchHandler } from "../helperSaga";

import {
  registerStart,
  registerSuccess,
  registerFail,
  userLoginStart,
  userloginSuccess,
  userLoginFail,
} from "../../reducers/authReducer";

import axiosMain from "../../../http/axios/axios_main";

function* setItemToLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

//===============================UserLoginSaga============================//
export function* userLoginSaga(action) {
  console.log("Helo Saga");
  yield put(userLoginStart());
  const {
    payload,
    navigate,
    setDisable,
    setModelMessage,
    setOpenModel,
    setRandomVal,
  } = action.payload;
  try {
    const response = yield axiosMain.post(`/login`, payload);
    if (response?.data.status) {
      yield call(setItemToLocalStorage, "isUserAuthenticated", true);

      yield call(
        setItemToLocalStorage,
        "userData",
        JSON.stringify(response.data.data)
      );
      yield call(
        setItemToLocalStorage,
        "saveprodata",
        JSON.stringify(response.data.data)
      );
      yield put(userloginSuccess(response.data.data));

      sessionStorage.setItem("jwt", "enable");

      setModelMessage("Login successful");
      setOpenModel(true);
      setRandomVal(Math.floor(Math.random() * 100 + 1));

      setTimeout(() => {
        navigate("/dashboard");
        window.location.reload();
      }, 3000);
    } else {
      setDisable(false);
      setModelMessage(response.data.message);
      setOpenModel(true);
      setRandomVal(Math.floor(Math.random() * 100 + 1));
      yield put(userLoginFail(response.data.message));
    }
  } catch (error) {
    setDisable(false);
    setModelMessage(error.response.data.message);
    setOpenModel(true);
    setRandomVal(Math.floor(Math.random() * 100 + 1));
    yield call(catchHandler, error, userLoginFail);
  }
}
//===============================End Of UserLoginSaga============================//



//===============================UserRegisterSaga============================//
export function* registerSaga(action) {
  yield put(registerStart());
  const {
    payload,
    navigate,
    setModelMessage,
    setOpenModel,
    setRandomVal,
    setDisable,
  } = action.payload;
  try {
    const response = yield axiosMain.post(`/signUp`, payload);

    if (response?.data?.status) {
      // yield call(
      //   [localStorage, "setItem"],
      //   "signupData",
      //   JSON.stringify(response.data.data)
      // );
      setModelMessage("Signup success. Please verify your otp!");
      setOpenModel(true);
      setRandomVal(Math.floor(Math.random() * 100 + 1));
      setTimeout(() => {
        navigate("/sign-up-otp", { state: { email: payload.email } });
      }, 3000);
      yield put(registerSuccess(response.data.data));
    } else {
      setDisable(false);
      setModelMessage("Somthing went wrong..");
      setOpenModel(true);
      setRandomVal(Math.floor(Math.random() * 100 + 1));
      yield put(registerFail("Something went wrong! Please try again."));
    }
  } catch (error) {
    setDisable(false);
    console.log(error);
    setModelMessage(error.response.data.message);
    setOpenModel(true);
      setRandomVal(Math.floor(Math.random() * 100 + 1));
    yield call(catchHandler, error, registerFail);
  }
}
//===============================End Of UserRegisterSaga============================//