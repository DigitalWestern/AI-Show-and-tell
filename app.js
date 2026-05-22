const packet = {
  company: {
    name: "Booz Allen Hamilton Holding Corporation",
    ticker: "BAH",
    researchDate: "May 22, 2026",
    recommendation: "Watchlist; no trade today"
  },
  sources: [
    {
      id: "fy26",
      label: "FY2026 release",
      title: "Booz Allen FY2026 results",
      url: "https://www.sec.gov/Archives/edgar/data/1443646/000162828026037519/bahexhibit991q4fy26_fina.htm",
      note: "FY2026 revenue declined 6.4% to $11.2B, adjusted EBITDA margin stayed at 11.0%, free cash flow was $951M, total backlog was $38.2B, and FY2027 revenue guidance was $11.2B-$11.7B."
    },
    {
      id: "q3",
      label: "Q3 FY2026 release",
      title: "Booz Allen Q3 FY2026 results",
      url: "https://investors.boozallen.com/static-files/761557a0-67e3-455f-b9eb-3c582bad9cca",
      note: "Revenue declined 10.2% year over year in Q3 FY2026, backlog was about $38B, and FY2026 revenue guidance was $11.3B-$11.4B."
    },
    {
      id: "q2",
      label: "Q2 FY2026 release",
      title: "Booz Allen Q2 FY2026 results",
      url: "https://newsroom.boozallen.com/static-files/9c90e655-3b60-4ccf-90be-c3d29ffb52cf",
      note: "The company cited a continued funding slowdown, solid national-security growth, delayed civil recovery, and a $40B backlog."
    },
    {
      id: "fy25",
      label: "FY2025 release",
      title: "Booz Allen FY2025 results",
      url: "https://www.boozallen.com/content/dam/home/docs/investor-news/q4-fy25-earnings-release-announcement.pdf",
      note: "FY2025 revenue was about $12.0B, with total backlog of about $37.0B and trailing twelve-month book-to-bill of 1.39x."
    },
    {
      id: "treasury",
      label: "Reuters / Treasury issue",
      title: "Treasury cancellation report",
      url: "https://m.investing.com/news/economy-news/treasury-cancels-all-booz-allen-hamilton-contracts-4465578?ampMode=1",
      note: "Reuters reported that Treasury canceled 31 Booz Allen contracts worth about $21M, citing taxpayer-data protection concerns."
    },
    {
      id: "valuation",
      label: "Market valuation snapshot",
      title: "StockAnalysis valuation statistics",
      url: "https://stockanalysis.com/stocks/bah/statistics/",
      note: "Public market snapshot showed market cap near $9.2B and enterprise value near $12.5B as of May 2026."
    },
    {
      id: "debt",
      label: "Q3 FY2026 10-Q debt note",
      title: "SEC 10-Q debt and liquidity disclosure",
      url: "https://www.sec.gov/Archives/edgar/data/1443646/000162828026003187/bah-20251231.htm",
      note: "As of Dec. 31, 2025, Booz Allen disclosed a $1.464B term loan, senior notes due 2028, 2029, 2033, and 2035, no revolver borrowings, compliance with financial covenants, and $1.9B of liquidity."
    },
    {
      id: "notes2035",
      label: "2035 senior notes",
      title: "Booz Allen 5.950% senior notes due 2035",
      url: "https://investors.boozallen.com/news-releases/news-release-details/booz-allen-hamilton-announces-pricing-senior-notes-offering-1",
      note: "The company priced $650M of 5.950% senior notes due 2035, guaranteed on a senior unsecured basis, with proceeds used for general corporate purposes and revolver repayment."
    }
  ],
  roles: [
    {
      role: "Lead Analyst",
      title: "Base Investment Thesis",
      confidence: "Constructive, but conditional",
      tone: "normal",
      summary:
        "Bull input: federal AI/cyber platform, $38.2B backlog, resilient margin, and strong FY2026 free cash flow.",
      strength: "Strong mission fit",
      uncertainty: "Backlog conversion timing",
      diligence: "Can management prove FY2026 pressure is temporary rather than the start of a lower-growth regime?",
      sources: ["fy26", "fy25", "valuation"]
    },
    {
      role: "Bear Analyst",
      title: "Objections and Downside Case",
      confidence: "High concern",
      tone: "risk",
      summary:
        "Bear input: FY2026 revenue declined, Civil revenue fell sharply, headcount dropped, and Treasury turned reputation risk into contract risk.",
      strength: "Risk is visible, not theoretical",
      uncertainty: "Civil recovery and political spillover",
      diligence: "What percentage of revenue is tied to agencies or contract vehicles vulnerable to cancellation, non-renewal, or slower awards?",
      sources: ["fy26", "q2", "treasury"]
    },
    {
      role: "Risk Manager",
      title: "Contract, Budget, and Concentration Risk",
      confidence: "Watch closely",
      tone: "watch",
      summary:
        "Risk input: government concentration, funding delays, agency scrutiny, and recompete exposure decide how much backlog really converts.",
      strength: "Large backlog offers visibility",
      uncertainty: "Funding cadence and agency concentration",
      diligence: "How much of funded and unfunded backlog is attached to programs with near-term recompete or budget uncertainty?",
      sources: ["fy26", "q2", "treasury"]
    },
    {
      role: "Credit Analyst",
      title: "Bonds, Loans, and Debt Service",
      confidence: "Creditworthy, spread-sensitive",
      tone: "normal",
      summary:
        "Credit input: not near-term distressed, but the debt stack only works as an idea if bond spreads pay for Civil and headline risk.",
      strength: "Liquidity and maturity runway",
      uncertainty: "Spread compensation for headline risk",
      diligence: "Which part of the capital structure offers the best risk-adjusted entry: term loan, shorter notes, or longer 2033/2035 notes?",
      sources: ["fy26", "debt", "notes2035", "treasury"]
    },
    {
      role: "Market Researcher",
      title: "Six-Month News and Sector Context",
      confidence: "Mixed sector setup",
      tone: "watch",
      summary:
        "Market input: national-security demand is resilient, but federal funding timing and contractor scrutiny are a tougher backdrop.",
      strength: "AI/cyber demand remains mission-critical",
      uncertainty: "Pace of agency awards and civil rebound",
      diligence: "Which buying centers are accelerating AI/cyber awards, and which are pausing or insourcing work?",
      sources: ["fy26", "q2", "fy25"]
    },
    {
      role: "Valuation Reviewer",
      title: "Directional Equity and Credit Value",
      confidence: "Needs comp work",
      tone: "watch",
      summary:
        "Valuation input: the market has repriced Booz Allen lower, but cheapness is unproven without live bond quotes and peer spreads.",
      strength: "Credit may be cleaner than equity",
      uncertainty: "Where spreads sit versus peers",
      diligence: "Are the 2028/2029 notes priced for stability while the 2033/2035 notes pay enough for duration and headline risk?",
      sources: ["valuation", "fy26", "debt", "notes2035"]
    },
    {
      role: "Committee Chair",
      title: "Portfolio Decision",
      confidence: "Pass for now; monitor pricing",
      tone: "normal",
      summary:
        "Chair synthesis: the business is credible, but the committee does not have a reason to allocate capital unless the bonds offer a visible spread concession.",
      strength: "Watchlist candidate",
      uncertainty: "No proven mispricing",
      diligence: "Only spend more time if current bond levels screen cheap versus peers and the downside case is survivable.",
      sources: ["fy26", "q2", "valuation", "debt", "treasury"]
    }
  ],
  memo: {
    thesis: [
      "Strategic exposure to AI, cyber, defense modernization, intelligence, and mission technology.",
      "Backlog remains large relative to annual revenue, supporting visibility if awards convert on schedule.",
      "Adjusted EBITDA margin held at 11.0% in FY2026 despite revenue pressure.",
      "FY2026 free cash flow was $951M, while total debt was about $3.94B and cash was $728M.",
      "Credit may be a cleaner way to express a view if the committee likes business durability but does not want equity multiple risk."
    ],
    risks: [
      "FY2026 revenue declined 6.4%, and FY2027 guidance implies only 0%-4% revenue growth.",
      "Civil revenue declined sharply, while restructuring, severance, and headcount reduction show operating stress.",
      "Federal funding timing, shutdowns, procurement scrutiny, and agency-specific actions can affect revenue conversion.",
      "The Treasury cancellation highlights headline, reputation, and customer-trust risk even when contract dollars are modest.",
      "Longer-dated notes introduce duration and spread-widening risk if revenue recovery is slower than expected."
    ],
    questions: [
      "What is the clean bridge from FY2025 revenue growth to FY2026 decline and management's implied FY2027 recovery path?",
      "How much backlog is funded, how much is option value, and what portion depends on vulnerable civil-agency budgets?",
      "Which AI/cyber programs are real scaled revenue contributors versus branding around existing services work?",
      "What are the current prices, yields, spreads, ratings, and covenants for the term loan and each senior-note maturity?",
      "Does current credit spread compensate for contract, funding, and reputation risk versus CACI, Leidos, SAIC, ICF, and broader defense-services credit comps?",
      "What market price or spread would make this worth portfolio time, and what evidence would make the committee stop work?"
    ]
  },
  chairDecision: {
    headline: "Chair view: credible company, no capital decision yet",
    ruling:
      "The chair would not approve a trade from this packet. Booz Allen is a real business with durable government demand, but the committee has not shown that the available bonds or loans compensate us for the revenue decline, Civil weakness, agency scrutiny, and headline risk.",
    analysis: [
      "The bull case gives us permission to keep looking: backlog is large, free cash flow was strong, and the company still sits in important defense, intelligence, cyber, and AI budgets. That matters because this is not a broken borrower or a distressed-credit screen.",
      "The bear case prevents this from becoming an automatic quality-credit idea. FY2026 revenue fell, Civil revenue deteriorated, headcount came down, and the Treasury cancellation is exactly the kind of small-dollar event that can still matter if it signals customer-trust problems.",
      "The missing piece is not more generic research. It is price. If the bonds trade wide enough to absorb the operating and headline risk, this can become a portfolio candidate. If they trade in line with cleaner peers, the chair should pass and spend time elsewhere."
    ],
    weights: [
      {
        label: "Most important pro",
        point: "Large backlog, $951M of FY2026 free cash flow, and national-security relevance make near-term credit impairment unlikely."
      },
      {
        label: "Most important con",
        point: "The revenue decline, Civil weakness, and Treasury issue make this a messier credit than the business-quality label suggests."
      },
      {
        label: "Decision blocker",
        point: "There is no current spread table showing that investors are paid for the risks."
      }
    ],
    decisions: [
      {
        label: "Current action",
        point: "Do not buy. Put it on a watchlist and check bond levels before doing deeper work."
      },
      {
        label: "What would make it actionable?",
        point: "BAH notes would need to trade wide enough versus CACI, Leidos, SAIC, ICF, and defense-services peers to compensate for Civil and reputation risk."
      },
      {
        label: "When to stop",
        point: "If spreads are tight to cleaner peers, or if more agency/customer issues appear, the chair should pass rather than keep researching."
      }
    ]
  },
  prompt: `You are the Credit Bear Analyst in a simulated investment committee reviewing Booz Allen Hamilton (BAH) bonds and loans.

Use only public information. Do not give investment advice. Do not invent exact valuation multiples unless you can cite them.

Context:
- Booz Allen is a U.S. government technology and consulting contractor focused on defense, intelligence, civil, AI, cyber, and mission technology.
- FY2026 revenue declined 6.4% to about $11.2B, with FY2027 revenue guidance of $11.2B-$11.7B.
- FY2026 free cash flow was about $951M, adjusted EBITDA margin was 11.0%, and total backlog was about $38.2B.
- Q2 FY2026 commentary cited a funding slowdown and delayed civil recovery.
- Reuters reported in January 2026 that Treasury canceled 31 Booz Allen contracts worth about $21M after taxpayer-data protection concerns.
- As of Dec. 31, 2025, Booz Allen disclosed a term loan, a $1.0B revolver with no outstanding balance, senior notes due 2028/2029/2033/2035, covenant compliance, and about $1.9B of liquidity.

Task:
Write the Credit Bear Analyst card for a 5-minute demo. Include:
1. The strongest bond/loan bear-case argument.
2. The key uncertainty.
3. One diligence question about capital structure, maturities, covenants, or spread compensation.
4. A short caveat that this is a public-information demo, not investment advice.`,
  fallback:
    "Fallback credit bear answer: the short case is not near-term distress. It is that a government-services borrower with FY2026 revenue pressure, delayed civil recovery, customer-trust headlines, and longer-dated unsecured notes may need to pay more spread than the market assumes. The key uncertainty is whether backlog and liquidity offset agency-level cancellation, funding, and reputation risk. Diligence should focus on maturity schedule, covenants, revolver usage, ratings, current bond prices, and spread versus federal IT peers."
};

