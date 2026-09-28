import datasetStore from "../utils/datasetStore.js";
import { parseCSV } from "../services/csvService.js";
import { getUploadedFilePath } from "../utils/paths.js";

export const uploadCSV = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const filePath = getUploadedFilePath(req.file.filename);
    const dataset = await parseCSV(filePath);
    datasetStore.dataset = dataset;

    const { data, ...datasetSummary } = dataset;

    res.json({
      success: true,
      filename: req.file.filename,
      originalName: req.file.originalname,
      size: req.file.size,
      dataset: datasetSummary,
    });
  } catch (error) {
    console.error("CSV upload failed:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};