"use client";
import { useAnimate, useMotionValue, motion } from "motion/react";
import React, { useEffect } from "react";
import useMeasure from "react-use-measure";
import useInfiniteScroll from "./useInfiniteScroll";
import { BiStar } from "react-icons/bi";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { urlFor } from "./db/sanity";

type Props = {};

export default function HomeTalent({ tal }: any) {
  const {
    pageRef: ref,
    animateScope: scope,
    x,
  } = useInfiniteScroll(tal?.length ?? 3, 10);

  const t = useTranslations("home");
  return (
    <section id="h-talent" ref={scope}>
      <div className="tl-text">
        <div className="tl-h">
          <div className="top">
            <h2>STARS</h2>
            <div className="stars">
              <BiStar />
              <BiStar />
              <BiStar />
            </div>
          </div>
          <p>{t("talent_stars")}</p>
        </div>
        <div className="tl-f">
          <Link href={"/talents"} className="btn btn-tal">
            <span className="ho">{t("talent_meet")}</span>
            <span className="hs">{t("talent_tal")}</span>
            <svg
              width="82"
              height="52"
              viewBox="0 0 82 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M82 26L37 0.0192379V51.9808L82 26ZM0 26V30.5H41.5V26V21.5H0V26Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="tl">
        <motion.div className="wrapper" style={{ x: x }}>
          <div className="scroller" ref={ref}>
            {tal?.map((t: any) => {
              return (
                <div className="tl-s" key={"tal-one" + t._key}>
                  <img src={urlFor(t).height(1000).url()} alt="" />
                </div>
              );
            })}
            {/* <div className="tl-s">
              <img src="/g/htal2.png" alt="" />
            </div>
            <div className="tl-s">
              <img src="/g/htal3.png" alt="" />
            </div> */}
          </div>
          <div className="scroller">
            {tal?.map((t: any) => {
              return (
                <div className="tl-s" key={"tal-two" + t._key}>
                  <img src={urlFor(t).height(1000).url()} alt="" />
                </div>
              );
            })}
          </div>
          <div className="scroller">
            {tal?.map((t: any) => {
              return (
                <div className="tl-s" key={"tal-three" + t._key}>
                  <img src={urlFor(t).height(1000).url()} alt="" />
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
