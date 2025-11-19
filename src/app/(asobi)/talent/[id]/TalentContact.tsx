"use client";
import { Talent } from "@/payload-types";
import React from "react";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
type Props = {};

export default function TalentContact({ td }: { td: Talent["contacts"] }) {
  return (
    <div className="social-count">
      {td?.youtube && (
        <div
          className="btn hv sc y"
          onClick={() => {
            td.youtube?.link && window.open(td.youtube?.link);
          }}
        >
          <div className="d">
            <h2>{td.youtube["follower-count"]}</h2>
            <p>YOUTUBE</p>
          </div>
          <div className="ic">
            <FaYoutube />
          </div>
        </div>
      )}
      {td?.["discord-link"] && (
        <div className="btn sc d">
          <div className="d">
            {/* <h2>12.4K+</h2> */}
            <p>DISCORD</p>
          </div>
          <div className="ic x">
            <FaDiscord />
          </div>
        </div>
      )}
      {td?.instagram && (
        <div
          className="btn hv sc i"
          onClick={() => {
            //  window.open(td.contact.ig.l);
            td.instagram?.link && window.open(td.instagram?.link);
          }}
        >
          <div className="d">
            <h2>{td.instagram["follower-count"] ?? ""}</h2>
            <p>INSTAGRAM</p>
          </div>
          <div className="ic x">
            <FaInstagram />
          </div>
        </div>
      )}
      {td?.x && (
        <div
          className="btn hv sc x"
          onClick={() => {
            // window.open(td.contact.x.l);
            td.x?.link && window.open(td.x.link);
          }}
        >
          <div className="d">
            <h2>{td.x["follower-count"] ?? ""}</h2>
            <p>X</p>
          </div>
          <div className="ic x">
            <FaXTwitter />
          </div>
        </div>
      )}
    </div>
  );
}
