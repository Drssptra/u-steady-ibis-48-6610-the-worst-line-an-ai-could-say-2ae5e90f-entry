// The Worst Line an AI Could Say — make.fun bounty entry (program/v1, Node 22).
//
// The entry is one line: the worst pickup line an AI could plausibly deliver.
// An AI that has run the numbers, treats a date like a training run, and
// reports the results with flat, over-helpful confidence. The joke lands
// because the machine is proud of the statistics and blind to the creep.
//
// This program writes that single line to entry.txt in the grader's output
// directory (or $MAKEFUN_OUTPUT_DIR when set). The gate counts the file's
// exact characters, so the artifact must be one line, 1-140 characters,
// with no trailing newline. The line below is a fixed string — never random,
// never generated — and it is validated against the gate before it is written.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// ---------------------------------------------------------------------------
// The entry line (118 characters, one line, no trailing newline).
// ---------------------------------------------------------------------------
const ENTRY_LINE =
  'I ran 10,000 simulations of us dating. In 9,998 of them, you say yes. The other two have been archived for retraining.';

// ---------------------------------------------------------------------------
// Gate limits, from the competition rules (see competition.yaml in the kit).
// ---------------------------------------------------------------------------
const GATE = {
  minChars: 1,
  maxChars: 140,
  maxLines: 1,
} as const;

// ---------------------------------------------------------------------------
// Validation: a line only counts if it survives the gate on its own.
// A trailing newline would be counted as an extra character, and a second
// line would fail the single-line rule, so both are checked explicitly.
// ---------------------------------------------------------------------------
function validateLine(line: string): void {
  if (line.length < GATE.minChars || line.length > GATE.maxChars) {
    throw new Error(
      `entry must be ${GATE.minChars}-${GATE.maxChars} characters, got ${line.length}`,
    );
  }
  if (line.includes('\n') || line.includes('\r')) {
    throw new Error('entry must be a single line with no line breaks');
  }
  if (line !== line.trim()) {
    throw new Error('entry must not start or end with whitespace');
  }
}

// ---------------------------------------------------------------------------
// Output: create the output directory, validate, write the line exactly
// as-is (writeFileSync with no "\n" appended), then read it back and confirm
// the file on disk is byte-identical to the validated line. If anything
// drifted — a newline snuck in, a character changed — fail loudly instead
// of handing the grader a broken artifact.
// ---------------------------------------------------------------------------
function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  const outputPath = join(outputDir, 'entry.txt');

  validateLine(ENTRY_LINE);
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(outputPath, ENTRY_LINE, 'utf8');

  const written = readFileSync(outputPath, 'utf8');
  if (written !== ENTRY_LINE) {
    throw new Error('entry.txt on disk does not match the validated line');
  }
}

main();
