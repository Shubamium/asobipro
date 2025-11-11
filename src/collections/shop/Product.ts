import { CollectionConfig } from "payload";

export const product: CollectionConfig = {
  slug: "product",
  admin: {
    group: "Shop",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "price",
      required: true,
      type: "number",
    },
    {
      name: "description",
      type: "richText",
    },
    {
      name: "images",
      required: true,
      type: "upload",
      relationTo: "media",
      admin: {
        description: "First Image will be used for thumbnail",
      },
      hasMany: true,
    },
    // {
    // 	name: "categories",
    // 	required: true,
    // 	type: "relationship",
    // 	relationTo: "ProductCategory",
    // 	hasMany: true,
    // },
    {
      name: "variants",
      type: "text",
      hasMany: true,
      admin: {
        description: "List of variants, has to be unique",
      },
    },
  ],
};
