// import { v2 as cloudinary } from "cloudinary";
// import fs from "fs"

// cloudinary.config({ 
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//   api_key: process.env.CLOUDINARY_API_KEY, 
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });

// const uploadOnCloudinary = async (localFilePath) => {
//     try {
//         if(!localFilePath) {
//             return null;
//         }
//         const response = await cloudinary.uploader.upload(localFilePath, {
//             resource_type: "auto"
//         })
//         console.log("File uploaded successfully on cloudinary", response.url);
//         return response;
//     } catch (error) {
//         fs.unlinkSync(localFilePath);
//         return null;
//     }
// }

// export {uploadOnCloudinary} 


import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export const uploadOnCloudinary = async (localFilePath) => {
  if (!localFilePath) return null;
  try {
    // convert relative path -> absolute path
    const absolutePath = path.resolve(localFilePath);

    const result = await cloudinary.uploader.upload(absolutePath, {
      resource_type: "auto",
    });

    // remove the file from local storage after successful upload
    fs.unlinkSync(absolutePath);
 
    return result;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    return null;
  }
};