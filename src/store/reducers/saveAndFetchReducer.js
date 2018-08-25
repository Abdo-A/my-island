import * as actionTypes from "../actions/actionTypes";
import { capitalize } from "../../data/universalFunctions/stringRelatedFunctions";

const initialState = {
  notes: null,
  loadingSavingNotes: false,
  errorSavingNotes: null,
  loadingFetchingNotes: false,
  errorFetchingNotes: null,
  LoadingDeletingNotes: false,
  errorDeletingNotes: null,

  drawings: null,
  loadingSavingDrawings: false,
  errorSavingDrawings: false,
  loadingFetchingDrawings: false,
  errorFetchingDrawings: null,
  LoadingDeletingDrawings: false,
  errorDeletingDrawings: null
};

const saveAndFetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_ITEM_START:
      return {
        ...state,
        ["loadingSaving" + capitalize(action.itemType)]: true, //ex:loadingSavingNotes
        ["errorSaving" + capitalize(action.itemType)]: null //ex:errorSavingNotes
      };

    case actionTypes.SAVE_ITEM_SUCCESS:
      //let item = { ...action.itemData, id: action.id };
      return {
        ...state,
        //[action.itemType]: [item, ...state[action.itemType]],
        ["loadingSaving" + capitalize(action.itemType)]: false,
        ["errorDeleting" + capitalize(action.itemType)]: null
      };

    case actionTypes.SAVE_ITEM_FAIL:
      return {
        ...state,
        ["loadingSaving" + capitalize(action.itemType)]: false,
        ["errorSaving" + capitalize(action.error)]: action.error
      };

    case actionTypes.FETCH_ITEMS_START:
      return {
        ...state,
        [action.itemType]: null,
        ["loadingFetching" + capitalize(action.itemType)]: true, //ex:loadingFetchingNotes
        ["errorFetching" + capitalize(action.itemType)]: null //ex:errorFetchingNotes
      };

    case actionTypes.FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        [action.itemType]: action.items,
        ["loadingFetching" + capitalize(action.itemType)]: false,
        ["errorFetching" + capitalize(action.itemType)]: null
      };

    case actionTypes.FETCH_ITEMS_FAIL:
      return {
        ...state,
        ["loadingFetching" + capitalize(action.itemType)]: false,
        ["errorFetching" + capitalize(action.error)]: action.error
      };

    case actionTypes.DELETE_ITEM_START:
      return {
        ...state,
        ["loadingDeleting" + capitalize(action.itemType)]: true, //ex:loadingDeletingNotes
        ["errorDeleting" + capitalize(action.itemType)]: null //ex:errorDeletingNotes
      };

    case actionTypes.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        ["loadingDeleting" + capitalize(action.itemType)]: false,
        ["errorDeleting" + capitalize(action.itemType)]: null
      };

    case actionTypes.DELETE_ITEM_FAIL:
      return {
        ...state,
        ["loadingDeleting" + capitalize(action.itemType)]: false,
        ["errorDeleting" + capitalize(action.error)]: action.error
      };

    default:
      return state;
  }
};

export default saveAndFetchReducer;
