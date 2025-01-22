import React from "react";
import { useNavigate } from "react-router-dom";

export default function GroupCards(props) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/groups/${props.id}`, { state: props });
  }
  return (
    <div className="border rounded-lg p-5 bg-gray-100 shadow-md w-64 text-wrap h-52">
      <h3 className="text-xl font-bold mb-2">{props.groupTitle}</h3>
      <p>{props.groupDescription}</p>
      <p>
        <span>Participants: </span>
        {props.groupMembers.join(", ")}
      </p>
      <p>
        <span>Expense: </span>
        {props.tripExpense}
      </p>
      <button
        className=" pl-2 pr-2 pt-1 pb-1 bg-black hover:bg-blue-400 hover:text-black font-pacifico text-white mt-2 text-center rounded-sm"
        onClick={handleClick}
      >
        Explore
      </button>
    </div>
  );
}
