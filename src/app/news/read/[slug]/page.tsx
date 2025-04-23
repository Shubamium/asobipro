import TransitionContainer from "@/app/components/PageTransitionWrapper/TransitionContainer";
import React from "react";

type Props = {};

import "./read.scss";
import Link from "next/link";
import { GiReturnArrow } from "react-icons/gi";
import { GrReturn } from "react-icons/gr";
import { RiArrowUpLine, RiFacebookCircleFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaYoutube } from "react-icons/fa";
export default function NewsRead({}: Props) {
  return (
    <TransitionContainer key={"news-read"} id="p_read">
      <div id="top"></div>
      <section id="r-h">
        <div className="banner">
          <img src="/g/nthumb.png" alt="" />
        </div>
        <div className="ht">
          <div className="confine">
            <div className="t">
              <h2> [Judul Berita] New Website!</h2>
            </div>
            <div className="b">
              <div className="tlist">
                <div className="tags">
                  <p className="t">Tags</p>
                </div>
                <div className="tags">
                  <p className="t">Tags</p>
                </div>
              </div>

              <div className="date">
                <p>Sat, Nov 09 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="r-a">
        <div className="l">
          <Link href={"/news"} className="btn btn-ret">
            <GrReturn />
            NEWS LIST
          </Link>
        </div>
        <article className="at">
          <h1>Main Heading</h1>
          <h2>Heading 3</h2>
          <h3>Heading 4</h3>
          <h4>Heading 5</h4>
          <h5>Heading 2</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in{" "}
            <a href="#">Insert Link here</a> <br></br>
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <img src="/b/nthumb.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in{" "}
            <a href="#">Insert Link here</a> <br></br>
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in{" "}
            <a href="#">Insert Link here</a> <br></br>
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <ul>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
          </ul>
        </article>
        <div className="r"></div>
      </section>

      <section id="r-f">
        <div className="confine">
          <div className="wrapper">
            <div className="t">
              <div className="l">
                <Link href={"/news"} className="btn hv btn-rf">
                  <GrReturn /> NEWS LIST
                </Link>
                <Link href={"#top"} className="btn hv btn-rf">
                  <RiArrowUpLine /> SCROLL TO TOP
                </Link>
              </div>
              <div className="r">
                <img src="/g/logo-w.png" alt="" />
              </div>
            </div>

            <div className="b">
              <h2>©ASOBI PRODUCTION 2025 ALL RIGHTS RESERVED</h2>

              <div className="ct">
                <div className="ft-contact">
                  <a href="#" target="_blank" className="btn btn-fc">
                    {" "}
                    <FaYoutube />
                  </a>
                  <a href="#" target="_blank" className="btn btn-fc">
                    {" "}
                    <FaXTwitter />
                  </a>
                  <a href="#" target="_blank" className="btn btn-fc">
                    {" "}
                    <FaInstagram />
                  </a>
                  <a href="#" target="_blank" className="btn btn-fc">
                    {" "}
                    <RiFacebookCircleFill />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TransitionContainer>
  );
}
