import {v2 as cloudinary}from 'cloudinary'

cloudinary.config({
    cloud_name: "dh7xc8esu",
    api_key: "855845645424327",
    api_secret: "vGhmQMM-c_ENMPatGiOvG583n3s"

})

export const uploadImage = async filePath =>{
   return await cloudinary.uploader.upload(filePath,{
        folder: 'posts'
    })
}

export const deleteImage = async id =>{
    return await cloudinary.uploader.destroy(id)
}