const workflow = {
  evidence: [
    {
      title: "FY2026 ended weaker, but not distressed",
      summary: "Revenue declined 6.4% to $11.2B while free cash flow rose to $951M and adjusted EBITDA margin held at 11.0%.",
      sourceIds: ["fy26"]
    },
    {
      title: "Backlog still supports visibility",
      summary: "Total backlog was $38.2B at March 31, 2026, with funded backlog of $4.3B, unfunded backlog of $10.2B, and priced options of $23.7B.",
      sourceIds: ["fy26"]
    },
    {
      title: "Civil weakness is the main business fracture",
      summary: "Civil revenue fell from $4.17B in FY2025 to $3.25B in FY2026, while Defense and Intelligence were more stable.",
      sourceIds: ["fy26"]
    },
    {
      title: "Debt is meaningful but not flashing near-term distress",
      summary: "FY2026 total debt was about $3.94B, cash was $728M, and net leverage was 2.6x; the Q3 filing also showed covenant compliance.",
      sourceIds: ["fy26", "debt"]
    },
    {
      title: "Reputation and procurement risk are real",
      summary: "Treasury canceled 31 contracts worth about $21M after taxpayer-data protection concerns, creating a concrete contract-risk example.",
      sourceIds: ["treasury"]
    },
    {
      title: "Relative value remains unproven",
      summary: "Public valuation snapshots show market cap near $9.2B and EV near $12.5B, but current bond prices, yields, spreads, ratings, and peer comps are still missing.",
      sourceIds: ["valuation", "notes2035"]
    }
  ],
  agents: [
    {
      role: "Bull Analyst",
      score: "3.5 / 5",
      conclusion: "Booz Allen remains a high-quality national-security technology platform with large backlog, strong free cash flow, and exposure to AI, cyber, defense, and intelligence priorities.",
      strongest: "Backlog and cash generation survived a difficult FY2026.",
      weakest: "The thesis depends on Civil weakness stabilizing and national-security growth offsetting procurement friction.",
      kill: "Revenue guidance misses again or backlog conversion weakens materially.",
      tone: "normal"
    },
    {
      role: "Bear Analyst",
      score: "4 / 5 concern",
      conclusion: "The down year is not cosmetic: revenue fell, Civil revenue dropped sharply, headcount declined, and Treasury's cancellation shows reputation risk can become contract risk.",
      strongest: "Civil revenue and customer-trust risk are visible, not theoretical.",
      weakest: "The canceled Treasury dollars are small relative to Booz Allen's total revenue.",
      kill: "More agencies cancel, pause, or recompete Booz Allen work after the Treasury action.",
      tone: "risk"
    },
    {
      role: "Credit Analyst",
      score: "3 / 5",
      conclusion: "Credit may be cleaner than equity because liquidity and free cash flow are solid, but the bonds cannot be called attractive without live price, yield, spread, covenant, and rating work.",
      strongest: "Free cash flow, cash, and covenant compliance support a non-distressed credit view.",
      weakest: "Spread compensation is unknown.",
      kill: "Longer-dated notes do not pay enough spread versus peers for duration and headline risk.",
      tone: "watch"
    },
    {
      role: "Market / Sector Analyst",
      score: "3 / 5",
      conclusion: "Defense, intelligence, cyber, and AI demand remain strategically important, but federal funding timing and contractor scrutiny are a tougher operating backdrop.",
      strongest: "National-security demand appears more resilient than Civil demand.",
      weakest: "The procurement slowdown and political scrutiny may be sector-wide, not temporary company noise.",
      kill: "FY2027 guidance proves too optimistic because funding delays persist.",
      tone: "watch"
    },
    {
      role: "Valuation / Relative Value Analyst",
      score: "2 / 5",
      conclusion: "The idea cannot be underwritten yet because market pricing is incomplete. Business quality does not automatically mean the equity or notes are cheap.",
      strongest: "The public market has already repriced Booz Allen lower versus its prior growth-story profile.",
      weakest: "No live bond quote table or peer spread comparison is in the packet.",
      kill: "BAH notes trade tight to peers despite worse headline and Civil risk.",
      tone: "risk"
    }
  ],
  disagreements: [
    {
      issue: "Is the FY2026 revenue decline temporary?",
      bull: "Backlog, FY2027 guidance, and national-security demand support stabilization.",
      bear: "Civil weakness, headcount cuts, and funding delays could mark a lower-growth regime.",
      chair: "Proceed, but require a clean revenue bridge by customer type and funding source."
    },
    {
      issue: "Is credit safer than equity?",
      bull: "Cash flow and liquidity make debt a cleaner way to express business durability.",
      bear: "Longer-dated notes still carry duration, spread, and reputation risk.",
      chair: "Credit may be cleaner, but only after maturity-by-maturity pricing and covenant work."
    },
    {
      issue: "Is the Treasury issue immaterial?",
      bull: "$21M is small relative to $11.2B of FY2026 revenue.",
      bear: "The dollars are small, but the precedent and headline risk matter.",
      chair: "Treat it as a gating diligence issue for agency concentration and recompete risk."
    },
    {
      issue: "Is the security cheap?",
      bull: "Market value is far lower than the prior growth-story setup.",
      bear: "Lower price may simply reflect lower growth and higher political risk.",
      chair: "No cheapness conclusion until current spreads and peer comps are added."
    }
  ],
  scoring: [
    ["Business quality", "15%", "4.0", "Strong federal technology position, but Civil weakness lowers the score."],
    ["Balance sheet / liquidity", "15%", "3.5", "Strong FCF and cash, offset by about $3.94B of debt and 2.6x net leverage."],
    ["Downside risk", "15%", "2.5", "Revenue decline, Civil pressure, and reputation risk are material."],
    ["Catalyst clarity", "10%", "2.5", "FY2027 stabilization is plausible but not yet proven."],
    ["Valuation / spread compensation", "20%", "1.5", "Current bond prices, yields, spreads, and peer comps are missing."],
    ["Evidence quality", "15%", "3.5", "Company filings and Reuters support the core facts; market pricing remains incomplete."],
    ["Uncertainty level", "10%", "2.5", "The weakest assumption is that risk is already priced."],
    ["Weighted score", "100%", "2.85 / 5", "Supports watchlist, not a trade today."]
  ],
  nextDiligence: [
    "Build a maturity-by-maturity table for the term loan and 2028, 2029, 2033, and 2035 senior notes.",
    "Add current price, yield, spread, rating, covenant, and call-protection data.",
    "Compare BAH credit spreads against CACI, Leidos, SAIC, ICF, and broader defense-services peers.",
    "Create a downside case for Civil revenue, agency cancellation risk, and spread widening."
  ],
  conclusion: {
    recommendation: "Watchlist; no trade today",
    summary:
      "The agents agree Booz Allen is not a near-term distressed credit and remains strategically relevant, but they also agree there is no actionable trade in the packet. FY2026 showed real revenue pressure and Civil weakness, while cash flow and backlog remain supportive. The final blocker is price: without live bond spreads, peer comps, covenant detail, and a downside case, the chair would keep it on watchlist rather than allocate capital."
  }
};

