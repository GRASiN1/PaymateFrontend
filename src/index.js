import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserProvider } from "./contexts/UserContext";
import { GroupProvider } from "./contexts/GroupContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <GroupProvider>
        <App />
      </GroupProvider>
    </UserProvider>
  </React.StrictMode>
);
