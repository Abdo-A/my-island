//It is the reducer that has the states that needs api requests

import * as actionTypes from "../actions/actionTypes";

const initialState = {
  userCountryName: null,
  userCountryCode: null,
  userCityName: null,
  userCityWeather: null,
  seriousNews: null,
  sillyNews: null,
  randomComic: null,
  loadingComic: false,
  latestNews: null,
  myCountryNews: null
};

const internetReducer = (state = initialState, action) => {
  switch (action.type) {
    //
    //LOCATION
    //
    case actionTypes.SET_USER_LOCATION_INFO:
      return {
        ...state,
        userCountryName: action.userCountryName,
        userCountryCode: action.userCountryCode,
        userCityName: action.userCityName
      };

    //
    //WEATHER
    //
    case actionTypes.SET_USER_WEATHER_INFO:
      return {
        ...state,
        userCityWeather: action.info
      };

    //
    //SERIOUS NEWS
    //
    case actionTypes.SET_SERIOUS_NEWS:
      return {
        ...state,
        seriousNews: action.news
      };

    //
    //SILLY NEWS
    //
    case actionTypes.SET_SILLY_NEWS:
      return {
        ...state,
        sillyNews: action.news
      };

    //
    //QUOTE
    //
    case actionTypes.SET_QUOTE:
      return {
        ...state,
        quote: action.quote
      };

    //
    //COMIC
    //
    case actionTypes.SET_RANDOM_COMIC:
      return {
        ...state,
        randomComic: action.comic
      };
    case actionTypes.SET_LOADING_COMIC:
      return {
        ...state,
        loadingComic: action.loadingComic
      };

    //
    //LATEST NEWS
    //
    case actionTypes.SET_LATEST_NEWS:
      return {
        ...state,
        latestNews: action.news
      };

    //
    //MyCountry NEWS
    //
    case actionTypes.SET_MYCOUNTRY_NEWS:
      return {
        ...state,
        myCountryNews: action.news
      };

    default:
      return state;
  }
};

export default internetReducer;
