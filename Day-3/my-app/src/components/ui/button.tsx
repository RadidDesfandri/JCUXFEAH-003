"use client";

import { useState } from "react";

function Button({ children }: { children: React.ReactNode }) {
  const [] = useState(false);

  return (
    <button
      style={{
        color: "white",
        borderRadius: "16px",
        border: "1px solid white",
        padding: "6px 14px",
      }}
    >
      {children}
    </button>
  );
}

export default Button;
