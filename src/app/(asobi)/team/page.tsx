import React from "react";
import TransitionContainer from "../components/PageTransitionWrapper/TransitionContainer";

import "./team.scss";
import { getTranslations } from "next-intl/server";

import TeamList from "./TeamList";
import { getPayload } from "payload";
import payloadConfig from "@/payload.config";
type Props = {};

export default async function Page({}: Props) {
  const t = await getTranslations("team");

  // const td = await fetchData<any[]>(`*[_type == 'team']{
  // 	...}`);
  const p = await getPayload({
    config: await payloadConfig,
  });
  const td = await p.find({
    collection: "team",
  });
  return (
    <TransitionContainer key={"team"} id="p_team">
      <section id="tl">
        <img src="/d/bgblur.webp" alt="" className="bg-blur" />
        <div className="confine">
          <section className="general-h">
            <h2 className="hs">{t("name")}</h2>
            <p>{t("sub")}</p>
          </section>
          <TeamList td={td.docs} />
        </div>
      </section>
    </TransitionContainer>
  );
}
