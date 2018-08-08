import * as actionTypes from "./actions";

const initialState = {
  userCountryName: null,
  userCountryCode: null,
  userCityName: null,
  forcedSongOnMusicPlayer: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_LOCATION_INFO:
      return {
        ...state,
        userCountryName: action.userCountryName,
        userCountryCode: action.userCountryCode,
        userCityName: action.userCityName
      };

    case actionTypes.SET_FORCED_SONG_ON_MUSIC_PLAYER:
      return {
        ...state,
        forcedSongOnMusicPlayer: action.songIndex
      };

    default:
      return state;
  }
};

export default reducer;