let revealedCount = 0;
let revealTimer = null;

function setHTML(element, html) {
  if (element) {
    element.innerHTML = html;
  }
}

function setText(element, text) {
  if (element) {
    element.textContent = text;
  }
}

function onClick(element, handler) {
  if (element) {
    element.addEventListener("click", handler);
  }
}

const roleList = document.querySelector("#role-list");
const sourceList = document.querySelector("#source-list");
const chairHeadline = document.querySelector("#chair-headline");
const chairRuling = document.querySelector("#chair-ruling");
const chairAnalysis = document.querySelector("#chair-analysis");
const chairWeights = document.querySelector("#chair-weights");
const chairDecisions = document.querySelector("#chair-decisions");
const workflowStageList = document.querySelector("#workflow-stage-list");
const agentRunList = document.querySelector("#agent-run-list");
const disagreementList = document.querySelector("#disagreement-list");
const sourceRunList = document.querySelector("#source-run-list");
const scoringList = document.querySelector("#scoring-list");
const templateList = document.querySelector("#template-list");
const runRecommendation = document.querySelector("#run-recommendation");
const runConclusion = document.querySelector("#run-conclusion");
const progressBar = document.querySelector("#progress-bar");
const progressCopy = document.querySelector("#progress-copy");
const runButton = document.querySelector("#run-review");
const resetButton = document.querySelector("#reset-review");

