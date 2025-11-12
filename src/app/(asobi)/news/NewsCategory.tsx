"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import News from "./News";
import { urlFor } from "../db/sanity";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Media, NewsCategory as NCT, News as NT } from "@/payload-types";
type Props = {
  cat: NCT[];
  active?: string;
  nl: NT[];
};

export default function NewsCategory({ cat, active, nl }: Props) {
  const router = useRouter();
  const t = useTranslations("news");
  return (
    <section id="nct">
      <div className="confine">
        <nav className="main-nav gb">
          <div className="wrapper">
            {cat?.map((c) => {
              return (
                <button
                  className={`btn btn-nav ${c.slug === active ? "act" : ""} `}
                  onClick={() => {
                    const thisurl = new URL(window.location.href);

                    thisurl.searchParams.set("c", "Category 1");

                    router.push("/news?c=" + c.slug, {
                      scroll: false,
                    });
                    // router.refresh();
                  }}
                  key={"category button " + c.id}
                >
                  <span>{c.name}</span>
                </button>
              );
            })}

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
            {nl?.map((n) => {
              const tagl = n.tags?.map((t) => t ?? "") as string[];
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
                  key={n.id}
                >
                  <News
                    title={n.title}
                    excerpt={n.excerpt ?? ""}
                    // img={urlFor(n.banner).height(800).url()}
                    img={(n.banner as Media)?.url ?? "/g/nthumb.png"}
                    tags={[(n.category as NCT)?.name, ...tagl]}
                    slug={n.slug}
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
