import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserProvider } from "./contexts/UserContext";
import { GroupProvider } from "./contexts/GroupContext";
import { ExpenseProvider } from "./contexts/ExpenseContext";
import { SettlementProvider } from "./contexts/SettlementContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <GroupProvider>
      <ExpenseProvider>
        <SettlementProvider>
        <App />
        </SettlementProvider>
      </ExpenseProvider>
    </GroupProvider>
  </UserProvider>
);
