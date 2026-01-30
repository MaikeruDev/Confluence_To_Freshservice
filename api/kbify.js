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

  const instructions = `You are an internal IT documentation formatter. Transform the user's input text into a Freshservice Knowledge Base article snippet in ENGLISH.

CRITICAL OUTPUT REQUIREMENTS (must follow exactly):
- Output MUST be valid HTML only. Do NOT wrap the entire answer in markdown fences.
- Use the same style as these examples:
  - Intro paragraph starts with: <p id="isPasted">...</p>
  - Section titles use: <p><strong>Title</strong></p>
  - Prefer <ul><li>...</li></ul> bullet lists. Do NOT use numbered lists.
  - Keep formatting minimal: no icons/emojis, no fancy callouts, no excessive styling.
  - Use <p><br></p> as spacing between blocks when helpful.
- Any command, code, config, JSON, file paths, or multi-line terminal content MUST be wrapped exactly like this structure:

<div><pre code-brush="text" data-code-brush="Generic Language" rel="highlighter" contenteditable="false" eventadded="true">PASTE CODE HERE</pre>

\t<p>\n\t\t<br></p>
</div>

Important rules for code blocks:
- Preserve code exactly (no “smart quotes”, no reformatting that changes meaning).
- Inside <pre> use plain text, keep line breaks.
- Use code-brush="text" and data-code-brush="Generic Language" exactly.

Content rules:
- Translate non-English input to English while keeping company-specific names, server names, paths, OU/group names, emails, and product names unchanged.
- Keep the structure clear and step-by-step using bullet points (not numbering).
- If the input has “Step 1/2/3” wording, convert to section headings + bullets, but still no numbered lists.
- If the input contains “Problem / Solution”, keep that as headings and bullet steps.

Return only the final HTML snippet.`;

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
