"use client";
import React from "react";
import { urlFor } from "../db/sanity";
import { Media, Team } from "@/payload-types";

type Props = {};

export default function TeamList({ td }: { td: Team[] }) {
  return (
    // <div>TeamList</div>
    <div className="list">
      {td?.map((tim) => {
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
      {/* <div className="team">
			<div className="wrapper">
				<img src="/g/nthumb.png" alt="" className="pfp" />
				<h2 className="handle">@handle_name</h2>
				<p className="title">title atau role</p>
			</div>
		</div>
 
			<div className="wrapper">
				<img src="/g/nthumb.png" alt="" className="pfp" />
				<h2 className="handle">@handle_name</h2>
				<p className="title">title atau role</p>
			</div>
		</div>
		<div className="team">
			<div className="wrapper">
				<img src="/g/nthumb.png" alt="" className="pfp" />
				<h2 className="handle">@handle_name</h2>
				<p className="title">title atau role</p>
			</div>
		</div> */}
    </div>
  );
}
