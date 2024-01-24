import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import { App } from "./app";
import "./style.scss";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
