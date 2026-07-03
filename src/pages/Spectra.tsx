import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Globe,
  Search,
  Lightbulb,
  CheckCircle,
  TrendingUp,
  Layers,
  EyeOff,
  BarChart2,
  FileText,
  Clock,
  Compass,
  TrendingDown,
  Plus,
  ChevronRight,
} from "lucide-react";
import "./Spectra.css";

const spectraSteps = [
  {
    title: "Connect & Ingest with ease.",
    desc: "Spectra securely connects to Meta, Google, TikTok, LinkedIn, and more, automatically ingesting raw campaign data, ad creatives, and historical metrics.",
    cta: "Learn more about connections",
    iconName: "Globe",
  },
  {
    title: "Analyze & Detect leaks.",
    desc: "Proprietary AI models continuously evaluate active ad fatigue, detect budget leaks, and map cross-channel pacing to identify inefficiencies early.",
    cta: "Explore anomaly detection",
    iconName: "Search",
  },
  {
    title: "Recommend next steps.",
    desc: "Generate targeted, data-backed optimization recommendations from budget shifts to bid updates and creative swapping—complete with predicted uplift.",
    cta: "Read about recommendations",
    iconName: "Lightbulb",
  },
  {
    title: "Approve & Execute instantly.",
    desc: "Review suggestions inside a unified control panel. Approve recommendations with a single click, or activate automated pacing rule policies.",
    cta: "See workflow execution",
    iconName: "CheckCircle",
  },
  {
    title: "Learn & Optimize over time.",
    desc: "Spectra tracks the post-execution outcomes of every action, reinforcing its predictive modeling and improving recommendation precision.",
    cta: "Understand closed-loop learning",
    iconName: "TrendingUp",
  },
];

const spectraPersonas = [
  {
    id: "cmo",
    role: "CMOs & Marketing Leaders",
    desc: "Unify fragmented metrics into a single source of truth. Maximize blended ROAS across all media channels while maintaining corporate compliance.",
    metrics: [
      { label: "Blended cross-channel ROAS", val: "4.2x", diff: "+18% growth" },
      { label: "Executive summary time", val: "5 mins", diff: "95% faster" },
    ],
    features: [
      "Cross-channel media productivity tracking",
      "Strategic budget shift recommendations",
      "Corporate governance & spend guardrails",
    ],
  },
  {
    id: "performance",
    role: "Performance Marketing Teams",
    desc: "Proactively address creative fatigue, optimize daily pacing, and capture active ROAS opportunities without losing days to manual analytics.",
    metrics: [
      { label: "ROAS improvement", val: "+32%", diff: "Optimized pacing" },
      { label: "Ad fatigue detection", val: "Real-time", diff: "Zero delay" },
    ],
    features: [
      "Creative fatigue warning alerts",
      "Automated platform bid matching",
      "Blended acquisition cost controls",
    ],
  },
  {
    id: "agency",
    role: "Digital Marketing Agencies",
    desc: "Consolidate multi-client platform data. Automatically construct client-ready performance briefs and spend forecasts to scale client retention.",
    metrics: [
      { label: "Report generation speed", val: "Instantly", diff: "100% automated" },
      { label: "Client retention", val: "+24%", diff: "Stronger trust" },
    ],
    features: [
      "Unified multi-client dashboard",
      "White-labeled PDF performance briefs",
      "Automated client account pacing audit",
    ],
  },
  {
    id: "analysts",
    role: "Marketing Analysts & Operations",
    desc: "Eliminate manual CSV downloads and database mapping. Build sophisticated custom pacing reports and workflows on top of clean APIs.",
    metrics: [
      { label: "Manual data pipeline logs", val: "0 hrs", diff: "Eliminated sheet errors" },
      { label: "Cross-platform data sync", val: "Continuous", diff: "Live webhook pacing" },
    ],
    features: [
      "Standardized database marketing schema",
      "Pacing rule developer webhooks",
      "Integration alert notifications config",
    ],
  },
];

