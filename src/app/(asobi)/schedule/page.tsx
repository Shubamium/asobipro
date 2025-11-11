import React, { useTransition } from "react";
import TransitionContainer from "../components/PageTransitionWrapper/TransitionContainer";
import SchedRow from "./SchedRow";
import { getTranslations } from "next-intl/server";
import { fetchData } from "../db/sanity";

type Props = {};

export default async function Page({}: Props) {
  const t = await getTranslations("schedule");
  const s = await fetchData<any[]>(`*[_type == 'schedules']{
		...,
		_id,
		talent -> {
			name,
			pfp,
			slug
		},
		schedule_list[]{
			...,
			ml[] {
				pfp,
				name,
				link
			}
		}
	}`);
  console.log(s);
  return (
    <TransitionContainer key={"sched"} id="p_sched">
      <section className="general-h">
        <h2 className="hs">SCHEDULE</h2>
        <p>{t("schedule_sub")}</p>
      </section>
      <section id="s-list">
        {s?.map((sd: any, id: number) => {
          return <SchedRow sd={sd} key={sd._id + "-" + id} />;
        })}
        {/* <SchedRow /> */}
        {/* <SchedRow /> */}
        {/* <SchedRow /> */}
      </section>
    </TransitionContainer>
  );
}
