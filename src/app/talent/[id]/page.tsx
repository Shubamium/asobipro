import TransitionContainer from "@/app/components/PageTransitionWrapper/TransitionContainer";
import Link from "next/link";
import React from "react";
import { FaDiscord, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoReturnUpBack } from "react-icons/io5";

import "./talent.scss";
import AudioButton from "./AudioButton";
type Props = {};

export default function Page({}: Props) {
  return (
    <TransitionContainer key={"talent-name"} id="p_talentd">
      <section id="talent-hero">
        {" "}
        <div className="side-l"></div>
        <div className="side-r"></div>
        <div className="confine">
          <div className="ring"></div>
          <div className="sidepan"></div>
          <img src="/d/glow.svg" alt="" className="bg-blurs bg-blur" />
          <div className="l">
            <Link href={"/talents"} className="btn hv btn-ret">
              <IoReturnUpBack /> Talent List
            </Link>
            <div className="dzig nzig"></div>
            <h2 className="hs">NAMA TALENT</h2>
            <p className="desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>

            <div className="ytembed">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/QfGuQELt1Tk?si=8Vo7KhL1AS2Hdh-2"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mini-contact">
              <a href="#" className="btn hv  btn-mc">
                <FaYoutube />
              </a>
              <a href="#" className="btn hv  btn-mc">
                <FaInstagram />
              </a>
              <a href="#" className="btn hv  btn-mc">
                <FaXTwitter />
              </a>
              <a href="#" className="btn  hv btn-mc">
                <FaDiscord />
              </a>
            </div>
          </div>
          <div className="r">
            <img src="/g/tal1by1.png" alt="" className="tal-arts" />
            <h2 className="hs tn-big">TALENT NAME</h2>
          </div>
        </div>
      </section>
      <div id="vocal">
        <img src="/g/htal2.png" alt="" className="bg-side" />
        <div className="confine">
          <div className="l"></div>
          <div className="r">
            <div className="panel">
              <div className="wrapper">
                <p className="dia">
                  “Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.”
                </p>
                <AudioButton />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="talent-detail">
        <div className="panel">
          <img src="/d/glow.svg" alt="" className="bg-blur" />
          <div className="wrapper">
            <div className="l">
              <div className="td-h">
                <p className="sh"> PROFILE TALENT</p>
                <h2 className="hmain">NAMA TALENT</h2>
              </div>

              <div className="bio-p">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
                <img src="/g/vlogo.png" alt="" />
              </div>

              <div className="td-d">
                <div className="info-list">
                  <div className="i">
                    <h2>Info Title</h2>
                    <p>Info Description</p>
                  </div>
                  <div className="i">
                    <h2>Info Title</h2>
                    <p>Info Description</p>
                  </div>
                  <div className="i">
                    <h2>Info Title</h2>
                    <p>Info Description</p>
                  </div>
                  <div className="i">
                    <h2>Info Title</h2>
                    <p>Info Description</p>
                  </div>
                  <div className="i">
                    <h2>Info Title</h2>
                    <p>Info Description</p>
                  </div>
                  <div className="i">
                    <h2>Info Title</h2>
                    <p>Info Description</p>
                  </div>
                  <div className="i">
                    <h2>Info Title</h2>
                    <p>Info Description</p>
                  </div>
                  <div className="i">
                    <h2>Info Title</h2>
                    <p>Info Description</p>
                  </div>
                </div>
                <div className="social-count">
                  <div className="btn hv sc y">
                    <div className="d">
                      <h2>12.4K+</h2>
                      <p>YOUTUBE</p>
                    </div>
                    <div className="ic">
                      <FaYoutube />
                    </div>
                  </div>
                  <div className="btn hv sc d">
                    <div className="d">
                      {/* <h2>12.4K+</h2> */}
                      <p>DISCORD</p>
                    </div>
                    <div className="ic x">
                      <FaDiscord />
                    </div>
                  </div>
                  <div className="btn hv sc i">
                    <div className="d">
                      <h2>12.4K+</h2>
                      <p>INSTAGRAM</p>
                    </div>
                    <div className="ic x">
                      <FaInstagram />
                    </div>
                  </div>
                  <div className="btn hv sc x">
                    <div className="d">
                      <h2>12.4K+</h2>
                      <p>X</p>
                    </div>
                    <div className="ic x">
                      <FaXTwitter />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="r">
              <img src="/g/model.png" alt="" className="fb-art" />
              <div className="dzig t"></div>
              <div className="dzig b"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="tv">
        <div className="bgspir a ni"></div>
        <div className="bgspir b ni"></div>
        <div className="bgspir c ni"></div>
        <div className="l">
          <h2 className="hs"> VIDEO</h2>
          <p>Beli merchandise dari Stars kesayangan kamu!</p>
        </div>
        <div className="r">
          <div className="ytembed">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/QfGuQELt1Tk?si=8Vo7KhL1AS2Hdh-2"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="ytembed">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/QfGuQELt1Tk?si=8Vo7KhL1AS2Hdh-2"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="ytembed">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/QfGuQELt1Tk?si=8Vo7KhL1AS2Hdh-2"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="ytembed">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/QfGuQELt1Tk?si=8Vo7KhL1AS2Hdh-2"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="ytembed">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/QfGuQELt1Tk?si=8Vo7KhL1AS2Hdh-2"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </TransitionContainer>
  );
}
