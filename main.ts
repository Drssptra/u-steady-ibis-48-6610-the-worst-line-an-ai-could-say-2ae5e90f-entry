// The Worst Line an AI Could Say — make.fun bounty entry (program/v1, Node 22).
// Writes exactly one pickup line — the worst an AI could plausibly deliver —
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt outside the grader).
// No trailing newline: the gate counts the file's exact characters (1-140),
// so the line is a fixed string, never random, and never ends with a line end.
// Revision: "of them" added so the 9,998 clearly refers back to the
// simulations — the machine counts its own timelines out loud, which is
// exactly the flat, over-helpful failure the joke needs.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'I ran 10,000 simulations of us dating. In 9,998 of them, you say yes. The other two have been archived for retraining.';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf8');
