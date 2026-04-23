"use client";

import { useInput } from "@/hooks/use-input";
import { ChangeEvent, useState } from "react";

function StatePage() {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);

  // Custom hooks
  const [name, handleChangeName] = useInput("");
  const [email, handleChangeEmail] = useInput("andi@mail.com");

  return (
    <div className="flex flex-col items-center gap-8 justify-center w-full min-h-screen">
      <div className="flex items-center gap-8">
        <button
          onClick={decrement}
          className="p-3 border border-white rounded-md"
        >
          -
        </button>
        <p>{count}</p>
        <button
          onClick={increment}
          className="p-3 border border-white rounded-md"
        >
          +
        </button>
      </div>

      <div>
        <p>Value: {name}</p>

        <input
          type="text"
          placeholder="Input your name"
          onChange={handleChangeName}
          className="border-blue-400 border p-3 rounded-md min-w-md"
        />

        <p>Value: {email}</p>

        <input
          type="email"
          placeholder="Input your email"
          onChange={handleChangeEmail}
          value={email}
          className="border-blue-400 border p-3 rounded-md min-w-md"
        />
      </div>
    </div>
  );
}

export default StatePage;
