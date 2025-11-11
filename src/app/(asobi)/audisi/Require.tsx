import React from "react";
import { FaMicrophone } from "react-icons/fa";
import { urlFor } from "../db/sanity";

type Props = {};

export default async function Require({ r }: any) {
  return (
    <section id="a-require" className="a-panel">
      <div className="confine">
        <div className="g-h">
          <h2>Requirements</h2>
          <p>Jangan lewatkan informasi menarik!</p>
        </div>
        <div className="r-l">
          {r?.map((req: any) => {
            return (
              <div className="r" key={req._id}>
                <div className="wrapper">
                  <h2>{req.t}</h2>
                  <p>{req.v}</p>
                  {/* <img src="/" alt="" className="icon" /> */}
                  <div className="icon">
                    <img src={req.icon && urlFor(req.icon).url()} alt="" />
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
