import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import stores from "./Topics/Redux/Store/Store.js";
createRoot(document.getElementById("root")).render(
  <Provider store={stores}>
    <App />
  </Provider>
);
