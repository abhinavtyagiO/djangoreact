import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const AppView = () => {
  return <App />;
};

ReactDOM.render(<AppView />, document.getElementById("root"));

reportWebVitals();
