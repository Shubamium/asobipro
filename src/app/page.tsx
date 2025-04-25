import { FaInstagram, FaYoutube } from "react-icons/fa";
import BrandStrip from "./components/brandStrip/BrandStrip";
import "./home.scss";
import HomeParticle from "./HomeParticle";
import HomeTalent from "./HomeTalent";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { RiFacebookCircleFill } from "react-icons/ri";
import HomeFAQ from "./HomeFAQ";
import TransitionContainer from "./components/PageTransitionWrapper/TransitionContainer";
import { getTranslations } from "next-intl/server";
export default async function Home() {
  const t = await getTranslations("home");
  return (
    <TransitionContainer key={"home"} id={"p_home"}>
      <section id="hero">
        <article className="main-panel">
          <div className="bg-blur de">
            <img src="/d/glow.svg" alt="" />
          </div>
          <div className="bg-grad de"></div>
          <div className="bg-panel de"></div>

          <img src="/g/icon.png" alt="" className="aso-ico" />
          <h2 className="ho">{t("hero_topText")}</h2>
          <h3 className="hs zg">{t("hero_bottomText")}</h3>
          <p className="tagline">{t("hero_tagline")}</p>
          <HomeParticle />
        </article>
      </section>

      <HomeTalent />
      <BrandStrip />

      <section id="audition">
        <div className="bg-line ni"></div>
        <img src="/g/icon-only.png" alt="" className="de aso-ico ni" />
        <div className="confine">
          <div className="audi">
            <div className="he">
              <h2 className="hs">{t("audisi_title")}</h2>
              <p>{t("audisi_sub")}</p>
            </div>

            <div className="point">
              <div className="pp">
                <img src="/g/note.svg" alt="" />
                <h2>01</h2>
                <p>{t("audisi_step1")}</p>
              </div>
              <div className="pp">
                <img src="/g/comment.svg" alt="" />
                <h2>02</h2>
                <p>{t("audisi_step2")}</p>
              </div>
              <div className="pp">
                <img src="/g/location.svg" alt="" />
                <h2>03</h2>
                <p>{t("audisi_step3")}</p>
              </div>
            </div>
          </div>
          <div className="art">
            <img src="/g/model.png" alt="" />
          </div>
        </div>
        <div className="audi-footer">
          <p className="pt">{t("audisi_noteTop")}</p>
          <p className="pb">
            {t("audisi_noteBot")}
            {/* (*) Proses sampai debut dapat memakan waktu hingga 1 tahun. */}
          </p>
        </div>
      </section>

      <BrandStrip dir={false} />

      <section id="social">
        <div className="ms confine">
          <div className="ms-h social-h">
            <h2 className="hs">{t("media_title")}</h2>
            <p>{t("media_sub")}</p>
          </div>
          <div className="ms-l">
            <div className="sc y">
              <FaYoutube />
              <div className="ac">
                <h2 className="n">Youtube</h2>
                <Link href={"https://youtube.com"} className="btn hv btn-subs">
                  Subscribe
                </Link>
              </div>
            </div>
            <div className="sc x ">
              <FaXTwitter />
              <div className="ac">
                <h2 className="n">X</h2>
                <Link href={"https://x.com"} className="btn hv btn-subs">
                  Follow
                </Link>
              </div>
            </div>
            <div className="sc i">
              <FaInstagram />
              <div className="ac">
                <h2 className="n">Instagram</h2>
                <Link href={"https://x.com"} className="btn hv btn-subs">
                  Follow
                </Link>
              </div>
            </div>
            <div className="sc f">
              <RiFacebookCircleFill />
              <div className="ac">
                <h2 className="n">Facebook</h2>
                <Link href={"https://x.com"} className="btn hv btn-subs">
                  Like
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img src="/d/glow.svg" alt="" className="glow bg-blur" />

        <div className="mc confine">
          <div className="mc-h social-h">
            <h2 className="hs">{t("merch_title")}</h2>
            <p>{t("merch_sub")}</p>
          </div>

          <div className="mc-l">
            <div className="si t">
              <img src="/g/tokped.png" alt="" />
              <div className="text">
                <h2 className="n">Tokopedia</h2>
                <a href="https://tokopedia.com">https://www.tokopedia.com/</a>
              </div>
              <a href={"https://x.com"} className="btn hv btn-subs">
                {t("merch_buy")}
              </a>
            </div>
            <div className="si s">
              <img src="/g/shopee.png" alt="" />
              <div className="text">
                <h2 className="n">Shopee</h2>
                <a href="https://tokopedia.com">https://www.tokopedia.com/</a>
              </div>
              <a href={"https://x.com"} className="btn hv btn-subs">
                {t("merch_buy")}
              </a>
            </div>
          </div>
        </div>
      </section>

      <HomeFAQ />
    </TransitionContainer>
  );
}
