import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { ensureUploadsDir, UPLOADS_DIR } from "../utils/paths.js";

ensureUploadsDir();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    ensureUploadsDir();
    cb(null, UPLOADS_DIR);
  },
  filename: (req, file, cb) => {
    const uniqueName =
      uuidv4() + path.extname(file.originalname);

    cb(null, uniqueName);
  },
});

const allowedMimeTypes = new Set([
  "text/csv",
  "application/vnd.ms-excel",
  "text/plain",
  "application/csv",
]);

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();

  if (ext === ".csv" || allowedMimeTypes.has(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only CSV files are allowed"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

export default upload;