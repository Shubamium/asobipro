"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./header.scss";
import { usePathname } from "next/navigation";
import { FaLanguage } from "react-icons/fa6";
import { IoLanguage } from "react-icons/io5";
import { BiGlobe } from "react-icons/bi";
import { CgGlobe } from "react-icons/cg";
import { CiGlobe } from "react-icons/ci";
type Props = {};

export default function Header({}: Props) {
  const [eng, setEng] = useState(false);

  const path = usePathname();
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
              <span>Tentang</span>
            </Link>
            <Link href="#" className={`btn btn-nav`}>
              <span>Shop</span>
            </Link>
            <Link
              href="/talents"
              className={`btn btn-nav ${path.includes("talent") ? "act" : ""}`}
            >
              <span>Talent Kami</span>
            </Link>
            <Link
              href="/schedule"
              className={`btn btn-nav ${
                path.includes("Schedule") ? "act" : ""
              }`}
            >
              <span>Schedule</span>
            </Link>
            <Link
              href="/news"
              className={`btn btn-nav ${path.includes("news") ? "act" : ""}`}
            >
              <span>News</span>
            </Link>
            <Link
              href="/team"
              className={`btn btn-nav ${path.includes("team") ? "act" : ""}`}
            >
              <span>Team</span>
            </Link>
          </div>
        </nav>
        <div className="l">
          <div className="language">
            <CiGlobe />
          </div>
          <div
            className={`btn language-switcher ${eng ? "eng" : "ind"}`}
            onClick={() => setEng(!eng)}
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
                AUDISI <FaStar />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
