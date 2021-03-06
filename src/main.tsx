import React from "react";
import ReactDOM from "react-dom/client";

import { MantineProvider } from "@mantine/core";

import "./index.css";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      theme={{ fontFamily: "Roboto" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);
