const admin = require("firebase-admin");
const fs = require("fs");

// Read the JSON from Render secret path
const serviceAccount = JSON.parse(
  fs.readFileSync("/run/secrets/SERVICE_ACCOUNT_JSON", "utf8")
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
