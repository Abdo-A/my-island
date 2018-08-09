import * as actionTypes from "./actionTypes";

export const setForcedSongOnMusicPlayer = songIndex => {
  return {
    type: actionTypes.SET_FORCED_SONG_ON_MUSIC_PLAYER,
    songIndex: songIndex
  };
};
