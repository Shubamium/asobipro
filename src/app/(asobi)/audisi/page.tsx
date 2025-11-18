import React from "react";
import TransitionContainer from "../components/PageTransitionWrapper/TransitionContainer";
import "./audisi.scss";
import AudisiControl from "./AudisiControl";
import Guidelines from "./Guidelines";
import Require from "./Require";
import Apply from "./Apply";
import AudisiFAQ from "./AudisiFAQ";
import { getTranslations } from "next-intl/server";
import { fetchData } from "../db/sanity";
import { getPayload } from "payload";
import payloadConfig from "@/payload.config";
type Props = {};

export default async function Page({}: Props) {
  const t = await getTranslations("audisi");
  // const a = await fetchData<any>(`
  // 	*[_type == 'audisi' && preset == 'main'][0]{
  // 		...
  // 	}
  // `);
  const p = await getPayload({
    config: await payloadConfig,
  });

  const a = await p.findGlobal({
    slug: "audition",
  });
  return (
    <TransitionContainer key={"audisi"} id="p_audisi">
      <div className="bg-hd">
        <section id="tl-h" className="general-h">
          <h2 className="hs">{t("name")}</h2>
          <p>{t("sub")}</p>
        </section>
      </div>

      <img src="/d/bgblur.webp" alt="" className="bg-blur" />
      <AudisiControl
        // guide={<Guidelines g={a.gl} />}
        // require={<Require r={a.rq} />}
        // apply={<Apply />}
        pages={{
          guide: <Guidelines g={a.guidelines}></Guidelines>,
          require: <Require r={a.requirements}></Require>,
          apply: <Apply />,
        }}
      />

      <AudisiFAQ faq={a["audisi-faq"]} />
    </TransitionContainer>
  );
}
