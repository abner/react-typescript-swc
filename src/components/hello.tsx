import * as React from "react";
//import * as ReactDOM from "react-dom";

export function Hello() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>You clicked {count} times!</p>
      <button onClick={() => setCount(count + 3)}>Click me</button>
    </div>
  );
}
