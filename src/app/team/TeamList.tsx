"use client";
import React from "react";
import { urlFor } from "../db/sanity";

type Props = {};

export default function TeamList({ td }: { td: any }) {
  return (
    // <div>TeamList</div>
    <div className="list">
      {td?.map((tim: any) => {
        return (
          <div
            className="team"
            key={tim._id}
            onClick={() => {
              tim.url && window.open(tim.url);
            }}
          >
            <div className="wrapper">
              <img
                src={tim.pfp && urlFor(tim.pfp).height(300).url()}
                alt=""
                className="pfp"
              />
              <h2 className="handle">{tim.n}</h2>
              <p className="title">{tim.r}</p>
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
