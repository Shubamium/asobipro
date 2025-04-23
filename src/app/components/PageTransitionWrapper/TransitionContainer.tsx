"use client";
import React from "react";
import { motion } from "motion/react";
type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  key: any;
};

export default function TransitionContainer({
  children,
  className,
  id,
  key,
}: Props) {
  return (
    <motion.main
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 200, opacity: 0 }}
      exit={{ y: 500, opacity: 0, scaleX: 0 }}
      className={className}
      id={id}
      key={key}
    >
      {children}
    </motion.main>
  );
}
