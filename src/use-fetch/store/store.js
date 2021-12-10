import { IDLE_STATUS, TEXT_TYPE } from "./../constants/constants";

export const initialState = {
  data: null,
  error: null,
  fetching: false,
  status: IDLE_STATUS,
  request: null,
  response: null,
};

export const globalConfig = {
  delay: 0,
  retry: 0,
  refetchInterval: 0,
  refetch: Infinity,
  responseType: TEXT_TYPE,
};
