import dotenv from "dotenv";
dotenv.config();

export const port = process.env.PORT || 5000;

export const endpoint = process.env.DO_SPACES_ENDPOINT;
export const region = process.env.DO_SPACES_REGION;
export const accessKeyId = process.env.DO_SPACES_KEY;
export const secretAccessKey = process.env.DO_SPACES_SECRET;

export const bucketName = process.env.BUCKET_NAME;

export const r2AccountId = process.env.R2_ACCOUNT_ID;
export const r2AccessKeyId = process.env.R2_ACCESS_KEY_ID;
export const r2SecretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
