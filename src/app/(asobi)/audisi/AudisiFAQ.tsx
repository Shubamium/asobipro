import React from "react";
import { Question } from "../HomeFAQ";
import { BsQuestionCircleFill } from "react-icons/bs";
import { getTranslations } from "next-intl/server";

type Props = {};

export default async function AudisiFAQ({ faq }: any) {
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
        {faq?.map((q: any) => {
          return <Question d={q} key={q._key}></Question>;
        })}
      </div>
    </section>
  );
}
