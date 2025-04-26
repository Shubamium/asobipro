import React from "react";

type Props = {};

export default async function Guidelines({ g }: any) {
  return (
    <section id="a-guide" className="a-panel">
      <div className="confine">
        <div className="g-h">
          <h2>Guidelines</h2>
          <p>Jangan lewatkan informasi menarik!</p>
        </div>
        <div className="g-l">
          {g?.map((gd: any) => {
            return (
              <div className="g" key={gd._key}>
                <h2>{gd.t}</h2>
                <p>{gd.v}</p>
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
