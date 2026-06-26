import re

script_code = """
// ============================================================
// NEW SPECTRA DETAIL PAGE (Apple Pro Space-Black Showcase)
// ============================================================
const spectraSteps = [
  {
    num: "01",
    title: "Connect & Ingest",
    desc: "Spectra securely connects to Meta, Google, TikTok, LinkedIn, and more, automatically ingesting raw campaign data, ad creatives, audience structures, and historical performance metrics.",
    metric: "12+ DSP Integrations",
    badge: "Real-time ingestion",
    icon: "🔌"
  },
  {
    num: "02",
    title: "Analyze & Detect",
    desc: "Proprietary AI models continuously evaluate active ad fatigue, detect budget leaks, and map cross-channel pacing to identify inefficiencies before they impact ROAS.",
    metric: "15ms Detection latency",
    badge: "Continuous anomalies check",
    icon: "🔍"
  },
  {
    num: "03",
    title: "Recommend",
    desc: "Generate targeted, data-backed optimization recommendations from budget shifts to bid updates and creative swapping—complete with predicted performance uplift.",
    metric: "94% Accuracy rate",
    badge: "Intelligent actions",
    icon: "💡"
  },
  {
    num: "04",
    title: "Approve & Execute",
    desc: "Review suggestions inside a unified control panel. Approve recommendations with a single click, or activate automated pacing rule policies for hands-free scaling.",
    metric: "1-Click Execution",
    badge: "Granular control",
    icon: "⚡"
  },
  {
    num: "05",
    title: "Learn & Optimize",
    desc: "Spectra tracks the post-execution outcomes of every action, reinforcing its predictive modeling and improving recommendation precision over time.",
    metric: "Closed-loop feedback",
    badge: "Continuous learning",
    icon: "📈"
  }
];

const spectraPersonas = [
  {
    id: "cmo",
    role: "CMOs & Marketing Leaders",
    desc: "Unify fragmented metrics into a single source of truth. Maximize blended ROAS across all media channels while maintaining corporate compliance.",
    metrics: [
      { label: "Blended cross-channel ROAS", val: "4.2x", diff: "+18% growth" },
      { label: "Executive summary time", val: "5 mins", diff: "95% faster" }
    ],
    features: ["Cross-channel media productivity tracking", "Strategic budget shift recommendations", "Corporate governance & spend guardrails"]
  },
  {
    id: "performance",
    role: "Performance Marketing Teams",
    desc: "Proactively address creative fatigue, optimize daily pacing, and capture active ROAS opportunities without losing days to manual analytics.",
    metrics: [
      { label: "ROAS improvement", val: "+32%", diff: "Optimized pacing" },
      { label: "Ad fatigue detection", val: "Real-time", diff: "Zero delay" }
    ],
    features: ["Creative fatigue warning alerts", "Automated platform bid matching", "Blended acquisition cost controls"]
  },
  {
    id: "agency",
    role: "Digital Marketing Agencies",
    desc: "Consolidate multi-client platform data. Automatically construct client-ready performance briefs and spend forecasts to scale client retention.",
    metrics: [
      { label: "Report generation speed", val: "Instantly", diff: "100% automated" },
      { label: "Client retention", val: "+24%", diff: "Stronger trust" }
    ],
    features: ["Unified multi-client dashboard", "White-labeled PDF performance briefs", "Automated client account pacing audit"]
  },
  {
    id: "analysts",
    role: "Marketing Analysts & Operations",
    desc: "Eliminate manual CSV downloads and database mapping. Build sophisticated custom pacing reports and workflows on top of clean APIs.",
    metrics: [
      { label: "Manual data pipeline logs", val: "0 hrs", diff: "Eliminated sheet errors" },
      { label: "Cross-platform data sync", val: "Continuous", diff: "Live webhook pacing" }
    ],
    features: ["Standardized database marketing schema", "Pacing rule developer webhooks", "Integration alert notifications config"]
  }
];

function SpectraDetailPage() {
  const [activePersona, setActivePersona] = useState("cmo");
  const [activeStep, setActiveStep] = useState(0);
  const [approachActive, setApproachActive] = useState("spectra");

  useEffect(() => {
    document.documentElement.classList.add("spectra-dark-page");
    return () => {
      document.documentElement.classList.remove("spectra-dark-page");
    };
  }, []);

  return (
    <div className="spectra-pro-container">
      {/* 1. HERO SECTION */}
      <section className="spectra-pro-hero">
        <div className="spectra-pro-hero-glow" />
        <div className="container spectra-pro-hero-content">
          <motion.p 
            className="spectra-pro-kicker"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          >
            ALGONOX • ENTERPRISE MARKETING INTELLIGENCE & OPERATIONS
          </motion.p>
          <motion.h1 
            className="spectra-pro-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
          >
            SPECTRA
          </motion.h1>
          <motion.p 
            className="spectra-pro-hero-subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
          >
            Spectra is an AI-powered Marketing Intelligence and Operations Platform designed to help modern marketing teams make faster, smarter, and more confident decisions.
          </motion.p>
          
          <motion.div 
            className="spectra-pro-hero-ctas"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
          >
            <Link to="/contact" className="btn-pro-solid">Schedule a Demo</Link>
            <a href="#challenge" className="btn-pro-outline">Explore Platform ↓</a>
          </motion.div>

          <motion.div 
            className="spectra-pro-hero-marquee"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
          >
            <div className="marquee-label">CONNECTED CHANNELS</div>
            <div className="marquee-track">
              {["Meta Ads", "Google Ads", "TikTok Ads", "LinkedIn Ads", "Pinterest Ads", "Snapchat Ads", "Programmatic DSPs", "GA4 Analytics"].map((item, idx) => (
                <span key={idx}>{item}</span>
              ))}
              {["Meta Ads", "Google Ads", "TikTok Ads", "LinkedIn Ads", "Pinterest Ads", "Snapchat Ads", "Programmatic DSPs", "GA4 Analytics"].map((item, idx) => (
                <span key={`dup-${idx}`}>{item}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE CHALLENGE SECTION */}
      <section id="challenge" className="spectra-pro-section spectra-pro-challenge-section">
        <div className="container">
          <div className="spectra-pro-split">
            <div className="spectra-pro-split-left">
              <motion.p 
                className="spectra-pro-section-kicker"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                THE ECOSYSTEM COMPLEXITY
              </motion.p>
              <motion.h2 
                className="spectra-pro-section-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.1 }}
              >
                Fragmented metrics.<br />Delayed decisions.
              </motion.h2>
              <motion.p 
                className="spectra-pro-section-desc"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Campaigns are distributed across Meta, Google, LinkedIn, TikTok, and more. Each platform provides its own reports, metrics, and dashboards, making it difficult for teams to maintain a unified understanding of campaign performance.
              </motion.p>
            </div>

            <div className="spectra-pro-split-right">
              <div className="spectra-pro-challenge-list">
                {[
                  { title: "Fragmented campaign data", desc: "Data spread across multiple platforms with inconsistent reporting structures." },
                  { title: "Unidentified creative fatigue", desc: "Creative decay that is often identified only after campaign performance declines." },
                  { title: "Budget inefficiencies", desc: "Delayed campaign evaluation and budget reallocation causing spend leakage." },
                  { title: "Manual campaign reviews", desc: "Operations requiring significant manual analyst effort and CSV spreadsheets." },
                  { title: "Slow decision-making", desc: "Reactive adjustments due to disconnected and lagging reporting systems." },
                  { title: "Limited cross-platform visibility", desc: "Inability to map true multi-touch attribution and blended channel CAC." },
                  { title: "Hidden optimization gaps", desc: "Difficulty identifying hidden optimization opportunities manually in time." },
                  { title: "Rising CAC & unstable ROAS", desc: "Inconsistent media returns and failure to scale pacing accurately." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    className="spectra-pro-challenge-card"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: idx * 0.05 }}
                  >
                    <div className="challenge-icon-box">✖</div>
                    <div className="challenge-text-box">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div 
            className="spectra-pro-challenge-quote"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3>The challenge is no longer collecting marketing data.</h3>
            <h2>The challenge is transforming that data into timely, actionable decisions.</h2>
          </motion.div>
        </div>
      </section>

      {/* 3. THE SPECTRA APPROACH SECTION */}
      <section className="spectra-pro-section spectra-pro-approach-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "56px" }}>
            <motion.p className="spectra-pro-section-kicker">A NEW METHODOLOGY</motion.p>
            <motion.h2 className="spectra-pro-section-title">The Spectra Approach</motion.h2>
          </div>

          <div className="spectra-pro-approach-container">
            <div className="spectra-pro-approach-toggle">
              <button 
                className={approachActive === "legacy" ? "active" : ""}
                onClick={() => setApproachActive("legacy")}
              >
                Traditional Reporting
              </button>
              <button 
                className={approachActive === "spectra" ? "active" : ""}
                onClick={() => setApproachActive("spectra")}
              >
                Spectra Intelligence Layer
              </button>
            </div>

            <div className="spectra-pro-approach-display">
              <AnimatePresence mode="wait">
                {approachActive === "legacy" ? (
                  <motion.div 
                    key="legacy"
                    className="spectra-pro-approach-card legacy-card"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="approach-grid">
                      <div className="approach-col">
                        <h4>Manual Campaigns Analysis</h4>
                        <p>Teams compile stats and download CSV files daily across multiple ad platforms, wasting critical analyst resources.</p>
                      </div>
                      <div className="approach-col">
                        <h4>Reactive Management</h4>
                        <p>Adjustments are made only after budget pacing drops or ad creative exhaustion causes a decline in metrics.</p>
                      </div>
                      <div className="approach-col">
                        <h4>Isolated Platforms</h4>
                        <p>Ad networks exist in silos. Attributions are overstated, making cross-channel budget pacing inefficient.</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="spectra"
                    className="spectra-pro-approach-card spectra-card"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="approach-grid">
                      <div className="approach-col">
                        <div className="spectra-approach-icon">🧠</div>
                        <h4>AI-Driven Decision Support</h4>
                        <p>Combines artificial intelligence and predictive analytics to monitor performance and pacing continuously.</p>
                      </div>
                      <div className="approach-col">
                        <div className="spectra-approach-icon">⚡</div>
                        <h4>Proactive Optimization</h4>
                        <p>Uncovers opportunities and detects anomalies immediately, offering actionable recommendations in real-time.</p>
                      </div>
                      <div className="approach-col">
                        <div className="spectra-approach-icon">🛡️</div>
                        <h4>Workflow Layer</h4>
                        <p>Acts as an intelligent marketing operations layer above existing platforms to streamline monitoring, planning, and execution.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW SPECTRA WORKS SECTION */}
      <section className="spectra-pro-section spectra-pro-works-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <motion.p className="spectra-pro-section-kicker">ENGINEERING CYCLE</motion.p>
            <motion.h2 className="spectra-pro-section-title">How Spectra Works</motion.h2>
            <motion.p className="spectra-pro-section-desc centered">
              Spectra follows a continuous, closed-loop intelligence and optimization cycle.
            </motion.p>
          </div>

          <div className="spectra-pro-works-flow">
            {spectraSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                className={`spectra-pro-works-card ${activeStep === idx ? "active" : ""}`}
                onClick={() => setActiveStep(idx)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="works-card-header">
                  <span className="works-num">{step.num}</span>
                  <span className="works-emoji">{step.icon}</span>
                </div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
                
                <div className="works-card-meta">
                  <div className="meta-tag">{step.badge}</div>
                  <div className="meta-val">{step.metric}</div>
                </div>
                
                <div className="works-card-border-glow" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CORE VALUE PROPOSITIONS BENTO GRID */}
      <section className="spectra-pro-section spectra-pro-capabilities-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <motion.p className="spectra-pro-section-kicker">CORE CAPABILITIES</motion.p>
            <motion.h2 className="spectra-pro-section-title">Core Value Proposition</motion.h2>
            <motion.p className="spectra-pro-section-desc centered">
              Spectra empowers marketing organizations to move beyond traditional reporting with an intelligent operational layer.
            </motion.p>
          </div>

          <div className="spectra-pro-bento-grid">
            {/* Card 1: Continuous Monitoring */}
            <motion.div 
              className="bento-card bento-wide"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bento-glow-spot" />
              <div className="bento-content">
                <span className="bento-icon">📊</span>
                <h3>Continuous Performance Monitoring</h3>
                <p>Continuously monitor campaign performance across all major media networks to maintain absolute transparency and ROAS stability.</p>
                <div className="bento-visual mock-chart">
                  <div className="chart-bar" style={{ height: "40%" }} />
                  <div className="chart-bar" style={{ height: "65%" }} />
                  <div className="chart-bar" style={{ height: "55%" }} />
                  <div className="chart-bar" style={{ height: "85%" }} />
                  <div className="chart-bar active" style={{ height: "95%" }} />
                </div>
              </div>
            </motion.div>

            {/* Card 2: Inefficiency Detection */}
            <motion.div 
              className="bento-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="bento-glow-spot" />
              <div className="bento-content">
                <span className="bento-icon">🚨</span>
                <h3>Anomalies & Fatigue Alerts</h3>
                <p>Detect operational inefficiencies and creative fatigue in real-time before they impact business results.</p>
                <div className="bento-visual alert-box">
                  <span className="alert-badge">Ad Fatigue Triggered</span>
                  <span className="alert-metric">Meta CTR: -18%</span>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Cross-Channel Opportunities */}
            <motion.div 
              className="bento-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bento-glow-spot" />
              <div className="bento-content">
                <span className="bento-icon">🌐</span>
                <h3>Cross-Channel Opportunities</h3>
                <p>Identify hidden optimizations and performance pacing trends across channels automatically.</p>
                <div className="bento-visual platform-strip">
                  <span>Meta</span>
                  <span>Google</span>
                  <span>TikTok</span>
                </div>
              </div>
            </motion.div>

            {/* Card 4: Simplified Workflows */}
            <motion.div 
              className="bento-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="bento-glow-spot" />
              <div className="bento-content">
                <span className="bento-icon">⚙️</span>
                <h3>Simplified Workflows</h3>
                <p>Simplify cross-team campaign planning and automate execution pipelines through approved workflows.</p>
                <div className="bento-visual workflow-strip">
                  <span className="step-point">Plan</span>
                  <span className="step-arrow">→</span>
                  <span className="step-point active">Execute</span>
                </div>
              </div>
            </motion.div>

            {/* Card 5: Data-Driven Decisions */}
            <motion.div 
              className="bento-card bento-wide"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bento-glow-spot" />
              <div className="bento-content">
                <span className="bento-icon">🛡️</span>
                <h3>AI-Powered Collaboration</h3>
                <p>Improve collaboration between media buyers, growth hackers, and creative teams with shared decision metrics, automated performance forecasts, and unified data views.</p>
                <div className="bento-visual dashboard-mock">
                  <div className="mock-widget">Pacing: Optimal</div>
                  <div className="mock-widget">Estimated Uplift: +14%</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. WHO SPECTRA IS FOR SECTION (Interactive Workspaces) */}
      <section className="spectra-pro-section spectra-pro-person-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "56px" }}>
            <motion.p className="spectra-pro-section-kicker">BUILT FOR SCALE</motion.p>
            <motion.h2 className="spectra-pro-section-title">Who Spectra Is For</motion.h2>
            <motion.p className="spectra-pro-section-desc centered">
              Spectra is designed for organizations that manage digital advertising at scale.
            </motion.p>
          </div>

          <div className="spectra-pro-persona-container">
            <div className="persona-tabs">
              {spectraPersonas.map((p) => (
                <button 
                  key={p.id}
                  className={`persona-tab-btn ${activePersona === p.id ? "active" : ""}`}
                  onClick={() => setActivePersona(p.id)}
                >
                  {p.role}
                </button>
              ))}
            </div>

            <div className="persona-content-panel">
              <AnimatePresence mode="wait">
                {(() => {
                  const persona = spectraPersonas.find(x => x.id === activePersona);
                  if (!persona) return null;
                  return (
                    <motion.div 
                      key={persona.id}
                      className="persona-panel-inner"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="persona-info-col">
                        <h3>{persona.role}</h3>
                        <p className="persona-desc-text">{persona.desc}</p>
                        
                        <div className="persona-features-list">
                          {persona.features.map((feat, i) => (
                            <div key={i} className="persona-feature-item">
                              <span className="check-bullet">✔</span>
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="persona-visual-col">
                        <div className="persona-metric-display">
                          {persona.metrics.map((met, i) => (
                            <div key={i} className="persona-metric-card">
                              <span className="met-label">{met.label}</span>
                              <span className="met-val">{met.val}</span>
                              <span className="met-diff">{met.diff}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })()}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BUSINESS OUTCOMES SECTION */}
      <section className="spectra-pro-section spectra-pro-outcomes-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <motion.p className="spectra-pro-section-kicker">MEASURABLE VALUE</motion.p>
            <motion.h2 className="spectra-pro-section-title">Business Outcomes</motion.h2>
            <motion.p className="spectra-pro-section-desc centered">
              Organizations using Spectra achieve measurable improvements across their marketing operations.
            </motion.p>
          </div>

          <div className="spectra-pro-outcomes-grid">
            {[
              { val: "+35%", label: "Blended ROAS Uplift", desc: "Achieve higher efficiency and pacing precision across ad accounts." },
              { val: "-22%", label: "CAC Cost Reduction", desc: "Narrow target parameters to filter out non-converting traffic loops." },
              { val: "10x", label: "Faster Pacing Cycles", desc: "Verify opportunities and execute optimizations inside hours, not days." },
              { val: "95%", label: "Analyst Time Reallocated", desc: "Unify platform connections and automate pipeline report compilations." }
            ].map((outcome, idx) => (
              <motion.div 
                key={idx}
                className="spectra-pro-outcome-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="outcome-glow" />
                <h3 className="outcome-val">{outcome.val}</h3>
                <h4 className="outcome-label">{outcome.label}</h4>
                <p className="outcome-desc">{outcome.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="spectra-pro-outcomes-list">
            <h4 className="list-title">Key Operational Benefits:</h4>
            <div className="benefits-grid">
              {[
                "Better visibility across the entire marketing ecosystem.",
                "Faster campaign optimization cycles and actions.",
                "More efficient budget allocation recommendations.",
                "Improved creative performance & decay management.",
                "Reduced manual spreadsheet reporting and analysis.",
                "Better governance, transparency, and operational control.",
                "Scalable marketing operations powered by AI."
              ].map((benefit, i) => (
                <div key={i} className="benefit-item">
                  <span className="bullet">✦</span>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHY SPECTRA COMPARISON SECTION */}
      <section className="spectra-pro-section spectra-pro-why-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <motion.p className="spectra-pro-section-kicker">THE COMPETITIVE EDGE</motion.p>
            <motion.h2 className="spectra-pro-section-title">Why Spectra</motion.h2>
          </div>

          <div className="spectra-pro-comparison-table-wrapper">
            <table className="spectra-pro-comparison-table">
              <thead>
                <tr>
                  <th>Capabilities & Architecture</th>
                  <th>Traditional Historical Tools</th>
                  <th>Spectra Platform</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feat: "Core Objective", old: "Report historical performance data", new: "Generate actionable forward optimizations" },
                  { feat: "Operational Pacing", old: "Manual dashboard reviews by analysts", new: "Continuous AI performance monitoring" },
                  { feat: "Creative Management", old: "Manual audit after metrics decay", new: "Real-time automated ad fatigue alerts" },
                  { feat: "Budget Efficiency", old: "Reactive platform budget scaling", new: "1-Click multi-platform spend reallocation" },
                  { feat: "Data Pipelines", old: "Fragmented spreadsheets and siphoned CSVs", new: "Unified API intelligence overlay layer" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td><strong>{row.feat}</strong></td>
                    <td className="old-tool">{row.old}</td>
                    <td className="new-tool">
                      <span className="spark">✦</span> {row.new}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 9. VISION & FINAL CTA */}
      <section className="spectra-pro-section spectra-pro-vision-section">
        <div className="spectra-pro-vision-glow" />
        <div className="container text-center">
          <motion.p 
            className="spectra-pro-section-kicker"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            THE FUTURE OF OPERATIONS
          </motion.p>
          <motion.h2 
            className="spectra-pro-vision-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            The future of marketing is not about managing more dashboards or generating more reports.
          </motion.h2>
          <motion.p 
            className="spectra-pro-vision-sub"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1 }}
          >
            It is about enabling intelligent systems that continuously monitor performance, identify opportunities, recommend actions, and support faster business decisions.
          </motion.p>

          <motion.div 
            className="spectra-pro-vision-tagline-box"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Spectra transforms marketing operations by turning data into decisions, and decisions into measurable business impact.</h3>
          </motion.div>

          <div className="spectra-pro-hero-ctas" style={{ justifyContent: "center", marginTop: "48px" }}>
            <Link to="/contact" className="btn-pro-solid">Schedule a Demo</Link>
            <Link to="/contact" className="btn-pro-outline">Talk to Sales</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
"""

with open("src/App.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Find the boundaries of the old SpectraDetailPage component
start_str = "const spectraQueryTabs = ["
end_str = "function DetailPage({ slug }: { slug: string }) {"

start_idx = content.find(start_str)
end_idx = content.find(end_str)

if start_idx == -1 or end_idx == -1:
    print("Error: Boundary strings not found in src/App.tsx")
    exit(1)

# Replace the component block
new_content = content[:start_idx] + script_code.strip() + "\\n\\n" + content[end_idx:]

with open("src/App.tsx", "w", encoding="utf-8") as f:
    f.write(new_content)

print("App.tsx has been successfully updated with the new Spectra pro detail page!")
