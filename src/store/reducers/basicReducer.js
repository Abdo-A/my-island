//It is the reducer that has different states, except the states that needs api requests

import * as actionTypes from "../actions/actionTypes";

const initialState = {
  forcedSongOnMusicPlayer: null,
  openSignIn: false,
  openSignUp: false
};

const basicReducer = (state = initialState, action) => {
  switch (action.type) {
    //Setting a forced song on music player
    case actionTypes.SET_FORCED_SONG_ON_MUSIC_PLAYER:
      return {
        ...state,
        forcedSongOnMusicPlayer: action.songIndex
      };

    case actionTypes.OPEN_SIGN_IN:
      return {
        ...state,
        openSignIn: true
      };

    case actionTypes.CLOSE_SIGN_IN:
      return {
        ...state,
        openSignIn: false
      };

    case actionTypes.OPEN_SIGN_UP:
      return {
        ...state,
        openSignUp: true
      };

    case actionTypes.CLOSE_SIGN_UP:
      return {
        ...state,
        openSignUp: false
      };

    default:
      return state;
  }
};

export default basicReducer;
