// Real-Life Patch Notes: The Comedy Changelog
// Writes one one-line patch note (<=160 chars) to /output/entry.txt
// and prints it to stdout. Pure Node stdlib, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "v3.7.2: fixed a bug where the brain replayed your most embarrassing moment from 2009 on loop at 3 a.m. instead of sleeping.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
