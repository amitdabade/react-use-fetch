import React from "react";

export const Hello = (props) => {
  const { name } = props;
  return (
    <div>
      <h1>Hello, {name || "World"}!</h1>
    </div>
  );
};
