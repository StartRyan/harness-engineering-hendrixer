import { config } from "dotenv";

// Import this module FIRST, before modules that read env at load time.
// ES module imports are evaluated before top-level statements.
config({ path: ".dev.vars" });
