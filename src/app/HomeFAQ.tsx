"use client";
import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { GoTriangleDown } from "react-icons/go";

type Props = {};

export default function HomeFAQ({}: Props) {
  return (
    <section id="h-faq" className="">
      <div className="dzig t"></div>
      <div className="dzig b"></div>

      <div className="question-container">
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
      <div className="fq-h">
        <h2 className="hs"> FAQ</h2>
        <p>Beli merchandise dari Stars kesayangan kamu!</p>
        <img src="/g/htal2.png" alt="" className="bg-img" />
      </div>
    </section>
  );
}

export function Question() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="q"
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div className="q-h">
        <h2 className="question">Q: What is your question here?</h2>
        <div className="btn btn-arr">
          <GoTriangleDown />
        </div>
      </div>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ x: 100, opacity: 0, scaleY: 0 }}
            animate={{ x: 0, opacity: 1, scaleY: 1 }}
            exit={{ x: 100, opacity: 0, scaleY: 0 }}
            className="q-bar"
          >
            <h3>Answer:</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
