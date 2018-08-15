import * as actionTypes from "../actions/actionTypes";

const initialState = {
  authenticated: false,
  tokenId: null,
  userId: null,
  authenticationError: null,
  authenticationLoading: false
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTHENTICATION_START:
      return {
        ...state,
        authenticated: false,
        authenticationError: null,
        authenticationLoading: true
      };

    case actionTypes.AUTHENTICATION_SUCCESS:
      return {
        ...state,
        authenticated: true,
        tokenId: action.tokenId,
        userId: action.userId,
        authenticationError: null,
        authenticationLoading: false
      };

    case actionTypes.AUTHENTICATION_FAIL:
      console.log(action.error);
      return {
        ...state,
        authenticated: false,
        authenticationError: action.error,
        authenticationLoading: false
      };

    case actionTypes.AUTHENTICATION_LOGOUT:
      return {
        ...state,
        authenticated: false,
        tokenId: null,
        userId: null
      };

    default:
      return state;
  }
};

export default authenticationReducer;
