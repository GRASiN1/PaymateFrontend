import React from "react";
import GroupCards from "./groupCards";

export default function GroupList() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ">
      <div
        id="defaultCard"
        className="bg-gray-100 rounded-xl p-4 w-80 h-52 shadow-md border flex justify-center items-center cursor-pointer"
        onClick={() => {
          alert("Cliked");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={70}
          viewBox="0 -960 960 960"
          fill="#434343"
        >
          <path d="M453-280h60v-166h167v-60H513v-174h-60v174H280v60h173v166Zm27.27 200q-82.74 0-155.5-31.5Q252-143 197.5-197.5t-86-127.34Q80-397.68 80-480.5t31.5-155.66Q143-709 197.5-763t127.34-85.5Q397.68-880 480.5-880t155.66 31.5Q709-817 763-763t85.5 127Q880-563 880-480.27q0 82.74-31.5 155.5Q817-252 763-197.68q-54 54.31-127 86Q563-80 480.27-80Zm.23-60Q622-140 721-239.5t99-241Q820-622 721.19-721T480-820q-141 0-240.5 98.81T140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z" />
        </svg>
      </div>
      <GroupCards
        groupTitle={"Group 1"}
        groupDescription={"This is the first group"}
        groupMembers={["John", "Jane", "Bob"]}
        tripExpense={500}
        id={1}
      />
      <GroupCards
        groupTitle={"Group 2"}
        groupDescription={"This is the second group"}
        groupMembers={["Alice", "Tom", "Mike"]}
        tripExpense={1000}
        id={2}
      />
      <GroupCards
        groupTitle={"Group 3"}
        groupDescription={"This is the third group"}
        groupMembers={["David", "Kate", "Sara"]}
        tripExpense={1500}
        id={3}
      />
      <GroupCards
        groupTitle={"Group 4"}
        groupDescription={"This is the fourth group"}
        groupMembers={["Emily", "Jack", "Mia"]}
        tripExpense={2000}
        id={4}
      />
      <GroupCards
        groupTitle={"Group 5"}
        groupDescription={"This is the fifth group"}
        groupMembers={["Tom", "Harry", "Lucy"]}
        tripExpense={2500}
        id={5}
      />
      <GroupCards
        groupTitle={"Group 6"}
        groupDescription={"This is the sixth group"}
        groupMembers={["Sophia", "Chris", "Liam"]}
        tripExpense={3000}
        id={6}
      />
    </div>
  );
}
