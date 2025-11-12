import { Audition } from "@/payload-types";
import React from "react";

type Props = {};

export default async function Guidelines({ g }: { g: Audition["guidelines"] }) {
  return (
    <section id="a-guide" className="a-panel">
      <div className="confine">
        <div className="g-h">
          <h2>Guidelines</h2>
          <p>Jangan lewatkan informasi menarik!</p>
        </div>
        <div className="g-l">
          {g?.map((gd) => {
            return (
              <div className="g" key={gd.id}>
                <h2>{gd.title}</h2>
                <p>{gd.description}</p>
              </div>
            );
          })}
          {/* <div className="g">
            <h2>Guide Title</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
          </div>
          <div className="g">
            <h2>Guide Title</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
          </div>
          <div className="g">
            <h2>Guide Title</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
          </div>
          <div className="g">
            <h2>Guide Title</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
          </div>
          <div className="g">
            <h2>Guide Title</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
