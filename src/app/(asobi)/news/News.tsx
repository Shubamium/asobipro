"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  excerpt?: string;
  title: string;
  tags: string[];
  img: string;
  slug: {
    current: string;
  };
};

export default function News({ excerpt, title, tags, img, slug }: Props) {
  const router = useRouter();
  return (
    <div
      className="news"
      onClick={() => {
        router.push("news/read/" + slug.current);
      }}
    >
      <div className="wrapper">
        <img src={img} alt="" className="nimg" />
        <h2 className="nt">{title}</h2>
        {excerpt && <p className="excerpt">{excerpt}</p>}
        <div className="tags">
          {tags.map((t: any) => {
            return (
              <div className="t" key={t}>
                <p>{t}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
