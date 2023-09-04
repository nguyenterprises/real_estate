import { createClient } from "next-sanity";

const projectId = "k2ooq5ov";
const dataset = "production";
const apiVersion = "2023-07-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
