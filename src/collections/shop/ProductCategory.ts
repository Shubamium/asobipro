import { CollectionConfig } from "payload";

export const ProdCategory: CollectionConfig = {
  slug: "product-category",
  admin: {
    group: "Shop",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      unique: true,
    },
  ],
};
