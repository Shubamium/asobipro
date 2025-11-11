import React from "react";

type Props = {};
import "./shop.scss";
import { FaArrowRight, FaFilter, FaSearch } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
export default function Shop({}: Props) {
  return (
    <main id="p_shop">
      <section id="tl-h" className="general-h">
        <h2 className="hs">Shop</h2>
        <p>Placeholder text here!</p>
        <div className="bg-slant"></div>
      </section>
      <section id="sh">
        <div className="searchbar">
          <FaSearch className="ico" />
          <input type="search" />
        </div>

        <div className="action">
          <Link href={"/track"} className="btn btn-shoph">
            Track My Order <FaArrowRightLong />
          </Link>
          <button className="btn btn-shoph">
            Category <FaFilter />
          </button>
        </div>
      </section>

      <section id="ph" className="product-list">
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
            <Link href={"/product/product-name"} className="btn hv btn-buy">
              Buy
            </Link>
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
      </section>
    </main>
  );
}
