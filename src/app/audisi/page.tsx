import React from "react";
import TransitionContainer from "../components/PageTransitionWrapper/TransitionContainer";
import "./audisi.scss";
import AudisiControl from "./AudisiControl";
import Guidelines from "./Guidelines";
import Require from "./Require";
import Apply from "./Apply";
import AudisiFAQ from "./AudisiFAQ";
import { getTranslations } from "next-intl/server";
type Props = {};

export default async function Page({}: Props) {
  const t = await getTranslations("audisi");
  return (
    <TransitionContainer key={"audisi"} id="p_audisi">
      <div className="bg-hd">
        <section id="tl-h" className="general-h">
          <h2 className="hs">{t("name")}</h2>
          <p>{t("sub")}</p>
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
