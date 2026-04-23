import { ChangeEvent, useState } from "react";

const useInput = (initialValue?: string) => {
  const [value, setValue] = useState<string>(initialValue ?? "");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return [value, handleChange, setValue] as const;
};

export { useInput };
