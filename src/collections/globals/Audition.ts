import { GlobalConfig } from "payload";

export const Audition: GlobalConfig = {
  slug: "audition",
  fields: [
    {
      name: "guidelines",
      fields: [
        {
          name: "title",
          type: "text",
        },
        {
          name: "description",
          type: "textarea",
        },
      ],
      type: "array",
    },
    {
      name: "requirements",
      type: "array",
      fields: [
        {
          name: "title",
          type: "text",
        },
        {
          name: "description",
          type: "textarea",
        },
        {
          name: "icon",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
    {
      name: "audisi-faq",
      type: "array",
      fields: [
        {
          name: "qid",
          label: "Question [ID]",
          type: "text",
        },
        {
          name: "aid",
          label: "Answer [ID]",
          type: "richText",
        },
        {
          name: "qen",
          label: "Question [EN]",
          type: "text",
        },
        {
          name: "aen",
          label: "Answer [EN]",
          type: "richText",
        },
      ],
    },
  ],
};
