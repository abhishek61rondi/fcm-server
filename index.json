const express = require("express");
const admin = require("firebase-admin");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const serviceAccount = require("./service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.post("/send", async (req, res) => {
  const { token, title, body } = req.body;

  if (!token) return res.status(400).json({ error: "No token provided" });

  const message = {
    token,
    notification: { title, body }
  };

  try {
    const response = await admin.messaging().send(message);
    res.json({ success: true, response });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3000, () => console.log("✅ Server running on port 3000"));
