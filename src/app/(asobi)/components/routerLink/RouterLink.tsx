"use client";
import React from "react";

import { useRouter } from "next/navigation";
import { motion, MotionProps } from "motion/react";
interface Props extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  to?: string;
}

export default function RouterLink({
  children,
  to,
  ...props
}: Props & MotionProps) {
  const router = useRouter();
  return (
    <motion.div
      onClick={() => {
        to && router.push(to);
      }}
      {...(props as any)}
    >
      {children}
    </motion.div>
  );
}
