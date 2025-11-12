"use client";
import React, { useEffect, useState } from "react";

type Props = {};
import "./track.scss";
import AudisiControl from "../../audisi/AudisiControl";
import OrderSummary from "../orderSummary/OrderSummary";
import { Order, Product } from "@/payload-types";
import { CartItem, useCart } from "../CartProvider/CartProvider";
import { GetOrderDetail, GetProductList } from "@/services/ProductData";
export default function Track({}: Props) {
  const [pdl, setPdl] = React.useState(new Map<string, Product>());
  const [orderData, setOrderData] = useState<Order | string>("");
  // useEffect(() => {
  //   if (cart) {
  //     const fetchProductLookups = async () => {
  //       const lookup = await GetProductList(cart.map((i) => i.productId));
  //       setPdl(lookup);
  //     };
  //     if (cart.length > 0) {
  //       fetchProductLookups();
  //     }
  //   }
  // }, [cart]);
  // const total = cartTotal(cart, pdl);
  const trackOrder = async (id: string) => {
    const detail = await GetOrderDetail(id);
    const pdIDl =
      detail?.products?.map((i) => (i.product as Product)?.id) ?? [];
    const pdl = await GetProductList(pdIDl);
    setPdl(pdl);
    setOrderData(detail as Order);
  };
  const renderOrder = (order: Order) => {
    const cart =
      order.products?.map((i) => {
        return {
          productId: (i.product as Product)?.id ?? "",
          qty: i.quantity ?? 0,
          variant: i.variant as string,
        } as CartItem;
      }) ?? [];
    return (
      <div className="track-result">
        <AudisiControl
          pages={{
            processing: <div></div>,
            "On Progress": <div></div>,
            delivered: <div></div>,
          }}
          controlPage={order.status ?? "processing"}
          disabled
        />

        <div className="track-summary">
          <div className="l">
            <h2>ORDER STATUS:</h2>
            <p>{order.status?.toUpperCase()}</p>
          </div>
          <div className="r">
            <div className="info">
              <p>Tracking ID: {order["track-id"]}</p>
            </div>
          </div>
        </div>
        <div className="track-note">
          <p>{order.note}</p>
        </div>
        <OrderSummary cart={cart} pdl={pdl} totalString={order.total} />
      </div>
    );
  };
  return (
    <div id="track">
      <div className="general-h">
        <h2 className="hs">Track My Order</h2>
        <p>Placeholder text here!</p>
        <div className="bg-slant"></div>
      </div>
      <div className="tracking">
        <form
          className="forms"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            trackOrder(formData.get("trackid") as string);
          }}
        >
          <div className="i">
            <label htmlFor="trackid">Tracking ID</label>
            <input
              type="text"
              name="trackid"
              placeholder="ORD#AA12AA1"
              required
            />
          </div>
          <button className="btn hv btn-main">CHECK</button>
        </form>
      </div>
      {orderData == null && (
        <div className="track-result">
          <p>Invalid Tracking ID, Order not found.</p>
        </div>
      )}
      {orderData && renderOrder(orderData as Order)}
    </div>
  );
}
