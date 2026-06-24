import {v2 as cloudinary} from "cloudinary";
import fs from "fs";

const uploadOnCloudinary= async ()=>{
  try{
    if(!localFilePath) return null

    //upload file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath,{
      resource_type:"auto"
    })
    //file has been uploded sucessfully
    console.log("File has been uplaoded successfully",response.url);
    return response;

  }catch(error){
    fs.unlinkSync(localFilePath) //remove the locally saved temporary file as the upload op failed
    return null;
  }
}

 cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD-NAME, 
        api_key: CLOUDINARY_API_KEY, 
        api_secret: CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });