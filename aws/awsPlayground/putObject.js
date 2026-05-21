import {
    S3Client,
    GetObjectCommand,
    PutObjectCommand,
    ListObjectsV2Command,
    DeleteObjectCommand
} from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import dotenv from 'dotenv'
dotenv.config()
//configuring the user client 
const s3Client = new S3Client({
    region: "ap-south-1",
    Credentials: {
        accessKeyId: process.env.aws_access_key_id,
        secretAccessKey: process.env.aws_secret_access_key
    }
})


// async function getObjectUrl(key) {
//     const command = new GetObjectCommand({
//         Bucket: 'spm-profile',
//         Key: 'uploads/user-uploads/image-1736460950502.jpeg',
//     })
//     const url = await getSignedUrl(s3Client, command, { expiresIn: 60 })
//     return url;
// }

//put object for uploaded file it can be video or image
async function putObjecturl(fileName, contentType) {
    const command = new PutObjectCommand({
        Bucket: 'spm-profile',
        Key: `uploads/user-uploads/${fileName}`,
        ContentType: contentType
    })
    const url = await getSignedUrl(s3Client, command)
    return url;
}

// listobjectV2command for list the objects in bucket 
async function listObjects() {
    const command = new ListObjectsV2Command({
        Bucket: 'spm-profile',
        Key: 'uploads'
    })
    const list = await s3Client.send(command)
    console.log(list);

}


async function init() {
    ////for getting signed url for uploaded
    // console.log("url for the image", await getObjectUrl("ziostech logom.png"))
    console.log("url for uploading", await putObjecturl(`image-${Date.now()}.jpeg`, 'image/jpeg')) //tested on postman
    await listObjects();
}

init()

