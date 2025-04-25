import React from "react";
import TransitionContainer from "../components/PageTransitionWrapper/TransitionContainer";

import "./team.scss";
import { getTranslations } from "next-intl/server";
type Props = {};

export default async function Page({}: Props) {
  const t = await getTranslations("team");
  return (
    <TransitionContainer key={"team"} id="p_team">
      <section id="tl">
        <img src="/d/glow.svg" alt="" className="bg-blur" />
        <div className="confine">
          <section className="general-h">
            <h2 className="hs">{t("name")}</h2>
            <p>{t("sub")}</p>
          </section>
          <div className="list">
            <div className="team">
              <div className="wrapper">
                <img src="/g/nthumb.png" alt="" className="pfp" />
                <h2 className="handle">@handle_name</h2>
                <p className="title">title atau role</p>
              </div>
            </div>
            <div className="team">
              <div className="wrapper">
                <img src="/g/nthumb.png" alt="" className="pfp" />
                <h2 className="handle">@handle_name</h2>
                <p className="title">title atau role</p>
              </div>
            </div>
            <div className="team">
              <div className="wrapper">
                <img src="/g/nthumb.png" alt="" className="pfp" />
                <h2 className="handle">@handle_name</h2>
                <p className="title">title atau role</p>
              </div>
            </div>
            <div className="team">
              <div className="wrapper">
                <img src="/g/nthumb.png" alt="" className="pfp" />
                <h2 className="handle">@handle_name</h2>
                <p className="title">title atau role</p>
              </div>
            </div>
            <div className="team">
              <div className="wrapper">
                <img src="/g/nthumb.png" alt="" className="pfp" />
                <h2 className="handle">@handle_name</h2>
                <p className="title">title atau role</p>
              </div>
            </div>
            <div className="team">
              <div className="wrapper">
                <img src="/g/nthumb.png" alt="" className="pfp" />
                <h2 className="handle">@handle_name</h2>
                <p className="title">title atau role</p>
              </div>
            </div>
            <div className="team">
              <div className="wrapper">
                <img src="/g/nthumb.png" alt="" className="pfp" />
                <h2 className="handle">@handle_name</h2>
                <p className="title">title atau role</p>
              </div>
            </div>
            <div className="team">
              <div className="wrapper">
                <img src="/g/nthumb.png" alt="" className="pfp" />
                <h2 className="handle">@handle_name</h2>
                <p className="title">title atau role</p>
              </div>
            </div>
            <div className="team">
              <div className="wrapper">
                <img src="/g/nthumb.png" alt="" className="pfp" />
                <h2 className="handle">@handle_name</h2>
                <p className="title">title atau role</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TransitionContainer>
  );
}
