"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaPlay } from "react-icons/fa";

import "./sched.scss";
import { useTranslations } from "next-intl";
import { urlFor } from "../db/sanity";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { AnimatePresence, motion } from "motion/react";
import { Media, Schedule, Talent } from "@/payload-types";
type Props = {
  sd: Schedule;
};

export default function SchedRow({ sd }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("schedule");
  const doScroll = (px: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: px,
        behavior: "smooth",
      });
    }
  };
  const mq = useMediaQuery({
    query: "(max-width:1024px)",
  });
  const [visible, setVisible] = useState(!mq);
  useEffect(() => {
    setVisible(!mq);
  }, [mq]);
  const td = sd.talent as Talent;
  return (
    <div className="s-rw">
      <div className="tl-card">
        <div className="card">
          <div className="wrapper">
            <div className="pfp">
              <img
                // src={sd.talent.pfp && urlFor(sd.talent.pfp).height(600).url()}
                src={(td?.pfp as Media)?.url ?? undefined}
                alt=""
                className="img"
              />
            </div>
            <div className="r">
              <h2 className="n">{td.name}</h2>
              <div className="action">
                <Link href={"/talent/" + td.slug} className="btn hv view">
                  {t("vp")}
                </Link>
                <button
                  className="btn hv view viewvs"
                  onClick={() => {
                    setVisible(!visible);
                  }}
                >
                  {t(!visible ? "ss" : "cs")}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="control">
          <div
            className="btn hv btn-c"
            onClick={() => {
              doScroll(-300);
            }}
          >
            <FaArrowLeft />
          </div>
          <div
            className="btn hv btn-c"
            onClick={() => {
              doScroll(300);
            }}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div className="sched-list" ref={scrollRef}>
        <AnimatePresence>
          {visible &&
            sd["schedule-list"]?.map((scard, id: number) => {
              return (
                <motion.div
                  animate={{ x: 0, opacity: 1 }}
                  initial={{ x: -400, opacity: 0 }}
                  exit={{ x: -400, opacity: 0 }}
                  className="scard"
                  transition={{ delay: 0.2 * id }}
                  key={scard.id}
                >
                  <div className="collab-list">
                    {/* <img src="/g/htal1.png" alt="" className="collab" /> */}
                    {/* <img src="/g/htal1.png" alt="" className="collab" /> */}
                    {scard?.members?.map((ml) => {
                      return (
                        <a
                          href={ml.link ?? undefined}
                          className="btn hv"
                          target="_blank"
                          key={ml.name}
                        >
                          <img
                            // src={ml.pfp && urlFor(ml.pfp).url()}
                            src={(ml.pfp as Media)?.url ?? undefined}
                            alt={ml.name ?? undefined}
                            className="collab "
                          />
                        </a>
                      );
                    })}
                  </div>
                  <div className="l">
                    <img
                      // src={scard.th && urlFor(scard.th).height(600).url()}
                      src={(scard.thumbnail as Media)?.url ?? undefined}
                      alt=""
                      className="thumb"
                    />
                  </div>
                  <div className="r">
                    <h2 className="title">{scard["stream-name"]}</h2>
                    <p className="d">
                      {new Date(scard["stream-date"] ?? "").toDateString()}{" "}
                      &nbsp;
                      {new Date(
                        scard["stream-date"] ?? ""
                      ).toLocaleTimeString()}
                    </p>
                    {/* <p className="d member">
                      {scard.ml?.map((ml: any) => ml.name).join(", ")}
                    </p> */}
                    {scard["stream-link"] && (
                      <a
                        href={scard["stream-link"]}
                        target="_blank"
                        className="btn hv btn-vs"
                      >
                        {t(!mq ? "vs" : "w")}
                        <FaPlay />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
        </AnimatePresence>
        <></>
      </div>
    </div>
  );
}
