"use client";
import React, { useState } from "react";
import { submitAudisi } from "../db/mail";
import { FaSpinner } from "react-icons/fa";
import { useTranslations } from "next-intl";

type Props = {};

export default function Apply({}: Props) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gen, setGen] = useState("");
  const [mess, setMess] = useState("");

  const t = useTranslations("form");
  const submit = async () => {
    setLoading(true);
    setStatus("Sending your message . . .");
    await submitAudisi({
      name,
      email,
      age,
      gen,
      mess,
    });

    clearForm();
    setStatus("Message submitted!");

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  const clearForm = () => {
    setStatus("");
    setName("");
    setEmail("");
    setAge("");
    setGen("");
    setMess("");
  };
  return (
    <section
      id="a-apply"
      className="a-panel"
      onSubmit={(e) => {
        e.preventDefault();
        if (loading) return false;
        submit();
      }}
    >
      <div className={`form-load ${loading ? "vis" : "hid"}`}>
        <FaSpinner />
        <p>{status}</p>
      </div>
      <div className="l">
        <img src="/g/htal2.png" alt="" />
      </div>
      <form className="r">
        <div className="f-h">
          <h2>{t("ftitle")}</h2>
          <p>{t("fsub")}</p>
        </div>
        <div className="ig">
          <div className="i">
            <label htmlFor="name">{t("name")}</label>
            <input
              name="name"
              placeholder={t("name_ph")}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            ></input>
          </div>
          <div className="i">
            <label htmlFor="email">{t("email")}</label>
            <input
              name="email"
              placeholder={t("email_ph")}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            ></input>
          </div>
        </div>
        <div className="ig">
          <div className="i">
            <label htmlFor="age">{t("age")}</label>
            <input
              name="age"
              placeholder={t("age_ph")}
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
              required
            ></input>
          </div>
          <div className="i">
            <label htmlFor="generation">{t("gen")}</label>
            <input
              name="generation"
              placeholder={t("gen_ph")}
              value={gen}
              onChange={(e) => {
                setGen(e.target.value);
              }}
              required
            ></input>
          </div>
        </div>
        <div className="i">
          <label htmlFor="message">{t("bio")}</label>
          <textarea
            value={mess}
            onChange={(e) => {
              setMess(e.target.value);
            }}
            name="message"
            placeholder={t("bio_ph")}
            required
          />
        </div>
        <button type="submit" className="btn hv btn-sub">
          {t("apply")}
        </button>
      </form>
    </section>
  );
}
