"use client";

import { useRef } from "react";

function PageRef() {
  const inputref = useRef<HTMLInputElement | null>(null);

  const handleSubmit = () => {
    const value = inputref.current?.value;

    alert("Input value:     " + value);
  };

  return (
    <div className="flex flex-col items-center gap-4 justify-center w-full min-h-screen">
      <input
        type="text"
        ref={inputref}
        placeholder="Input your name"
        className="border-blue-400 border p-3 rounded-md min-w-md"
      />
      <button
        onClick={handleSubmit}
        className="border-blue-400 border p-3 rounded-md min-w-md"
      >
        Submit
      </button>
    </div>
  );
}

export default PageRef;
