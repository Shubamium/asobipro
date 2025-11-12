// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { s3Storage } from "@payloadcms/storage-s3";
import { Product } from "./collections/shop/Product";
import { ProdCategory } from "./collections/shop/ProductCategory";
import Order from "./collections/shop/Order";
import { Home } from "./collections/globals/Home";
import { Talents } from "./collections/talents/Talents";
import { Generation } from "./collections/talents/Generation";
import { News } from "./collections/news/News";
import { NewsCategory } from "./collections/news/NewsCategory";
import { FeaturedNews } from "./collections/news/Featured";
import { Schedule } from "./collections/Schedule";
import { Team } from "./collections/Team";
import { Audition } from "./collections/globals/Audition";
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Team,
    Schedule,
    Talents,
    Generation,
    News,
    NewsCategory,
    // FeaturedNews,
    Product,
    ProdCategory,
    Order,

    Users,
    Media,
  ],
  globals: [Home, Audition, FeaturedNews],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
    s3Storage({
      bucket: "asobumain",
      collections: {
        media: {
          disablePayloadAccessControl: true,
        },
      },
      config: {
        region: "eu-east-1",
        endpoint: "http://newapi.minio.asobuproduction.com",
        credentials: {
          accessKeyId: process.env.MINIOA ?? "",
          secretAccessKey: process.env.MINIOK ?? "",
        },
        forcePathStyle: true,
      },
    }),
  ],
});
