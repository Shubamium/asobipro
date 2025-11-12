"use client";
import { TalentGeneration } from "@/payload-types";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  gl: TalentGeneration[];
  act?: string;
};

export default function GenerationControl({ gl, act }: Props) {
  const router = useRouter();
  return (
    <div className="controls">
      {gl?.map((gen) => {
        return (
          <button
            className={`btn hv btn-gen ${gen.slug == act && "act"}`}
            onClick={() => {
              router.push("/talents?g=" + gen.slug, {
                scroll: false,
              });
            }}
            key={gen.slug + "gen button"}
          >
            {gen["generation-name"]}
          </button>
        );
      })}
      {/* <button className={`btn hv btn-gen ${false}`}>Generation 2</button> */}
      {/* <button className={`btn hv btn-gen ${false}`}>Generation 3</button> */}
    </div>
  );
}
