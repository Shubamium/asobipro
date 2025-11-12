import { GlobalConfig } from "payload";

export const Home: GlobalConfig = {
  slug: "Home",
  fields: [
    {
      name: "talent-infinite-scroll",
      type: "array",
      fields: [
        {
          name: "talent",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
    {
      name: "home-faq",
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
