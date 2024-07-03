import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./Providers/theme-provider.js";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./app/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <BrowserRouter>
        <PersistGate persistor={persistor} loading={null}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
