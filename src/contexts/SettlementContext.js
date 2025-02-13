import { createContext, useContext, useState } from "react";

const SettlementContext = createContext();

export const SettlementProvider = ({ children }) => {
  const [settlements, setSettlements] = useState([]);

  const calculateSettlements = (groupId, expenses, users) => {
    // Create balance sheet
    const balances = {};
    users.forEach(user => {
      balances[user._id] = { userId: user._id, name: user.name, balance: 0 };
    });

    // Calculate net balance for each user
    expenses.forEach(expense => {
      // Add amount to payer's balance
      balances[expense.paidBy._id].balance += expense.amount;
      
      // Subtract split amount from each participant
      const splitAmount = expense.amount / expense.participants.length;
      expense.participants.forEach(participant => {
        balances[participant._id].balance -= splitAmount;
      });
    });

    // Separate creditors and debtors
    const positiveBalances = Object.values(balances)
      .filter(b => b.balance > 0)
      .sort((a, b) => b.balance - a.balance);
    
    const negativeBalances = Object.values(balances)
      .filter(b => b.balance < 0)
      .sort((a, b) => a.balance - b.balance);

    // Generate settlements
    const settlements = [];
    let i = 0, j = 0;

    while (i < positiveBalances.length && j < negativeBalances.length) {
      const creditor = positiveBalances[i];
      const debtor = negativeBalances[j];
      
      const amount = Math.min(creditor.balance, Math.abs(debtor.balance));
      
      if (amount > 0) {
        settlements.push({
          from: debtor,
          to: creditor,
          amount: Math.round(amount * 100) / 100
        });
      }

      creditor.balance -= amount;
      debtor.balance += amount;

      if (Math.abs(creditor.balance) < 0.01) i++;
      if (Math.abs(debtor.balance) < 0.01) j++;
    }

    return settlements;
  };

  return (
    <SettlementContext.Provider value={{ settlements, calculateSettlements, setSettlements }}>
      {children}
    </SettlementContext.Provider>
  );
};

export const useSettlements = () => {
  const context = useContext(SettlementContext);
  if (!context) {
    throw new Error("useSettlements must be used within a SettlementProvider");
  }
  return context;
};