import React from "react";
import ReactDOM from "react-dom/client";
import App from "./TodoApp.tsx";
// import App from "./TableApp.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
