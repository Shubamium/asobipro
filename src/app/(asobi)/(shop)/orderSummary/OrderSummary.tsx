import React from "react";

type Props = {
  onSubmit?: () => void;
};
import "./orderSummary.scss";
export default function OrderSummary({ onSubmit }: Props) {
  return (
    <div id="order-summary">
      <h2 className="title">Order Summary</h2>
      <div className="item-list">
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
        </div>
        <div className="checkout">
          <div className="checkout-bar">
            {onSubmit && (
              <button
                className="btn hv btn-main"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  onSubmit();
                  // Replace with onSubmit On Form Later on
                }}
              >
                Submit Order
              </button>
            )}
            <p className="total">Total: Rp.390.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
