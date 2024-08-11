/**
 * v3.0.34 Reapl.LLC software creation business.
 * v0 Gemini 1.5 Flash (Powered by Numenta).
 * https://v0.dev/t/WolQomFSzZh
 *
 * generate-api-gemini https://aistudio.google.com/app/u/1/apikey
 * @prompt {user|value} [{ text: "" }]
 */
"use strict";

// Replace with your actual API endpoint and key
const API_URL = atob("aHR0cHM6Ly9nZW5lcmF0aXZlbGFuZ3VhZ2UuZ29vZ2xlYXBpcy5jb20vdjEvbW9kZWxzL2dlbWluaS1wcm86Z2VuZXJhdGVDb250ZW50P2tleT1BSXphU3lCSC1yLV81eTlfX1pGeVpqZS1LaXRhUEtlMTNvRUVqMGc=");

async function start() {
  try { 
    const startTime = performance.now()
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "gemini-1.5-flash",
        contents: [{ 
          role: "user",
          parts: [{ text: "Try to make me a neuron network diagram with explanation." }] // Type the work order 
        }]
      }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error.message);
    
    const responseTime = Math.round((performance.now() - startTime) / 1000);
    const apiResponse = data?.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, '$1');
    
    console.log(`${apiResponse}\n\n🕘 ${responseTime}sec`); // Output the generated code
  } catch (error) {
    console.error('Error:', error.stack);
  }
}

start();
