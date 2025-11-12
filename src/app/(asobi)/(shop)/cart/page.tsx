"use client";
import React, { Fragment, useEffect, useMemo, useState } from "react";
import imageCompression from "browser-image-compression";
type Props = {};
import "./cart.scss";
import AudisiControl from "../../audisi/AudisiControl";
import OrderSummary from "../orderSummary/OrderSummary";
import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";
import { BsClipboard, BsClipboard2 } from "react-icons/bs";
import { BiCopy } from "react-icons/bi";
import { CartItem, useCart } from "../CartProvider/CartProvider";
import {
  GetProductList,
  SubmitOrder,
  SubmitOrderPayload,
} from "@/services/ProductData";
import { Media, Product } from "@/payload-types";
import { ToRupiahStr } from "@/services/currency";
import { FaSpinner } from "react-icons/fa6";

export default function CartCheckoutConfirm({}: Props) {
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
            <Cart
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

export const cartTotal = (cart: CartItem[], pdl: Map<String, Product>) => {
  let total = 0;
  cart.forEach((i) => {
    total += i.qty * (pdl.get(i.productId)?.price ?? 0);
  });
  return total;
};

function Cart({
  onCheckout,
  items,
  pdl,
  removeFromCart,
  cartTotal,
  changeQty,
}: {
  onCheckout: () => void;
  items: CartItem[];
  pdl: Map<String, Product>;
  removeFromCart: (productId: string, variant: string) => void;

  changeQty: (item: CartItem) => void;
  cartTotal: number;
}) {
  return (
    <div id="cart">
      {/* <div className="cart-item">
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
      </div> */}
      {items.length == 0 && (
        <div className="empty-cart">
          <p>Cart is empty, Please add product to checkout!</p>
        </div>
      )}
      {items &&
        items.length > 0 &&
        items.map((i, _) => {
          const pd = pdl.get(i.productId);
          if (!pd) return <Fragment key={_ + "empty"}></Fragment>;
          return (
            <div className="cart-item" key={i.productId + i.variant}>
              <img
                src={(pd["main-image"] as Media)?.url ?? undefined}
                alt=""
                className="pimg"
              />
              <div className="infos">
                <h2 className="pn">{pd?.name}</h2>
                {i.variant !== "NO_VARIANTS" && (
                  <p className="variant">{i.variant}</p>
                )}

                <div className="cart-action">
                  <div className="left">
                    <input
                      type="number"
                      className="numput"
                      value={i.qty}
                      onChange={(e) => {
                        // Implement Change qty [ done]
                        changeQty({ ...i, qty: parseInt(e.target.value) });
                      }}
                    />
                    <button
                      className="btn hv btn-remove"
                      onClick={() => {
                        // Implement Remove [Done]
                        removeFromCart(i.productId, i.variant);
                      }}
                    >
                      REMOVE
                    </button>
                  </div>
                  <p className="price">Rp. {ToRupiahStr(pd.price)}</p>
                </div>
              </div>
            </div>
          );
        })}
      {items.length > 0 && (
        <div className="checkout">
          <div className="checkout-bar">
            <p className="total">Rp.{ToRupiahStr(cartTotal)}</p>
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
      )}
    </div>
  );
}

function Checkout({
  onSubmit,
  cart,
  pdl,
  total,
  onBeforeSubmit,
}: {
  onSubmit: (success: boolean, id?: string) => void;
  onBeforeSubmit: () => void;
  cart: CartItem[];
  pdl: Map<String, Product>;
  total: number;
}) {
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
      <form
        className="ch-form forms"
        onSubmit={async (e) => {
          e.preventDefault();
          // if (!cart || cart.length == 0) {
          //   alert("No Item in cart, please add an item to checkout");
          // }
          onBeforeSubmit();
          // Compress Proof
          const formData = new FormData(e.target as HTMLFormElement);

          const proof = formData.get("proof") as File;

          const compressedProff = await imageCompression(proof, {
            maxSizeMB: 0.6,
          });
          const compressedFile = new File([compressedProff], proof.name, {
            type: proof.type,
          });
          const payload: SubmitOrderPayload = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            proof: compressedFile,
            addr: formData.get("addr") as string,
            carts: cart,
          };
          console.log(proof, compressedProff, compressedFile);
          const res = await SubmitOrder(payload);
          if (res) {
            // alert("Order submitted succesfully!");
            onSubmit(true, res);
            // Go to Confirm and show the Tracking ID
          } else {
            // alert("Error Submitting Order, Please try again!");
            onSubmit(false);
          }
        }}
      >
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
          <div className="i">
            <p>Max. File Size 1MB</p>
          </div>
        </div>
        <div className="i">
          <label htmlFor="addr">Delivery Address</label>
          <textarea name="addr" id="addr"></textarea>
        </div>
        <img src="/d/glow.svg" alt="" className="glow bg-slur" />

        <OrderSummary hasSubmit={true} cart={cart} pdl={pdl} total={total} />
      </form>
    </div>
  );
}

export function Confirm({ orderID }: { orderID?: string }) {
  return (
    <div id="confirm">
      <div className="order-status-panel">
        <div className="status-icon">
          {orderID ? <IoCheckmarkCircle /> : <IoCloseCircle />}
        </div>
        <div className="head">
          <h2 className="oh">
            {orderID
              ? "Order Submitted Succesfully"
              : "Failed to submit Order..."}
          </h2>
          {orderID && (
            <p
              className="oid btn hv"
              onClick={() => {
                navigator.clipboard.writeText(orderID);
              }}
            >
              Tracking ID: {orderID}
              <span>
                <BiCopy />
              </span>
            </p>
          )}
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
