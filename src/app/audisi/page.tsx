import React from "react";
import TransitionContainer from "../components/PageTransitionWrapper/TransitionContainer";
import "./audisi.scss";
import AudisiControl from "./AudisiControl";
import Guidelines from "./Guidelines";
import Require from "./Require";
import Apply from "./Apply";
import AudisiFAQ from "./AudisiFAQ";
type Props = {};

export default function Page({}: Props) {
  return (
    <TransitionContainer key={"audisi"} id="p_audisi">
      <div className="bg-hd">
        <section id="tl-h" className="general-h">
          <h2 className="hs">AUDISI</h2>
          <p>Jangan lewatkan informasi menarik!!</p>
        </section>
      </div>

      <img src="/d/glow.svg" alt="" className="bg-blur" />
      <AudisiControl
        guide={<Guidelines />}
        require={<Require />}
        apply={<Apply />}
      />

      <AudisiFAQ />
    </TransitionContainer>
  );
}
