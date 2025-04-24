"use client";
import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaPlay } from "react-icons/fa";

import "./sched.scss";
type Props = {};

export default function SchedRow({}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

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
            <img src="/g/htal2.png" alt="" className="pfp" />
            <h2 className="n">Mithya Badford</h2>
            <button className="btn hv view"> VIEW PROFILE</button>
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
      </div>
    </div>
  );
}
