"use client";
import React, { Fragment, useEffect, useMemo, useState } from "react";
type Props = {};
import "./cart.scss";
import AudisiControl from "../../audisi/AudisiControl";
import { cartTotal, useCart } from "../CartProvider/CartProvider";
import { GetProductList } from "@/services/ProductData";
import { Product } from "@/payload-types";
import { FaSpinner } from "react-icons/fa6";
import { CartDisplayer } from "./CartDisplayer";
import { Checkout } from "./Checkout";
import { Confirm } from "./Confirm";

export default function Cart({}: Props) {
  const [status, setStatus] = useState("Cart");
  const [orderID, setOrderID] = useState<null | string>(null);
  const { cart, removeFromCart, changeQty, clearCart } = useCart();
  const [loading, setLoading] = useState(false);

  const [productDataLookup, setProductDataLookup] = useState<
    Map<string, Product>
  >(new Map());
  useEffect(() => {
    async function fetchProductLookups() {
      const lookup = await GetProductList(cart.map((i) => i.productId));
      setProductDataLookup(lookup);
    }
    if (cart.length > 0) {
      fetchProductLookups();
    }
  }, [cart]);

  const total = cartTotal(cart, productDataLookup);
  return (
    <main id="p_cart">
      <div className={`loading ${loading ? "l" : "o"}`}>
        <FaSpinner />
        <p>Loading...</p>
      </div>
      <div className="general-h">
        <h2 className="hs">Cart</h2>
        <p>Placeholder text here!</p>
        <div className="bg-slant"></div>
      </div>
      <AudisiControl
        pages={{
          Cart: (
            <CartDisplayer
              onCheckout={() => {
                setStatus("Checkout");
              }}
              items={cart}
              pdl={productDataLookup}
              removeFromCart={removeFromCart}
              changeQty={changeQty}
              cartTotal={total}
            />
          ),
          Checkout: (
            <Checkout
              onSubmit={(success, id) => {
                setStatus("Confirm");
                setOrderID(id ?? null);
                if (success) {
                  clearCart();
                }
                setLoading(false);
              }}
              onBeforeSubmit={() => {
                setLoading(true);
              }}
              cart={cart}
              pdl={productDataLookup}
              total={total}
            />
          ),
          Confirm: <Confirm orderID={orderID ?? ""} />,
        }}
        disabled={true}
        controlPage={status}
      />
    </main>
  );
}
