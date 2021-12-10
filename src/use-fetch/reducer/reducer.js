import {
  UPDATE_STATUS,
  UPDATE_ON_SUCCESS,
  UPDATE_ON_ERROR,
} from "./../constants/constants";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_STATUS:
      return {
        ...state,
        fetching: action.payload.fetching,
        status: action.payload.status,
      };

    case UPDATE_ON_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        error: action.payload.error,
        fetching: action.payload.fetching,
        status: action.payload.status,
        request: action.payload.request,
        response: action.payload.response,
      };

    case UPDATE_ON_ERROR:
      return {
        ...state,
        data: action.payload.data,
        error: action.payload.error,
        fetching: action.payload.fetching,
        status: action.payload.status,
        request: action.payload.request,
        response: action.payload.response,
      };

    default:
      return { ...state };
  }
};
