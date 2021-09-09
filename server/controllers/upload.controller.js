const createError = require('http-errors');
const { uploadFile, deleteFile } = require('../services/s3');

//upload profile pic or post image (/upload/post_image)
async function httpUploadImage(req, res, next) {
  const file = req.file;
  console.log(file);
  const currentProfilePic = req.body.currentProfilePic;

  const result = await uploadFile(file);
  console.log(result);

  //delete current profile pic
  if (currentProfilePic) {
    deleteFile(currentProfilePic);
  } //server\public\assets\profile-pictures\1.jpg

  try {
    return res.status(200).json({
      message: 'File uploded successfully',
      key: result.key, //return the S3 file key to frontend for handling
    });
  } catch (err) {
    next(createError(500, err));
  }
}

module.exports = {
  httpUploadImage,
};
