"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Guidelines from "./Guidelines";
type Props = {};

type pageData = "guide" | "require" | "apply";
export default function AudisiControl({ guide, require, apply }: any) {
  const pageList = {
    guide: guide,
    require: require,
    apply: apply,
  };

  const [active, setActive] = useState("guide");
  const [process, setProcess] = useState(1);
  return (
    <div id="audition-switch">
      <div className="controls">
        <button
          className={`btn hv btn-page ${process >= 1 ? "act" : ""}`}
          onClick={() => {
            setActive("guide");
            setProcess(1);
          }}
        >
          Guidelines
        </button>
        <hr className={`${process >= 2 ? "act" : ""}`} />
        <button
          className={`btn hv btn-page ${process >= 2 ? "act" : ""}`}
          onClick={() => {
            setProcess(2);
            setActive("require");
          }}
        >
          Requirements
        </button>
        <hr className={`${process >= 3 ? "act" : ""}`} />

        <button
          className={`btn hv btn-page ${process >= 3 ? "act" : ""}`}
          onClick={() => {
            setActive("apply");
            setProcess(3);
          }}
        >
          Apply
        </button>
      </div>
      <img src="/d/glow.svg" alt="" className="bg-blur" />

      <AnimatePresence mode="wait">
        <motion.div
          animate={{ scaleX: 1, opacity: 1, y: 0 }}
          initial={{ scaleX: 0, opacity: 0, y: 0 }}
          exit={{ scaleX: 1, opacity: 0, y: 0 }}
          className="content"
          key={active}
        >
          {pageList[active as pageData]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
