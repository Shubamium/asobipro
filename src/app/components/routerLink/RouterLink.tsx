"use client";
import React from "react";

import { useRouter } from "next/navigation";
interface Props extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  to?: string;
}

export default function RouterLink({ children, to, ...props }: Props) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        to && router.push(to);
      }}
      {...props}
    >
      {children}
    </div>
  );
}
