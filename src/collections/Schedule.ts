import { CollectionConfig } from "payload";

export const Schedule: CollectionConfig = {
  slug: "schedule",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "talent",
      type: "relationship",
      relationTo: "talents",
    },

    {
      name: "schedule-list",
      type: "array",
      fields: [
        {
          name: "stream-name",
          type: "text",
        },
        {
          name: "stream-date",
          type: "date",
          admin: {
            date: {
              pickerAppearance: "dayAndTime",
              // displayFormat: "h:mm:ss a",
              // displayFormat: "DD/MM/YYYY HH:mm",
              // timeFormat: "HH:mm",
            },
          },
        },
        {
          name: "thumbnail",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "stream-link",
          type: "text",
        },
        {
          name: "members",
          type: "array",
          fields: [
            {
              name: "pfp",
              type: "upload",
              relationTo: "media",
            },
            {
              name: "name",
              type: "text",
            },
            {
              name: "link",
              type: "text",
            },
          ],
        },
      ],
      required: true,
    },
  ],
};
