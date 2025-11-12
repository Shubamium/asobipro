import { lexicalEditor, UploadFeature } from "@payloadcms/richtext-lexical";
import { CollectionConfig } from "payload";

export const News: CollectionConfig = {
  slug: "news",
  admin: {
    useAsTitle: "title",
    group: "News",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "excerpt",
      type: "textarea",
    },
    {
      name: "banner",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "published-date",
      type: "date",
    },
    {
      // category
      name: "category",
      type: "relationship",
      relationTo: "news-category",
      required: true,
    },
    {
      name: "tags",
      type: "text",
      hasMany: true,
    },
    {
      name: "article",
      type: "richText",
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures, rootFeatures }) => [
          ...defaultFeatures,
          UploadFeature({
            collections: {
              uploads: {
                fields: [
                  {
                    name: "image",
                    type: "upload",
                    relationTo: "media",
                  },
                ],
              },
            },
          }),
        ],
      }),
    },
  ],
};
