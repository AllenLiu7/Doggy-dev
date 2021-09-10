const express = require('express');
const imageRouter = express.Router();
const { getFileStream } = require('../services/s3');

imageRouter.get('/:key', (req, res, next) => {
  const key = req.params.key;
  const readStream = getFileStream(key);

  readStream.pipe(res);
});

module.exports = imageRouter;
