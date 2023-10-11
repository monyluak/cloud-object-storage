import dotenv from "dotenv";
dotenv.config();

export const endpoint = process.env.DO_SPACES_ENDPOINT;
export const accessKeyId = process.env.DO_SPACES_KEY;
export const secretAccessKey = process.env.DO_SPACES_SECRET;
export const bucketName = process.env.DO_SPACES_NAME;
