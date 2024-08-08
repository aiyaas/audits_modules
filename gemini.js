/**
 * v3.0.34 Reapl.LLC software creation business.
 * v0 model gemini-1.5-flash by gemini_eraa.
 * https://v0.dev/t/WolQomFSzZh
 *
 * generate-api-gemini https://aistudio.google.com/app/u/1/apikey
 * @prompt {user|value} __promt_cat('');
 */
"use strict";

// Replace with your actual API endpoint and key
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=AIzaSyBH-r-_5y9__ZFyZje-KitaPKe13oEEj0g`;

async function __promt_cat(userMessage) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "gemini-1.5-flash",
        contents: [{ 
          role: "user",
          parts: [{ text: userMessage }] 
        }]
      }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error.message);
    
    const apiResponse = data?.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, '$1');
    console.log(apiResponse); // Output the generated code
  } catch (error) {
    console.error('Error:', error.stack);
  }
}

__promt_cat('kamu tolong bantu aku buat skripsi kecil dan makna makna yang terkandung di skripsi nya'); // Prompt or command that you want to convey
