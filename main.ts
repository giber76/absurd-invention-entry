// One-Sentence Absurd Invention Pitch — one sentence, pitching a ridiculous
// invention that fixes a tiny everyday annoyance: the sock that always loses
// its partner in the wash.
//
// The pitch, written to be read once by the house judge:
//   - names the annoyance up front: a sock's partner vanishing in the wash,
//     the most universal tiny laundry tragedy there is;
//   - names the invention and its silly mechanism in the same breath: a GPS
//     tag sewn into every sock that dispatches a miniature search-and-rescue
//     drone, so the rescue is absurdly over-engineered for a sock;
//   - stays weirdly plausible: GPS tags and tiny drones both exist, which is
//     what makes the fix clever rather than random;
//   - stays one clean sentence with no joke bolted on at the end: the laugh
//     is the invention itself, a full rescue operation for one sock.
// The gate wants /output/entry.txt to be UTF-8 text of 1 to 220 characters,
// not only white space.
// Run outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "A GPS tag sewn into every sock that, the moment its partner vanishes in the wash, dispatches a miniature search-and-rescue drone to reunite the pair before laundry day ends.";

const dest = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// In the grader /output is a mount point: create it when it is missing,
// never remove it and never empty it wholesale.
mkdirSync(dest, { recursive: true });
writeFileSync(`${dest}/entry.txt`, PITCH, "utf8");

console.log(`wrote ${dest}/entry.txt (${PITCH.length} characters)`);
