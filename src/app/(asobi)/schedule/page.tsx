import React, { useTransition } from "react";
import TransitionContainer from "../components/PageTransitionWrapper/TransitionContainer";
import SchedRow from "./SchedRow";
import { getTranslations } from "next-intl/server";
import { getPayload } from "payload";
import payloadConfig from "@/payload.config";

type Props = {};

export default async function Page({}: Props) {
  const t = await getTranslations("schedule");

  const p = await getPayload({
    config: await payloadConfig,
  });

  const s = await p.find({
    collection: "schedule",
  });
  // const s = await fetchData<any[]>(`*[_type == 'schedules']{
  // 	...,
  // 	_id,
  // 	talent -> {
  // 		name,
  // 		pfp,
  // 		slug
  // 	},
  // 	schedule_list[]{
  // 		...,
  // 		ml[] {
  // 			pfp,
  // 			name,
  // 			link
  // 		}
  // 	}
  // }`);
  console.log(s);
  return (
    <TransitionContainer key={"sched"} id="p_sched">
      <section className="general-h">
        <h2 className="hs">SCHEDULE</h2>
        <p>{t("schedule_sub")}</p>
      </section>
      <section id="s-list">
        {s.docs?.map?.((sd, id: number) => {
          return <SchedRow sd={sd} key={sd.id + "-" + id} />;
        })}
        {/* <SchedRow /> */}
        {/* <SchedRow /> */}
        {/* <SchedRow /> */}
      </section>
    </TransitionContainer>
  );
}
