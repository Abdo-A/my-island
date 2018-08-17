import * as actionTypes from "./actionTypes";
import * as internetActions from "./internetActions";

export * from "./basicActions";

export * from "./internetActions";

export * from "./authenticationActions";

export * from "./saveAndFetchActions";

export const requestEverythingFromInternet = () => {
  return dispatch => {
    dispatch(
      internetActions.requestUserLocationInfoAndRequestUserWeatherInfo()
    );
    dispatch(internetActions.requestSeriousNews());
    dispatch(internetActions.requestSillyNews());
    dispatch(internetActions.requestQuote());
    dispatch(internetActions.requestComic());
    dispatch(internetActions.requestLatestNews());
    dispatch(internetActions.requestUserLocationInfoAndRequestMyCountryNews());

    dispatch(incrementMassiveRequestsCount());
  };
};

const incrementMassiveRequestsCount = () => {
  return {
    type: actionTypes.INCREMENT_MASSIVE_REQUESTS_COUNT
  };
};
