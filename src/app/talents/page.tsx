import React from "react";
import TransitionContainer from "../components/PageTransitionWrapper/TransitionContainer";

import "./talents.scss";
import RouterLink from "../components/routerLink/RouterLink";
import { getTranslations } from "next-intl/server";
type Props = {};

export default async function Page({}: Props) {
  const t = await getTranslations("talent");
  return (
    <TransitionContainer key={"talent"} id="p_talent">
      <section id="tl-h" className="general-h">
        <h2 className="hs">TALENT</h2>
        <p>{t("list_sub")}</p>
      </section>

      <section id="tl-l">
        <div className="controls">
          <button className="btn hv  btn-gen act">Generation 1</button>
          <button className="btn hv  btn-gen">Generation 2</button>
          <button className="btn hv btn-gen">Generation 3</button>
        </div>

        <div className="list">
          <RouterLink className="btn tc" to="/talent/tal-slug">
            <div className="wrapper">
              <img src="/g/htal3.png" alt="" className="tal-img" />
              <div className="name">
                <h2>Mithya Badford</h2>
              </div>
              <div className="name-dec"></div>
            </div>
          </RouterLink>
        </div>
      </section>
    </TransitionContainer>
  );
}
