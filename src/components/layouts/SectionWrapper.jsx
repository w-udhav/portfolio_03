import React from "react";

export default function SectionWrapper({ children }) {
  return <div className="flex flex-col gap-20">{children}</div>;
}
