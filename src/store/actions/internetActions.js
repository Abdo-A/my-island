import axios from "axios";

import { newsApiKey } from "../../data/apiKeys";
import * as actionTypes from "./actionTypes";

///////////////////////////////////////REQUEST LOCATION///////////////////////////////////////////////
//
//
//Requesting user location info
//
//
/*1*/ export const requestUserLocationInfo = () => {
  return dispatch => {
    axios
      .get("https://geoip-db.com/json/")
      .then(res => {
        const info = {
          userCountryName: res.data.country_name,
          userCountryCode: res.data.country_code,
          userCityName: res.data.city
        };
        dispatch(setUserLocationInfo(info));
      })

      .catch(err => {
        console.log(err);
      });
  };
};

//
//
//Setting user location info
//
//
/*2*/ const setUserLocationInfo = info => {
  return {
    type: actionTypes.SET_USER_LOCATION_INFO,
    ...info
  };
};

///////////////////////////////////////REQUEST WEATHER///////////////////////////////////////////////

//
//
//Requesting weather for user city
//
//
/*1*/ export const requestUserWeatherInfo = userCityName => {
  return dispatch => {
    axios
      .get(
        `//api.openweathermap.org/data/2.5/weather?APPID=6db884c885d37b28b2a29b1aa5fa3609&q=${userCityName}&units=metric`
      )
      .then(res => {
        const info = {
          temp: res.data.main.temp,
          description: res.data.weather[0].description
        };
        dispatch(setUserWeatherInfo(info));
      });
  };
};

//
//
//Setting weather for user city
//
//
/*2*/ const setUserWeatherInfo = info => {
  return {
    type: actionTypes.SET_USER_WEATHER_INFO,
    info: info
  };
};

///////////////////////////////////////REQUEST LOCATION AND WEATHER///////////////////////////////////////////////

//
//
//Request user location info then request weather for user city
//
//
export const requestUserLocationInfoAndRequestUserWeatherInfo = () => {
  return dispatch => {
    axios
      .get("https://geoip-db.com/json/")
      .then(res => {
        const info = {
          userCountryName: res.data.country_name,
          userCountryCode: res.data.country_code,
          userCityName: res.data.city
        };
        dispatch(setUserLocationInfo(info));

        axios
          .get(
            `//api.openweathermap.org/data/2.5/weather?APPID=6db884c885d37b28b2a29b1aa5fa3609&q=${
              res.data.city
            }&units=metric`
          )
          .then(res => {
            const info = {
              temp: res.data.main.temp,
              description: res.data.weather[0].description
            };
            dispatch(setUserWeatherInfo(info));
          });
      })

      .catch(err => {
        console.log(err);
      });
  };
};

///////////////////////////////////////REQUEST SERIOUS NEWS///////////////////////////////////////////////

//
//
//Requesting serious news
//
//
/*1*/ export const requestSeriousNews = () => {
  return dispatch => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?sources=abc-news,bbc-news,google-news,business-insider&language=en&apiKey=${newsApiKey}`
      )
      .then(res => {
        dispatch(setSeriousNews(res.data.articles[0]));
      })

      .catch(err => {
        console.log(err);
      });
  };
};

//
//
//Setting serious news
//
//
/*2*/ const setSeriousNews = info => {
  return {
    type: actionTypes.SET_SERIOUS_NEWS,
    news: info
  };
};

///////////////////////////////////////REQUEST SILLY NEWS///////////////////////////////////////////////

//
//
//Requesting silly news
//
//
/*1*/ export const requestSillyNews = () => {
  return dispatch => {
    axios
      .get(
        `https://newsapi.org/v2/everything?sources=buzzfeed&language=en&apiKey=${newsApiKey}`
      )
      .then(res => {
        dispatch(setSillyNews(res.data.articles[0]));
      })

      .catch(err => {
        console.log(err);
      });
  };
};

//
//
//Setting silly news
//
//
/*2*/ const setSillyNews = info => {
  return {
    type: actionTypes.SET_SILLY_NEWS,
    news: info
  };
};

///////////////////////////////////////REQUEST QUOTE///////////////////////////////////////////////

//
//
//Requesting quote
//
//
/*1*/ export const requestQuote = () => {
  return dispatch => {
    axios
      .get(
        `https://cors.io/?http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback`
      )
      .then(res => {
        const quote = JSON.parse(res.data.substring(16, res.data.length - 2));
        dispatch(setQuote(quote));
      })

      .catch(err => {
        console.log(err);
      });
  };
};

//
//
//Setting quote
//
//
/*2*/ const setQuote = info => {
  return {
    type: actionTypes.SET_QUOTE,
    quote: info
  };
};

///////////////////////////////////////REQUEST RANDOM COMIC///////////////////////////////////////////////

//
//
//Requesting random comic
//
//
/*1*/ export const requestComic = () => {
  return dispatch => {
    dispatch(setLoadingComic(true));

    const randomNumber = Math.floor(Math.random() * 2028) + 26;

    axios
      .get(`https://cors.io/?https://xkcd.com/${randomNumber}/info.0.json`)
      .then(response => {
        let comic = {
          title: response.data.title,
          text: response.data.transcript,
          alt: response.data.alt,
          img: response.data.img
        };

        dispatch(setComic(comic));

        dispatch(setLoadingComic(false));
      });
  };
};

//
//
//Setting random comic
//
//
/*2*/ const setComic = info => {
  return {
    type: actionTypes.SET_RANDOM_COMIC,
    comic: info
  };
};

//
//
//Setting loading comic
//
//
/*3*/ const setLoadingComic = info => {
  return {
    type: actionTypes.SET_LOADING_COMIC,
    loadingComic: info //true or false
  };
};
