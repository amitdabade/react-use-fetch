import { useEffect, useReducer, useRef, useContext } from "react";
import { reducer } from "./../reducer/reducer";
import {
  updateOnSuccess,
  updateOnError,
  updateStatus,
} from "./../actions/actions";
import { initialState } from "./../store/store";
import { parseResponse } from "./../utils/utils";
import { GlobalConfig } from "./../context/context";
import {
  ABORT_STATUS,
  ERROR_STATUS,
  FETCHING_STATUS,
  SUCCESS_STATUS,
} from "./../constants/constants";
import { UseFetchProvider } from "./../context/context";

const useFetch = (options, userConfig) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const globalConfig = useContext(GlobalConfig);

  const config = useRef({
    refetch: userConfig?.refetch ?? globalConfig.refetch,
    retry: userConfig?.retry ?? globalConfig.retry,
    responseType: userConfig?.responseType ?? globalConfig.responseType,
    delay: userConfig?.delay ?? globalConfig.delay,
    refetchInterval:
      userConfig?.refetchInterval ?? globalConfig.refetchInterval,
  });

  const refetchState = useRef(0);
  const retryState = useRef(0);
  const delayTimer = useRef(null);
  const refetchTimer = useRef(null);
  let abortController = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(delayTimer.current);
      clearInterval(refetchTimer.current);
    };
  }, []);

  const fetchData = async (options) => {
    let request = null,
      response = null,
      data = null;
    dispatch(updateStatus({ fetching: true, status: FETCHING_STATUS }));
    abortController.current = new AbortController();
    try {
      request = new Request(options.url, {
        signal: abortController.current.signal,
        ...options,
      });
      response = await fetch(request);
      data = await parseResponse(response, config.current.responseType);
      try {
        data = JSON.parse(data);
      } catch (error) {}

      dispatch(
        updateOnSuccess({
          fetching: false,
          status: SUCCESS_STATUS,
          data,
          error: null,
          request,
          response,
        })
      );
    } catch (error) {
      if (retryState.current === config.current.retry) {
        dispatch(
          updateOnError({
            fetching: false,
            status: error?.message.includes("aborted")
              ? ABORT_STATUS
              : ERROR_STATUS,
            data: null,
            error,
            request,
            response,
          })
        );
        return;
      }
      callFetchData(options, config);
      retryState.current++;
    }
  };

  const callFetchData = (options, config) => {
    if (
      config.current.refetchInterval !== 0 ||
      config.current.refetch !== Infinity
    ) {
      fetchData(options, config);
      refetchTimer.current = setInterval(() => {
        if (refetchState.current === config.current.refetch) {
          clearInterval(refetchTimer.current);
          return;
        }
        fetchData(options, config);
        refetchState.current++;
      }, config.current.refetchInterval);

      return;
    }

    if (config.current.delay) {
      delayTimer.current = setTimeout(() => {
        fetchData(options, config);
      }, config.current.delay);
      return;
    }

    fetchData(options, config);
    return;
  };

  const abortFetchData = () => {
    abortController.current.abort();
  };

  return {
    ...state,
    fetch: callFetchData.bind(this, options, config),
    abort: abortFetchData,
  };
};

export default useFetch;
export { useFetch, UseFetchProvider };
