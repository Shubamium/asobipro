import { CollectionConfig } from "payload";

export const Team: CollectionConfig = {
  slug: "team",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "pfp",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "role",
      type: "text",
    },
    {
      name: "link",
      type: "text",
    },
  ],
};
