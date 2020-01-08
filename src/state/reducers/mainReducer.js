// All Actions
import * as types from "../types";

// Initial State
const initialState = {
  fetchingData: false,
  isLoggedIn: false,
  addNewEx: false,
  error: "",
  id: "",
  data: []
};

// Reducer
const mainReducer = (state = initialState, action) => {
  console.log("STATE CHANGES", state);
  console.log("payload", action.payload);
  switch (action.type) {
    case types.REGISTER_START:
      return {
        ...state,
        fetchingData: true
      };

    case types.REGISTER_SUCCESS:
      return {
        ...state,
        fetchingData: false
      };

    case types.REGISTER_FAIL:
      return {
        error: action.payload
      };

    case types.LOGIN_START:
      return {
        ...state,
        fetchingData: true
      };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        isLoggedIn: true,
        id: action.id
      };

    case types.LOGIN_FAIL:
      return {
        ...state,
        fetchingData: false,
        isLoggedIn: false,
        error: action.payload
      };

    case types.LOGOUT:
      return {
        ...state,
        fetchingData: false,
        isLoggedIn: false,
        id: ""
      };

    case types.NEW_EXERSIZE_START:
      return {
        ...state,
        addNewEx: true
      };

    case types.NEW_EXERSIZE_SUCCESS:
      return {
        ...state,
        addNewEx: false,
        data: [...state.data, action.payload],
        error: ""
      };

    case types.NEW_EXERSIZE_FAIL:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default mainReducer;
