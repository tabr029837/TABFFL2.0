export default function handler(req, res) {
  const apiKey = process.env.FIREBASE_API_KEY || "AIzaSyCJPx-MqMGr8zH1bX_qSQ7E0UGi-rSSN0I";

  if (!apiKey) {
    return res.status(500).json({
      error: "Missing FIREBASE_API_KEY environment variable.",
    });
  }

  return res.status(200).json({ apiKey });
}
