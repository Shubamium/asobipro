"use client";
import useInfiniteScroll from "@/app/(asobi)/useInfiniteScroll";
import { motion } from "motion/react";
import React from "react";
import "./brandStrip.scss";
type Props = {};

export default function BrandStrip({ dir }: any) {
  const { pageRef, animateScope, x } = useInfiniteScroll(4, 10, dir ?? true);
  return (
    <div className="brand-strip" ref={animateScope}>
      <motion.div className="wrapper" style={{ x }}>
        <div className="scroller" ref={pageRef}>
          <h2 className="ho">Asobu Production Auditions</h2>
          <h2 className="h">Asobu Production Auditions</h2>
          <h2 className="ho">Asobu Production Auditions</h2>
          <h2 className="h">Asobu Production Auditions</h2>
        </div>
        <div className="scroller" ref={pageRef}>
          <h2 className="ho">Asobu Production Auditions</h2>
          <h2 className="h">Asobu Production Auditions</h2>
          <h2 className="ho">Asobu Production Auditions</h2>
          <h2 className="h">Asobu Production Auditions</h2>
        </div>
        <div className="scroller" ref={pageRef}>
          <h2 className="ho">Asobu Production Auditions</h2>
          <h2 className="h">Asobu Production Auditions</h2>
          <h2 className="ho">Asobu Production Auditions</h2>
          <h2 className="h">Asobu Production Auditions</h2>
        </div>
      </motion.div>
    </div>
  );
}