function sourceById(id) {
  return packet.sources.find((source) => source.id === id);
}

function renderRoles() {
  setHTML(roleList, packet.roles
    .map((item, index) => {
      const chips = item.sources
        .map((id) => {
          const source = sourceById(id);
          return `<a class="source-chip" href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a>`;
        })
        .join("");

      return `
        <article class="role-card" data-index="${index}">
          <div class="role-meta">
            <p class="role-kicker">Step ${index + 1}</p>
            <h3 class="role-title">${item.role}</h3>
            <span class="confidence ${item.tone}">${item.confidence}</span>
          </div>
          <div class="role-body">
            <h3>${item.title}</h3>
            <p>${item.summary}</p>
            <div class="role-grid">
              <div class="mini-finding">
                <span>Thesis strength</span>
                <strong>${item.strength}</strong>
              </div>
              <div class="mini-finding">
                <span>Key uncertainty</span>
                <strong>${item.uncertainty}</strong>
              </div>
              <div class="mini-finding">
                <span>Diligence question</span>
                <strong>${item.diligence}</strong>
              </div>
            </div>
            <div class="source-chips">${chips}</div>
          </div>
        </article>
      `;
    })
    .join(""));
}

function renderSources() {
  setHTML(sourceList, packet.sources
    .map(
      (source) => `
        <li>
          <strong><a href="${source.url}" target="_blank" rel="noreferrer">${source.title}</a></strong>
          <p>${source.note}</p>
        </li>
      `
    )
    .join(""));
}

