import React from "react";

export default function AppTemplate({ children }) {
  return (
    <main className="mx-auto h-full w-full max-w-xl py-28">{children}</main>
  );
}
