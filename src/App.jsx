import React, { useState } from "react";

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = () => {
    if (!title || !amount) return;
    setExpenses([...expenses, { title, amount: parseFloat(amount) }]);
    setTitle("");
    setAmount("");
  };

  const deleteExpense = (i) => {
    setExpenses(expenses.filter((_, index) => index !== i));
  };

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div>
      <h3>Expense Tracker</h3>
      <input
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={addExpense}>Add</button>

      <ul>
        {expenses.map((e, i) => (
          <li key={i}>
            {e.title} - ₹{e.amount}{" "}
            <button onClick={() => deleteExpense(i)}>Delete</button>
          </li>
        ))}
      </ul>

      <h4>Total: ₹{total}</h4>
    </div>
  );
}
