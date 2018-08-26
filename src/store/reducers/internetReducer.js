//It is the reducer that has the states that needs api requests

import * as actionTypes from "../actions/actionTypes";

const initialState = {
  numberOfMassiveAPIRequests: 0,
  userCountryName: null,
  userCountryCode: null,
  userCityName: null,
  userCityWeather: null,
  seriousNews: null,
  sillyNews: null,
  randomComic: null,
  loadingComic: false,

  latestNews: null,
  latestNewsSports: null,
  latestNewsTechnology: null,
  latestNewsNature: null,

  myCountryNews: null,
  myCountryNewsSports: null,
  myCountryNewsTechnology: null,
  myCountryNewsBusiness: null
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
      if (action.newsType === "sports") {
        return {
          ...state,
          latestNewsSports: action.news
        };
      } else if (action.newsType === "technology") {
        return {
          ...state,
          latestNewsTechnology: action.news
        };
      } else if (action.newsType === "nature") {
        return {
          ...state,
          latestNewsNature: action.news
        };
      } else {
        return {
          ...state,
          latestNews: action.news
        };
      }

    //
    //MyCountry NEWS
    //
    case actionTypes.SET_MYCOUNTRY_NEWS:
      if (action.newsType === "sports") {
        return {
          ...state,
          myCountryNewsSports: action.news
        };
      } else if (action.newsType === "technology") {
        return {
          ...state,
          myCountryNewsTechnology: action.news
        };
      } else if (action.newsType === "business") {
        return {
          ...state,
          myCountryNewsBusiness: action.news
        };
      } else {
        return {
          ...state,
          myCountryNews: action.news
        };
      }

    //
    //MASSIVE REQUESTS COUNT (to make sure we only make one massive request)
    //
    case actionTypes.INCREMENT_MASSIVE_REQUESTS_COUNT:
      return {
        ...state,
        numberOfMassiveAPIRequests: state.numberOfMassiveAPIRequests + 1
      };

    default:
      return state;
  }
};

export default internetReducer;
