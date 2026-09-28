import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const askAI = async (prompt) => {
  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openrouter/free",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:5173",
          "X-Title": "DataLens AI",
        },
      }
    );

    console.log(response.data);

    return response.data.choices[0].message.content;
  } catch (error) {
    console.log("========== OPENROUTER ERROR ==========");
    console.log(error.response?.data || error.message);
    console.log("======================================");

    throw error;
  }
};