import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserProvider } from "./contexts/UserContext";
import { GroupProvider } from "./contexts/GroupContext";
import { ExpenseProvider } from "./contexts/ExpenseContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <GroupProvider>
      <ExpenseProvider>
        <App />
      </ExpenseProvider>
    </GroupProvider>
  </UserProvider>
);
