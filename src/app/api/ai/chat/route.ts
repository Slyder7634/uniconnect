import { NextResponse } from 'next/server';
// Server-only route: forwards prompts to Google GenAI using server-side API key
import { GoogleGenAI } from '@google/genai';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const prompt = body?.prompt ?? '';
    const model = body?.model ?? 'gemini-flash-lite-latest';

    const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'GEMINI_API_KEY not set on server' }, { status: 500 });
    }

    const genAI = new GoogleGenAI({ apiKey });
    const chat = genAI.chats.create({ model });

    // Use a non-streaming sendMessage to get a single final response
    // Note: method names may vary depending on @google/genai version; this matches common usage.
    const result = await chat.sendMessage({ message: prompt });

    // Try to extract text from common response structures
    const text = (result?.output?.map((o: any) => (o.content || []).map((c: any) => c.text).join('')).join('\n') )
      || result?.message?.content?.map((c: any) => c.text).join('')
      || result?.text
      || JSON.stringify(result);

    return NextResponse.json({ text });
  } catch (e: any) {
    console.error('AI route error', e);
    return NextResponse.json({ error: e?.message ?? String(e) }, { status: 500 });
  }
}
