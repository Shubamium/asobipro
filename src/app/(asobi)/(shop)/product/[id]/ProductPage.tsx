"use client";
import React, { useState } from "react";
import { Media, Product, ProductCategory } from "@/payload-types";
import { AnimatePresence, motion } from "motion/react";
import { ToRupiahStr } from "@/services/currency";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { useCart } from "../../CartProvider/CartProvider";
import { useRouter } from "next/navigation";
type Props = {
  pd: Product;
};

export default function ProductPage({ pd }: Props) {
  const extraImages = pd["extra-images"]?.map((i) => i.image as Media) ?? [];

  const imagelist = [pd["main-image"] as Media, ...extraImages];
  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(0);

  const { addToCart } = useCart();
  const router = useRouter();
  return (
    <main id="p_product">
      <div className="pd">
        <div className="l">
          <AnimatePresence mode="wait">
            {/* Swich Logic */}
            <motion.img
              src={(imagelist[activeImage] as Media)?.url ?? undefined}
              alt=""
              initial={{ x: 100, opacity: 0, scaleY: 0 }}
              animate={{ x: 0, opacity: 1, scaleY: 1 }}
              exit={{ x: -100, opacity: 0, scaleY: 0 }}
              key={activeImage + "image"}
              className="product-main"
            />
          </AnimatePresence>
          <div className="otherlist">
            {imagelist &&
              imagelist.length > 1 &&
              imagelist.map((i, _) => {
                return (
                  <img
                    src={i.url ?? undefined}
                    alt=""
                    onClick={() => {
                      setActiveImage(_);
                    }}
                    onMouseOver={() => {
                      setActiveImage(_);
                    }}
                    className="pthumb btn hv"
                    key={i.id + "imgno" + _}
                  />
                );
              })}

            {/* <img src="/g/nthumb.png" alt="" className="pthumb btn hv" />
            <img src="/g/nthumb.png" alt="" className="pthumb btn hv" />
            <img src="/g/nthumb.png" alt="" className="pthumb btn hv" />
            <img src="/g/nthumb.png" alt="" className="pthumb btn hv" /> */}
          </div>
        </div>
        <div className="r">
          <p className="cat">{(pd.categories as ProductCategory)?.name}</p>
          <h2 className="pn">{pd.name}</h2>
          <p className="price">Rp.{ToRupiahStr(pd.price)}</p>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quae.
          </p>
          <RichText data={pd.description as SerializedEditorState} />
          <div className="variants">
            <p>Select a variant:</p>
            <div className="vl">
              {pd.variants &&
                pd.variants.length !== 1 &&
                pd.variants?.map((v, i) => {
                  return (
                    <p
                      className={`btn hv v ${selectedVariant === i ? "select" : ""}`}
                      key={v}
                      onClick={() => {
                        setSelectedVariant(i);
                      }}
                    >
                      {v}
                    </p>
                  );
                })}
              {/* <p className="btn hv v">Variant 2</p>
              <p className="btn hv v">Variant 3</p>
              <p className="btn hv v">Variant 4</p> */}
            </div>
          </div>

          <div className="paction">
            <button
              className="btn btn-main hv"
              onClick={() => {
                alert("Product added to cart!");

                addToCart({
                  productId: pd.id,
                  qty,
                  variant: pd.variants?.[selectedVariant] ?? "NO_VARIANTS", // NO VARIANTS IF Variant is not sycned or empty
                });
                router.push("/cart");
              }}
            >
              Add to Cart
            </button>
            <input
              type="number"
              className="numput"
              min={1}
              max={100}
              placeholder="1"
              value={qty}
              onChange={(e) => {
                setQty(parseInt(e.target.value));
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
