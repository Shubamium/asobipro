"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./header.scss";
import { usePathname } from "next/navigation";

import { CiGlobe } from "react-icons/ci";
import { useLocale, useTranslations } from "next-intl";
import { setUserLocale } from "@/services/locale";
type Props = {};

export default function Header({}: Props) {
  const path = usePathname();
  const locale = useLocale();
  const switchLang = async (lang: "en" | "id") => {
    await setUserLocale(lang);
  };
  const [eng, setEng] = useState(locale == "en");

  const t = useTranslations("header");
  return (
    <header id="header">
      <div className="confine">
        <div className="logo-part">
          <img src="/g/logo.png" alt="" className="" />
        </div>
        <nav className="main-nav gb">
          <div className="wrapper">
            <Link
              href="/"
              className={`btn btn-nav ${path === "/" ? "act" : ""}`}
            >
              <span>{t("about")}</span>
            </Link>
            <Link href="#" className={`btn btn-nav`}>
              <span>{t("shop")}</span>
            </Link>
            <Link
              href="/talents"
              className={`btn btn-nav ${path.includes("talent") ? "act" : ""}`}
            >
              <span>{t("talent")}</span>
            </Link>
            <Link
              href="/schedule"
              className={`btn btn-nav ${
                path.includes("schedule") ? "act" : ""
              }`}
            >
              <span>{t("schedule")}</span>
            </Link>
            <Link
              href="/news"
              className={`btn btn-nav ${path.includes("news") ? "act" : ""}`}
            >
              <span>{t("news")}</span>
            </Link>
            <Link
              href="/team"
              className={`btn btn-nav ${path.includes("team") ? "act" : ""}`}
            >
              <span>{t("team")}</span>
            </Link>
          </div>
        </nav>
        <div className="l">
          <div className="language">
            <CiGlobe />
          </div>
          <div
            className={`btn language-switcher ${eng ? "eng" : "ind"}`}
            onClick={() => {
              setEng(!eng);
              switchLang(!eng ? "en" : "id");
            }}
          >
            <div className="wrapper">
              <button className="btn btn-lang i act">
                <span>IND</span>
              </button>
              <button className=" btn btn-lang e">
                <span>ENG</span>
              </button>
            </div>
          </div>
          <div className="audition">
            <Link href={"/audisi"} className="btn hv btn-audition">
              <span>
                {t("audition").toUpperCase()} <FaStar />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
