import React from "react";
import { storiesOf } from "@storybook/react";
import "./styles.css";

import { useFetch } from "../use-fetch";

const basicStories = storiesOf("Basic", module);
const advanceStories = storiesOf("Advance", module);

basicStories.add("Basic", () => {
  const { fetch, data, error, fetching, status, request, response } = useFetch({
    url: "https://jsonplaceholder.typicode.com/todos/1",
  });
  return (
    <div className="App">
      <h1>React-use-hooks : useFetch</h1>
      <p>Basic: with default configurations</p>
      <button onClick={() => fetch()}>Click To Fetch Data</button>
      <p>Fetching: {fetching + ""}</p>
      <p>Status: {status}</p>
      <p>Request Method: {request?.method}</p>
      <p>Request URL: {request?.url}</p>
      <p>Response code: {response?.status}</p>
      <p>Response Text: {response?.statusText}</p>
      <p>Data: {data && JSON.stringify(data)}</p>
      <p>Error: {error && error.message}</p>
    </div>
  );
});

advanceStories.add("Delay", () => {
  const { fetch, data, error, fetching, status, request, response } = useFetch(
    {
      url: "https://jsonplaceholder.typicode.com/todos/1",
    },
    { delay: 2000 }
  );
  return (
    <div className="App">
      <h1>React-use-hooks : useFetch</h1>
      <p>Advance: fetch data with additional delay</p>
      <pre>{`
      {
        delay: 2000,
      }`}</pre>
      <br />
      <p>Data will be fetched after 2000 ms delay</p>
      <button onClick={() => fetch()}>Click To Fetch Data</button>
      <p>Fetching: {fetching + ""}</p>
      <p>Status: {status}</p>
      <p>Request Method: {request?.method}</p>
      <p>Request URL: {request?.url}</p>
      <p>Response code: {response?.status}</p>
      <p>Response Text: {response?.statusText}</p>
      <p>Data: {data && JSON.stringify(data)}</p>
      <p>Error: {error && error.message}</p>
    </div>
  );
});

advanceStories.add("Refetch", () => {
  const { fetch, data, error, fetching, status, request, response } = useFetch(
    {
      url: "https://jsonplaceholder.typicode.com/todos/1",
    },
    { refetchInterval: 3000, refetch: 5 }
  );
  return (
    <div className="App">
      <h1>React-use-hooks : useFetch</h1>
      <p>Advance: refetching data after fixed interval for n number of times</p>
      <pre>{`
      {
        refetchInterval: 3000,
        refetch: 5
      }`}</pre>
      <br />
      <p>Data will be re-fetched for 5 times after equal interval of 3000 ms</p>
      <p>See 'Network' tab in developer tool for network calls</p>
      <button onClick={() => fetch()}>Click To Fetch Data</button>
      <p>Fetching: {fetching + ""}</p>
      <p>Status: {status}</p>
      <p>Request Method: {request?.method}</p>
      <p>Request URL: {request?.url}</p>
      <p>Response code: {response?.status}</p>
      <p>Response Text: {response?.statusText}</p>
      <p>Data: {data && JSON.stringify(data)}</p>
      <p>Error: {error && error.message}</p>
    </div>
  );
});

advanceStories.add("Retry", () => {
  const { fetch, data, error, fetching, status, request, response } = useFetch(
    {
      url: "https://jsonplaceholders.typicode.com/todos/1",
    },
    { retry: 3 }
  );
  return (
    <div className="App">
      <h1>React-use-hooks : useFetch</h1>
      <p>Advance: retry to fetch data for unsuccessful calls</p>
      <pre>{`
      {
        retry: 3,
      }`}</pre>
      <br />
      <p>Data will be re-fetched for 3 times if network call fails</p>
      <p>See 'Network' tab in developer tool for network calls</p>
      <button onClick={() => fetch()}>Click To Fetch Data</button>
      <p>Fetching: {fetching + ""}</p>
      <p>Status: {status}</p>
      <p>Request Method: {request?.method}</p>
      <p>Request URL: {request?.url}</p>
      <p>Response code: {response?.status}</p>
      <p>Response Text: {response?.statusText}</p>
      <p>Data: {data && JSON.stringify(data)}</p>
      <p>Error: {error && error.message}</p>
    </div>
  );
});
