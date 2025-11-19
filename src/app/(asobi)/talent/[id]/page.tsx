import TransitionContainer from "@/app/(asobi)/components/PageTransitionWrapper/TransitionContainer";
import Link from "next/link";
import React from "react";
import { FaDiscord, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoReturnUpBack } from "react-icons/io5";

import "./talent.scss";
import AudioButton from "./AudioButton";
import { getLocale, getTranslations } from "next-intl/server";
import { fetchData, urlFor } from "@/app/(asobi)/db/sanity";
import { redirect } from "next/navigation";
import TalentContact from "./TalentContact";
import { getPayload } from "payload";
import payloadConfig from "@/payload.config";
import { Media } from "@/payload-types";
type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
  const t = await getTranslations("talent");
  const locale = await getLocale();
  const ct = (await params).id;

  // const td = await fetchData<any>(`
  // 	*[_type == 'talent' && slug.current == '${ct}'][0]{
  // 		...,
  // 		vo{
  // 			d,
  // 			vf{
  // 				asset->{
  // 					url
  // 				}
  // 			}
  // 		}
  // 	}
  // `);
  const p = await getPayload({
    config: await payloadConfig,
  });
  const tdl = await p.find({
    collection: "talents",
    where: {
      slug: {
        equals: ct,
      },
    },
  });

  if (!tdl || tdl.docs.length === 0) {
    redirect("/talents");
  }
  const td = tdl.docs[0];
  return (
    <TransitionContainer key={"talent-name"} id="p_talentd">
      <section id="talent-hero">
        {" "}
        <div className="side-l"></div>
        <div className="side-r"></div>
        <div className="confine">
          <div className="ring"></div>
          <div className="sidepan"></div>
          <img src="/d/bgblur.webp" alt="" className="bg-blurs bg-blur" />
          <div className="l">
            <Link href={"/talents"} className="btn hv btn-ret">
              <IoReturnUpBack /> Talent List
            </Link>
            <div className="dzig nzig"></div>
            <h2 className="hs">{td.name}</h2>
            <p className="desc">{td["intro-text"]}</p>

            {td["Video Trailer ID"] && (
              <div className="ytembed">
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${td["Video Trailer ID"]}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            <div className="mini-contact">
              {td.contacts?.youtube && (
                <a
                  href={td.contacts.youtube.link ?? undefined}
                  target="_blank"
                  className="btn hv  btn-mc"
                >
                  <FaYoutube />
                </a>
              )}
              {td.contacts?.instagram && (
                <a
                  href={td.contacts.instagram.link ?? undefined}
                  target="_blank"
                  className="btn hv  btn-mc"
                >
                  <FaInstagram />
                </a>
              )}
              {td.contacts?.x && (
                <a
                  href={td.contacts.x.link ?? undefined}
                  className="btn  hv btn-mc"
                >
                  <FaDiscord />
                </a>
              )}
            </div>
          </div>
          <div className="r">
            <img
              src={(td.arts?.hbd as Media)?.url ?? undefined}
              alt=""
              className="tal-arts"
            />
            <h2 className="hs tn-big">{td.name.toUpperCase()}</h2>
          </div>
        </div>
      </section>
      <div id="vocal">
        <img
          src={(td.arts?.vbg as Media)?.url ?? undefined}
          alt=""
          className="bg-side"
        />
        <div className="confine">
          <div className="l"></div>
          <div className="r">
            <div className="panel">
              <div className="wrapper">
                <p className="dia">{td["dialouge-text"]}</p>
                {td["audio-file"] && (
                  <AudioButton
                    file={(td["audio-file"] as Media)?.url ?? "/other.mp3"}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="talent-detail">
        <div className="panel">
          <img src="/d/bgblur.webp" alt="" className="bg-blur" />
          <div className="wrapper">
            <div className="l">
              <div className="td-h">
                <p className="sh">{t("talent_top")}</p>
                <h2 className="hmain">{td.name}</h2>
              </div>

              <div className="bio-p">
                <p>{td.bio}</p>
                <img src={(td.arts?.logo as Media)?.url ?? undefined} alt="" />
              </div>

              <div className="td-d">
                <div className="info-list">
                  {td["info-list"]?.map((il) => {
                    return (
                      <div className="i" key={il.id}>
                        <h2>{locale && "en" ? il.ten : il.tid}</h2>
                        <p>{il.value}</p>
                      </div>
                    );
                  })}
                  {/* <div className="i">
                    <h2>Info Title</h2>
                    <p>Info Description</p>
                  </div> */}
                </div>
                <TalentContact td={td.contacts} />
              </div>
            </div>
            <div className="r">
              <img
                src={(td.arts?.fbd as Media)?.url ?? undefined}
                alt=""
                className="fb-art"
              />
              <div className="dzig t"></div>
              <div className="dzig b"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="tv">
        <div className="bgspir a ni"></div>
        <div className="bgspir b ni"></div>
        <div className="bgspir c ni"></div>
        <div className="l">
          <h2 className="hs">{t("video")}</h2>
          <p>{t("video_sub")}</p>
        </div>
        <div className="r">
          {td["featured-videos"]?.map((v, index: number) => {
            return (
              <div className="ytembed" key={v + "" + index}>
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${v}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            );
          })}
          {/* <div className="ytembed">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/QfGuQELt1Tk?si=8Vo7KhL1AS2Hdh-2"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="ytembed">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/QfGuQELt1Tk?si=8Vo7KhL1AS2Hdh-2"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="ytembed">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/QfGuQELt1Tk?si=8Vo7KhL1AS2Hdh-2"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="ytembed">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/QfGuQELt1Tk?si=8Vo7KhL1AS2Hdh-2"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div> */}
        </div>
      </section>
    </TransitionContainer>
  );
}
