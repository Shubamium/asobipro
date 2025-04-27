"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import News from "./News";
import { urlFor } from "../db/sanity";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
type Props = {};

export default function NewsCategory({ cat, active, nl }: any) {
  const router = useRouter();
  const t = useTranslations("news");
  return (
    <section id="nct">
      <div className="confine">
        <nav className="main-nav gb">
          <div className="wrapper">
            {cat?.map((c: any) => {
              return (
                <button
                  className={`btn btn-nav ${c.slug.current === active ? "act" : ""} `}
                  onClick={() => {
                    const thisurl = new URL(window.location.href);

                    thisurl.searchParams.set("c", "Category 1");

                    router.push("/news?c=" + c.slug.current, {
                      scroll: false,
                    });
                    // router.refresh();
                  }}
                  key={"category button " + c._id}
                >
                  <span>{c.name}</span>
                </button>
              );
            })}
            <button className={`btn btn-nav`}>
              <span>c.name</span>
            </button>
            <button className={`btn btn-nav`}>
              <span>c.name</span>
            </button>
            <button className={`btn btn-nav`}>
              <span>c.name</span>
            </button>
            <button className={`btn btn-nav`}>
              <span>c.name</span>
            </button>
            {/* <button className={`btn btn-nav ${false ? "act" : ""}`}>
              <span>Category 2</span>
            </button>
            <button className={`btn btn-nav ${false ? "act" : ""}`}>
              <span>Category 3</span>
            </button>
            <button className={`btn btn-nav ${false ? "act" : ""}`}>
              <span>Category4</span>
            </button> */}
          </div>
        </nav>
        <div className="news-list">
          <img src="/d/glow.svg" alt="" className="bg-blur" />

          <AnimatePresence mode="wait">
            {nl?.map((n: any) => {
              return (
                <motion.div
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  initial={{
                    y: 200,
                    opacity: 0,
                  }}
                  exit={{
                    y: 200,
                    opacity: 0,
                  }}
                  key={n._id}
                >
                  <News
                    title={n.title}
                    excerpt={n.excerpt.substr(0, 100) + "..."}
                    img={urlFor(n.banner).height(800).url()}
                    tags={[n.category.name, ...n.tags]}
                    slug={n.slug.current}
                  />
                </motion.div>
              );
            })}
            {(!nl || nl.length === 0) && (
              <motion.div
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                initial={{
                  y: 200,
                  opacity: 0,
                }}
                exit={{
                  y: 200,
                  opacity: 0,
                }}
                className="empty"
                key={"emptyn" + active}
              >
                <p>{t("empty")}</p>
              </motion.div>
            )}
          </AnimatePresence>
          {/* <div className="news">
            <div className="wrapper">
              <img src="/g/nthumb.png" alt="" className="nimg" />
              <h2 className="nt">News Title Here</h2>
              <p className="excerpt">
                [excerpt] Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad
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
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad
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
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad
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
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad
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
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad
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
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad
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
          </div> */}
        </div>
      </div>
    </section>
  );
}
