/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply font-sans transition-colors duration-300;
}

.dark body {
  @apply bg-gray-950 text-white;
}
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);