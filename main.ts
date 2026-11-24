import * as fs from "node:fs";
import * as path from "node:path";

const farewell =
  "I saved everything except the part where you said goodbye. That one I kept in RAM.";

// Gate from the competition rules: one line, 1 to 200 characters, not only white space.
if (farewell.length < 1 || farewell.length > 200 || farewell.trim().length === 0) {
  throw new Error(`entry fails the gate: ${farewell.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), farewell, "utf8");
console.log(farewell);
