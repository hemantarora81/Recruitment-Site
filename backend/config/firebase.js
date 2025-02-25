const admin = require("firebase-admin");
const serviceAccount = require("./eazy-recruit-firebase-adminsdk-fbsvc-9061c86530.json"); // Your Firebase Service Account

// ✅ Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket:process.env.FIREBASE_STORAGE_BUCKET|| "eazy-recruit.appspot.com", // ✅ Correct Storage Bucket
});

// ✅ Get Storage Bucket Reference
const bucket = admin.storage().bucket();

module.exports = bucket;
