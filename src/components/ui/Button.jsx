import React from "react";

export default function Button({ onClick, className = "", children }) {
  return (
    <button
      className={
        "rounded-xl border border-color-placeholder px-6 py-2 " + className
      }
    >
      {children}
    </button>
  );
}
