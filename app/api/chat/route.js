import { Groq } from "groq-sdk";

export async function POST(req) {
  try {
    const body = await req.json();
    const { message, conversationHistory } = body;

    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      console.error("GROQ_API_KEY not found");
      return Response.json(
        { message: "Server error: Missing API key" },
        { status: 500 }
      );
    }

    const groq = new Groq({ apiKey });

    const messages = [
      { role: "system", content: "You are a helpful recipe assistant." },
      ...conversationHistory.map((msg) => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.text,
      })),
      { role: "user", content: message },
    ];

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages,
      max_tokens: 200,
    });

    const aiMessage =
      completion.choices?.[0]?.message?.content ||
      "Sorry, I could not generate a response.";

    return Response.json({ message: aiMessage });
  } catch (err) {
    console.error("Groq API Server Error:", err);
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}
