import React from "react";
import TransitionContainer from "../components/PageTransitionWrapper/TransitionContainer";
import SchedRow from "./SchedRow";

type Props = {};

export default function Page({}: Props) {
  return (
    <TransitionContainer key={"base"} id="p_sched">
      <section className="general-h">
        <h2 className="hs">SCHEDULE</h2>
        <p>Klik untuk Memilih Talent Kesayangan kamu!</p>
      </section>
      <section id="s-list">
        <SchedRow />
        <SchedRow />
        <SchedRow />
        <SchedRow />
      </section>
    </TransitionContainer>
  );
}
