# AI Investment Committee Simulator: Booz Allen Demo

## Summary

Build a small local web app for a 5-minute show-and-tell called **"Making AI Pressure-Test an Investment Idea."** The demo uses **Booz Allen Hamilton** as the public-company case study and presents an AI-generated investment committee packet with role-based analysis.

The app should feel like an interactive committee workspace, not a generic chatbot. It will use **prebuilt AI outputs** for reliability, with an optional prompt shown for rerunning one role live in ChatGPT/Codex if the room wants to see generation happen.

## Key Experience

- First screen: company input set to **Booz Allen Hamilton**, with ticker, sector, and short business description.
- One button: **Run Committee Review**.
- Output appears as role cards:
  - Lead Analyst: investment thesis
  - Bear Analyst: risks and objections
  - Risk Manager: contract, margin, budget, and concentration concerns
  - Market Researcher: recent public news themes and sector context
  - Valuation Reviewer: relative-value framing using public comps at a high level
  - Committee Chair: final recommendation and diligence questions
- Final artifact: one-page **Investment Committee Memo** view suitable for export, screenshot, or printing.

## Implementation Changes

- Build as a lightweight local web app with no required backend and no live API dependency.
- Store the Booz Allen case data in a local structured data file or JS object:
  - company overview
  - public-source research notes
  - role outputs
  - cited source names/URLs
  - final memo
- Include a "Live Rerun Prompt" panel for one role, likely the Bear Analyst or Risk Manager, so you can paste it into ChatGPT/Codex during the meeting.
- Add a clear caveat in the UI: **demo only, public information, not investment advice**.
- Use hybrid research:
  - Pre-curated company/news/valuation context for the actual app.
  - Optional refresh of public news and valuation context within 48 hours of the meeting.

## Test Plan

- Open the app locally and verify the full demo can be completed in under 5 minutes.
- Test desktop display on the likely meeting screen size.
- Confirm all role cards render without overflow or awkward scrolling.
- Verify the memo view is clean enough for screenshot/export.
- Confirm the demo still works with no internet connection.
- Separately verify that any public-source links used in the packet still load before the meeting.

## Assumptions

- The target audience is finance/business colleagues, not engineers.
- The goal is to demonstrate a practical AI workflow, not make a real investment recommendation.
- Booz Allen is the default company because it connects AI, government services, defense, and public-company diligence.
- The app will not make live model calls, because reliability matters more than technical flash for this meeting.
- Live AI generation, if shown, will happen manually by pasting one prepared prompt into ChatGPT/Codex.
