import AWS from 'aws-sdk';
import multer from 'multer';
import compress from 'sharp';

type UploadResponse = { Location?: string; key?: string };

const s3 = new AWS.S3();
const bucketName: string = '';

const uploader = async (key: string, body: Buffer, mimeType: string): Promise<UploadResponse> => {
  try {
    if (mimeType === 'video') {
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      const fileName = `${uniqueSuffix}-${key}`;

      const params = {
        Bucket: bucketName,
        Key: `uploads/${fileName}`,
        Body: body,
        ACL: 'public-read',
      };
      return s3.upload(params).promise();
    }
    const imageBuffer = await compress(body).jpeg({ quality: 30 }).toBuffer();
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const fileName = `${uniqueSuffix}-${key}`;

    const params = {
      Bucket: bucketName,
      Key: `uploads/${fileName}`,
      Body: imageBuffer,
      ACL: 'public-read',
    };
    return s3.upload(params).promise();
  } catch (error) {
    console.log('🌺 Uploader Error', error);
    return {};
  }
};

const storage = multer.memoryStorage();
export const upload = multer({ storage: storage! });

export default uploader;
