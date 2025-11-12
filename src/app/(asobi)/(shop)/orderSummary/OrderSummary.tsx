import React from "react";

type Props = {
  hasSubmit?: boolean;
  pdl: Map<String, Product>;
  cart: CartItem[];
  total?: number;
  totalString?: string;
};
import "./orderSummary.scss";
import { Media, Product } from "@/payload-types";
import { CartItem } from "../CartProvider/CartProvider";
import { ToRupiahStr } from "@/services/currency";
export default function OrderSummary({
  hasSubmit,
  cart,
  pdl,
  total,
  totalString,
}: Props) {
  return (
    <div id="order-summary">
      <h2 className="title">Order Summary</h2>
      <div className="item-list">
        {cart.map((i, _) => {
          const pd = pdl.get(i.productId) as Product;
          return (
            <div className="item" key={i.productId + i.variant + i.qty}>
              <img
                src={(pd["main-image"] as Media).url ?? undefined}
                alt=""
                className="img"
              />
              <div className="infos">
                <div className="l">
                  <h2 className="pn">{pd.name}</h2>
                  <p className="v">{i.variant}</p>
                </div>
                <div className="r">
                  <p className="it">
                    {i.qty}x Rp.{ToRupiahStr(pd.price)}
                  </p>
                  <p className="total">
                    Total: Rp.{ToRupiahStr(i.qty * pd.price)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        {/* <div className="item">
          <img src="/g/nthumb.png" alt="" className="img" />
          <div className="infos">
            <div className="l">
              <h2 className="pn">Product Name</h2>
              <p className="v">Variant</p>
            </div>
            <div className="r">
              <p className="it">3x Rp.130.000</p>
              <p className="total">Total: Rp.390.000</p>
            </div>
          </div>
        </div>
        <div className="item">
          <img src="/g/nthumb.png" alt="" className="img" />
          <div className="infos">
            <div className="l">
              <h2 className="pn">Product Name</h2>
              <p className="v">Variant</p>
            </div>
            <div className="r">
              <p className="it">3x Rp.130.000</p>
              <p className="total">Total: Rp.390.000</p>
            </div>
          </div>
        </div> */}
        <div className="checkout">
          <div className="checkout-bar">
            {hasSubmit && (
              <button
                className="btn hv btn-main"
                type="submit"
                // onClick={(e) => {
                // e.preventDefault();
                // onSubmit();
                // Replace with onSubmit On Form Later on
                // }}
              >
                Submit Order
              </button>
            )}
            {total && <p className="total">Total: Rp.{ToRupiahStr(total)}</p>}
            {totalString && <p className="total">Total: {totalString}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
