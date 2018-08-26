import * as actionTypes from "./actionTypes";
import axiosDatabase from "../../axios";

//Saving the item

export const saveItem = (itemData, tokenId, userId, itemType) => {
  return dispatch => {
    dispatch(saveItemStart(itemType));

    let data = {
      ...itemData,
      userId: userId
    };

    axiosDatabase
      .post(`/${itemType}.json?auth=${tokenId}`, data)
      .then(response => {
        dispatch(saveItemSuccess(data, itemType));
        dispatch(fetchItems(tokenId, userId, itemType));
      })
      .catch(error => {
        dispatch(saveItemFail(error, itemType));
      });
  };
};

const saveItemStart = itemType => {
  return {
    type: actionTypes.SAVE_ITEM_START,
    itemType: itemType
  };
};

const saveItemSuccess = (itemData, itemType) => {
  return {
    type: actionTypes.SAVE_ITEM_SUCCESS,
    itemData: itemData,
    itemType: itemType
  };
};

const saveItemFail = (error, itemType) => {
  return {
    type: actionTypes.SAVE_ITEM_FAIL,
    error: error,
    itemType: itemType
  };
};

//Fetching the items

export const fetchItems = (tokenId, userId, itemType) => {
  return dispatch => {
    console.log("fetchItems");
    dispatch(fetchItemsStart(itemType));
    const queryParams = `?auth=${tokenId}&orderBy="userId"&equalTo="${userId}"`;
    axiosDatabase
      .get(`/${itemType}.json` + queryParams)
      .then(response => {
        const fetchedItems = [];
        for (let key in response.data) {
          fetchedItems.unshift({
            ...response.data[key],
            id: key
          });
        }
        dispatch(fetchItemsSuccess(fetchedItems, itemType));
      })
      .catch(error => {
        dispatch(fetchItemsFail(error, itemType));
      });
  };
};

const fetchItemsStart = itemType => {
  return {
    type: actionTypes.FETCH_ITEMS_START,
    itemType: itemType
  };
};

const fetchItemsSuccess = (items, itemType) => {
  return {
    type: actionTypes.FETCH_ITEMS_SUCCESS,
    items: items,
    itemType: itemType
  };
};

const fetchItemsFail = error => {
  return {
    type: actionTypes.FETCH_ITEMS_FAIL,
    error: error
  };
};

//Deleting the item

export const deleteItem = (itemData, tokenId, userId, itemType) => {
  return dispatch => {
    dispatch(deleteItemStart(itemType));

    axiosDatabase
      .delete(`/${itemType}/${itemData.id}.json?auth=${tokenId}`)
      .then(response => {
        dispatch(deleteItemSuccess(itemData, itemType));
        dispatch(fetchItems(tokenId, userId, itemType));
        console.log("Deleted successfully");
      })
      .catch(error => {
        dispatch(deleteItemFail(error, itemType));
        console.log("error deleting", error);
      });
  };
};

const deleteItemStart = itemType => {
  return {
    type: actionTypes.DELETE_ITEM_START,
    itemType: itemType
  };
};

const deleteItemSuccess = (itemData, itemType) => {
  return {
    type: actionTypes.DELETE_ITEM_SUCCESS,
    itemData: itemData,
    itemType: itemType
  };
};

const deleteItemFail = (error, itemType) => {
  return {
    type: actionTypes.DELETE_ITEM_FAIL,
    error: error,
    itemType: itemType
  };
};

//Instructions:
//itemType property should be a plural
