"use client";
import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaPlay } from "react-icons/fa";

import "./sched.scss";
import { useTranslations } from "next-intl";
import { urlFor } from "../db/sanity";
import Link from "next/link";
type Props = {};

export default function SchedRow({ sd }: any) {
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
  return (
    <div className="s-rw">
      <div className="tl-card">
        <div className="card">
          <div className="wrapper">
            <img
              src={sd.talent.pfp && urlFor(sd.talent.pfp).height(600).url()}
              alt=""
              className="pfp"
            />
            <h2 className="n">{sd.talent.name}</h2>
            <Link
              href={"/talent/" + sd.talent.slug.current}
              className="btn hv view"
            >
              {t("vp")}
            </Link>
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
        {sd.schedule_list?.map((scard: any) => {
          return (
            <div className="scard" key={scard._key}>
              <div className="collab-list">
                {/* <img src="/g/htal1.png" alt="" className="collab" /> */}
                {/* <img src="/g/htal1.png" alt="" className="collab" /> */}
                {scard.ml?.map((ml: any) => {
                  return (
                    <img
                      src={ml.pfp && urlFor(ml.pfp).url()}
                      alt=""
                      className="collab"
                    />
                  );
                })}
              </div>

              <img
                src={scard.th && urlFor(scard.th).height(600).url()}
                alt=""
                className="thumb"
              />
              <h2 className="title">{scard.sn}</h2>
              <p className="d">{new Date(scard.d).toDateString()}</p>
              {scard.surl && (
                <a href={scard.surl} target="_blank" className="btn hv btn-vs">
                  {t("vs")}
                  <FaPlay />
                </a>
              )}
            </div>
          );
        })}
        {/* <div className="scard">
          <div className="collab-list">
            <img src="/g/htal1.png" alt="" className="collab" />
            <img src="/g/htal1.png" alt="" className="collab" />
            <img src="/g/htal1.png" alt="" className="collab" />
          </div>

          <img src="/g/nthumb.png" alt="" className="thumb" />
          <h2 className="title">Stream Title</h2>
          <p className="d">Sat, 20 Feb 14:00</p>
          <a href="#" className="btn hv btn-vs">
            View Stream <FaPlay />
          </a>
        </div>
        <div className="scard">
          <div className="collab-list">
            <img src="/g/htal1.png" alt="" className="collab" />
            <img src="/g/htal1.png" alt="" className="collab" />
            <img src="/g/htal1.png" alt="" className="collab" />
          </div>

          <img src="/g/nthumb.png" alt="" className="thumb" />
          <h2 className="title">Stream Title</h2>
          <p className="d">Sat, 20 Feb 14:00</p>
          <a href="#" className="btn hv btn-vs">
            View Stream <FaPlay />
          </a>
        </div>
        <div className="scard">
          <div className="collab-list">
            <img src="/g/htal1.png" alt="" className="collab" />
            <img src="/g/htal1.png" alt="" className="collab" />
            <img src="/g/htal1.png" alt="" className="collab" />
          </div>

          <img src="/g/nthumb.png" alt="" className="thumb" />
          <h2 className="title">Stream Title</h2>
          <p className="d">Sat, 20 Feb 14:00</p>
          <a href="#" className="btn hv btn-vs">
            View Stream <FaPlay />
          </a>
        </div>
        <div className="scard">
          <div className="collab-list">
            <img src="/g/htal1.png" alt="" className="collab" />
            <img src="/g/htal1.png" alt="" className="collab" />
            <img src="/g/htal1.png" alt="" className="collab" />
          </div>

          <img src="/g/nthumb.png" alt="" className="thumb" />
          <h2 className="title">Stream Title</h2>
          <p className="d">Sat, 20 Feb 14:00</p>
          <a href="#" className="btn hv btn-vs">
            View Stream <FaPlay />
          </a>
        </div> */}
      </div>
    </div>
  );
}
