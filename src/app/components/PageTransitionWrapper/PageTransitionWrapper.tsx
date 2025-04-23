"use client";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function PageTransitionWrapper({ children }: Props) {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
}
