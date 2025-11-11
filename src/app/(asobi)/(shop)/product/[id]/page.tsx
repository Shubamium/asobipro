import React from "react";

type Props = {};
import "./product.scss";
export default function page({}: Props) {
  return (
    <main id="p_product">
      <div className="pd">
        <div className="l">
          <img src="/g/nthumb.png" alt="" className="product-main" />
          <div className="otherlist">
            <img src="/g/nthumb.png" alt="" className="pthumb btn hv" />
            <img src="/g/nthumb.png" alt="" className="pthumb btn hv" />
            <img src="/g/nthumb.png" alt="" className="pthumb btn hv" />
            <img src="/g/nthumb.png" alt="" className="pthumb btn hv" />
          </div>
        </div>
        <div className="r">
          <p className="cat">CATEGORY</p>
          <h2 className="pn">Product Name</h2>
          <p className="price">Rp.132.000</p>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quae.
          </p>
          <div className="variants">
            <p>Select a variant:</p>
            <div className="vl">
              <p className="btn hv v select">Variant 1</p>
              <p className="btn hv v">Variant 2</p>
              <p className="btn hv v">Variant 3</p>
              <p className="btn hv v">Variant 4</p>
            </div>
          </div>

          <div className="paction">
            <button className="btn btn-main hv">Add to Cart</button>
            <input
              type="number"
              className="numput"
              min={0}
              max={100}
              placeholder="1"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
