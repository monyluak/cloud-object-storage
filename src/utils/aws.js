import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import {
  accessKeyId,
  bucketName,
  endpoint,
  region,
  secretAccessKey,
} from "../config.js";

export const s3Client = new S3Client({
  endpoint,
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

export const uploadFile = async () => {
  const data = await s3Client.send(
    new PutObjectCommand({
      Bucket: bucketName,
      Key: "sample.txt",
      Body: "Sample file content",
      ACL: "public-read", // default: private
    })
  );

  return data;
};
