"use server";

import { CartItem } from "@/app/(asobi)/(shop)/CartProvider/CartProvider";
import { Media, Product } from "@/payload-types";
import payloadConfig from "@/payload.config";
import { getPayload } from "payload";
import { File as PayloadFile } from "payload";
import { Buffer } from "buffer";
import { ToRupiahStr } from "./currency";
import { customAlphabet, nanoid } from "nanoid";
import { NotifyNewOrder } from "@/app/(asobi)/db/mail";
const payload = await getPayload({
  config: await payloadConfig,
});

export async function GetProductList(idList: string[]) {
  const pdl = await payload.find({
    collection: "product",
    where: {
      id: {
        in: idList,
      },
    },
  });

  const map = new Map<string, Product>();
  pdl.docs.forEach((pd) => map.set(pd.id, pd));
  return map;
}

export type SubmitOrderPayload = {
  name: string;
  email: string;
  proof: File;
  addr: string;
  carts: CartItem[];
};

const createFile = async (file: File, name: string): Promise<Media> => {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const proofFile: PayloadFile = {
    data: buffer,
    name: "invimg" + name,
    mimetype: file.type,
    size: file.size,
  };
  const proofMedia = await payload.create({
    collection: "media",
    data: {
      alt: `INVOICE PROOF - ORDER ID:${name} || ${new Date().toLocaleString()}`,
    },
    file: proofFile,
  });
  return proofMedia;
};
export async function SubmitOrder(orderData: SubmitOrderPayload) {
  console.log("Creating Order" + orderData.name);
  try {
    // Count Total
    const pdl = await GetProductList(orderData.carts.map((i) => i.productId));
    const total = orderData.carts.reduce(
      (prev, curr) => prev + (pdl.get(curr.productId)?.price ?? 0) * curr.qty,
      0
    );

    // Generate Order ID
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
    const nanoid = customAlphabet(alphabet, 7);
    const id = nanoid();
    const orderID = `ORD#` + id;

    const proofFile = await createFile(orderData.proof, id);

    // Create order doc
    const order = await payload.create({
      collection: "order",

      data: {
        // id: orderID,
        "track-id": orderID,
        email: orderData.email,
        name: orderData.name,
        payment: proofFile,
        status: "processing",
        note: "Your order is being processed, please check back for updates!",
        address: orderData.addr,
        products: orderData.carts.map((i) => ({
          product: pdl.get(i.productId),
          variant: i.variant,
          quantity: i.qty,
        })),
        total: `Rp. ${ToRupiahStr(total)}`,
      },
    });

    // Send Email to asobu for notif and client
    await NotifyNewOrder(order);
    // const update = await payload.update({
    //   collection: "order",
    //   id: order.id,
    //   data: {
    //     id: orderID,
    //   },
    // });
    return orderID;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function GetOrderDetail(id: string) {
  const order = await payload.find({
    collection: "order",
    where: {
      "track-id": {
        equals: id,
      },
    },
  });

  if (order.docs && order.docs.length > 0) return order.docs[0];
  return null;
}
