//It is the reducer that has the states that needs api requests

import * as actionTypes from "../actions/actionTypes";

const initialState = {
  userCountryName: null,
  userCountryCode: null,
  userCityName: null,
  userCityWeather: null
};

const internetReducer = (state = initialState, action) => {
  switch (action.type) {
    //
    //Setting user location
    //
    case actionTypes.SET_USER_LOCATION_INFO:
      return {
        ...state,
        userCountryName: action.userCountryName,
        userCountryCode: action.userCountryCode,
        userCityName: action.userCityName
      };

    //
    //Setting user weather
    //
    case actionTypes.SET_USER_WEATHER_INFO:
      return {
        ...state,
        userCityWeather: action.info
      };

    default:
      return state;
  }
};

export default internetReducer;
