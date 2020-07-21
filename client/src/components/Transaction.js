import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {transaction.amount < 0 ? "-" : "+"} ₹{Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction._id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
