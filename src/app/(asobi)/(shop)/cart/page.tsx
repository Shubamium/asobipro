"use client";
import React, { useState } from "react";

type Props = {};
import "./cart.scss";
import AudisiControl from "../../audisi/AudisiControl";
import OrderSummary from "../orderSummary/OrderSummary";
import { IoCheckmarkCircle } from "react-icons/io5";
import { BsClipboard, BsClipboard2 } from "react-icons/bs";
import { BiCopy } from "react-icons/bi";
export default function CartCheckoutConfirm({}: Props) {
  const [status, setStatus] = useState("Checkout");
  return (
    <main id="p_cart">
      <div className="general-h">
        <h2 className="hs">Cart</h2>
        <p>Placeholder text here!</p>
        <div className="bg-slant"></div>
      </div>
      <AudisiControl
        pages={{
          Cart: (
            <Cart
              onCheckout={() => {
                setStatus("Checkout");
              }}
            />
          ),
          Checkout: <Checkout onSubmit={() => setStatus("Confirm")} />,
          Confirm: <Confirm />,
        }}
        disabled={true}
        controlPage={status}
      />
    </main>
  );
}

export function Cart({ onCheckout }: any) {
  return (
    <div id="cart">
      <div className="empty-cart">
        <p>Cart is empty, Please add product to checkout!</p>
      </div>
      <div className="cart-item">
        <img src="/g/nthumb.png" alt="" className="pimg" />
        <div className="infos">
          <h2 className="pn">Product Name</h2>
          <p className="variant">Variant</p>

          <div className="cart-action">
            <div className="left">
              <input
                type="number"
                className="numput"
                min={0}
                defaultValue={0}
              />
              <button className="btn hv btn-remove">REMOVE</button>
            </div>
            <p className="price">Rp.124.000</p>
          </div>
        </div>
      </div>
      <div className="cart-item">
        <img src="/g/nthumb.png" alt="" className="pimg" />
        <div className="infos">
          <h2 className="pn">Product Name</h2>
          <p className="variant">Variant</p>

          <div className="cart-action">
            <div className="left">
              <input type="number" className="numput" />
              <button className="btn hv btn-remove">REMOVE</button>
            </div>
            <p className="price">Rp.124.000</p>
          </div>
        </div>
      </div>
      <div className="cart-item">
        <img src="/g/nthumb.png" alt="" className="pimg" />
        <div className="infos">
          <h2 className="pn">Product Name</h2>
          <p className="variant">Variant</p>

          <div className="cart-action">
            <div className="left">
              <input type="number" className="numput" />
              <button className="btn hv btn-remove">REMOVE</button>
            </div>
            <p className="price">Rp.124.000</p>
          </div>
        </div>
      </div>

      <div className="checkout">
        <div className="checkout-bar">
          <p className="total">Rp.555.000</p>
          <button
            className="btn hv btn-main"
            onClick={() => {
              onCheckout();
            }}
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export function Checkout({ onSubmit }: any) {
  return (
    <div id="checkout">
      <div className="checkout-h">
        <div className="l">
          <h2>Checkout Information</h2>
          <p>
            Order warning and note: Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry
          </p>
        </div>
        <div className="r">
          <h2 className="th">Transfer Info</h2>
          <p className="bn">004102032</p>
          <p className="bi">{`(BANK INFO)`}</p>
        </div>
      </div>
      <form className="ch-form forms">
        <div className="ig">
          <div className="i">
            <label htmlFor="name" aria-required>
              Name
            </label>
            <input type="text" name="name" id="name" required />
          </div>
          <div className="i">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
        </div>
        <div className="ig">
          <div className="i">
            <label htmlFor="proof" aria-required>
              Proof Of Payment
            </label>
            <input
              type="file"
              name="proof"
              id="proof"
              accept="image/*"
              required
            />
          </div>
        </div>
        <div className="i">
          <label htmlFor="addr">Delivery Address</label>
          <textarea name="addr" id="addr"></textarea>
        </div>
        <img src="/d/glow.svg" alt="" className="glow bg-slur" />

        <OrderSummary
          onSubmit={() => {
            onSubmit();
          }}
        />
      </form>
    </div>
  );
}

export function Confirm({}: any) {
  return (
    <div id="confirm">
      <div className="order-status-panel">
        <div className="status-icon">
          <IoCheckmarkCircle />
        </div>
        <div className="head">
          <h2 className="oh">Order Submitted Succesfully</h2>
          <p className="oid btn hv">
            Tracking ID: #abcd123{" "}
            <span>
              <BiCopy />
            </span>
          </p>
        </div>
        <p className="note">
          Order warning and note: Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s.
        </p>
      </div>
    </div>
  );
}
