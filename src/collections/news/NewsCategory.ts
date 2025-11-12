import { CollectionConfig } from "payload";

export const NewsCategory: CollectionConfig = {
  slug: "news-category",
  admin: {
    group: "News",
    useAsTitle: "name",
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
      required: true,
      unique: true,
    },
  ],
};
