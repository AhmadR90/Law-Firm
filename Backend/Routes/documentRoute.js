const express = require("express");
const multer = require("multer");
const path = require("path");
const Document = require("../Models/Documents");

const router = express.Router();
const uploads = multer({ dest: "uploads/" });
// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Upload Document Route
router.post("/upload", upload.single("file"), async (req, res) => {
  const photoPath = req.file ? req.file.path : null;

  try {
    const { title, type, description, userId } = req.body;

    if (!title || !type || !req.file || !userId) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newDocument = new Document({
      userId,
      title,
      type,
      description,
      filePath: photoPath,
    });

    await newDocument.save();
    res
      .status(201)
      .json({ message: "Document uploaded successfully", newDocument });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

// Get User's Documents
router.get("/:userId", async (req, res) => {
  try {
    const documents = await Document.find({ userId: req.params.userId });
    res.json(documents);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

module.exports = router;
