"use client";
import React from "react";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
type Props = {};

export default function TalentContact({ td }: any) {
  return (
    <div className="social-count">
      {td.contact?.yt && (
        <div
          className="btn hv sc y"
          onClick={() => {
            window.open(td.contact.yt.l);
          }}
        >
          <div className="d">
            <h2>{td.contact.yt.fc}</h2>
            <p>YOUTUBE</p>
          </div>
          <div className="ic">
            <FaYoutube />
          </div>
        </div>
      )}
      {td.contact?.dc && (
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
      {td.contact?.ig && (
        <div
          className="btn hv sc i"
          onClick={() => {
            window.open(td.contact.ig.l);
          }}
        >
          <div className="d">
            <h2>{td.contact?.ig.fc ?? ""}</h2>
            <p>INSTAGRAM</p>
          </div>
          <div className="ic x">
            <FaInstagram />
          </div>
        </div>
      )}
      {td.contact?.x && (
        <div
          className="btn hv sc x"
          onClick={() => {
            window.open(td.contact.x.l);
          }}
        >
          <div className="d">
            <h2>{td.contact?.x.fc ?? ""}</h2>
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
