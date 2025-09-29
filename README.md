# Cloud File Uploader

A simple web app to upload files to **AWS S3** using **Node.js** and **Express**.

---

## 📌 Features
- Upload files through a web interface  
- Stores files securely in AWS S3  
- Returns a public link to access the uploaded file  
- Uses environment variables for AWS credentials (security best practice)  
- Optional file size/type validation  

---

## 🛠 Tech Stack
- **Frontend:** HTML (file upload form)  
- **Backend:** Node.js + Express.js  
- **File Handling:** Multer  
- **Cloud Storage:** AWS S3 (via AWS SDK)  


2. Install dependencies
npm install

3. Setup Environment Variables

Create a .env file in the root directory:

AWS_ACCESS_KEY_ID=your_access_key_id
AWS_SECRET_ACCESS_KEY=your_secret_access_key
AWS_BUCKET_NAME=your_bucket_name
AWS_REGION=your_region
PORT=3000

4. Run the App
node index.js
---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/file-uploader-clean.git
cd file-uploader-clean