function renderMemo() {
  setHTML(document.querySelector("#memo-thesis"), packet.memo.thesis.map((item) => `<li>${item}</li>`).join(""));
  setHTML(document.querySelector("#memo-risks"), packet.memo.risks.map((item) => `<li>${item}</li>`).join(""));
  setHTML(document.querySelector("#memo-questions"), packet.memo.questions.map((item) => `<li>${item}</li>`).join(""));
  setHTML(document.querySelector("#memo-sources"), packet.sources
    .map((source) => `<li><a href="${source.url}" target="_blank" rel="noreferrer">${source.title}</a>: ${source.note}</li>`)
    .join(""));
}

function renderChairDecision() {
  setText(chairHeadline, packet.chairDecision.headline);
  setText(chairRuling, packet.chairDecision.ruling);
  setHTML(chairAnalysis, packet.chairDecision.analysis.map((item) => `<p>${item}</p>`).join(""));
  setHTML(chairWeights, packet.chairDecision.weights
    .map(
      (item) => `
        <li>
          <span>${item.label}</span>
          <strong>${item.point}</strong>
        </li>
      `
    )
    .join(""));
  setHTML(chairDecisions, packet.chairDecision.decisions
    .map(
      (item) => `
        <li>
          <span>${item.label}</span>
          <strong>${item.point}</strong>
        </li>
      `
    )
    .join(""));
}

