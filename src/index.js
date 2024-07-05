import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import getStore from "./store/getStore";

import "./sass/app.scss";
import Calendar from "./pages/Calendar";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
const store = getStore();

root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Calendar />
    </ReduxProvider>
  </React.StrictMode>
);
reportWebVitals();
