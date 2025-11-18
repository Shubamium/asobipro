"use client";
import { Media, Product } from "@/payload-types";
import { CartItem } from "../CartProvider/CartProvider";
import { Fragment } from "react";
import { ToRupiahStr } from "@/services/currency";
import { FaXmark } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";

export function CartDisplayer({
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
                      {/* <span>REMOVE</span> */}
                      <FaTrash />
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
