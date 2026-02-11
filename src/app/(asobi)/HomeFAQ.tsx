"use client";
import { Home } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { motion, AnimatePresence } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { PortableText } from "next-sanity";
import React, { useState } from "react";
import { GoTriangleDown } from "react-icons/go";

type Props = {};

export default function HomeFAQ({ faq }: { faq: Home["home-faq"] }) {
  const t = useTranslations("home");

  return (
    <section id="h-faq" className="">
      <div className="dzig t"></div>
      <div className="dzig b"></div>

      <div className="question-container">
        {faq?.map((f, index: number) => {
          return <Question d={f} key={f.id + "question"} />;
        })}
      </div>
      <div className="fq-h">
        <h2 className="hs"> FAQ</h2>
        <p>{t("faq_sub")}</p>
        <img src="/g/bg-bottom.png" alt="" className="bg-img" />
      </div>
    </section>
  );
}

export function Question({ d }: any) {
  const [open, setOpen] = useState(false);
  const t = useTranslations("audisi");
  const locale = useLocale();
  return (
    <div
      className="q"
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div className="q-h">
        <h2 className="question">Q: {locale === "en" ? d.qen : d.qid}</h2>
        <div className="btn btn-arr">
          <GoTriangleDown />
        </div>
      </div>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ x: 100, opacity: 0, scaleY: 0 }}
            animate={{ x: 0, opacity: 1, scaleY: 1 }}
            exit={{ x: 100, opacity: 0, scaleY: 0 }}
            className="q-bar"
          >
            <h3>{t("answer")}</h3>
            {/* <PortableText
              value={locale === "en" ? d.aen : d.aid}
            ></PortableText> */}
            <RichText data={locale === "en" ? d.aen : d.aid}></RichText>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
