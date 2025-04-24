import React from "react";
import { Question } from "../HomeFAQ";
import { FaQ } from "react-icons/fa6";
import { BsQuestionCircleFill } from "react-icons/bs";

type Props = {};

export default function AudisiFAQ({}: Props) {
  return (
    <section id="af" className="confine">
      <div className="l">
        <h2>
          <BsQuestionCircleFill />
          AUDISI FAQ
        </h2>
        <p>Jangan lewatkan informasi menarik!</p>
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
