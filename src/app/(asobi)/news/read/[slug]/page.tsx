import TransitionContainer from "@/app/(asobi)/components/PageTransitionWrapper/TransitionContainer";
import React from "react";

import "./read.scss";
import Link from "next/link";
import { GiReturnArrow } from "react-icons/gi";
import { GrReturn } from "react-icons/gr";
import { RiArrowUpLine, RiFacebookCircleFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { getTranslations } from "next-intl/server";
import { fetchData, urlFor } from "@/app/(asobi)/db/sanity";
import { redirect } from "next/navigation";
import { PortableText } from "next-sanity";
import { getPayload } from "payload";
import payloadConfig from "@/payload.config";
import { Media, NewsCategory } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function NewsRead({ params }: Props) {
  const t = await getTranslations("news");
  const tf = await getTranslations("footer");

  const slug = (await params).slug;
  // const n = await fetchData<any>(
  //   `*[_type == 'news' && slug.current == '${slug}']{...,category->}[0]`
  // );
  const p = await getPayload({
    config: await payloadConfig,
  });

  const nd = await p.find({
    collection: "news",
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (!nd || nd.docs.length === 0) {
    redirect("/news");
  }
  const n = nd.docs[0];
  return (
    <TransitionContainer key={"news-read"} id="p_read">
      <div id="top"></div>
      <section id="r-h">
        <div className="banner">
          <img src={(n.banner as Media)?.url ?? undefined} alt="" />
          {/* <img src={nd.banner && urlFor(n.banner).height(1280).url()} alt="" /> */}
        </div>
        <div className="ht">
          <div className="confine">
            <div className="t">
              <h2> {n.title}</h2>
            </div>
            <div className="b">
              <div className="tlist">
                {[
                  (n.category as NewsCategory)?.name ?? null,
                  ...(n.tags as string[]),
                ].map((t: any) => {
                  return (
                    <div className="tags" key={t}>
                      <p className="t">{t}</p>
                    </div>
                  );
                })}
              </div>

              <div className="date">
                <p>{new Date(n["published-date"] ?? "").toDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="r-a">
        <div className="l">
          <Link href={"/news"} className="btn btn-ret">
            <GrReturn />
            {t("list")}
          </Link>
        </div>
        <article className="at">
          {/* <PortableText
            value={n.article}
            components={{
              types: {
                image: ({ value }) => {
                  return <img src={value && urlFor(value).url()} />;
                },
              },
            }}
          /> */}
          <RichText data={n.article}></RichText>
        </article>
        <div className="r"></div>
      </section>

      <section id="r-f">
        <div className="confine">
          <div className="wrapper">
            <div className="t">
              <div className="l">
                <Link href={"/news"} className="btn hv btn-rf">
                  <GrReturn /> {t("list")}
                </Link>
                <Link href={"#top"} className="btn hv btn-rf">
                  <RiArrowUpLine /> {t("scroll")}
                </Link>
              </div>
              <div className="r">
                <img src="/g/logo-w.png" alt="" />
              </div>
            </div>

            <div className="b">
              <h2>{tf("copyright")}</h2>

              <div className="ct">
                <div className="ft-contact">
                  <a href="#" target="_blank" className="btn btn-fc">
                    {" "}
                    <FaYoutube />
                  </a>
                  <a href="#" target="_blank" className="btn btn-fc">
                    {" "}
                    <FaXTwitter />
                  </a>
                  <a href="#" target="_blank" className="btn btn-fc">
                    {" "}
                    <FaInstagram />
                  </a>
                  <a href="#" target="_blank" className="btn btn-fc">
                    {" "}
                    <RiFacebookCircleFill />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TransitionContainer>
  );
}
