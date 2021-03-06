// React
import React from "react";
import { createRoot } from "react-dom/client";
// Redux
import { Provider } from "react-redux";
import store from "./app/store";
// Auth0
import { Auth0Provider } from "@auth0/auth0-react";
// Components
import App from "./App";
// Styles
import "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-toastify/dist/ReactToastify.css";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);
