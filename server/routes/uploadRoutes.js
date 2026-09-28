import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { uploadCSV } from "../controllers/uploadController.js";

const router = express.Router();

router.post(
  "/upload",
  (req, res, next) => {
    upload.single("file")(req, res, (err) => {
      if (err) {
        if (err.code === "LIMIT_FILE_SIZE") {
          return res.status(413).json({
            success: false,
            message: "File too large. Maximum size is 5MB.",
          });
        }

        return res.status(400).json({
          success: false,
          message: err.message,
        });
      }

      next();
    });
  },
  uploadCSV
);

export default router;