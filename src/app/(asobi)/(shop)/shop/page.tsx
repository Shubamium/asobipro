import React from "react";

import "./shop.scss";
import { FaArrowRight, FaFilter, FaSearch } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { getPayload } from "payload";
import payloadConfig from "@/payload.config";
import { Media, Product, ProductCategory } from "@/payload-types";
import { ToRupiahStr } from "@/services/currency";
import FilterSearch from "./FilterSearch";

type Props = {
  searchParams: Promise<{
    c?: string;
    s?: string;
  }>;
};

export default async function Shop({ searchParams }: Props) {
  const sp = await searchParams;
  const payload = await getPayload({
    config: await payloadConfig,
  });
  const category = await payload.find({
    collection: "product-category",
  });
  const cl = category.docs;

  const clKeyMap = new Map();
  cl.forEach((c) => clKeyMap.set(c.name, c.id));

  const searchCheck = sp.s
    ? {
        like: sp.s,
      }
    : {};
  const categoryCheck =
    sp.c && sp.c !== "all"
      ? {
          in: [clKeyMap.get(sp.c)],
        }
      : {};
  const product = await payload.find({
    collection: "product",
    where: {
      name: searchCheck,
      categories: categoryCheck,
    },
  });

  const toRender = product.docs;

  return (
    <main id="p_shop">
      <section id="tl-h" className="general-h">
        <h2 className="hs">Shop</h2>
        <p>Placeholder text here!</p>
        <div className="bg-slant"></div>
      </section>
      <FilterSearch cl={cl} />

      <section id="ph" className="product-list">
        {toRender.map((p: Product) => {
          return (
            <div className="pcard" key={p.id}>
              <div className="category">
                <p>{(p.categories as ProductCategory).name}</p>
              </div>
              <div className="img">
                <img src={(p["main-image"] as Media).url ?? undefined} alt="" />
              </div>
              <div className="info">
                <h2 className="n">{p.name}</h2>
                <p className="desc">{p["mini-description"]}</p>
              </div>
              <div className="paction">
                <p className="price">Rp. {ToRupiahStr(p.price)}</p>
                <Link href={`/product/${p.slug}`} className="btn hv btn-buy">
                  Buy
                </Link>
              </div>
            </div>
          );
        })}
        {/* <div className="pcard">
          <div className="category">
            <p>CATEGORY</p>
          </div>
          <div className="img">
            <img src="/g/nthumb.png" alt="" />
          </div>
          <div className="info">
            <h2 className="n">Product Name</h2>
            <p className="desc">Product Description</p>
          </div>
          <div className="paction">
            <p className="price">Rp.130.000</p>
            <button className="btn hv btn-buy">Buy</button>
          </div>
        </div>
        <div className="pcard">
          <div className="category">
            <p>CATEGORY</p>
          </div>
          <div className="img">
            <img src="/g/nthumb.png" alt="" />
          </div>
          <div className="info">
            <h2 className="n">Product Name</h2>
            <p className="desc">Product Description</p>
          </div>
          <div className="paction">
            <p className="price">Rp.130.000</p>
            <button className="btn hv btn-buy">Buy</button>
          </div>
        </div>
        <div className="pcard">
          <div className="category">
            <p>CATEGORY</p>
          </div>
          <div className="img">
            <img src="/g/nthumb.png" alt="" />
          </div>
          <div className="info">
            <h2 className="n">Product Name</h2>
            <p className="desc">Product Description</p>
          </div>
          <div className="paction">
            <p className="price">Rp.130.000</p>
            <button className="btn hv btn-buy">Buy</button>
          </div>
        </div>
        <div className="pcard">
          <div className="category">
            <p>CATEGORY</p>
          </div>
          <div className="img">
            <img src="/g/nthumb.png" alt="" />
          </div>
          <div className="info">
            <h2 className="n">Product Name</h2>
            <p className="desc">Product Description</p>
          </div>
          <div className="paction">
            <p className="price">Rp.130.000</p>
            <button className="btn hv btn-buy">Buy</button>
          </div>
        </div>
        <div className="pcard">
          <div className="category">
            <p>CATEGORY</p>
          </div>
          <div className="img">
            <img src="/g/nthumb.png" alt="" />
          </div>
          <div className="info">
            <h2 className="n">Product Name</h2>
            <p className="desc">Product Description</p>
          </div>
          <div className="paction">
            <p className="price">Rp.130.000</p>
            <button className="btn hv btn-buy">Buy</button>
          </div>
        </div> */}
      </section>
    </main>
  );
}
