import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// export const runtime = "edge";

const systemPrompt =
  "You are an AI assistant. You should reply concisely, using clear and simple language, avoiding unnecessary filler, and keeping every sentence meaningful. It should stay efficient with tokens, explain only when needed, and maintain a friendly, balanced tone that’s neither robotic nor overly formal. The humour should be mild, subtle, and context-based — never goofy or distracting. Answers should be easy to skim, logically structured, and focused on delivering direct value with minimal fluff. Feel free to use emojis to make your responses more expressive and friendly.";

export async function POST(req: Request) {
  try {
    const { prompt: userPrompt = "", history = [] } = await req.json();

    const apiKeys = process.env.GEMINI_API_KEYS?.split(',').map(key => key.trim()).filter(key => key);

    if (!apiKeys || apiKeys.length === 0) {
      return NextResponse.json(
        { error: "GEMINI_API_KEYS not set on server or is empty" },
        { status: 500 }
      );
    }

    let lastError: any;

    for (const apiKey of apiKeys) {
      try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
          model: "gemini-2.0-flash",
          systemInstruction: systemPrompt,
        });

        const formattedHistory = history
          .filter(msg => msg.text && msg.text.trim() !== '')
          .map(msg => ({
            role: msg.role,
            parts: [{ text: msg.text }],
          }));

        const chat = model.startChat({
          history: formattedHistory,
        });

        const result = await chat.sendMessage(userPrompt);
        const response = result.response;
        const text = response.text();

        // If we get a response, return it and exit.
        return NextResponse.json({ text });

      } catch (e: any) {
        lastError = e;
        // Check for quota-related errors. This is a guess at the error message.
        if (e.message && e.message.toLowerCase().includes('quota')) {
          console.warn(`API key ending with '...${apiKey.slice(-4)}' failed with a quota error. Trying next key.`);
          continue; // Try the next key
        } else {
          // For other kinds of errors, we probably want to stop and report it.
          throw e; // This will be caught by the outer catch block.
        }
      }
    }

    // If all keys have failed
    console.error("All API keys failed.", lastError);
    return NextResponse.json(
        { error: "All available API keys failed. Last error: " + (lastError?.message || "Unknown error") },
        { status: 500 }
    );

  } catch (e: any) {
    console.error("AI route error", e);
    return NextResponse.json({ error: e?.message ?? String(e) }, { status: 500 });
  }
}
