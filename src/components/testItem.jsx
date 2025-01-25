import React from "react";

export default function TestItem({ title, descr, image, url }) {
  function trimTitle(title) {
    return title.split(" ").slice(0, 10).join(" ") + "......";
  }
  return (
    <div className="flex flex-col p-1 justify-between items-center border-1 w-60 rounded-lg">
      <img
        src={image}
        alt={title}
        className="w-full max-h-32 min-h-32 rounded-lg"
      />
      <h1 className="text-xl font-semibold">
        {title ? trimTitle(title) : "No Title"}
      </h1>
      <p>{descr ? trimTitle(descr) : "No description available"}</p>
      <a
        href={url}
        className="font-pacifico bg-blue-400 pl-2 pr-2 pt-1 pb-1 rounded-md"
      >
        Explore
      </a>
    </div>
  );
}
