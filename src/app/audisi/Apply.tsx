"use client";
import React from "react";

type Props = {};

export default function Apply({}: Props) {
  return (
    <section
      id="a-apply"
      className="a-panel"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="l">
        <img src="/g/htal2.png" alt="" />
      </div>
      <form className="r">
        <div className="f-h">
          <h2>Form Audisi</h2>
          <p>Jangan lewatkan informasi menarik!</p>
        </div>
        <div className="ig">
          <div className="i">
            <label htmlFor="name">Name</label>
            <input name="name" placeholder="Enter your name here..."></input>
          </div>
          <div className="i">
            <label htmlFor="email">Email</label>
            <input name="email" placeholder="Enter your email here..."></input>
          </div>
        </div>
        <div className="ig">
          <div className="i">
            <label htmlFor="age">Age</label>
            <input name="age" placeholder="Enter your age here..."></input>
          </div>
          <div className="i">
            <label htmlFor="generation">Generation</label>
            <input name="email" placeholder="Generation to audition..."></input>
          </div>
        </div>
        <div className="i">
          <label htmlFor="generation">Message</label>
          <textarea name="email" placeholder="Message to audition..." />
        </div>
        <button type="submit" className="btn hv btn-sub">
          {" "}
          Apply
        </button>
      </form>
    </section>
  );
}
