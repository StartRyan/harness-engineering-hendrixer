import { config } from "dotenv";

// Load .dev.vars before modules such as harness/model.ts read process.env.
// ES module imports are evaluated before top-level statements.
config({ path: ".dev.vars" });
