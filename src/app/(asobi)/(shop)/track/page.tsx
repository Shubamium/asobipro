import React from "react";

type Props = {};
import "./track.scss";
import AudisiControl from "../../audisi/AudisiControl";
import OrderSummary from "../orderSummary/OrderSummary";
export default async function Track({}: Props) {
  return (
    <div id="track">
      <div className="general-h">
        <h2 className="hs">Track My Order</h2>
        <p>Placeholder text here!</p>
        <div className="bg-slant"></div>
      </div>
      <div className="tracking">
        <div className="forms">
          <div className="i">
            <label htmlFor="trackid">Tracking ID</label>
            <input type="text" name="trackid" placeholder="ORDER#2132" />
          </div>
          <button className="btn hv btn-main">CHECK</button>
        </div>
      </div>
      <div className="track-result">
        <AudisiControl
          pages={{
            processing: <div></div>,
            "On Progress": <div></div>,
            delivered: <div></div>,
          }}
          controlPage="processing"
          disabled
        />

        <div className="track-summary">
          <div className="l">
            <h2>ORDER STATUS:</h2>
            <p>PROCESSING</p>
          </div>
          <div className="r">
            <div className="info">
              <p>Tracking ID: #abcd123</p>
            </div>
          </div>
        </div>
        <div className="track-note">
          <p>
            Status Text Here: You can customize here what to write for the
            customer to see when they track your order
          </p>
        </div>
        <OrderSummary />
      </div>
    </div>
  );
}
