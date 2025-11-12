import React from "react";

import "./product.scss";
import payloadConfig from "@/payload.config";
import { getPayload } from "payload";

import ProductPage from "./ProductPage";
type Props = {
  params: Promise<{ id: string }>;
};
export default async function page({ params }: Props) {
  const { id } = await params;
  const payload = await getPayload({
    config: await payloadConfig,
  });

  const pdl = await payload.find({
    collection: "product",
    where: {
      slug: {
        equals: id,
      },
    },
  });
  if (pdl.docs.length === 0) {
    return (
      <main id="p_product">
        <p className="notfound">Product not found</p>
      </main>
    );
  }

  const pd = pdl.docs[0];
  return <ProductPage pd={pd} />;
}