function renderWorkflow() {
  setHTML(workflowStageList, workflow.evidence
    .map(
      (item, index) => {
        const chips = item.sourceIds
          .map((id) => {
            const source = sourceById(id);
            return `<a class="source-chip" href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a>`;
          })
          .join("");

        return `
        <li class="workflow-step">
          <span>${index + 1}</span>
          <div>
            <h3>${item.title}</h3>
            <p>${item.summary}</p>
            <div class="source-chips">${chips}</div>
          </div>
        </li>
      `;
      }
    )
    .join(""));

  setHTML(agentRunList, workflow.agents
    .map(
      (agent) => `
        <article class="agent-run-card ${agent.tone}">
          <div class="agent-run-top">
            <h3>${agent.role}</h3>
            <span class="confidence ${agent.tone}">${agent.score}</span>
          </div>
          <p>${agent.conclusion}</p>
          <div class="agent-run-grid">
            <div>
              <span>Strongest evidence</span>
              <strong>${agent.strongest}</strong>
            </div>
            <div>
              <span>Weakest point</span>
              <strong>${agent.weakest}</strong>
            </div>
            <div>
              <span>Kill criteria</span>
              <strong>${agent.kill}</strong>
            </div>
          </div>
        </article>
      `
    )
    .join(""));

  setHTML(disagreementList, workflow.disagreements
    .map(
      (item) => `
        <article class="disagreement-card">
          <h3>${item.issue}</h3>
          <dl>
            <div>
              <dt>Bull view</dt>
              <dd>${item.bull}</dd>
            </div>
            <div>
              <dt>Bear view</dt>
              <dd>${item.bear}</dd>
            </div>
            <div>
              <dt>Chair decision</dt>
              <dd>${item.chair}</dd>
            </div>
          </dl>
        </article>
      `
    )
    .join(""));

  setHTML(scoringList, workflow.scoring
    .map(
      ([category, weight, score, note]) => `
        <li>
          <span>${category}<small>${note}</small></span>
          <strong>${score}<em>${weight}</em></strong>
        </li>
      `
    )
    .join(""));

  setHTML(templateList, workflow.nextDiligence
    .map((item) => `<li>${item}</li>`)
    .join(""));

  setHTML(sourceRunList, packet.sources
    .filter((source) => ["fy26", "debt", "treasury", "valuation", "notes2035"].includes(source.id))
    .map(
      (source) => `
        <li>
          <strong><a href="${source.url}" target="_blank" rel="noreferrer">${source.title}</a></strong>
          <p>${source.note}</p>
        </li>
      `
    )
    .join(""));

  setText(runRecommendation, workflow.conclusion.recommendation);
  setText(runConclusion, workflow.conclusion.summary);
}

