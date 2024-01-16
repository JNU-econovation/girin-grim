import AWS from "aws-sdk";

const REGION = process.env.NEXT_PUBLIC_REGION;
const ACCESS_KEY = process.env.NEXT_PUBLIC_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY_ID;

AWS.config.update({
  region: REGION,
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_ACCESS_KEY,
});

export const uploadFile = (filename: string, imageFile: File) => {
  const uploader = new AWS.S3.ManagedUpload({
    params: {
      ACL: "public-read",
      Bucket: "girin-grim",
      Key: `upload/${filename}`,
      Body: imageFile,
    },
  });
  return uploader.promise().then((data) => {
    return data.Location;
  });
};
