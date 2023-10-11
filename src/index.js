import { uploadFile } from "./utils/aws.js";

export const run = async () => {
  try {
    const data = await uploadFile();
    console.log(data);
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};

run();
