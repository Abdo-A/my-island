import * as actionTypes from "./actionTypes";

export const setForcedSongOnMusicPlayer = songIndex => {
  return {
    type: actionTypes.SET_FORCED_SONG_ON_MUSIC_PLAYER,
    songIndex: songIndex
  };
};

export const openSignIn = songIndex => {
  return {
    type: actionTypes.OPEN_SIGN_IN
  };
};

export const closeSignIn = songIndex => {
  return {
    type: actionTypes.CLOSE_SIGN_IN
  };
};

export const openSignUp = songIndex => {
  return {
    type: actionTypes.OPEN_SIGN_UP
  };
};

export const closeSignUp = songIndex => {
  return {
    type: actionTypes.CLOSE_SIGN_UP
  };
};
