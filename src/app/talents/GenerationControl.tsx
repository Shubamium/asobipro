"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function GenerationControl({ gl, act }: any) {
  const router = useRouter();
  return (
    <div className="controls">
      {gl?.map((gen: any) => {
        return (
          <button
            className={`btn hv btn-gen ${gen.slug.current == act && "act"}`}
            onClick={() => {
              router.push("/talents?g=" + gen.slug.current, {
                scroll: false,
              });
            }}
            key={gen.slug.current + "gen button"}
          >
            {gen.name}
          </button>
        );
      })}
      {/* <button className={`btn hv btn-gen ${false}`}>Generation 2</button> */}
      {/* <button className={`btn hv btn-gen ${false}`}>Generation 3</button> */}
    </div>
  );
}
