import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
  S3ServiceException
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import dotenv from "dotenv";
dotenv.config();
import { v4 as uuidv4 } from "uuid";

const s3 = new S3Client({
  region: "auto",

  endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY!,
    secretAccessKey: process.env.CLOUDFLARE_SECRET_KEY!
  }
});

export const generatePresignedUrl = async (
  fileName: string,
  contentType: string
) => {
  const uniqueFileName = `${uuidv4()}-${Date.now()}-${fileName}`;
  const key = `ccstura/${uniqueFileName}`;

  // console.log("KEY : ", key);

  const command = new PutObjectCommand({
    Bucket: process.env.CLOUDFLARE_BUCKET_NAME,
    Key: key,
    ContentType: contentType
  });

  const signedUrl = await getSignedUrl(s3, command, { expiresIn: 600 }); // 1 hour expiry
  return {
    signedUrl,
    key,
    publicUrl: getPublicUrl(key)
  };
};

export const getPublicUrl = (key: string) => {
  //   return `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com/${process.env.CLOUDFLARE_BUCKET_NAME}/${key}`;
  return `https://${process.env.PUBLIC_URL}/${key}`;
};

export const deleteContent = async (key: string) => {
  try {
    const deleteCommand = new DeleteObjectCommand({
      Bucket: process.env.CLOUDFLARE_BUCKET_NAME,
      Key: key
    });
    await s3.send(deleteCommand);
    return { success: true };
  } catch (err) {
    if (err instanceof S3ServiceException) {
      // Handle specific S3 errors
      if (err.name === "NoSuchKey") {
        return { success: true }; // Treat missing file as success
      }
      return {
        success: false,
        error: "Failed to delete content from storage",
        err
      };
    }
    return {
      success: false,
      error: "Unexpected error during deletion"
    };
  }
};
