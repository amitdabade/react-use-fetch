# [React-use-fetch: useFetch] [![GitHub license](https://img.shields.io/github/license/amitdabade/react-use-fetch?style=flat)](https://github.com/amitdabade/react-use-fetch/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/@react-use-hooks/use-fetch?style=flat)](https://www.npmjs.com/package/@react-use-hooks/use-fetch) [![npm downloads](https://img.shields.io/npm/dm/@react-use-hooks/use-fetch?style=flat)](https://www.npmjs.com/package/@react-use-hooks/use-fetch)

## What is useFetch?

useFetch is open source reusable react custom hook for making http requests with ease and built-in configurations

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
[Storybook](https://amitdabade.github.io/react-use-fetch)

## Configurations:

**GET**
```
useFetch({
    url: "https://jsonplaceholder.typicode.com/todos/1"
  });
```

**POST**
```
useFetch({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "POST",
    body: JSON.stringify({
       "userId": 1,
       "id": 1,
       "title": "sunt aut facere",
       "body": "quia et suscipit"
    })
  });
```

**HEADERS**
```
useFetch({
    url: "https://jsonplaceholder.typicode.com/posts",
     headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
     }
  });
```

**Default Config**
```
const config = {
  delay: 0,
  retry: 0,
  refetchInterval: 0,
  refetch: Infinity,
  responseType: "text",
};

useFetch({
    url: "https://jsonplaceholder.typicode.com/posts"
  }, config);
```

**Custom Config**

[Demo](https://amitdabade.github.io/react-use-fetch/?path=/story/advance--delay)

## License:

This project is licensed under the terms of the
[MIT license](/LICENSE).
