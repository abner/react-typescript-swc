import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Hello } from "./components/hello";

export function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={Hello} />
    </Router>
  );
}
