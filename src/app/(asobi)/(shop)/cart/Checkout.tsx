"use client";
import { Product } from "@/payload-types";
import { CartItem } from "../CartProvider/CartProvider";
import { SubmitOrder, SubmitOrderPayload } from "@/services/ProductData";
import imageCompression from "browser-image-compression";
import OrderSummary from "../orderSummary/OrderSummary";

export function Checkout({
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
