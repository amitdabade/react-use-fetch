# [React-use-fetch: useFetch] [![GitHub license](https://img.shields.io/github/license/amitdabade/react-use-fetch?style=flat)](https://github.com/amitdabade/react-use-fetch/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/@react-use-hooks/use-fetch?style=flat)](https://www.npmjs.com/package/@react-use-hooks/use-fetch)

## What is useFetch?

React hook to fetch data from network, with some additional awesome features.

## Installation:

```
npm i @react-use-hooks/use-fetch
````

## Code:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { useFetch } from "@react-use-hooks/use-fetch";

function App() {
   const { fetch, data, error, fetching, status, request, response } = useFetch({
    url: "https://jsonplaceholder.typicode.com/todos/1"
   });
   return (
    <div className="App">
      <h1>React-use-hooks : useFetch</h1>
      <button onClick={() => fetch()}>Fetch Data</button>
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
}

ReactDOM.render(<App />, document.getElementById('root'));
```

## Demo:

[Demo](https://codesandbox.io/s/github/amitdabade/react-use-fetch-demo)

## Options:

url : _string_

## License:

This project is licensed under the terms of the
[MIT license](/LICENSE).
