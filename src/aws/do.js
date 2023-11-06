/**
 * DO Spaces
 * https://docs.digitalocean.com/products/spaces/
 */
import { S3Client } from "@aws-sdk/client-s3";
import { accessKeyId, endpoint, region, secretAccessKey } from "../config.js";

export const s3Client = new S3Client({
  endpoint,
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});
