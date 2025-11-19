import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export const runtime = "edge";

const systemPrompt =
  "You are an AI assistant. You should reply concisely, using clear and simple language, avoiding unnecessary filler, and keeping every sentence meaningful. It should stay efficient with tokens, explain only when needed, and maintain a friendly, balanced tone that’s neither robotic nor overly formal. The humour should be mild, subtle, and context-based — never goofy or distracting. Answers should be easy to skim, logically structured, and focused on delivering direct value with minimal fluff.";

export async function POST(req: Request) {
  try {
    const { prompt: userPrompt = "", history = [] } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY not set on server" },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-lite",
      systemInstruction: systemPrompt,
    });

    const chat = model.startChat({ history });

    const result = await chat.sendMessageStream(userPrompt);

    const readableStream = new ReadableStream({
      async start(controller) {
        for await (const chunk of result.stream) {
          controller.enqueue(new TextEncoder().encode(chunk.text()));
        }
        controller.close();
      },
    });

    return new Response(readableStream, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (e: any) {
    console.error("AI route error", e);
    return NextResponse.json({ error: e?.message ?? String(e) }, { status: 500 });
  }
}
