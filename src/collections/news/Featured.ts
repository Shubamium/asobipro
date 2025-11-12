import { GlobalConfig } from "payload";

export const FeaturedNews: GlobalConfig = {
  slug: "featured-news",
  admin: {
    group: "News",
  },
  fields: [
    {
      name: "featured-left-top",
      type: "relationship",
      relationTo: "news",
    },
    {
      name: "featured-right",
      type: "relationship",
      relationTo: "news",
    },
    {
      name: "featured-left-bottom-a",
      type: "relationship",
      relationTo: "news",
    },
    {
      name: "featured-right-bottom-b",
      type: "relationship",
      relationTo: "news",
    },
  ],
};
