import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/reset.css";
import ThemeWrapper from "./components/ThemeWrapper";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeWrapper>
    <App />
  </ThemeWrapper>
);
