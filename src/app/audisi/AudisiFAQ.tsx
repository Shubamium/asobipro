import React from "react";
import { Question } from "../HomeFAQ";
import { FaQ } from "react-icons/fa6";
import { BsQuestionCircleFill } from "react-icons/bs";
import { getTranslations } from "next-intl/server";

type Props = {};

export default async function AudisiFAQ({}: Props) {
  const t = await getTranslations("audisi");
  return (
    <section id="af" className="confine">
      <div className="l">
        <h2>
          <BsQuestionCircleFill />
          {t("faq")}
        </h2>
        <p>{t("faqsub")}</p>
      </div>
      <div className="question-container r">
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
    </section>
  );
}
