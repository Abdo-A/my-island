import * as actionTypes from "./actionTypes";
import axios from "axios";

///////////////////////////////////////REQUEST LOCATION///////////////////////////////////////////////
//
//
//Requesting user location info
//
//
/*1*/ export const requestUserLocationInfo = () => {
  return dispatch => {
    console.log("requestUserLocationInfo from redux");
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
/*2*/ export const setUserLocationInfo = info => {
  console.log("setUserLocationInfo from redux");

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
/*2*/ export const setUserWeatherInfo = info => {
  console.log("setUserWeatherInfo from redux");

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
