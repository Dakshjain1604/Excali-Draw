"use client";

import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  label:string,
  onClick:MouseEventHandler
}

export const ButtonAuth = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      className="text-white w-full px-4 py-2 rounded-md "
    onClick={onClick}
    >
      {label}
    </button>
  );
};
