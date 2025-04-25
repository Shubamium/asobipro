import Link from "next/link";
import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiFacebookCircleFill } from "react-icons/ri";

import "./footer.scss";
import { useTranslations } from "next-intl";
type Props = {};

export default function Footer({}: Props) {
  const t = useTranslations("footer");
  const th = useTranslations("header");
  return (
    <footer id="footer">
      <div className="confine">
        <div className="f-t">
          <div className="l">
            <img src="/g/logo-w.png" alt="" className="logo" />
            <p>{t("mini_about")}</p>
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
              {th("about")}
            </Link>
            <Link href={"#"} className="btn btn-foot">
              {th("shop")}
            </Link>
            <Link href={"/talents"} className="btn btn-foot">
              {th("talent")}
            </Link>
            <Link href={"/news"} className="btn btn-foot">
              {th("news")}
            </Link>
            <Link href={"/schedule"} className="btn btn-foot">
              {th("schedule")}
            </Link>
            <Link href={"/audisi"} className="btn btn-foot">
              {th("audition")}
            </Link>
          </div>
        </div>
        <div className="f-b">
          <p className="copy">{t("copyright")}</p>
          <a href="https://x.com/shubamium2">{t("attribution")} SHUBAMIUM</a>
        </div>
      </div>
    </footer>
  );
}
