require('dotenv').config();


const express = require('express');
const AWS = require('aws-sdk');
const multer = require('multer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

// Multer setup for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Upload route
app.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file;
  if (!file) return res.status(400).send('No file uploaded.');

  // Optional: check file size or type
  if (file.size > 5 * 1024 * 1024) return res.status(400).send('File too large.');

  const params = {
    Bucket: 'file-uploader-task1',
    Key: `${Date.now()}_${file.originalname}`,
    Body: file.buffer,
    ContentType: file.mimetype,
    ACL: 'public-read'
  };

  s3.upload(params, (err, data) => {
    if (err) return res.status(500).send(err);
    res.send({ fileUrl: data.Location });
  });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
