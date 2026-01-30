export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Missing OPENAI_API_KEY" });
  }

  const { input, model = "gpt-5.2-2025-12-11", temperature = 0.2 } = req.body || {};

  if (!input || !input.trim()) {
    return res.status(400).json({ error: "No input provided" });
  }

  const instructions = `YOUR EXISTING INSTRUCTIONS HERE`;

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      instructions,
      input: input.trim(),
      temperature
    })
  });

  if (!response.ok) {
    const text = await response.text();
    return res.status(500).json({ error: text });
  }

  const json = await response.json();

  let output =
    json.output_text ||
    json.output?.flatMap(o =>
      o.content?.filter(c => c.type === "output_text" || c.type === "text").map(c => c.text)
    ).join("\n");

  res.status(200).json({ html: output?.trim() || "" });
}
