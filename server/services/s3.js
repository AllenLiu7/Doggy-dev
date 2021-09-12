const S3 = require('aws-sdk/clients/s3');
const fs = require('fs');

const bucketName = process.env.S3_BUCKET_NAME;
const region = process.env.S3_BUCKET_REGION;
const accessKeyId = process.env.S3_ACCESS_KEY;
const secretAccessKey = process.env.S3_SECRET_KEY;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

// uploads a file to s3
function uploadFile(file) {
  const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename,
  };

  return s3.upload(uploadParams).promise();
}

// downloads a file from s3
function getFileStream(fileKey) {
  const downloadParams = {
    Key: fileKey,
    Bucket: bucketName,
  };

  return s3.getObject(downloadParams).createReadStream();
}

// delete a file from s3
function deleteFile(fileKey) {
  var params = {
    Bucket: bucketName,
    Key: fileKey,
  };

  s3.deleteObject(params, function (err, data) {
    if (err) console.log(err, err.stack);
    console.log('deleted!');
  });
}
module.exports = {
  uploadFile,
  getFileStream,
  deleteFile,
};
