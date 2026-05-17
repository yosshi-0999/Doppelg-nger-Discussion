// ライブラリの読み込み
require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

// APIの初期設定
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = "こんにちは!自己紹介を1行でお願いします。";

  try {
    console.log("AIに送信中...");
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    console.log("-------------------");
    console.log("AIからの返答:", text);
    console.log("-------------------");
    console.log("使ったトークン数:", response.usageMetadata);
  } catch (error) {
    console.error("エラーが発生しました:", error);
  }
}

console.log("読み込んだキーの最初の3文字:", process.env.GEMINI_API_KEY?.substring(0, 3));
run();