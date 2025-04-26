import React, { useTransition } from "react";
import TransitionContainer from "../components/PageTransitionWrapper/TransitionContainer";
import SchedRow from "./SchedRow";
import { getTranslations } from "next-intl/server";

type Props = {};

export default async function Page({}: Props) {
  const t = await getTranslations("schedule");
  return (
    <TransitionContainer key={"sched"} id="p_sched">
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
