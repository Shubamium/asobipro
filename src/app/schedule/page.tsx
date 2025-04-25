import React, { useTransition } from "react";
import TransitionContainer from "../components/PageTransitionWrapper/TransitionContainer";
import SchedRow from "./SchedRow";
import { useTranslations } from "next-intl";

type Props = {};

export default async function Page({}: Props) {
  const t = useTranslations("schedule");
  return (
    <TransitionContainer key={"base"} id="p_sched">
      <section className="general-h">
        <h2 className="hs">SCHEDULE</h2>
        <p>{t("schedule_sub")}</p>
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
