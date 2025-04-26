import React from "react";
import TransitionContainer from "../components/PageTransitionWrapper/TransitionContainer";

import "./talents.scss";
import RouterLink from "../components/routerLink/RouterLink";
import { getTranslations } from "next-intl/server";
import { fetchData, urlFor } from "../db/sanity";
import GenerationControl from "./GenerationControl";
import { AnimatePresence } from "motion/react";
type Props = {
  searchParams: Promise<{
    g: string;
  }>;
};

export default async function Page({ searchParams }: Props) {
  const t = await getTranslations("talent");
  let gl = await fetchData<any[]>(`*[
		_type == 'generation']{...}`);

  gl = gl.reverse();
  const act = (await searchParams).g ?? gl[0].slug.current;
  const tl = await fetchData<any[]>(`
		*[_type == 'talent' && generation -> slug.current == '${act}']{
			name,
			slug,
			pfp
		}
	`);
  return (
    <TransitionContainer key={"talent"} id="p_talent">
      <section id="tl-h" className="general-h">
        <h2 className="hs">TALENT</h2>
        <p>{t("list_sub")}</p>
      </section>

      <section id="tl-l">
        <GenerationControl gl={gl} act={act} />

        <div className="list">
          <AnimatePresence mode="wait">
            {tl?.map((t: any, index: number) => {
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
                  key={t._id}
                  to={`/talent/${t.slug.current}`}
                >
                  <div className="wrapper">
                    <img
                      src={t.pfp && urlFor(t.pfp).height(800).url()}
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
