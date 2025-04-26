import React from "react";
import TransitionContainer from "../components/PageTransitionWrapper/TransitionContainer";

import "./team.scss";
import { getTranslations } from "next-intl/server";
import { fetchData, urlFor } from "../db/sanity";
import { time } from "console";
import TeamList from "./TeamList";
type Props = {};

export default async function Page({}: Props) {
  const t = await getTranslations("team");

  const td = await fetchData<any[]>(`*[_type == 'team']{
		...}`);
  return (
    <TransitionContainer key={"team"} id="p_team">
      <section id="tl">
        <img src="/d/glow.svg" alt="" className="bg-blur" />
        <div className="confine">
          <section className="general-h">
            <h2 className="hs">{t("name")}</h2>
            <p>{t("sub")}</p>
          </section>
          <TeamList td={td} />
        </div>
      </section>
    </TransitionContainer>
  );
}
