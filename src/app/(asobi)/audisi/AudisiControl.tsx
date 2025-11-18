"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
// import Guidelines from "./Guidelines";
import { useTranslations } from "next-intl";
type Props = {};

// type pageData = "guide" | "require" | "apply";
export default function AudisiControl({
  pages,
  disabled,
  controlPage,
}: {
  pages: {
    [key: string]: ReactNode;
  };
  disabled?: boolean;
  controlPage?: string;
}) {
  // const pageList = {
  //   guide: guide,
  //   require: require,
  //   apply: apply,
  // };

  const [active, setActive] = useState(controlPage || "");
  const [process, setProcess] = useState(0);

  useEffect(() => {
    if (!controlPage) {
      const pageList = Object.keys(pages);
      setActive(pageList[0]);
      setProcess(pageList.indexOf(pageList[0]));
    }
  }, []);
  useEffect(() => {
    if (controlPage) {
      const pageList = Object.keys(pages);
      setActive(controlPage);
      setProcess(pageList.indexOf(controlPage));
      // setProcess(Object.keys(pages).indexOf(controlPage) + 1);
    }
  }, [controlPage]);
  // const t = useTranslations("audisi");
  return (
    <div className="audition-switch">
      <div className="controls">
        {Object.keys(pages).map((p, _) => {
          return (
            <React.Fragment key={"pcontrol" + _}>
              <button
                className={`btn hv btn-page ${process >= _ ? "act" : ""}`}
                disabled={disabled}
                onClick={() => {
                  if (disabled) return;
                  setActive(p);
                  setProcess(_);
                }}
              >
                {/* {t("gtitle")} */}
                {p.toUpperCase()}
              </button>
              {_ !== Object.keys(pages).length - 1 && (
                <hr className={`${process >= _ + 1 ? "act" : ""}`} />
              )}
            </React.Fragment>
          );
        })}
        {/* <button
          className={`btn hv btn-page ${process >= 1 ? "act" : ""}`}
          onClick={() => {
            setActive("guide");
            setProcess(1);
          }}
        >
          {t("gtitle")}
        </button>
        <hr className={`${process >= 2 ? "act" : ""}`} />
        <button
          className={`btn hv btn-page ${process >= 2 ? "act" : ""}`}
          onClick={() => {
            setProcess(2);
            setActive("require");
          }}
        >
          {t("rtitle")}
        </button>
        <hr className={`${process >= 3 ? "act" : ""}`} />

        <button
          className={`btn hv btn-page ${process >= 3 ? "act" : ""}`}
          onClick={() => {
            setActive("apply");
            setProcess(3);
          }}
        >
          {t("apply")}
        </button> */}
      </div>
      {/* <img src="/d/bgblur.webp" alt="" className="bg-blur" /> */}

      <AnimatePresence mode="wait">
        <motion.div
          animate={{ scaleX: 1, opacity: 1, y: 0 }}
          initial={{ scaleX: 0, opacity: 0, y: 0 }}
          exit={{ scaleX: 1, opacity: 0, y: 0 }}
          className="content"
          key={active}
        >
          {pages[active]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
