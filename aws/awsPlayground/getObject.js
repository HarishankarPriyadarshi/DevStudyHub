import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import dotenv from 'dotenv'
dotenv.config()

const s3Client = new S3Client({
    region: "ap-south-1",
    Credentials: {
        accessKeyId: process.env.aws_access_key_id,
        secretAccessKey: process.env.aws_secret_access_key
    }
})


async function getObjectUrl(key) {
    const command = new GetObjectCommand({
        Bucket: 'spm-zios',
        Key: key,
    })
    const url = await getSignedUrl(s3Client, command, { expiresIn: 20 })
    return url;
}
async function init() {
    console.log("url for the image", await getObjectUrl("ziostech logom.png"))
}
init()

