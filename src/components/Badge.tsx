import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string;
}

export default function Badge({ title, value }: BadgeProps) {
  return (
    <div className="flex gap-2 rounded px-2.5 py-1.5 bg-[#1F1F28]">
      <div className="text-sm font-semibold">{title}</div>
      <div className="text-sm font-semibold text-blue-400">{value}</div>
    </div>
  );
}
