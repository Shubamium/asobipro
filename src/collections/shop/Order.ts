import { CollectionConfig } from "payload";

const Order: CollectionConfig = {
  slug: "order",
  admin: {
    group: "Shop",
  },
  fields: [
    {
      name: "name",
      label: "Buyer Name",
      type: "text",
      required: true,
    },
    {
      name: "track-id",
      label: "Tracking ID",
      type: "text",
    },
    {
      name: "status",
      type: "select",
      admin: {
        description: "Update the order status here!",
      },
      options: [
        {
          label: "Processing",
          value: "processing",
        },
        {
          label: "On Progress",
          value: "onprogress",
        },
        {
          label: "Delivered",
          value: "delivered",
        },
      ],
    },
    {
      name: "note",
      label: "Note to Buyer",
      type: "textarea",
    },
    {
      name: "email",
      type: "text",
      required: true,
    },
    {
      name: "address",
      type: "textarea",
    },
    {
      name: "payment",
      label: "Proof Of Payment",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "total",
      label: "Price Total",
      type: "text",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "products",
      type: "array",
      fields: [
        {
          name: "product",
          type: "relationship",
          relationTo: "product",
        },
        {
          name: "variant",
          type: "text",
        },
        {
          name: "quantity",
          type: "number",
        },
      ],
      admin: {
        position: "sidebar",
      },
    },
  ],
};

export default Order;
