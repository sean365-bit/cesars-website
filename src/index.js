import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Components/App";

console.log(
  "Thank you for checking my project, Please take a moment to provide your feedback."
);

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
