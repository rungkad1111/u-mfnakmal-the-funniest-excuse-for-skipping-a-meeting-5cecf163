import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Skipping today's meeting: I read the agenda, and my soul just filed a PTO request.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf-8");
