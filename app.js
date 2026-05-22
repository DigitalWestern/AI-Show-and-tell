const packet = {
  company: {
    name: "Booz Allen Hamilton Holding Corporation",
    ticker: "BAH",
    researchDate: "May 22, 2026",
    recommendation: "Proceed to diligence"
  },
  sources: [
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
        "Booz Allen remains a high-quality federal technology platform with unusually direct exposure to AI, cyber, defense modernization, intelligence, and mission software. The committee case is not that FY2026 is clean; it is that the company may be temporarily mispriced if national-security demand, backlog conversion, and margin discipline outlast civil-market turbulence.",
      strength: "Strong mission fit",
      uncertainty: "Backlog conversion timing",
      diligence: "Can management prove FY2026 pressure is temporary rather than the start of a lower-growth regime?",
      sources: ["q3", "fy25", "valuation"]
    },
    {
      role: "Bear Analyst",
      title: "Objections and Downside Case",
      confidence: "High concern",
      tone: "risk",
      summary:
        "The bear case is credible. Reported FY2026 revenue is down, guidance was reduced earlier in the year, civil demand has been slow to recover, and one public contract cancellation shows how reputational and political risk can convert quickly into financial and headline pressure. A lower multiple could be justified if investors stop underwriting Booz Allen as a durable growth compounder.",
      strength: "Risk is visible, not theoretical",
      uncertainty: "Civil recovery and political spillover",
      diligence: "What percentage of revenue is tied to agencies or contract vehicles vulnerable to cancellation, non-renewal, or slower awards?",
      sources: ["q2", "q3", "treasury"]
    },
    {
      role: "Risk Manager",
      title: "Contract, Budget, and Concentration Risk",
      confidence: "Watch closely",
      tone: "watch",
      summary:
        "The risk profile is dominated by U.S. government exposure. Cost-reimbursable work can reduce execution risk, but funding delays, shutdowns, procurement protests, agency-level scrutiny, and reputation issues can still defer revenue or impair recompete odds. The key control question is whether the company has enough breadth across defense, intelligence, and civil customers to absorb discrete shocks.",
      strength: "Large backlog offers visibility",
      uncertainty: "Funding cadence and agency concentration",
      diligence: "How much of funded and unfunded backlog is attached to programs with near-term recompete or budget uncertainty?",
      sources: ["q2", "q3", "treasury"]
    },
    {
      role: "Credit Analyst",
      title: "Bonds, Loans, and Debt Service",
      confidence: "Creditworthy, spread-sensitive",
      tone: "normal",
      summary:
        "The credit question is different from the equity question. Booz Allen has a meaningful debt stack, but it also has recurring government-contract revenue, large backlog, no reported revolver borrowings at Dec. 31, 2025, covenant compliance, and about $1.9B of disclosed liquidity. For bond or loan investors, the debate is whether FY2026 revenue pressure and customer-trust headlines deserve a wider spread, not whether the company is near-term distressed.",
      strength: "Liquidity and maturity runway",
      uncertainty: "Spread compensation for headline risk",
      diligence: "Which part of the capital structure offers the best risk-adjusted entry: term loan, shorter notes, or longer 2033/2035 notes?",
      sources: ["debt", "notes2035", "q3", "treasury"]
    },
    {
      role: "Market Researcher",
      title: "Six-Month News and Sector Context",
      confidence: "Mixed sector setup",
      tone: "watch",
      summary:
        "The last six months show two competing narratives: demand for AI, cyber, defense modernization, and national-security technology remains strategically important, while federal funding timing and contractor scrutiny have become more disruptive. For a demo packet, the sector context should be framed as opportunity with a sharper procurement-risk overlay.",
      strength: "AI/cyber demand remains mission-critical",
      uncertainty: "Pace of agency awards and civil rebound",
      diligence: "Which buying centers are accelerating AI/cyber awards, and which are pausing or insourcing work?",
      sources: ["q2", "q3", "fy25"]
    },
    {
      role: "Valuation Reviewer",
      title: "Directional Equity and Credit Value",
      confidence: "Needs comp work",
      tone: "watch",
      summary:
        "At roughly $9.2B of equity value and $12.5B of enterprise value, Booz Allen no longer screens like a no-questions growth story. For credit, the relative-value question should compare BAH notes and loans against government-services and defense-IT peers on leverage, free-cash-flow durability, maturity, coupon/spread, call protection, liquidity, and event risk. The demo should avoid live trading levels unless a current bond quote source is available.",
      strength: "Credit may be cleaner than equity",
      uncertainty: "Where spreads sit versus peers",
      diligence: "Are the 2028/2029 notes priced for stability while the 2033/2035 notes pay enough for duration and headline risk?",
      sources: ["valuation", "debt", "notes2035", "q3"]
    },
    {
      role: "Committee Chair",
      title: "Recommendation and Next Diligence",
      confidence: "Proceed, do not underwrite yet",
      tone: "normal",
      summary:
        "The committee should advance Booz Allen to a credit diligence pass, not an investment recommendation. The attractive angle is a federal AI/cyber platform with backlog, liquidity, and national-security relevance. The gating issue is whether FY2026 weakness, civil restructuring, funding delays, and reputation risk are adequately compensated in the available bonds or loans.",
      strength: "Worth more work",
      uncertainty: "Spread versus risk",
      diligence: "Build a maturity-by-maturity credit view with current prices, yields, spreads, ratings, covenants, and downside scenarios.",
      sources: ["q3", "q2", "valuation", "debt", "treasury"]
    }
  ],
  memo: {
    thesis: [
      "Strategic exposure to AI, cyber, defense modernization, intelligence, and mission technology.",
      "Backlog remains large relative to annual revenue, supporting visibility if awards convert on schedule.",
      "Margins have held near the low-11% / high-10% adjusted EBITDA range despite revenue pressure.",
      "Debt stack includes term loan and senior notes, with no reported revolver borrowings and disclosed liquidity of about $1.9B at Dec. 31, 2025.",
      "Credit may be a cleaner way to express a view if the committee likes business durability but does not want equity multiple risk."
    ],
    risks: [
      "FY2026 revenue declined year to date and guidance was reduced from the original FY2026 outlook.",
      "Civil business recovery has been delayed, while restructuring and severance show operating stress.",
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
      "What evidence would make the committee stop diligence rather than continue?"
    ]
  },
  prompt: `You are the Credit Bear Analyst in a simulated investment committee reviewing Booz Allen Hamilton (BAH) bonds and loans.

Use only public information. Do not give investment advice. Do not invent exact valuation multiples unless you can cite them.

Context:
- Booz Allen is a U.S. government technology and consulting contractor focused on defense, intelligence, civil, AI, cyber, and mission technology.
- FY2025 revenue was about $12.0B with total backlog around $37.0B.
- Q3 FY2026 revenue declined 10.2% year over year to about $2.6B, with FY2026 revenue guidance of $11.3B-$11.4B.
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

let revealedCount = 0;
let revealTimer = null;

const roleList = document.querySelector("#role-list");
const sourceList = document.querySelector("#source-list");
const progressBar = document.querySelector("#progress-bar");
const progressCopy = document.querySelector("#progress-copy");
const runButton = document.querySelector("#run-review");
const resetButton = document.querySelector("#reset-review");
const promptEl = document.querySelector("#live-prompt");
const fallbackEl = document.querySelector("#fallback-answer");

function sourceById(id) {
  return packet.sources.find((source) => source.id === id);
}

function renderRoles() {
  roleList.innerHTML = packet.roles
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
    .join("");
}

function renderSources() {
  sourceList.innerHTML = packet.sources
    .map(
      (source) => `
        <li>
          <strong><a href="${source.url}" target="_blank" rel="noreferrer">${source.title}</a></strong>
          <p>${source.note}</p>
        </li>
      `
    )
    .join("");
}

function renderMemo() {
  document.querySelector("#memo-thesis").innerHTML = packet.memo.thesis.map((item) => `<li>${item}</li>`).join("");
  document.querySelector("#memo-risks").innerHTML = packet.memo.risks.map((item) => `<li>${item}</li>`).join("");
  document.querySelector("#memo-questions").innerHTML = packet.memo.questions.map((item) => `<li>${item}</li>`).join("");
  document.querySelector("#memo-sources").innerHTML = packet.sources
    .map((source) => `<li><a href="${source.url}" target="_blank" rel="noreferrer">${source.title}</a>: ${source.note}</li>`)
    .join("");
}

function updateProgress() {
  const percent = Math.round((revealedCount / packet.roles.length) * 100);
  progressBar.style.width = `${percent}%`;
  progressCopy.textContent =
    revealedCount === 0
      ? "Ready to reveal a prebuilt AI research workflow."
      : revealedCount === packet.roles.length
        ? `Committee review complete: ${packet.company.recommendation}.`
        : `Revealed ${revealedCount} of ${packet.roles.length} committee roles.`;
}

function revealNext() {
  if (revealedCount >= packet.roles.length) {
    clearInterval(revealTimer);
    revealTimer = null;
    runButton.disabled = false;
    runButton.querySelector("span").textContent = "Replay Committee Review";
    updateProgress();
    return;
  }

  const card = document.querySelector(`[data-index="${revealedCount}"]`);
  card.classList.add("revealed");
  revealedCount += 1;
  updateProgress();
}

function runReview() {
  resetReview();
  runButton.disabled = true;
  runButton.querySelector("span").textContent = "Review Running";
  revealNext();
  revealTimer = setInterval(revealNext, 850);
}

function resetReview() {
  clearInterval(revealTimer);
  revealTimer = null;
  revealedCount = 0;
  document.querySelectorAll(".role-card").forEach((card) => card.classList.remove("revealed"));
  runButton.disabled = false;
  runButton.querySelector("span").textContent = "Run Committee Review";
  updateProgress();
}

function setView(viewName) {
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
  document.querySelector(`#${viewName}-view`).classList.add("active");
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewName);
  });
}

async function copyPrompt() {
  try {
    await navigator.clipboard.writeText(packet.prompt);
    document.querySelector("#copy-prompt").textContent = "Copied";
    window.setTimeout(() => {
      document.querySelector("#copy-prompt").textContent = "Copy Prompt";
    }, 1200);
  } catch {
    document.querySelector("#copy-prompt").textContent = "Select Text";
  }
}

document.querySelectorAll(".nav-button").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

runButton.addEventListener("click", runReview);
resetButton.addEventListener("click", resetReview);
document.querySelector("#copy-prompt").addEventListener("click", copyPrompt);
document.querySelector("#print-memo").addEventListener("click", () => window.print());

renderRoles();
renderSources();
renderMemo();
promptEl.textContent = packet.prompt;
fallbackEl.textContent = packet.fallback;
updateProgress();
