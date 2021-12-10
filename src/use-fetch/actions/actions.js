import {
  UPDATE_STATUS,
  UPDATE_ON_SUCCESS,
  UPDATE_ON_ERROR,
} from "./../constants/constants";

export const updateStatus = (payload) => {
  return {
    type: UPDATE_STATUS,
    payload,
  };
};

export const updateOnSuccess = (payload) => {
  return {
    type: UPDATE_ON_SUCCESS,
    payload,
  };
};

export const updateOnError = (payload) => {
  return {
    type: UPDATE_ON_ERROR,
    payload,
  };
};
