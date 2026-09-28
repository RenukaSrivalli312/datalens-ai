import { askAI } from "../services/aiService.js";
import { buildPrompt } from "../prompts/promptBuilder.js";

export const chatWithAI = async (req, res) => {
  try {
    const { dataset, question } = req.body;
      console.log("🔥 /api/chat endpoint hit");
  console.log(req.body);


    if (!dataset || !question) {
      return res.status(400).json({
        success: false,
        message: "Dataset and question are required.",
      });
    }

    const prompt = buildPrompt(dataset, question);

    const answer = await askAI(prompt);

    res.json({
      success: true,
      answer,
    });
  } 
   catch (error) {
  console.error("========== AI ERROR ==========");
  console.error(error.response?.data || error.message);
  console.error("==============================");

  res.status(500).json({
    success: false,
    message: error.response?.data || error.message,
  });
}
};