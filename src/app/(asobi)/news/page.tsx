import React from "react";
import TransitionContainer from "../components/PageTransitionWrapper/TransitionContainer";

import "./news.scss";
import News from "./News";
import { getTranslations } from "next-intl/server";
import { fetchData, urlFor } from "../db/sanity";
import NewsCategory from "./NewsCategory";
type Props = {
  searchParams: Promise<{
    c: string;
  }>;
};

// fn_lbb ->,
// 			fn_lt ->,
// 			fn_r ->
export default async function Page({ searchParams }: Props) {
  const t = await getTranslations("news");
  const nl = await fetchData<any>(`
		*[_type == 'news_featured' && preset == 'main'][0]{
			fn_lt ->{
				title,
				excerpt,
				banner,
				slug,
				tags,
				category->
			},
			fn_lba ->{
				title,
				banner,
				slug,
				tags,
				category->
			},
			fn_lbb ->{
				title,
				banner,
				slug,
				tags,
				category->
			},
			fn_r ->{
				title,
				banner,
				excerpt,
				slug,
				tags,
				category->
			}
		}
	`);

  const nc = await fetchData<any>(`
		*[_type == 'news_category']{
			...
		}
	`);

  const activeC = (await searchParams).c ?? nc[0].slug.current;
  console.log(activeC);
  const newsList = await fetchData<any>(`
		*[_type == 'news' && category->slug.current == '${activeC}']{
				title,
				excerpt,
				banner,
				slug,
				tags,
				category->
		} 
	`);
  const fn_lt = nl?.fn_lt;
  const fn_lba = nl?.fn_lba;
  const fn_lbb = nl?.fn_lbb;
  const fn_r = nl?.fn_r;

  return (
    <TransitionContainer key={"news"} id="p_news">
      <section id="tl-h" className="general-h">
        <h2 className="hs">{t("name")}</h2>
        <p>{t("sub")}</p>
      </section>

      {/* News Featured */}
      <section id="nft">
        <div className="confine">
          <div className="l">
            <div className="t">
              {fn_lt && (
                <News
                  title={fn_lt.title}
                  excerpt={fn_lt.excerpt}
                  img={urlFor(fn_lt.banner).height(800).url()}
                  tags={[fn_lt.category.name, ...fn_lt.tags]}
                  slug={fn_lt.slug}
                />
              )}
            </div>
            <div className="b">
              {fn_lba && (
                <News
                  title={fn_lba.title}
                  img={urlFor(fn_lba.banner).height(800).url()}
                  tags={[fn_lba.category.name, ...fn_lba.tags]}
                  slug={fn_lba.slug}
                />
              )}
              {fn_lbb && (
                <News
                  title={fn_lbb.title}
                  img={urlFor(fn_lbb.banner).height(800).url()}
                  tags={[fn_lbb.category.name, ...fn_lbb.tags]}
                  slug={fn_lbb.slug}
                />
              )}
            </div>
          </div>
          <div className="r">
            {fn_r && (
              <News
                title={fn_r.title}
                excerpt={fn_r.excerpt}
                img={urlFor(fn_r.banner).height(800).url()}
                tags={[fn_r.category.name, ...fn_r.tags]}
                slug={fn_r.slug}
              />
            )}
          </div>
        </div>
      </section>
      <NewsCategory cat={nc} active={activeC} nl={newsList} />
    </TransitionContainer>
  );
}
