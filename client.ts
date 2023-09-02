import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "3vml98u4",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-06-18", // use current date (YYYY-MM-DD) to target the latest API version
};
export const client = createClient(config);
