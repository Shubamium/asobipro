import React from "react";
import TransitionContainer from "../components/PageTransitionWrapper/TransitionContainer";

import "./talents.scss";
import RouterLink from "../components/routerLink/RouterLink";
import { getTranslations } from "next-intl/server";
import { fetchData, urlFor } from "../db/sanity";
import GenerationControl from "./GenerationControl";
import { AnimatePresence } from "motion/react";
import { getPayload } from "payload";
import payloadConfig from "@/payload.config";
import { Media } from "@/payload-types";
type Props = {
  searchParams: Promise<{
    g?: string;
  }>;
};

export default async function Page({ searchParams }: Props) {
  const t = await getTranslations("talent");
  // let gl = await fetchData<any[]>(`*[
  // 	_type == 'generation']{...}`);

  // gl = gl.reverse();

  const p = await getPayload({
    config: await payloadConfig,
  });

  const tlg = await p.find({
    collection: "talent-generation",
  });
  const tlgMap = new Map();
  tlg.docs.forEach((g) => tlgMap.set(g.slug, g.id));

  const act = (await searchParams).g;
  const categoryCheck = act
    ? {
        generation: {
          in: [tlgMap.get(act)],
        },
      }
    : {};
  // const tl = await fetchData<any[]>(`
  // 	*[_type == 'talent' && generation -> slug.current == '${act}']{
  // 		name,
  // 		slug,
  // 		pfp
  // 	}
  // `);

  // const actCheck = act ? { equals: act } : {};
  const tld = await p.find({
    collection: "talents",
    where: {
      ...(categoryCheck as any),
    },
  });

  return (
    <TransitionContainer key={"talent"} id="p_talent">
      <section id="tl-h" className="general-h">
        <h2 className="hs">TALENT</h2>
        <p>{t("list_sub")}</p>
      </section>

      <section id="tl-l">
        <GenerationControl gl={tlg.docs.reverse()} act={act} />

        <div className="list">
          <AnimatePresence mode="wait">
            {tld.docs?.map((t, index: number) => {
              return (
                <RouterLink
                  initial={{
                    // y:-0,
                    rotate: -20,
                    scale: 2,
                    opacity: 0,
                  }}
                  animate={{
                    // y:-0,
                    rotate: 0,
                    scale: 1,
                    opacity: 1,
                  }}
                  exit={{
                    // y:-0,
                    rotate: 50,
                    scale: 0,
                    opacity: 0,
                  }}
                  transition={{
                    delay: 0.2 * index,
                    ease: "backOut",
                  }}
                  className="btn tc"
                  key={t.id}
                  to={`/talent/${t.slug}`}
                >
                  <div className="wrapper">
                    <img
                      // src={t.pfp && urlFor(t.pfp).height(800).url()}
                      src={(t.pfp as Media)?.url ?? undefined}
                      alt=""
                      className="tal-img"
                    />
                    <div className="name">
                      <h2>{t.name}</h2>
                    </div>
                    <div className="name-dec"></div>
                  </div>
                </RouterLink>
              );
            })}
          </AnimatePresence>
        </div>
      </section>
    </TransitionContainer>
  );
}
