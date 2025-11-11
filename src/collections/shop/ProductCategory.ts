import { CollectionConfig } from "payload";

export const ProdCategory: CollectionConfig = {
  slug: "product-category",
  admin: {
    group: "Shop",
    useAsTitle: "name",
  },
  defaultPopulate: {
    name: true,
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
