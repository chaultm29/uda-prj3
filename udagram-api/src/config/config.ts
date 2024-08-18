
const AWS = require('aws-sdk');

// Sử dụng AWS.SharedIniFileCredentials để lấy credentials từ profile mặc định
const credentials = new AWS.SharedIniFileCredentials({ profile: 'default' });
  
// Cập nhật vào process.env
process.env.AWS_ACCESS_KEY_ID = credentials.accessKeyId;
process.env.AWS_SECRET_ACCESS_KEY = credentials.secretAccessKey;
process.env.AWS_SESSION_TOKEN = credentials.sessionToken; // Nếu có session token

export const config = {
  'username': process.env.POSTGRES_USERNAME,
  'password': process.env.POSTGRES_PASSWORD,
  'database': process.env.POSTGRES_DB,
  'host': process.env.POSTGRES_HOST || 'localhost',
  'dialect': 'postgres',
  'aws_region': process.env.AWS_REGION,
  'aws_profile': process.env.AWS_PROFILE,
  'aws_media_bucket': process.env.AWS_BUCKET,
  'url': process.env.URL,
  'jwt': {
    'secret': process.env.JWT_SECRET,
  },
}; 
// console.log('Database host:', process.env); 