/**
 * Cloudflare R2 Storage
 * https://developers.cloudflare.com/r2/
 */
import { S3Client } from "@aws-sdk/client-s3";
import { r2AccountId, r2AccessKeyId, r2SecretAccessKey } from "../config.js";

export const s3Client = new S3Client({
  endpoint: `https://${r2AccountId}.r2.cloudflarestorage.com`,
  region: "auto",
  credentials: {
    accessKeyId: r2AccessKeyId,
    secretAccessKey: r2SecretAccessKey,
  },
});
