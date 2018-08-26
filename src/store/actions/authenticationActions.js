import axios from "axios";

import { closeSignIn, closeSignUp } from "./basicActions";
import { firebaseSignInURL, firebaseSignUpURL } from "../../data/apiKeys";
import * as actions from "./";
import * as actionTypes from "./actionTypes";

//Sign in and sign up
export const authenticationSignIn = authData => {
  return (dispatch, getState) => {
    dispatch(authenticationStart());
    const data = {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    };

    axios
      .post(firebaseSignInURL, data)
      .then(response => {
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );

        localStorage.setItem("tokenId", response.data.idToken);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("userId", response.data.localId);

        dispatch(
          authenticationSuccess(response.data.idToken, response.data.localId)
        );

        dispatch(
          authenticationLogoutAfterExpirationTime(response.data.expiresIn)
        );

        dispatch(closeSignIn());

        dispatch(
          actions.fetchItems(
            getState().authentication.tokenId,
            getState().authentication.userId,
            "fullName"
          )
        );
      })
      .catch(error => {
        dispatch(authenticationFail(error.response.data.error.message));
      });
  };
};

export const authenticationSignUp = authData => {
  return (dispatch, getState) => {
    dispatch(authenticationStart());
    const data = {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    };

    axios
      .post(firebaseSignUpURL, data)
      .then(response => {
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );

        localStorage.setItem("tokenId", response.data.idToken);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("userId", response.data.localId);

        dispatch(
          authenticationSuccess(response.data.idToken, response.data.localId)
        );

        dispatch(
          authenticationLogoutAfterExpirationTime(response.data.expiresIn)
        );

        dispatch(closeSignUp());

        dispatch(
          actions.saveItem(
            { fullName: authData.fullName },
            getState().authentication.tokenId,
            response.data.localId,
            "fullName"
          )
        );
      })
      .catch(error => {
        dispatch(authenticationFail(error.response.data.error.message));
      });
  };
};

const authenticationStart = () => {
  return {
    type: actionTypes.AUTHENTICATION_START
  };
};

const authenticationSuccess = (tokenId, userId) => {
  return {
    type: actionTypes.AUTHENTICATION_SUCCESS,
    tokenId: tokenId,
    userId: userId
  };
};

const authenticationFail = error => {
  return {
    type: actionTypes.AUTHENTICATION_FAIL,
    error: error
  };
};

//log out

export const authenticationLogout = () => {
  return dispatch => {
    dispatch({ type: actionTypes.REMOVE_FULLNAME });
    dispatch(authenticationLogoutNow());
  };
};

const authenticationLogoutNow = () => {
  localStorage.removeItem("tokenId");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");

  return {
    type: actionTypes.AUTHENTICATION_LOGOUT
  };
};

//log out after expiration date

const authenticationLogoutAfterExpirationTime = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(authenticationLogout());
    }, expirationTime * 1000);
  };
};

//check state every time the page refreshes

export const authenticationCheckState = () => {
  return (dispatch, getState) => {
    const tokenId = localStorage.getItem("tokenId");
    if (!tokenId) {
      dispatch(authenticationLogout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(authenticationLogout());
      } else {
        const userId = localStorage.getItem("userId");
        dispatch(authenticationSuccess(tokenId, userId));
        dispatch(
          authenticationLogoutAfterExpirationTime(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );

        dispatch(
          actions.fetchItems(
            getState().authentication.tokenId,
            getState().authentication.userId,
            "fullName"
          )
        );
      }
    }
  };
};
