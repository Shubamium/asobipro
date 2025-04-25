import React from "react";
import TransitionContainer from "../components/PageTransitionWrapper/TransitionContainer";

import "./news.scss";
import News from "./News";
import { getTranslations } from "next-intl/server";
type Props = {};

export default async function Page({}: Props) {
  const t = await getTranslations("news");
  return (
    <TransitionContainer key={"news"} id="p_news">
      <section id="tl-h" className="general-h">
        <h2 className="hs">{t("name")}</h2>
        <p>{t("sub")}</p>
      </section>

      {/* News Featured */}
      <section id="nft">
        <div className="confine">
          <div className="l">
            <div className="t">
              <News
                title={"News Title Here"}
                excerpt="[excerpt] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
                img="/g/nthumb.png"
                tags={["Tags", "Category"]}
              />
            </div>
            <div className="b">
              <News
                title={"News Title Here"}
                img="/g/nthumb.png"
                tags={["Tags", "Category"]}
              />
              <News
                title={"News Title Here"}
                img="/g/nthumb.png"
                tags={["Tags", "Category"]}
              />
            </div>
          </div>
          <div className="r">
            <News
              title={"News Title Here"}
              excerpt="[excerpt] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
              img="/g/nthumb.png"
              tags={["Tags", "Category"]}
            />
          </div>
        </div>
      </section>

      <section id="nct">
        <div className="confine">
          <nav className="main-nav gb">
            <div className="wrapper">
              <button className={`btn btn-nav ${false ? "act" : ""} act`}>
                <span>Category 1</span>
              </button>
              <button className={`btn btn-nav ${false ? "act" : ""}`}>
                <span>Category 2</span>
              </button>
              <button className={`btn btn-nav ${false ? "act" : ""}`}>
                <span>Category 3</span>
              </button>
              <button className={`btn btn-nav ${false ? "act" : ""}`}>
                <span>Category4</span>
              </button>
            </div>
          </nav>
          <div className="news-list">
            <img src="/d/glow.svg" alt="" className="bg-blur" />
            <div className="news">
              <div className="wrapper">
                <img src="/g/nthumb.png" alt="" className="nimg" />
                <h2 className="nt">News Title Here</h2>
                <p className="excerpt">
                  [excerpt] Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad
                </p>
                <div className="tags">
                  <div className="t">
                    <p>Tags/category</p>
                  </div>
                  <div className="t">
                    <p>Tags/category</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="news">
              <div className="wrapper">
                <img src="/g/nthumb.png" alt="" className="nimg" />
                <h2 className="nt">News Title Here</h2>
                <p className="excerpt">
                  [excerpt] Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad
                </p>
                <div className="tags">
                  <div className="t">
                    <p>Tags/category</p>
                  </div>
                  <div className="t">
                    <p>Tags/category</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="news">
              <div className="wrapper">
                <img src="/g/nthumb.png" alt="" className="nimg" />
                <h2 className="nt">News Title Here</h2>
                <p className="excerpt">
                  [excerpt] Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad
                </p>
                <div className="tags">
                  <div className="t">
                    <p>Tags/category</p>
                  </div>
                  <div className="t">
                    <p>Tags/category</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="news">
              <div className="wrapper">
                <img src="/g/nthumb.png" alt="" className="nimg" />
                <h2 className="nt">News Title Here</h2>
                <p className="excerpt">
                  [excerpt] Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad
                </p>
                <div className="tags">
                  <div className="t">
                    <p>Tags/category</p>
                  </div>
                  <div className="t">
                    <p>Tags/category</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="news">
              <div className="wrapper">
                <img src="/g/nthumb.png" alt="" className="nimg" />
                <h2 className="nt">News Title Here</h2>
                <p className="excerpt">
                  [excerpt] Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad
                </p>
                <div className="tags">
                  <div className="t">
                    <p>Tags/category</p>
                  </div>
                  <div className="t">
                    <p>Tags/category</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="news">
              <div className="wrapper">
                <img src="/g/nthumb.png" alt="" className="nimg" />
                <h2 className="nt">News Title Here</h2>
                <p className="excerpt">
                  [excerpt] Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad
                </p>
                <div className="tags">
                  <div className="t">
                    <p>Tags/category</p>
                  </div>
                  <div className="t">
                    <p>Tags/category</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="news">
              <div className="wrapper">
                <img src="/g/nthumb.png" alt="" className="nimg" />
                <h2 className="nt">News Title Here</h2>
                <p className="excerpt">
                  [excerpt] Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad
                </p>
                <div className="tags">
                  <div className="t">
                    <p>Tags/category</p>
                  </div>
                  <div className="t">
                    <p>Tags/category</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TransitionContainer>
  );
}
