import express from "express";

import { bucketName, port } from "./config.js";
import { s3Client } from "./utils/aws.js";
import { upload } from "./utils/multer.js";
import { PutObjectCommand } from "@aws-sdk/client-s3";

const app = express();
app.use(express.json());

app.use(express.static("public"));

app.post("/upload", upload.single("file"), async (req, res) => {
  const data = await s3Client.send(
    new PutObjectCommand({
      Bucket: bucketName,
      Key: req.file.originalname,
      Body: req.file.buffer,
      ContentType: req.file.mimetype,
      ACL: "public-read", // default: private
    })
  );

  res.status(200).json({ success: true, data });
});

app.listen(port, () => console.log(`listening :${port}`));