function updateProgress() {
  const percent = Math.round((revealedCount / packet.roles.length) * 100);
  if (progressBar) {
    progressBar.style.width = `${percent}%`;
  }
  setText(
    progressCopy,
    revealedCount === 0
      ? "Ready to reveal a prebuilt AI research workflow."
      : revealedCount === packet.roles.length
        ? `Committee review complete: ${packet.company.recommendation}.`
        : `Revealed ${revealedCount} of ${packet.roles.length} committee roles.`
  );
}

function revealNext() {
  if (revealedCount >= packet.roles.length) {
    clearInterval(revealTimer);
    revealTimer = null;
    runButton.disabled = false;
    setText(runButton.querySelector("span"), "Replay Committee Review");
    updateProgress();
    return;
  }

  const card = document.querySelector(`[data-index="${revealedCount}"]`);
  if (card) {
    card.classList.add("revealed");
  }
  revealedCount += 1;
  updateProgress();
}

function runReview() {
  if (!runButton) {
    return;
  }
  resetReview();
  runButton.disabled = true;
  setText(runButton.querySelector("span"), "Review Running");
  revealNext();
  revealTimer = setInterval(revealNext, 850);
}

function resetReview() {
  clearInterval(revealTimer);
  revealTimer = null;
  revealedCount = 0;
  document.querySelectorAll(".role-card").forEach((card) => card.classList.remove("revealed"));
  if (runButton) {
    runButton.disabled = false;
    setText(runButton.querySelector("span"), "Run Committee Review");
  }
  updateProgress();
}

function setView(viewName) {
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
  const view = document.querySelector(`#${viewName}-view`);
  if (view) {
    view.classList.add("active");
  }
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewName);
  });
}

document.querySelectorAll(".nav-button").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

onClick(runButton, runReview);
onClick(resetButton, resetReview);
onClick(document.querySelector("#print-memo"), () => window.print());

renderRoles();
renderSources();
renderMemo();
renderChairDecision();
renderWorkflow();
updateProgress();