export default function Spectra() {
  const [activePersona, setActivePersona] = useState("cmo");
  const [approachActive, setApproachActive] = useState("spectra");
  const challengeScrollRef = useRef<HTMLDivElement>(null);

  const scrollChallengeCards = (direction: "left" | "right") => {
    if (challengeScrollRef.current) {
      const scrollAmount = 340;
      challengeScrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const sectionAnimation = {
    initial: { opacity: 0, y: 60, scale: 0.97 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: false, amount: 0.12 },
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as any },
  };

  const renderStepIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe size={28} strokeWidth={1.5} className="step-icon-svg" />;
      case "Search":
        return <Search size={28} strokeWidth={1.5} className="step-icon-svg" />;
      case "Lightbulb":
        return <Lightbulb size={28} strokeWidth={1.5} className="step-icon-svg" />;
      case "CheckCircle":
        return <CheckCircle size={28} strokeWidth={1.5} className="step-icon-svg" />;
      case "TrendingUp":
        return <TrendingUp size={28} strokeWidth={1.5} className="step-icon-svg" />;
      default:
        return <Globe size={28} strokeWidth={1.5} className="step-icon-svg" />;
    }
  };

  const renderChallengeIcon = (iconName: string) => {
    switch (iconName) {
      case "Layers":
        return <Layers size={28} strokeWidth={1.5} className="challenge-icon-svg" />;
      case "EyeOff":
        return <EyeOff size={28} strokeWidth={1.5} className="challenge-icon-svg" />;
      case "BarChart2":
        return <BarChart2 size={28} strokeWidth={1.5} className="challenge-icon-svg" />;
      case "FileText":
        return <FileText size={28} strokeWidth={1.5} className="challenge-icon-svg" />;
      case "Clock":
        return <Clock size={28} strokeWidth={1.5} className="challenge-icon-svg" />;
      case "Compass":
        return <Compass size={28} strokeWidth={1.5} className="challenge-icon-svg" />;
      case "Search":
        return <Search size={28} strokeWidth={1.5} className="challenge-icon-svg" />;
      case "TrendingDown":
        return <TrendingDown size={28} strokeWidth={1.5} className="challenge-icon-svg" />;
      default:
        return <Layers size={28} strokeWidth={1.5} className="challenge-icon-svg" />;
    }
  };

  return (
    <div className="spectra-pro-container">
      {/* 1. HERO SECTION */}
      <section className="spectra-pro-hero">
        <div className="spectra-pro-hero-glow" />
        <motion.div
          className="container spectra-pro-hero-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1] as any }}
        >
          <motion.p
            className="spectra-pro-kicker"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] as any }}
          >
            ALGONOX • ENTERPRISE MARKETING INTELLIGENCE & OPERATIONS
          </motion.p>
          <motion.h1
            className="spectra-pro-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] as any, delay: 0.1 }}
          >
            SPECTRA
          </motion.h1>
          <motion.p
            className="spectra-pro-hero-subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] as any, delay: 0.2 }}
          >
            Spectra is an AI-powered Marketing Intelligence and Operations Platform designed to help
            modern marketing teams make faster, smarter, and more confident decisions.
          </motion.p>

          <motion.div
            className="spectra-pro-hero-ctas"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] as any, delay: 0.3 }}
          >
            <Link to="/contact" className="btn-pro-solid">
              Schedule a Demo
            </Link>
            <a href="#challenge" className="btn-pro-outline">
              Explore Platform ↓
            </a>
          </motion.div>

          <motion.div
            className="spectra-pro-hero-marquee"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
          >
            <div className="marquee-label">CONNECTED CHANNELS</div>
            <div className="marquee-track">
              {[
                "Meta Ads",
                "Google Ads",
                "TikTok Ads",
                "LinkedIn Ads",
                "Pinterest Ads",
                "Snapchat Ads",
                "Programmatic DSPs",
                "GA4 Analytics",
              ].map((item, idx) => (
                <span key={idx}>{item}</span>
              ))}
              {[
                "Meta Ads",
                "Google Ads",
                "TikTok Ads",
                "LinkedIn Ads",
                "Pinterest Ads",
                "Snapchat Ads",
                "Programmatic DSPs",
                "GA4 Analytics",
              ].map((item, idx) => (
                <span key={`dup-${idx}`}>{item}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. THE CHALLENGE SECTION */}
      <section id="challenge" className="spectra-pro-section spectra-pro-challenge-section">
        <motion.div className="container" {...sectionAnimation}>
          <div className="spectra-pro-challenge-header">
            <div className="spectra-challenge-header-left">
              <p className="spectra-pro-section-kicker">THE ECOSYSTEM COMPLEXITY</p>
              <h2 className="spectra-pro-section-title">Fragmented metrics. Delayed decisions.</h2>
              <p className="spectra-pro-section-desc">
                Campaigns are distributed across Meta, Google, LinkedIn, TikTok, and more. Each platform
                provides its own reports, metrics, and dashboards, making it difficult for teams to maintain
                a unified understanding of campaign performance.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Full-width card track — overflows past container to screen edge */}
        <div className="spectra-pro-challenge-track">
          <div className="spectra-pro-challenge-list" ref={challengeScrollRef}>
            {[
              {
                title: "Fragmented campaign data",
                desc: "Data spread across multiple platforms with inconsistent reporting structures.",
                iconName: "Layers",
              },
              {
                title: "Unidentified creative fatigue",
                desc: "Creative decay that is often identified only after campaign performance declines.",
                iconName: "EyeOff",
              },
              {
                title: "Budget inefficiencies",
                desc: "Delayed campaign evaluation and budget reallocation causing spend leakage.",
                iconName: "BarChart2",
              },
              {
                title: "Manual campaign reviews",
                desc: "Operations requiring significant manual analyst effort and CSV spreadsheets.",
                iconName: "FileText",
              },
              {
                title: "Slow decision-making",
                desc: "Reactive adjustments due to disconnected and lagging reporting systems.",
                iconName: "Clock",
              },
              {
                title: "Limited cross-platform visibility",
                desc: "Inability to map true multi-touch attribution and blended channel CAC.",
                iconName: "Compass",
              },
              {
                title: "Hidden optimization gaps",
                desc: "Difficulty identifying hidden optimization opportunities manually in time.",
                iconName: "Search",
              },
              {
                title: "Rising CAC & unstable ROAS",
                desc: "Inconsistent media returns and failure to scale pacing accurately.",
                iconName: "TrendingDown",
              },
            ].map((item, idx) => (
              <div key={idx} className="spectra-pro-challenge-card">
                <div className="challenge-icon-box">{renderChallengeIcon(item.iconName)}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button className="challenge-card-plus" aria-label="Learn more">
                  <Plus size={18} strokeWidth={2} color="#ffffff" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="container">
          <div className="spectra-challenge-nav">
            <button className="challenge-nav-btn" onClick={() => scrollChallengeCards("left")} aria-label="Scroll left">
              <ChevronRight size={20} strokeWidth={2} style={{ transform: "rotate(180deg)" }} />
            </button>
            <button className="challenge-nav-btn" onClick={() => scrollChallengeCards("right")} aria-label="Scroll right">
              <ChevronRight size={20} strokeWidth={2} />
            </button>
          </div>
        </div>

        <motion.div className="container" {...sectionAnimation}>
          <div className="spectra-pro-challenge-quote">
            <h3>The challenge is no longer collecting marketing data.</h3>
            <h2>The challenge is transforming that data into timely, actionable decisions.</h2>
          </div>
        </motion.div>
      </section>

      {/* 3. THE SPECTRA APPROACH SECTION (LIGHT) */}
      <section className="spectra-pro-section spectra-pro-approach-section">
        <motion.div className="container" {...sectionAnimation}>
          <div className="text-center" style={{ marginBottom: "56px" }}>
            <p className="spectra-pro-section-kicker">A NEW METHODOLOGY</p>
            <h2 className="spectra-pro-section-title">The Spectra Approach</h2>
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
                        <p>
                          Teams compile stats and download CSV files daily across multiple ad platforms,
                          wasting critical analyst resources.
                        </p>
                      </div>
                      <div className="approach-col">
                        <h4>Reactive Management</h4>
                        <p>
                          Adjustments are made only after budget pacing drops or ad creative exhaustion
                          causes a decline in metrics.
                        </p>
                      </div>
                      <div className="approach-col">
                        <h4>Isolated Platforms</h4>
                        <p>
                          Ad networks exist in silos. Attributions are overstated, making cross-channel
                          budget pacing inefficient.
                        </p>
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
                        <p>
                          Combines artificial intelligence and predictive analytics to monitor performance
                          and pacing continuously.
                        </p>
                      </div>
                      <div className="approach-col">
                        <div className="spectra-approach-icon">⚡</div>
                        <h4>Proactive Optimization</h4>
                        <p>
                          Uncovers opportunities and detects anomalies immediately, offering actionable
                          recommendations in real-time.
                        </p>
                      </div>
                      <div className="approach-col">
                        <div className="spectra-approach-icon">🛡️</div>
                        <h4>Workflow Layer</h4>
                        <p>
                          Acts as an intelligent marketing operations layer above existing platforms to
                          streamline monitoring, planning, and execution.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. HOW SPECTRA WORKS SECTION */}
      <section className="spectra-pro-section spectra-pro-works-section">
        <motion.div className="container" {...sectionAnimation}>
          <div style={{ marginBottom: "64px", textAlign: "left" }}>
            <p className="spectra-pro-section-kicker">ENGINEERING CYCLE</p>
            <h2 className="spectra-pro-section-title" style={{ fontSize: "40px", fontWeight: "700" }}>
              Our platform operations lead the way.
            </h2>
            <p className="spectra-pro-section-desc" style={{ maxWidth: "700px" }}>
              Spectra follows a continuous, closed-loop intelligence and optimization cycle to automate
              campaign management.
            </p>
          </div>

          <div className="spectra-pro-works-flow">
            {spectraSteps.map((step, idx) => (
              <div key={idx} className="spectra-pro-works-card">
                <div className="works-card-icon-box">{renderStepIcon(step.iconName)}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <Link to="/contact" className="works-card-cta">
                  {step.cta} <span className="arrow-sym">›</span>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. CORE VALUE PROPOSITIONS BENTO GRID (LIGHT) */}
      <section className="spectra-pro-section spectra-pro-capabilities-section">
        <motion.div className="container" {...sectionAnimation}>
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <p className="spectra-pro-section-kicker">CORE CAPABILITIES</p>
            <h2 className="spectra-pro-section-title">Core Value Proposition</h2>
            <p className="spectra-pro-section-desc centered">
              Spectra empowers marketing organizations to move beyond traditional reporting with an
              intelligent operational layer.
            </p>
          </div>

          <div className="spectra-pro-bento-grid">
            {/* Card 1: Continuous Monitoring */}
            <div className="bento-card bento-wide">
              <div className="bento-glow-spot" />
              <div className="bento-content">
                <span className="bento-icon">📊</span>
                <h3>Continuous Performance Monitoring</h3>
                <p>
                  Continuously monitor campaign performance across all major media networks to maintain
                  absolute transparency and ROAS stability.
                </p>
                <div className="bento-visual mock-chart">
                  <div className="chart-bar" style={{ height: "40%" }} />
                  <div className="chart-bar" style={{ height: "65%" }} />
                  <div className="chart-bar" style={{ height: "55%" }} />
                  <div className="chart-bar" style={{ height: "85%" }} />
                  <div className="chart-bar active" style={{ height: "95%" }} />
                </div>
              </div>
            </div>

            {/* Card 2: Inefficiency Detection */}
            <div className="bento-card">
              <div className="bento-glow-spot" />
              <div className="bento-content">
                <span className="bento-icon">🚨</span>
                <h3>Anomalies & Fatigue Alerts</h3>
                <p>
                  Detect operational inefficiencies and creative fatigue in real-time before they impact
                  business results.
                </p>
                <div className="bento-visual alert-box">
                  <span className="alert-badge">Ad Fatigue Triggered</span>
                  <span className="alert-metric">Meta CTR: -18%</span>
                </div>
              </div>
            </div>

            {/* Card 3: Cross-Channel Opportunities */}
            <div className="bento-card">
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
            </div>

            {/* Card 4: Simplified Workflows */}
            <div className="bento-card">
              <div className="bento-glow-spot" />
              <div className="bento-content">
                <span className="bento-icon">⚙️</span>
                <h3>Simplified Workflows</h3>
                <p>
                  Simplify cross-team campaign planning and automate execution pipelines through approved
                  workflows.
                </p>
                <div className="bento-visual workflow-strip">
                  <span className="step-point">Plan</span>
                  <span className="step-arrow">→</span>
                  <span className="step-point active">Execute</span>
                </div>
              </div>
            </div>

            {/* Card 5: Data-Driven Decisions */}
            <div className="bento-card bento-wide">
              <div className="bento-glow-spot" />
              <div className="bento-content">
                <span className="bento-icon">🛡️</span>
                <h3>AI-Powered Collaboration</h3>
                <p>
                  Improve collaboration between media buyers, growth hackers, and creative teams with shared
                  decision metrics, automated performance forecasts, and unified data views.
                </p>
                <div className="bento-visual dashboard-mock">
                  <div className="mock-widget">Pacing: Optimal</div>
                  <div className="mock-widget">Estimated Uplift: +14%</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 6. WHO SPECTRA IS FOR SECTION (DARK) */}
      <section className="spectra-pro-section spectra-pro-person-section">
        <motion.div className="container" {...sectionAnimation}>
          <div className="text-center" style={{ marginBottom: "56px" }}>
            <p className="spectra-pro-section-kicker">BUILT FOR SCALE</p>
            <h2 className="spectra-pro-section-title">Who Spectra Is For</h2>
            <p className="spectra-pro-section-desc centered">
              Spectra is designed for organizations that manage digital advertising at scale.
            </p>
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
                  const persona = spectraPersonas.find((x) => x.id === activePersona);
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
        </motion.div>
      </section>

      {/* 7. BUSINESS OUTCOMES SECTION (LIGHT) */}
      <section className="spectra-pro-section spectra-pro-outcomes-section">
        <motion.div className="container" {...sectionAnimation}>
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <p className="spectra-pro-section-kicker">MEASURABLE VALUE</p>
            <h2 className="spectra-pro-section-title">Business Outcomes</h2>
            <p className="spectra-pro-section-desc centered">
              Organizations using Spectra achieve measurable improvements across their marketing operations.
            </p>
          </div>

          <div className="spectra-pro-outcomes-grid">
            {[
              {
                val: "+35%",
                label: "Blended ROAS Uplift",
                desc: "Achieve higher efficiency and pacing precision across ad accounts.",
              },
              {
                val: "-22%",
                label: "CAC Cost Reduction",
                desc: "Narrow target parameters to filter out non-converting traffic loops.",
              },
              {
                val: "10x",
                label: "Faster Pacing Cycles",
                desc: "Verify opportunities and execute optimizations inside hours, not days.",
              },
              {
                val: "95%",
                label: "Analyst Time Reallocated",
                desc: "Unify platform connections and automate pipeline report compilations.",
              },
            ].map((outcome, idx) => (
              <div key={idx} className="spectra-pro-outcome-card">
                <div className="outcome-glow" />
                <h3 className="outcome-val">{outcome.val}</h3>
                <h4 className="outcome-label">{outcome.label}</h4>
                <p className="outcome-desc">{outcome.desc}</p>
              </div>
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
                "Scalable marketing operations powered by AI.",
              ].map((benefit, i) => (
                <div key={i} className="benefit-item">
                  <span className="bullet">✦</span>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 8. WHY SPECTRA COMPARISON SECTION (DARK) */}
      <section className="spectra-pro-section spectra-pro-why-section">
        <motion.div className="container" {...sectionAnimation}>
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <p className="spectra-pro-section-kicker">THE COMPETITIVE EDGE</p>
            <h2 className="spectra-pro-section-title">Why Spectra</h2>
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
                  {
                    feat: "Core Objective",
                    old: "Report historical performance data",
                    new: "Generate actionable forward optimizations",
                  },
                  {
                    feat: "Operational Pacing",
                    old: "Manual dashboard reviews by analysts",
                    new: "Continuous AI performance monitoring",
                  },
                  {
                    feat: "Creative Management",
                    old: "Manual audit after metrics decay",
                    new: "Real-time automated ad fatigue alerts",
                  },
                  {
                    feat: "Budget Efficiency",
                    old: "Reactive platform budget scaling",
                    new: "1-Click multi-platform spend reallocation",
                  },
                  {
                    feat: "Data Pipelines",
                    old: "Fragmented spreadsheets and siphoned CSVs",
                    new: "Unified API intelligence overlay layer",
                  },
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td>
                      <strong>{row.feat}</strong>
                    </td>
                    <td className="old-tool">{row.old}</td>
                    <td className="new-tool">
                      <span className="spark">✦</span> {row.new}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* 9. VISION & FINAL CTA (LIGHT) */}
      <section className="spectra-pro-section spectra-pro-vision-section">
        <div className="spectra-pro-vision-glow" />
        <motion.div className="container text-center" {...sectionAnimation}>
          <p className="spectra-pro-section-kicker">THE FUTURE OF OPERATIONS</p>
          <h2 className="spectra-pro-vision-heading">
            The future of marketing is not about managing more dashboards or generating more reports.
          </h2>
          <p className="spectra-pro-vision-sub">
            It is about enabling intelligent systems that continuously monitor performance, identify
            opportunities, recommend actions, and support faster business decisions.
          </p>

          <div className="spectra-pro-vision-tagline-box">
            <h3>
              Spectra transforms marketing operations by turning data into decisions, and decisions into
              measurable business impact.
            </h3>
          </div>

          <div className="spectra-pro-hero-ctas" style={{ justifyContent: "center", marginTop: "48px" }}>
            <Link to="/contact" className="btn-pro-solid">
              Schedule a Demo
            </Link>
            <Link to="/contact" className="btn-pro-outline">
              Talk to Sales
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
