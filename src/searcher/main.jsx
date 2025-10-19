import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./main.css";

// createRoot(document.getElementById("root")!).render( //* contiene 'non-null assertions' TS
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
