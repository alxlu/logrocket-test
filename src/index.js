import LogRocket from "logrocket";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
LogRocket.init("7ncwfr/reduxtest");

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
