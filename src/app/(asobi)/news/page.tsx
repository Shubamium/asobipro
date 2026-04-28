import React from "react";
import TransitionContainer from "../components/PageTransitionWrapper/TransitionContainer";

import "./news.scss";
import News from "./News";
import { getTranslations } from "next-intl/server";
import { fetchData, urlFor } from "../db/sanity";
import NewsCategory from "./NewsCategory";
import payloadConfig from "@/payload.config";
import { getPayload } from "payload";
import { Media, News as NT, NewsCategory as NCT } from "@/payload-types";
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
  const p = await getPayload({
    config: await payloadConfig,
  });

  const ncd = await p.find({
    collection: "news-category",
  });
  const ncdMap = new Map();
  ncd.docs.forEach((c) => ncdMap.set(c.slug, c.id));
  console.log(ncdMap);
  // const nl = await fetchData<any>(`
  // 	*[_type == 'news_featured' && preset == 'main'][0]{
  // 		fn_lt ->{
  // 			title,
  // 			excerpt,
  // 			banner,
  // 			slug,
  // 			tags,
  // 			category->
  // 		},
  // 		fn_lba ->{
  // 			title,
  // 			banner,
  // 			slug,
  // 			tags,
  // 			category->
  // 		},
  // 		fn_lbb ->{
  // 			title,
  // 			banner,
  // 			slug,
  // 			tags,
  // 			category->
  // 		},
  // 		fn_r ->{
  // 			title,
  // 			banner,
  // 			excerpt,
  // 			slug,
  // 			tags,
  // 			category->
  // 		}
  // 	}
  // `);

  // const nc = await fetchData<any>(`
  // 	*[_type == 'news_category']{
  // 		...
  // 	}
  // `);

  const fnl = await p.findGlobal({
    slug: "featured-news",
  });
  const activeC = (await searchParams).c ?? ncd.docs[0]?.slug;
  console.log(activeC);
  const catCheck = activeC ? { in: [ncdMap.get(activeC)] } : {};

  const newsList = await p.find({
    collection: "news",
    where: {
      category: {
        ...catCheck,
      },
    },
  });
  const nld = newsList.docs;
  // const newsList = await fetchData<any>(`
  // 	*[_type == 'news' && category->slug.current == '${activeC}']{
  // 			title,
  // 			excerpt,
  // 			banner,
  // 			slug,
  // 			tags,
  // 			category->
  // 	}
  // `);

  const fn_lt = fnl["featured-left-top"] as NT;
  const fn_lba = fnl["featured-left-bottom-a"] as NT;
  const fn_lbb = fnl["featured-right-bottom-b"] as NT;
  const fn_r = fnl["featured-right"] as NT;

  const renderNews = (news: NT) => {
    if (!news) return <></>;
    const tagl = news.tags?.map((t) => t ?? "") as string[];
    const cat = (news.category as NCT)?.name;
    return (
      <News
        title={news.title}
        excerpt={news.excerpt ?? ""}
        // img={urlFor(news.banner).height(800).url()}
        img={(news.banner as Media)?.url ?? undefined}
        tags={tagl ? [cat, ...tagl] : [cat]}
        slug={news.slug}
      />
    );
  };
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
            <div className="t">{fn_lt && <>{renderNews(fn_lt)}</>}</div>
            <div className="b">
              {fn_lba && renderNews(fn_lba)}
              {fn_lbb && renderNews(fn_lbb)}
            </div>
          </div>
          <div className="r">{fn_r && renderNews(fn_r)}</div>
        </div>
      </section>
      <NewsCategory cat={ncd.docs} active={activeC} nl={nld} />
    </TransitionContainer>
  );
}
