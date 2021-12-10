import React from "react";
import { storiesOf } from "@storybook/react";
import "./styles.css";

import { useFetch } from "./../use-fetch";

const stories = storiesOf("Basic", module);

stories.add("Basic", () => {
  // const { fetch, data, error, fetching, status, response } = useFetch({
  //   url: "https://jsonplaceholder.typicode.com/users/1",
  // });
  // return (
  //   <div>
  //     <h2>useFetch - Basics</h2>
  //     <button onClick={() => fetch()}>Fetch Data</button>
  //     <p>Fetching: {fetching + ""}</p>
  //     <p>Status: {status}</p>
  //     <p>Response code: {response?.status}</p>
  //     <p>Response Text: {response?.statusText}</p>
  //     <p>Data: {data && JSON.stringify(data)}</p>
  //     <p>Error: {error && error.message}</p>
  //   </div>
  // );
});
