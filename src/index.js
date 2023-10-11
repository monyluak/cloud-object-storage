import { ListBucketsCommand, S3Client } from "@aws-sdk/client-s3";
import { endpoint, accessKeyId, secretAccessKey } from "./config.js";

export const s3Client = new S3Client({
  endpoint,
  region: "us-east-1",
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

export const run = async () => {
  try {
    const data = await s3Client.send(new ListBucketsCommand({}));
    console.log("Success", data.Buckets);
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};

run();
