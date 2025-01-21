import React from "react";
import Navbar from "../components/navbar/navbar";

export default function About() {
  let data = [
    { name: "name", title: "title", salary: "salary" },
    ["john", "developer", "50000"],
    ["jane", "designer", "60000"],
    ["joe", "manager", "70000"],
    ["mary", "CEO", "80000"],
  ];
  return (
    <div
      id="main-container"
      className="w-full min-h-screen flex flex-col items-center p-5"
    >
      <Navbar />
      <div className="w-full h-full flex flex-col justify-center items-center mt-20 border-1 rounded-3xl">
        <table>
          <tr>
            <td>{data[0].name}</td>
            <td>{data[0].title}</td>
            <td>{data[0].salary}</td>
          </tr>
          {data.slice(1).map((item, index) => {
            return (
              <tr key={index}>
                {item.map((value, index) => {
                  return <td key={index}>{value}</td>;
                })}
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
