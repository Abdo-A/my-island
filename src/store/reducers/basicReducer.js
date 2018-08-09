//It is the reducer that has different states, except the states that needs api requests

import * as actionTypes from "../actions/actionTypes";

const initialState = {
  forcedSongOnMusicPlayer: null
};

const basicReducer = (state = initialState, action) => {
  switch (action.type) {
    //Setting a forced song on music player
    case actionTypes.SET_FORCED_SONG_ON_MUSIC_PLAYER:
      return {
        ...state,
        forcedSongOnMusicPlayer: action.songIndex
      };

    default:
      return state;
  }
};

export default basicReducer;
