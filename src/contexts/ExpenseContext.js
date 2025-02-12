import { createContext, useContext, useEffect, useState } from "react";
import { api, END_POINTS } from "../services/api";
import { useGroups } from "./GroupContext";

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const { groups, fetchGroups } = useGroups();
  const [allExpenses, setAllExpenses] = useState(() => {
    return JSON.parse(localStorage.getItem("expenses")) || [];
  });
  useEffect(() => {
    if (groups.length > 0) {
      getAllExpenses();
    }
  }, [groups.length, allExpenses]);
  async function getAllExpenses() {
    const token = localStorage.getItem("authToken");
    try {
      const response = await api.get(END_POINTS.GET_EXPENSES, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data.success) {
        setAllExpenses(response.data.data.allExpenses);
        localStorage.setItem(
          "expenses",
          JSON.stringify(response.data.data.allExpenses)
        );
      } else {
        throw new Error(response.data.error);
      }
    } catch (error) {
      console.log(error);
    }
  }
  function getExpensesOfGroup(groupId) {
    return allExpenses.filter((expense) => expense.expenseOf === groupId);
  }
  async function createExpense(expense, groupId) {
    const token = localStorage.getItem("authToken");
    try {
      const response = await api.post(
        END_POINTS.CREATE_EXPENSE,
        { expense, groupId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.data.success) {
        const newExpense = response.data.data.savedExpense;
        setAllExpenses((prevAllExpenses) => {
          const updatedAllExpenses = [...prevAllExpenses, newExpense];
          localStorage.setItem("expenses", JSON.stringify(updatedAllExpenses));
          return updatedAllExpenses;
        });
        await fetchGroups();
      } else {
        throw new Error(response.data.error);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ExpenseContext.Provider
      value={{ allExpenses, getAllExpenses, getExpensesOfGroup, createExpense }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpense = () => {
  const context = useContext(ExpenseContext);
  if (!context)
    throw new Error("useExpense must be used within an ExpenseProvider");
  return context;
};
