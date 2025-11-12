import React from "react";
import { FaMicrophone } from "react-icons/fa";
import { urlFor } from "../db/sanity";
import { Audition, Media } from "@/payload-types";

type Props = {};

export default async function Require({ r }: { r: Audition["requirements"] }) {
  return (
    <section id="a-require" className="a-panel">
      <div className="confine">
        <div className="g-h">
          <h2>Requirements</h2>
          <p>Jangan lewatkan informasi menarik!</p>
        </div>
        <div className="r-l">
          {r?.map((req) => {
            return (
              <div className="r" key={req.id}>
                <div className="wrapper">
                  <h2>{req.title}</h2>
                  <p>{req.description}</p>
                  {/* <img src="/" alt="" className="icon" /> */}
                  <div className="icon">
                    {/* <img src={req.icon && urlFor(req.icon).url()} alt="" /> */}
                    <img src={(req.icon as Media)?.url ?? undefined} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
