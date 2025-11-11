import { CollectionConfig } from "payload";

export const Product: CollectionConfig = {
  slug: "product",
  admin: {
    group: "Shop",
    useAsTitle: "name",
    defaultColumns: ["main-image", "name", "price", "categories"],
  },
  defaultPopulate: {
    name: true,
    price: true,
    "main-image": true,
    variants: true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      admin: {
        description:
          "Unique identifier for this product, no spaces and lowercases, example: product-name-here",
      },
      required: true,
      unique: true,
    },
    {
      name: "price",
      required: true,
      type: "number",
    },
    {
      name: "mini-description",
      type: "text",
    },
    {
      name: "description",
      type: "richText",
    },
    {
      name: "main-image",
      required: true,
      type: "upload",
      relationTo: "media",
    },
    {
      name: "extra-image",
      type: "upload",
      relationTo: "media",
      hasMany: true,
    },
    {
      name: "categories",
      required: true,
      type: "relationship",
      relationTo: "product-category",
    },
    {
      name: "variants",
      type: "text",
      hasMany: true,
      admin: {
        description: "List of variants, has to be unique",
      },
      unique: true,
    },
  ],
};
