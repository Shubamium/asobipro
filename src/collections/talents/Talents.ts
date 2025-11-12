import { CollectionConfig } from "payload";

export const Talents: CollectionConfig = {
  slug: "talents",
  admin: {
    group: "Talents",
    useAsTitle: "name",
  },
  defaultPopulate: {
    name: true,
    generation: true,
    slug: true,
    pfp: true,
    arts: true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "generation",
      type: "relationship",
      relationTo: "talent-generation",
    },
    {
      name: "pfp",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "intro-text",
      type: "text",
      required: true,
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "General Info",
          fields: [
            {
              name: "dialouge-text",
              type: "textarea",
            },

            {
              name: "bio",
              type: "textarea",
            },
            {
              name: "info-list",
              type: "array",
              fields: [
                {
                  name: "tid",
                  label: "Title (ID)",
                  type: "text",
                },
                {
                  name: "ten",
                  type: "text",
                  label: "Title (en)",
                },
                {
                  name: "value",
                  type: "text",
                },
              ],
            },
          ],
        },
        {
          label: "Media",
          fields: [
            {
              name: "Video Trailer ID",
              admin: {
                description: "Only write the id, the part after: watch?v=(id) ",
              },
              type: "text",
            },
            {
              name: "featured-videos",
              type: "text",
              hasMany: true,
            },
            {
              name: "audio-file",
              admin: {
                description: "Web Audio Format (mp3,ogg,wav) ",
              },
              type: "upload",
              relationTo: "media",
            },
          ],
        },
        {
          label: "Arts",
          fields: [
            {
              name: "arts",
              type: "group",
              fields: [
                {
                  name: "hbd",
                  label: "Half Body Main (1:1)",
                  type: "upload",
                  relationTo: "media",
                },
                {
                  name: "fbd",
                  label: "Full Body (3:4)",
                  type: "upload",
                  relationTo: "media",
                },
                {
                  name: "vbg",
                  label: "Voiceline BG (4:1)",
                  type: "upload",
                  relationTo: "media",
                },
                {
                  name: "logo",
                  label: "Logo (3:2)",
                  type: "upload",
                  relationTo: "media",
                },
              ],
            },
          ],
        },
      ],
    },

    {
      name: "contacts",
      type: "group",
      admin: {
        position: "sidebar",
      },
      fields: [
        {
          name: "discord-link",
          type: "text",
        },
        {
          name: "youtube",
          type: "group",
          fields: [
            {
              name: "follower-count",
              type: "text",
            },
            {
              name: "link",
              type: "text",
            },
          ],
        },
        {
          name: "instagram",
          type: "group",
          fields: [
            {
              name: "follower-count",
              type: "text",
            },
            {
              name: "link",
              type: "text",
            },
          ],
        },
        {
          name: "x",
          type: "group",
          fields: [
            {
              name: "follower-count",
              type: "text",
            },
            {
              name: "link",
              type: "text",
            },
          ],
        },
      ],
    },
  ],
};
