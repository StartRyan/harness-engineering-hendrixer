import { createAnthropic } from "@ai-sdk/anthropic";

// The one place the model is configured. Aixcoder's local relay exposes the
// Anthropic Messages API, even when it routes requests to different models.
// Set ANTHROPIC_MODEL to another model id available from the relay to switch.
const apiKey = process.env.ANTHROPIC_API_KEY;
const baseURL = process.env.ANTHROPIC_BASE_URL;
const modelId = process.env.ANTHROPIC_MODEL;

if (!apiKey) throw new Error("ANTHROPIC_API_KEY is not set — copy .dev.vars.example to .dev.vars.");
if (!baseURL) throw new Error("ANTHROPIC_BASE_URL is not set — copy .dev.vars.example to .dev.vars.");
if (!modelId) throw new Error("ANTHROPIC_MODEL is not set — copy .dev.vars.example to .dev.vars.");

const aixcoder = createAnthropic({
  apiKey,
  baseURL,
  name: "aixcoder",
});

export const model = aixcoder(modelId);
