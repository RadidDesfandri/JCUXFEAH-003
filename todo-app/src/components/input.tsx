"use client";

import { ChangeEvent } from "react";
import Checkbox from "./checkbox";

interface InputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onChecked: () => void;
  checked: boolean
}

const Input = ({ onChange, value, onChecked, checked }: InputProps) => {
  return (
    <div className="mt-8 md:mt-10 px-5 bg-white py-3 md:py-5 rounded-md md:rounded-xl flex items-center gap-2 dark:bg-[#25273D] dark:text-[#767992]">
      <Checkbox active={checked} onChecked={onChecked} />
      <input
        type="text"
        className="w-full outline-0"
        placeholder="Create a new todo..."
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
