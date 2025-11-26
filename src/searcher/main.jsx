import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App exit={closeTab}/>
  </StrictMode>,
);

export function closeTab(){
  window.close();
}