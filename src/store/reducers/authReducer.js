import { createSlice } from "@reduxjs/toolkit";

const isAuthenticated = localStorage.getItem("isAuthenticated");
const isUserAuthenticated = localStorage.getItem("isUserAuthenticated");

const userData = localStorage.getItem("userData");

const signupData = localStorage.getItem("signupData");
const proupdatedata = localStorage.getItem("saveprodata");
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    isAuthenticated: !!isAuthenticated ? true : false,
    isUserAuthenticated: !!isUserAuthenticated ? true : false,
    user: !!userData ? JSON.parse(userData) : {},
    proupdate: !!proupdatedata ? JSON.parse(proupdatedata) : {},
    signupData: !!signupData ? JSON.parse(signupData) : {},
    authToken: "",
    errorMsg: "",
  },

  reducers: {
    loginSaga: (state, action) => {
      return { ...state };
    },

    userLoginSaga: (state, action) => {
      console.log("hello redu");
      return { ...state };
    },
    userLoginStart: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },

    userloginSuccess: (state, action) => {
      // console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isUserAuthenticated: true,
        user: action.payload,
        userRole: action.payload.user_role,
        authToken: action.payload.token,
      };
    },
    userLoginFail: (state, action) => {
      return {
        ...state,
        isLoading: false,
        isUserAuthenticated: false,
        user: {},
        errorMsg: action.payload,
      };
    },

    saveprofiledata: (state, action) => {
      // console.log(action.payload , "data yha tak aa rha h");
      return {
        ...state,
        isLoading: false,
        isUserAuthenticated: true,
        proupdate : action.payload
      };
    },

    logout: (state) => {
      localStorage.clear();
      return {
        ...state,
        isLoading: false,
        isUserAuthenticated: false,
        isAuthenticated: false,
        user: {},
        errorMsg: "",
        studentDetails: {},
        cartData: {},
        parentsDetails: {},
        delhiveryAdd: {},
        resultDetails: {},
        cognitiveResultData: {},
      };
    },

    registerSaga: (state, action) => {
      return { ...state };
    },

    registerStart: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },

    registerSuccess: (state, action) => {
      return {
        ...state,
        isLoading: false,
        signupData: action.payload,
        errorMsg: "",
      };
    },
    registerFail: (state, action) => {
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        signupData: {},
        errorMsg: action.payload,
      };
    },

    setUserdata: (state, action) => {
      localStorage.setItem("userData", JSON.stringify(action.payload));
      return {
        ...state,
        userData: action.payload,
      };
    },
  },
});

export const {
  setUserdata,
  logout,
  registerSaga,
  registerSuccess,
  registerStart,
  registerFail,
  userLoginSaga,
  userLoginStart,
  userloginSuccess,
  userLoginFail,
  saveprofiledata,
} = authSlice.actions;

export default authSlice.reducer;
