const express = require('express');
const multer = require('multer');
const uploadRouter = express.Router();
const { httpUploadImage } = require('../controllers/upload.controller');

const postImageStorage = multer.diskStorage({
  filename: (req, file, cb) => {
    //if you want to set file name at front end, just cb(null, req.body.name)
    //the method will create bug when using with postman
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});

const profilePicStorage = multer.diskStorage({
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});

const postImageUpload = multer({ storage: postImageStorage });
const profilePicUpload = multer({ storage: profilePicStorage });

uploadRouter.post(
  '/post-image',
  postImageUpload.single('post-image'), //this is the feild name for the file
  httpUploadImage
);

uploadRouter.post(
  '/profile-pic',
  profilePicUpload.single('profile-pic'),
  httpUploadImage
);

module.exports = uploadRouter;
