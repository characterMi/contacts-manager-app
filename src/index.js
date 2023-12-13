import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App";

import "./index.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);
