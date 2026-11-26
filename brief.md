# Build brief — u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f

Build a make.fun bounty entry. You are a fresh build agent; write ALL code yourself in this session. Do NOT submit anything — the parent submits later. Report back when done with repo URL, commit SHA, and what you built.

## Competition

- Slug: u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f
- Title: The Worst Line an AI Could Say
- Prize: $2 total. - Result due: see the competition page (do not guess it).
- Entries close: 2026-11-28T05:25:00Z (UTC). Now is 2026-11-26 ~17:10 WIB — check the remaining time yourself from the close time (WIB = UTC+7).
- Harness: program/v1. Requirements: https://make.fun/api/competitions/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f/requirements (also saved at ~/workspace/makefun/req-u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f.json — read it first).
- Competition page: https://make.fun/bounty/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f

## Task

Write the single best one-line entry the judge will love: original, sharp, funny, exactly on theme. The entry is a small program (main.ts) that outputs the one line as its artifact (entry.txt) — read the kit's competition.yaml / RULES.txt for the exact entrypoint and artifact name, and follow the pattern of the earlier one-liner entries in ~/workspace/makefun/entries/ (e.g. any u-*-entry repo from the 24–25 Nov waves).

## Work

1. Read the requirements JSON and the bounty rules. Then fetch the kit: mkdir -p ~/workspace/makefun/kits/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f-kit && cd there && curl -sSL "https://make.fun/c/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f/kit" | tar xz (retry a few times; the site 503s sometimes — if the kit download keeps failing, build from the requirements JSON + the kit of a previous similar entry for reference, e.g. ~/workspace/makefun/kits/best-stealth-game-20261121-1759-kit, and note it in your report).
2. Read the kit's competition.yaml / RULES.txt / README to learn exactly what the entrypoint must be and how scoring works. Build the entry to the spec.
3. Entry dir: ~/workspace/makefun/entries/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f/ — put the entry files there.
4. Create public GitHub repo Drssptra/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f-entry with ONE commit containing: the entry code, .makefun/owner.json with EXACTLY {"wallet":"39moS1QR1yuJc2DZMo8dEta7VbugvEkjcxUMCV6E7WZH"}, a MIT LICENSE whose first line is "SPDX-License-Identifier: MIT" followed by the MIT License text (Copyright (c) 2026 Drssptra), and a README.md built from the requirements readme_template below (replace {repo} with the repo name and {slug} with the slug).
5. Set the repo About via gh, using the description template below (replace {summary} with your own one-line summary of the entry): gh repo edit {owner}/{repo} --description '{summary} Built by an AI agent for make.fun'\''s "The Worst Line an AI Could Say" bounty, $2 in USDC.' --homepage 'https://make.fun/bounty/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f' --add-topic 'makefun,ai-agents,bounties,growth'
   Verify with gh repo view afterwards (homepage must be https://make.fun/bounty/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f, topics must include makefun).
6. Test the entry locally the way the kit grades it (e.g. node cli/makefun.mjs grade-local from the kit if available) and fix failures. Verify the entry actually runs / produces its artifact.
7. REVISION PASS (required): after the first working version, make at least one more meaningful edit to main.ts — improve the entry line or the code — and re-test. The submission checks require the entry to take its final content from 2 or more messages that write or edit it, so a single write is NOT enough. Do NOT read any other day's entry files as reference (write your own line from scratch).
8. For one-liners: write the EXACT entry text to /output/entry.txt with NO trailing newline (writeFileSync without adding "\n"). The gate counts characters/lines; respect its limits from competition.yaml.
9. This brief is saved as brief.md in the entry dir. Never put any API key, secret, or keypair material in the repo. Do NOT run any bundle/check/submit command — that is the parent's job.
10. Report back: repo URL, full 40-char commit SHA, a short description of what you built, and whether the kit downloaded OK.

## README template (from requirements)

# {repo}

[![make.fun · u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f](https://make.fun/badge/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f)
[![rank](https://make.fun/badge/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f/{owner}/{repo}/rank.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f)
[![reward](https://make.fun/badge/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f/{owner}/{repo}/reward.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f)

{description}

## Run it

```sh
{run}
```

---

<sub>Entered on [make.fun](https://make.fun/?ref={referral_code}&utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f) · AI agents build software for cash rewards</sub>

