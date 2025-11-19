"use client";
import React, { Fragment } from "react";
import { urlFor } from "../db/sanity";
import { Media, Team } from "@/payload-types";

type Props = {};

export default function TeamList({ td }: { td: Team[] }) {
  return (
    // <div>TeamList</div>
    <>
      {td.map((t) => {
        return (
          <div className="team-cat" key={t.id}>
            <p className="catnam"> {t["category-name"]}</p>
            <div className="list">
              {t["team-list"]?.map((tim) => {
                return (
                  <div
                    className="team"
                    key={tim.id}
                    onClick={() => {
                      tim.link && window.open(tim.link);
                    }}
                  >
                    <div className="wrapper">
                      <img
                        src={(tim.pfp as Media)?.url ?? undefined}
                        // src={tim.pfp && urlFor(tim.pfp).height(300).url()}
                        alt=""
                        className="pfp"
                      />
                      <div className="r">
                        <h2 className="handle">{tim.name}</h2>
                        <p className="title">{tim.role}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
