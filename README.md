# AI Investment Committee Demo

Static web app for a five-minute show-and-tell demonstrating an AI-assisted investment committee workflow for Booz Allen Hamilton, with a credit-investment lens on bonds, loans, liquidity, maturities, and spread compensation.

The repo now also includes a reusable real-diligence runbook and an actual Booz Allen diligence-run tab. The site remains static, but it shows the evidence pack, agent disagreement, scorecard, and final committee conclusion.

## Live app

[Open the AI Investment Committee Demo](https://digitalwestern.github.io/AI-Show-and-tell/)

## How to run

Open `index.html` directly in a browser, or host the folder with GitHub Pages. The app has no backend, no live AI calls, no external scripts, no CDNs, and no runtime network dependency except when a viewer chooses to open source links.

## Demo framing

The research packet is prebuilt on purpose. The button stages the committee workflow so the presenter can explain the procedure without pretending the app is making a live model call.

The static packet should not be treated as live AI orchestration. The `Diligence Run` tab shows a captured diligence pass using the formula in `diligence_workflow/`.

## Real diligence workflow

Use this sequence when you want to rerun the process manually in ChatGPT, Codex, or another AI workspace:

1. Build an evidence pack with only source-backed facts.
2. Run independent Bull, Bear, Credit, Market, and Valuation agents.
3. Cross-examine the agents against each other's claims.
4. Score the idea with explicit category weights.
5. Let the Committee Chair synthesize the result without adding new facts.

Core rule:

> No final thesis can be stronger than the weakest unsupported assumption.

For the Booz Allen demo, the conclusion is `Watchlist; no trade today`, because the packet still lacks current bond prices, yields, spreads, full peer comps, covenant detail, and downside scenario math.

## Files

- `index.html`: static app shell
- `styles.css`: responsive and print styles
- `app.js`: local research packet and interactions
- `assets/concept-ui.png`: generated visual concept used for the first implementation pass
- `diligence_workflow/00_evidence_pack.md`: source-backed fact collection template
- `diligence_workflow/01_agent_prompts.md`: independent agent prompts
- `diligence_workflow/02_agent_outputs.md`: capture file for raw agent outputs
- `diligence_workflow/03_cross_examination.md`: debate and challenge template
- `diligence_workflow/04_scoring_matrix.md`: weighted scoring template
- `diligence_workflow/05_final_committee_memo.md`: final memo template
