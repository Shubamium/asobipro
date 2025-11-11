import React from "react";
import TransitionContainer from "../components/PageTransitionWrapper/TransitionContainer";

type Props = {};

export default function Page({}: Props) {
  return (
    <TransitionContainer key={"base"} id="p_name">
      <section id="tl-h" className="general-h">
        <h2 className="hs">TALENT</h2>
        <p>Klik untuk Memilih Talent Kesayangan kamu!</p>
      </section>
    </TransitionContainer>
  );
}
