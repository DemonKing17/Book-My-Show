import React from "react";
import ReactDOM from "react-dom/client";

import { TodoContextProvider } from "./component/context/TodoContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>
);
