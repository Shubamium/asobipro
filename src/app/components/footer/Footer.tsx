import Link from "next/link";
import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiFacebookCircleFill } from "react-icons/ri";

import "./footer.scss";
type Props = {};

export default function Footer({}: Props) {
  return (
    <footer id="footer">
      <div className="confine">
        <div className="f-t">
          <div className="l">
            <img src="/g/logo-w.png" alt="" className="logo" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
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
            <div className="b"></div>
          </div>
          <div className="r">
            <Link href={"/"} className="btn btn-foot">
              Tentang
            </Link>
            <Link href={"#"} className="btn btn-foot">
              Shop
            </Link>
            <Link href={"/talents"} className="btn btn-foot">
              Talent Kami
            </Link>
            <Link href={"/news"} className="btn btn-foot">
              News
            </Link>
            <Link href={"/audisi"} className="btn btn-foot">
              Audisi
            </Link>
          </div>
        </div>
        <div className="f-b">
          <p className="copy">©ASOBI PRODUCTION 2025 ALL RIGHTS RESERVED</p>
          <a href="https://x.com/shubamium2">WEBSITE DESIGN by SHUBAMIUM</a>
        </div>
      </div>
    </footer>
  );
}
