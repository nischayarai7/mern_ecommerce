// main.jsx or index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MyContextProvider from "./context/MyContext"; // ✅ update path as needed

ReactDOM.createRoot(document.getElementById("root")).render(
  <MyContextProvider>
    <App />
  </MyContextProvider>
);
