import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Skipping today's meeting: I read the agenda, and my soul just filed a PTO request.";

const MAX_LEN = 200;
if (LINE.length > MAX_LEN) {
  throw new Error(`Entry too long: ${LINE.length} chars (max ${MAX_LEN})`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf-8");
