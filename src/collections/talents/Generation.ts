import { CollectionConfig } from "payload";

export const Generation: CollectionConfig = {
  slug: "talent-generation",
  admin: {
    group: "Talents",
    useAsTitle: "generation-name",
  },

  fields: [
    {
      name: "generation-name",
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
