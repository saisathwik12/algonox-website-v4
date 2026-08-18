import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";
import {
  FileText,
  Sliders,
  Workflow,
  GitCompare,
  BarChart3,
  ArrowRight,
  ShieldCheck,
  Building2,
  Pill,
  Factory,
  Tv,
  Activity,
  CheckCircle2,
  Database,
  Cpu,
  Layers,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  X,
  PieChart,
  RefreshCw,
  TrendingUp,
  Brain,
  FileSpreadsheet,
  Play,
  Pause
} from "lucide-react";
import "./Ace.css";

// ------------------------------------------------------------
// LOTTIE CONFIGURATIONS & HIGHLIGHTS CAROUSEL DATA
// (Populated using the provided content)
// ------------------------------------------------------------
const highlightLottieConfigs = [
  { fileName: "Ai-powered marketing tools abstract.lottie", width: "100%", height: "100%", offsetY: 0, padding: 18 },
  { fileName: "scan document.lottie", width: "88%", height: "88%", offsetY: -8, padding: 12 },
  { fileName: "AI Automation.lottie", width: "100%", height: "100%", offsetY: 4, padding: 14 },
  { fileName: "Man and robot with computers sitting together in workplace.lottie", width: "92%", height: "92%", offsetY: -2, padding: 16 },
  { fileName: "Artificial Intelligence.lottie", width: "94%", height: "94%", offsetY: 0, padding: 16 },
  { fileName: "Secure Transaction.lottie", width: "90%", height: "90%", offsetY: -4, padding: 12 },
  { fileName: "Workflow.lottie", width: "92%", height: "92%", offsetY: 2, padding: 14 },
  { fileName: "Soft.lottie", width: "95%", height: "95%", offsetY: -2, padding: 14 },
  { fileName: "Trade.lottie", width: "96%", height: "96%", offsetY: 0, padding: 16 },
  { fileName: "Testing Correcting.lottie", width: "95%", height: "95%", offsetY: 2, padding: 14 }
] as const;

const getHighlightLottieSrc = (fileName: string) =>
  `${import.meta.env.BASE_URL}ACE/lottie/${encodeURIComponent(fileName)}`;

const highlightsSlides = [
  {
    id: 1,
    category: "Why ACE",
    title: "Complex processes. One intelligent platform.",
    description: "Enterprise processes span documents, data, rules, systems, and people. ACE brings them together."
  },
  {
    id: 2,
    category: "Understand",
    highlight: "Data Intelligence",
    title: "Turn complex data into usable intelligence.",
    description: "Extract, classify, validate, and structure business information from unstructured data and complex documents."
  },
  {
    id: 3,
    category: "Decide",
    highlight: "AI Decisioning",
    title: "Apply business rules and AI-driven decisioning.",
    description: "Apply business rules, validations, and contextual decision logic consistently across every enterprise process."
  },
  {
    id: 4,
    category: "Execute",
    highlight: "Workflow Orchestration",
    title: "Orchestrate workflows across people, systems, and processes.",
    description: "Connect people, systems, bots, and business processes into seamless end-to-end workflows."
  },
  {
    id: 5,
    category: "Reconcile",
    highlight: "Validation & Matching",
    title: "Validate and match information across systems.",
    description: "Automatically match, validate, and resolve data across processes and enterprise applications."
  },
  {
    id: 6,
    category: "Measure",
    highlight: "Actionable Insights",
    title: "Turn process data into reports and actionable insights.",
    description: "Transform operational process data into real-time dashboards, executive reports, and business intelligence."
  },
  {
    id: 7,
    category: "Core Capabilities",
    highlight: "Enterprise Automation",
    title: "Built to automate the enterprise.",
    description: "ACE brings intelligence, automation, and orchestration together to handle complex processes from end to end."
  },
  {
    id: 8,
    category: "ACE Modules",
    highlight: "Platform Building Blocks",
    title: "The intelligence behind ACE.",
    description: "Specialized capabilities that work as one connected platform — from data extraction to reconciliation."
  },
  {
    id: 9,
    category: "Where ACE Works",
    highlight: "Multi-Industry Adaptability",
    title: "Built for every enterprise.",
    description: "From financial services to healthcare, life sciences, and manufacturing, ACE adapts to critical workflows."
  },
  {
    id: 10,
    category: "Business Impact",
    highlight: "Measurable Impact",
    title: "Less manual effort. More intelligent operations.",
    description: "ACE helps enterprises reduce manual effort, improve accuracy, accelerate processing, and scale operations."
  }
];

// ------------------------------------------------------------
// TAKE A CLOSER LOOK CAPABILITIES (Using Provided Core Capabilities Data)
// ------------------------------------------------------------
const capabilities = [
  {
    label: "Intelligent Data Extraction",
    heading: "Intelligent Data Extraction",
    description: "Turn documents and unstructured information into usable data.",
    image: "/closer_look/idp.png"
  },
  {
    label: "AI-Powered Decisioning",
    heading: "AI-Powered Decisioning",
    description: "Apply business rules, intelligence, and contextual decisions to every process.",
    image: "/closer_look/business_rules.png"
  },
  {
    label: "Workflow Orchestration",
    heading: "Workflow Orchestration",
    description: "Connect people, systems, bots, and business processes in one workflow.",
    image: "/closer_look/workflow.png"
  },
  {
    label: "Reconciliation & Validation",
    heading: "Reconciliation & Validation",
    description: "Match, validate, and resolve information across systems.",
    image: "/closer_look/reconciliation.png"
  },
  {
    label: "Data & Master Data Management",
    heading: "Data & Master Data Management",
    description: "Centralize and manage the data processes depend on.",
    image: "/closer_look/overview.png"
  },
  {
    label: "Analytics & Reporting",
    heading: "Analytics & Reporting",
    description: "Transform process data into insights, reports, and dashboards.",
    image: "/closer_look/analytics.png"
  },
  {
    label: "Enterprise Integration",
    heading: "Enterprise Integration",
    description: "Connect automation with existing enterprise applications and systems.",
    image: "/closer_look/integrations.png"
  }
];

// ------------------------------------------------------------
// MODULE DETAILS FOR INTERACTIVE ARCHITECTURE POPUP MODAL
// ------------------------------------------------------------
const moduleDetails: Record<
  string,
  { name: string; tag: string; desc: string }
> = {
  ionic: {
    name: "IONIC",
    tag: "Intelligent Data Extraction",
    desc: "Extract and structure information from complex documents and unstructured data."
  },
  gears: {
    name: "GEARS",
    tag: "Rules & Decision Engine",
    desc: "Apply business rules, validations, and decision logic consistently."
  },
  smartflows: {
    name: "Smartflows",
    tag: "Workflow Orchestration",
    desc: "Connect processes, people, systems, and automation into seamless workflows."
  },
  lucid: {
    name: "LUCID",
    tag: "Reconciliation Engine",
    desc: "Match, validate, and reconcile data across systems and processes."
  },
  cosmos: {
    name: "COSMOS",
    tag: "Master Data Management",
    desc: "Manage and organize the data that powers enterprise processes."
  },
  hertz: {
    name: "HERTZ",
    tag: "Email Automation",
    desc: "Automate email-driven processes and interactions."
  },
  instabolt: {
    name: "Instabolt",
    tag: "Reports & Analytics",
    desc: "Turn process data into reports, dashboards, and actionable insights."
  },
  medsense: {
    name: "Medsense AI",
    tag: "Healthcare Intelligence",
    desc: "Apply AI-powered intelligence to healthcare and medical processes."
  },
  pvautomate: {
    name: "PV Automate",
    tag: "Pharmacovigilance Automation",
    desc: "Automate key pharmacovigilance processes across the safety lifecycle."
  }
};

export default function Ace() {
  const [activeModuleModal, setActiveModuleModal] = useState<string | null>(null);

  // Highlights Carousel State
  const [activeHighlightIndex, setActiveHighlightIndex] = useState(0);
  const [isHighlightPlaying, setIsHighlightPlaying] = useState(true);
  const highlightTrackRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);

  // Take a Closer Look State
  const [activeCapIndex, setActiveCapIndex] = useState(0);

  // Carousel Autoplay interval
  useEffect(() => {
    if (!isHighlightPlaying) return;
    const interval = setInterval(() => {
      setActiveHighlightIndex((prev) => (prev + 1) % highlightsSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHighlightPlaying]);

  // Scroll active slide into view smoothly
  useEffect(() => {
    if (highlightTrackRef.current) {
      const track = highlightTrackRef.current;
      const cards = track.querySelectorAll(".highlight-card");
      if (cards[activeHighlightIndex]) {
        isProgrammaticScroll.current = true;
        const card = cards[activeHighlightIndex] as HTMLElement;
        const targetScrollLeft = card.offsetLeft - (track.offsetWidth / 2) + (card.offsetWidth / 2);
        track.scrollTo({ left: targetScrollLeft, behavior: "smooth" });

        const timer = setTimeout(() => {
          isProgrammaticScroll.current = false;
        }, 500);
        return () => clearTimeout(timer);
      }
    }
  }, [activeHighlightIndex]);

  const handleHighlightScroll = () => {
    if (isProgrammaticScroll.current) return;
    if (highlightTrackRef.current) {
      const track = highlightTrackRef.current;
      const cards = track.querySelectorAll(".highlight-card");
      const trackScrollLeft = track.scrollLeft;
      let closestIndex = 0;
      let minDistance = Infinity;

      cards.forEach((cardNode, index) => {
        const card = cardNode as HTMLElement;
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const viewportCenter = trackScrollLeft + track.offsetWidth / 2;
        const distance = Math.abs(viewportCenter - cardCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== activeHighlightIndex) {
        setActiveHighlightIndex(closestIndex);
      }
    }
  };

  const fadeUp = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] as any }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="ace-cinematic-page">

      {/* ============================================================
          SECTION 1: ACE HERO
          ============================================================ */}
      <section className="ace-hero-cinematic">
        <div className="hero-grid-bg"></div>
        <div className="ace-container text-center relative z-10">
          <motion.h1
            className="hero-brand-heading"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            ACE
          </motion.h1>

          <motion.h2
            className="hero-main-title"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The Transformational Hyper Automation Platform
          </motion.h2>

          <motion.p
            className="hero-statement"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            AI-powered automation that transforms complex enterprise processes from intake to decision, execution, and reporting.
          </motion.p>

          <motion.div
            className="hero-cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={() => scrollToSection("why-ace")}
              className="btn-cinematic-primary"
            >
              <span>Explore ACE</span>
              <ArrowRight size={16} />
            </button>
            <Link to="/contact" className="btn-cinematic-secondary">
              <span>Talk to an Expert →</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* APPLE HIGHLIGHTS CAROUSEL SECTION */}
      <section className="ace-highlights-section">
        <div className="highlights-header-container">
          <motion.h2
            className="highlights-main-title heading-gradient-amber"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get the Highlights.
          </motion.h2>
        </div>

        <div className="highlights-carousel-wrapper">
          <div
            className="highlights-carousel-track"
            ref={highlightTrackRef}
            onScroll={handleHighlightScroll}
          >
            {highlightsSlides.map((slide, idx) => {
              const lottieConfig = highlightLottieConfigs[idx] ?? highlightLottieConfigs[0];
              const lottieSrc = getHighlightLottieSrc(lottieConfig.fileName);
              return (
                <div
                  key={slide.id}
                  className={`highlight-card ${idx === activeHighlightIndex ? "active" : ""}`}
                  onClick={() => setActiveHighlightIndex(idx)}
                >
                  <div className="highlight-card-header">
                    {slide.highlight ? (
                      <span className="highlight-pill-badge">{slide.highlight}</span>
                    ) : (
                      <span className="highlight-pill-badge">{slide.category}</span>
                    )}
                    <h3 className="highlight-card-title">{slide.title}</h3>
                    <p className="highlight-card-desc">{slide.description}</p>
                  </div>

                  <div className="highlight-visual-container">
                    <div className="highlight-lottie-shell" style={{ padding: `${lottieConfig.padding}px` }}>
                      <DotLottieReact
                        src={lottieSrc}
                        loop
                        autoplay
                        className="highlight-lottie"
                        style={{
                          width: lottieConfig.width,
                          height: lottieConfig.height,
                          marginTop: `${lottieConfig.offsetY}px`
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Floating Pill Controls (Apple Style) */}
          <div className="highlights-controls-pill-wrapper">
            <div className="highlights-controls-pill">
              <div className="ctrl-dots-group">
                {highlightsSlides.map((_, idx) => (
                  <button
                    key={idx}
                    className={`ctrl-dot ${idx === activeHighlightIndex ? "active" : ""}`}
                    onClick={() => setActiveHighlightIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    {idx === activeHighlightIndex && isHighlightPlaying && (
                      <span className="dot-progress-bar" />
                    )}
                  </button>
                ))}
              </div>

              <div className="ctrl-divider" />

              <button
                className="ctrl-play-btn"
                onClick={() => setIsHighlightPlaying(!isHighlightPlaying)}
                aria-label={isHighlightPlaying ? "Pause carousel" : "Play carousel"}
              >
                {isHighlightPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" />}
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* ============================================================
          ACE — SECTION 2: WHY ACE
          ============================================================ */}
      <section id="why-ace" className="ace-why-section">
        <div className="ace-container">
          <motion.div className="section-header text-center" {...fadeUp}>
            <span className="section-eyebrow">ACE — Section 2: Why ACE</span>
            <h2 className="section-title heading-gradient-spectrum">
              Complex processes. One intelligent platform.
            </h2>
            <div className="why-ace-lead-wrapper">
              <p className="why-ace-lead">
                Enterprise processes span documents, data, rules, systems, and people.
              </p>
              <p className="why-ace-accent">ACE brings them together.</p>
              <p className="why-ace-desc">
                From extracting information and applying business rules to orchestrating workflows, reconciling data, and generating insights — ACE connects every step into one intelligent automation platform.
              </p>
            </div>
          </motion.div>

          <div className="why-highlights-grid">
            <motion.div className="why-highlight-card" {...fadeUp}>
              <div className="why-icon-box blue">
                <Brain size={24} />
              </div>
              <h3>Understand</h3>
              <p>Turn complex data and documents into usable intelligence.</p>
            </motion.div>

            <motion.div className="why-highlight-card" {...fadeUp}>
              <div className="why-icon-box purple">
                <Sliders size={24} />
              </div>
              <h3>Decide</h3>
              <p>Apply business rules and AI-driven decisioning.</p>
            </motion.div>

            <motion.div className="why-highlight-card" {...fadeUp}>
              <div className="why-icon-box green">
                <Workflow size={24} />
              </div>
              <h3>Execute</h3>
              <p>Orchestrate workflows across people, systems, and processes.</p>
            </motion.div>

            <motion.div className="why-highlight-card" {...fadeUp}>
              <div className="why-icon-box amber">
                <GitCompare size={24} />
              </div>
              <h3>Reconcile</h3>
              <p>Validate and match information across systems.</p>
            </motion.div>

            <motion.div className="why-highlight-card" {...fadeUp}>
              <div className="why-icon-box red">
                <BarChart3 size={24} />
              </div>
              <h3>Measure</h3>
              <p>Turn process data into reports and actionable insights.</p>
            </motion.div>
          </div>

          <motion.div className="why-small-cta-wrap text-center" {...fadeUp}>
            <button
              onClick={() => scrollToSection("how-ace-works")}
              className="btn-link-action"
            >
              <span>See how ACE works →</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* APPLE 4-CORNER PROCESS CARDS SECTION */}
      <section className="ace-family-grid-section">
        <motion.div
          className="family-single-card-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.50 }}
        >
          {/* Top Left: Prior Authorization Automation */}
          <motion.div
            className="inner-process-card top-left"
            variants={{
              hidden: { opacity: 0.9, x: 200, y: 140, scale: 0.92 },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] }
              }
            }}
          >
            <div className="family-card-visual-wrapper">
              <div className="visual-claims-proc">
                <div className="claim-doc">
                  <span className="doc-tag">AUTH #402</span>
                  <div className="doc-content">
                    <span className="doc-bar" />
                    <span className="doc-bar short" />
                  </div>
                </div>
                <div className="claim-arrow">→</div>
                <div className="claim-status-node approve">
                  <span className="node-icon">★</span>
                  <span className="node-label">Authorized</span>
                </div>
              </div>
            </div>
            <div className="family-card-info">
              <h4>Prior Authorization Automation</h4>
              <p>Automate document intake, validation, decisioning, and downstream actions.</p>
            </div>
          </motion.div>

          {/* Top Right: Pharmacovigilance Automation */}
          <motion.div
            className="inner-process-card top-right"
            variants={{
              hidden: { opacity: 0.9, x: -200, y: 140, scale: 0.92 },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] }
              }
            }}
          >
            <div className="family-card-visual-wrapper">
              <div className="visual-claims-proc">
                <div className="claim-doc">
                  <span className="doc-tag">SAFETY CASE</span>
                  <div className="doc-content">
                    <span className="doc-bar" />
                    <span className="doc-bar short" />
                  </div>
                </div>
                <div className="claim-arrow">→</div>
                <div className="claim-status-node">
                  <span className="node-icon">✓</span>
                  <span className="node-label">Triaged</span>
                </div>
              </div>
            </div>
            <div className="family-card-info">
              <h4>Pharmacovigilance Automation</h4>
              <p>Streamline safety-data intake, case triage, validation, and reporting.</p>
            </div>
          </motion.div>

          {/* Center Title Block */}
          <div className="family-center-text-block">
            <motion.h2
              className="family-main-title"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] }
                }
              }}
            >
              Complex processes. <br />
              One intelligent platform. <br />
              ACE connects every step.
            </motion.h2>

            <motion.div
              className="family-cta-wrapper"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
                }
              }}
            >
              <button
                onClick={() => scrollToSection("how-ace-works")}
                className="btn-family-cta"
              >
                <span>See how ACE works</span>
              </button>
            </motion.div>
          </div>

          {/* Bottom Left: Invoice Processing */}
          <motion.div
            className="inner-process-card bottom-left"
            variants={{
              hidden: { opacity: 0.9, x: 200, y: -140, scale: 0.92 },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] }
              }
            }}
          >
            <div className="family-card-visual-wrapper">
              <div className="visual-invoice-proc">
                <div className="invoice-paper">
                  <div className="invoice-header">
                    <div className="invoice-logo" />
                    <div className="invoice-amount">$14,250.00</div>
                  </div>
                  <div className="invoice-lines">
                    <div className="line" />
                    <div className="line" />
                  </div>
                </div>
                <div className="scan-line" />
                <div className="json-output">
                  <code>{"{"}</code>
                  <code>  "total": 14250.00,</code>
                  <code>  "status": "extracted"</code>
                  <code>{"}"}</code>
                </div>
              </div>
            </div>
            <div className="family-card-info">
              <h4>Invoice Processing</h4>
              <p>Extract, validate, reconcile, and process invoice data at scale.</p>
            </div>
          </motion.div>

          {/* Bottom Right: Bank Reconciliation */}
          <motion.div
            className="inner-process-card bottom-right"
            variants={{
              hidden: { opacity: 0.9, x: -200, y: -140, scale: 0.92 },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] }
              }
            }}
          >
            <div className="family-card-visual-wrapper">
              <div className="visual-po-automation">
                <div className="po-doc">
                  <span className="po-title">MATCHED</span>
                  <div className="po-bars">
                    <div className="po-bar" />
                    <div className="po-bar" />
                  </div>
                </div>
                <div className="po-connection-line" />
                <div className="erp-database">
                  <div className="db-cylinder">
                    <div className="db-top" />
                    <div className="db-mid" />
                    <div className="db-bottom" />
                  </div>
                  <span className="db-label">Reconciled</span>
                </div>
              </div>
            </div>
            <div className="family-card-info">
              <h4>Bank Reconciliation</h4>
              <p>Automate data matching, validation, exception handling, and reconciliation.</p>
            </div>
          </motion.div>
        </motion.div>
      </section>


      {/* ============================================================
          SECTION 3 — HOW ACE WORKS
          ============================================================ */}
      <section id="how-ace-works" className="ace-how-it-works-section">
        <div className="ace-container">
          <motion.div className="section-header text-center" {...fadeUp}>
            <span className="section-eyebrow">Section 3 — How ACE Works</span>
            <h2 className="section-title">From input to outcome.</h2>
            <p className="section-subtitle">
              ACE connects the entire automation journey — turning information into decisions, actions, and measurable outcomes.
            </p>
          </motion.div>

          <div className="ace-journey-grid">
            {[
              {
                num: "01",
                title: "Ingest",
                desc: "Bring data and documents from multiple sources into one process.",
                icon: <FileSpreadsheet size={22} />,
                color: "#0090F7"
              },
              {
                num: "02",
                title: "Understand",
                desc: "Extract, classify, validate, and structure information.",
                icon: <FileText size={22} />,
                color: "#34c759"
              },
              {
                num: "03",
                title: "Decide",
                desc: "Apply business rules, intelligence, and decision logic.",
                icon: <Sliders size={22} />,
                color: "#ff9500"
              },
              {
                num: "04",
                title: "Execute",
                desc: "Orchestrate workflows across people, bots, and enterprise systems.",
                icon: <Workflow size={22} />,
                color: "#5856d6"
              },
              {
                num: "05",
                title: "Reconcile",
                desc: "Match, validate, and resolve data across processes and systems.",
                icon: <GitCompare size={22} />,
                color: "#af52de"
              },
              {
                num: "06",
                title: "Report",
                desc: "Turn process data into reports, dashboards, and actionable insights.",
                icon: <BarChart3 size={22} />,
                color: "#ff2d55"
              }
            ].map((step, idx) => (
              <motion.div
                key={step.num}
                className="journey-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <div className="journey-card-top">
                  <span className="journey-step-num" style={{ color: step.color }}>
                    {step.num}
                  </span>
                  <div className="journey-icon-wrap" style={{ color: step.color, backgroundColor: `${step.color}15` }}>
                    {step.icon}
                  </div>
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div className="journey-closing-banner" {...fadeUp}>
            <span className="closing-banner-text">One platform. End-to-end automation.</span>
          </motion.div>
        </div>
      </section>


      {/* ============================================================
          SECTION 4 — CORE CAPABILITIES
          ============================================================ */}
      <section className="ace-capabilities-section">
        <div className="ace-container">
          <motion.div className="section-header text-center" {...fadeUp}>
            <span className="section-eyebrow">Section 4 — Core Capabilities</span>
            <h2 className="section-title heading-gradient-purple">
              Built to automate the enterprise.
            </h2>
            <p className="section-subtitle">
              ACE brings intelligence, automation, and orchestration together to handle complex processes from end to end.
            </p>
          </motion.div>

          <div className="core-capabilities-grid">
            {[
              {
                title: "Intelligent Data Extraction",
                desc: "Turn documents and unstructured information into usable data.",
                icon: <FileText size={24} />,
                color: "#0090F7"
              },
              {
                title: "AI-Powered Decisioning",
                desc: "Apply business rules, intelligence, and contextual decisions to every process.",
                icon: <Cpu size={24} />,
                color: "#BA62FC"
              },
              {
                title: "Workflow Orchestration",
                desc: "Connect people, systems, bots, and business processes in one workflow.",
                icon: <Workflow size={24} />,
                color: "#5856d6"
              },
              {
                title: "Reconciliation & Validation",
                desc: "Match, validate, and resolve information across systems.",
                icon: <GitCompare size={24} />,
                color: "#34c759"
              },
              {
                title: "Data & Master Data Management",
                desc: "Centralize and manage the data processes depend on.",
                icon: <Database size={24} />,
                color: "#ff9500"
              },
              {
                title: "Analytics & Reporting",
                desc: "Transform process data into insights, reports, and dashboards.",
                icon: <PieChart size={24} />,
                color: "#ff2d55"
              },
              {
                title: "Enterprise Integration",
                desc: "Connect automation with existing enterprise applications and systems.",
                icon: <Layers size={24} />,
                color: "#0071e3"
              }
            ].map((cap, idx) => (
              <motion.div
                key={idx}
                className={`capability-card ${idx === 6 ? "span-full-row" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
              >
                <div className="cap-icon-box" style={{ color: cap.color, backgroundColor: `${cap.color}12` }}>
                  {cap.icon}
                </div>
                <div className="cap-content">
                  <h4>{cap.title}</h4>
                  <p>{cap.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLE "TAKE A CLOSER LOOK" ACCORDION PILLS SECTION */}
      <section className="ace-closer-look-section">
        <div className="closer-look-container">
          <AnimatePresence>
            {activeCapIndex < 0 && (
              <motion.h2
                className="closer-look-title"
                initial={{ opacity: 0, height: 0, marginBottom: 0, overflow: "hidden" }}
                animate={{ opacity: 1, height: "auto", marginBottom: 40 }}
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              >
                Take a closer look.
              </motion.h2>
            )}
          </AnimatePresence>

          <div className="closer-look-card">
            {/* Full Card Background Image Layer */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCapIndex >= 0 ? activeCapIndex : 0}
                className="closer-look-full-bg-layer"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              >
                <img
                  src={capabilities[activeCapIndex >= 0 ? activeCapIndex : 0]?.image}
                  alt={capabilities[activeCapIndex >= 0 ? activeCapIndex : 0]?.label}
                  className="closer-look-full-bg-image"
                />
                <div className="closer-look-full-bg-overlay" />
              </motion.div>
            </AnimatePresence>

            {/* X close button — top right corner */}
            {activeCapIndex >= 0 && (
              <button
                className="closer-look-close-btn"
                onClick={() => setActiveCapIndex(-1)}
                aria-label="Close all"
              >
                <X size={16} />
              </button>
            )}

            {/* Left Column: Arrows + Nav pills */}
            <div className="closer-look-left">
              {/* Chevron arrows column */}
              <div className="closer-look-arrows-col">
                <button
                  className="arrow-btn"
                  onClick={() => setActiveCapIndex((prev) => (prev - 1 + capabilities.length) % capabilities.length)}
                  aria-label="Previous"
                >
                  <ChevronUp size={14} />
                </button>
                <button
                  className="arrow-btn"
                  onClick={() => setActiveCapIndex((prev) => (prev + 1) % capabilities.length)}
                  aria-label="Next"
                >
                  <ChevronDown size={14} />
                </button>
              </div>

              {/* Navigation pills list */}
              <motion.div layout className="closer-look-pills">
                {capabilities.map((cap, idx) => (
                  <motion.div key={idx} layout className="closer-look-pill-wrap">
                    <AnimatePresence initial={false}>
                      {idx !== activeCapIndex ? (
                        <motion.button
                          key="pill"
                          layout="position"
                          className="closer-look-pill"
                          onClick={() => setActiveCapIndex(idx)}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.25 }}
                        >
                          <span className="pill-icon">{idx === 0 ? "○" : "＋"}</span>
                          <span className="pill-text">{cap.label}</span>
                        </motion.button>
                      ) : (
                        <motion.div
                          key="content"
                          layout="position"
                          className="closer-look-accordion"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                        >
                          <div className="accordion-inner">
                            <p className="accordion-desc">
                              <strong>{cap.label}.</strong> {cap.description}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Column Spacer */}
            <div className="closer-look-right" />
          </div>
        </div>
      </section>


      {/* ============================================================
          SECTION 5 — ACE MODULES
          ============================================================ */}
      <section className="ace-modules-section">
        <div className="ace-container">
          <motion.div className="section-header text-center" {...fadeUp}>
            <span className="section-eyebrow">Section 5 — ACE Modules</span>
            <h2 className="section-title heading-gradient-spectrum">
              The intelligence behind ACE.
            </h2>
            <p className="section-subtitle">
              ACE brings together specialized capabilities that work as one platform — from extracting information to orchestrating workflows, reconciling data, and delivering insights.
            </p>
          </motion.div>

          <div className="ace-modules-grid">
            {[
              { id: "ionic", name: "IONIC", category: "Intelligent Data Extraction", desc: "Extract and structure information from complex documents and unstructured data.", color: "#34c759" },
              { id: "gears", name: "GEARS", category: "Rules & Decision Engine", desc: "Apply business rules, validations, and decision logic consistently.", color: "#ff9500" },
              { id: "smartflows", name: "Smartflows", category: "Workflow Orchestration", desc: "Connect processes, people, systems, and automation into seamless workflows.", color: "#5856d6" },
              { id: "lucid", name: "LUCID", category: "Reconciliation Engine", desc: "Match, validate, and reconcile data across systems and processes.", color: "#0090F7" },
              { id: "cosmos", name: "COSMOS", category: "Master Data Management", desc: "Manage and organize the data that powers enterprise processes.", color: "#af52de" },
              { id: "hertz", name: "HERTZ", category: "Email Automation", desc: "Automate email-driven processes and interactions.", color: "#00c7be" },
              { id: "instabolt", name: "Instabolt", category: "Reports & Analytics", desc: "Turn process data into reports, dashboards, and actionable insights.", color: "#ff2d55" },
              { id: "medsense", name: "Medsense AI", category: "Healthcare Intelligence", desc: "Apply AI-powered intelligence to healthcare and medical processes.", color: "#30b0c7" },
              { id: "pvautomate", name: "PV Automate", category: "Pharmacovigilance Automation", desc: "Automate key pharmacovigilance processes across the safety lifecycle.", color: "#e040fb" }
            ].map((mod) => (
              <motion.div
                key={mod.id}
                className="ace-module-card"
                {...fadeUp}
                whileHover={{ y: -5, boxShadow: `0 12px 30px ${mod.color}20` }}
                onClick={() => setActiveModuleModal(mod.id)}
              >
                <div className="mod-card-header">
                  <span className="mod-badge" style={{ backgroundColor: `${mod.color}15`, color: mod.color }}>
                    {mod.name}
                  </span>
                  <span className="mod-category">{mod.category}</span>
                </div>
                <p className="mod-desc">{mod.desc}</p>
                <div className="mod-card-footer">
                  <span className="mod-explore-btn" style={{ color: mod.color }}>
                    View Architecture Details <ChevronRight size={14} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="modules-deck-note-box" {...fadeUp}>
            <p>
              The ACE material identifies these capabilities/modules, including IONIC, LUCID, GEARS, Smartflows, HERTZ, Instabolt, COSMOS, Medsense AI and PV Automate. The Healthcare and Pharma decks also specifically demonstrate ACE capabilities being combined for processes such as EOB extraction, prior authorization, pharmacovigilance and clinical data analysis.
            </p>
          </motion.div>

          <motion.div className="modules-closing-bar text-center" {...fadeUp}>
            <span className="modules-closing-text">Different capabilities. One connected platform.</span>
          </motion.div>
        </div>
      </section>


      {/* ============================================================
          SECTION 6 — WHERE ACE WORKS
          ============================================================ */}
      <section className="ace-where-works-section">
        <div className="ace-container">
          <motion.div className="section-header text-center" {...fadeUp}>
            <span className="section-eyebrow">Section 6 — Where ACE Works</span>
            <h2 className="section-title">Built for every enterprise.</h2>
            <p className="section-subtitle">
              From financial services to healthcare, life sciences and manufacturing, ACE adapts to the processes that matter most.
            </p>
          </motion.div>

          <div className="industries-cards-grid">
            {[
              { title: "Banking", desc: "Intelligent automation for banking operations.", href: "/banking", icon: <Building2 size={24} /> },
              { title: "Healthcare", desc: "Transform complex healthcare processes with intelligent automation.", href: "/healthcare", icon: <Activity size={24} /> },
              { title: "Pharmaceuticals", desc: "Automate critical pharmaceutical and life sciences workflows.", href: "/pharmaceuticals", icon: <Pill size={24} /> },
              { title: "Revenue Cycle Management", desc: "Streamline revenue cycle processes from documentation to payment.", href: "/rcm", icon: <FileText size={24} /> },
              { title: "Media", desc: "Automate and optimize data-driven media operations.", href: "/media", icon: <Tv size={24} /> },
              { title: "Finance & Accounting", desc: "Simplify financial operations, processing and reconciliation.", href: "/finance-accounting", icon: <BarChart3 size={24} /> },
              { title: "Insurance", desc: "Automate document-heavy and decision-intensive insurance processes.", href: "/insurance", icon: <ShieldCheck size={24} /> },
              { title: "Manufacturing", desc: "Connect and automate complex manufacturing operations.", href: "/manufacturing", icon: <Factory size={24} /> }
            ].map((ind, idx) => (
              <motion.div
                key={idx}
                className="industry-work-card"
                {...fadeUp}
              >
                <div className="ind-work-header">
                  <div className="ind-work-icon">{ind.icon}</div>
                  <h4>{ind.title}</h4>
                </div>
                <p>{ind.desc}</p>
                <Link to={ind.href} className="ind-work-link">
                  <span>Explore {ind.title}</span>
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div className="text-center mt-12" {...fadeUp}>
            <Link to="/industries" className="btn-cinematic-primary">
              <span>Explore Industry Solutions →</span>
            </Link>
          </motion.div>
        </div>
      </section>


      {/* ============================================================
          SECTION 7 — FEATURED USE CASES
          ============================================================ */}
      <section className="ace-use-cases-section">
        <div className="ace-container">
          <motion.div className="section-header text-center" {...fadeUp}>
            <span className="section-eyebrow">Section 7 — Featured Use Cases</span>
            <h2 className="section-title heading-gradient-amber">
              Built for the processes that matter.
            </h2>
            <p className="section-subtitle">
              From documents and decisions to complex workflows, ACE brings intelligence and automation to the processes that keep enterprises moving.
            </p>
          </motion.div>

          <div className="use-cases-grid">
            {[
              {
                title: "Prior Authorization Automation",
                desc: "Automate document intake, validation, decisioning, and downstream actions."
              },
              {
                title: "Pharmacovigilance Automation",
                desc: "Streamline safety-data intake, case triage, validation, and reporting."
              },
              {
                title: "Invoice Processing",
                desc: "Extract, validate, reconcile, and process invoice data at scale."
              },
              {
                title: "Bank Reconciliation",
                desc: "Automate data matching, validation, exception handling, and reconciliation."
              },
              {
                title: "KYC & Customer Onboarding",
                desc: "Automate document verification, validation, risk assessment, and onboarding workflows."
              },
              {
                title: "Sales & Demand Forecasting",
                desc: "Turn enterprise data into actionable forecasts and planning insights."
              }
            ].map((uc, idx) => (
              <motion.div
                key={idx}
                className="use-case-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
              >
                <h4>{uc.title}</h4>
                <p>{uc.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div className="text-center mt-12" {...fadeUp}>
            <Link to="/solutions" className="btn-cinematic-secondary">
              <span>Explore All Use Cases →</span>
            </Link>
          </motion.div>
        </div>
      </section>


      {/* ============================================================
          SECTION 8 — CASE STUDY HIGHLIGHTS
          ============================================================ */}
      <section className="ace-case-studies-section">
        <div className="ace-container">
          <motion.div className="section-header text-center" {...fadeUp}>
            <span className="section-eyebrow">Section 8 — Case Study Highlights</span>
            <h2 className="section-title">Proven in the real world.</h2>
            <p className="section-subtitle">
              From high-volume healthcare operations to complex pharmaceutical processes, ACE has been applied to automate critical enterprise workflows and deliver measurable results.
            </p>
          </motion.div>

          <div className="case-studies-list">
            {/* Case Study 1 */}
            <motion.div className="case-study-card" {...fadeUp}>
              <div className="cs-card-header">
                <span className="cs-badge">Case Study 1</span>
                <h3>Prior Authorization Automation</h3>
                <p className="cs-tagline">Automating complex authorization decisions at scale</p>
                <p className="cs-desc">
                  ACE automates document extraction, business-rule validation, decisioning, and downstream system updates.
                </p>
              </div>

              <div className="cs-metrics-grid">
                <div className="cs-metric-box">
                  <span className="cs-metric-val">100%</span>
                  <span className="cs-metric-lbl">SLA achieved</span>
                </div>
                <div className="cs-metric-box">
                  <span className="cs-metric-val">40%</span>
                  <span className="cs-metric-lbl">FTE reduction</span>
                </div>
                <div className="cs-metric-box">
                  <span className="cs-metric-val">95%</span>
                  <span className="cs-metric-lbl">Reduction in manual errors</span>
                </div>
              </div>

              <div className="cs-card-action">
                <Link to="/contact" className="cs-link">
                  Read Case Study →
                </Link>
              </div>
            </motion.div>

            {/* Case Study 2 */}
            <motion.div className="case-study-card" {...fadeUp}>
              <div className="cs-card-header">
                <span className="cs-badge">Case Study 2</span>
                <h3>EOB & Membership Data Extraction</h3>
                <p className="cs-tagline">Turning high-volume healthcare documents into actionable data</p>
                <p className="cs-desc">
                  ACE automates classification, extraction, validation and processing of complex EOB and membership documents.
                </p>
              </div>

              <div className="cs-metrics-grid">
                <div className="cs-metric-box">
                  <span className="cs-metric-val">60%</span>
                  <span className="cs-metric-lbl">FTE reduction</span>
                </div>
                <div className="cs-metric-box">
                  <span className="cs-metric-val">90%</span>
                  <span className="cs-metric-lbl">Automated document extraction</span>
                </div>
                <div className="cs-metric-box">
                  <span className="cs-metric-val">76%</span>
                  <span className="cs-metric-lbl">Reduction in manual errors</span>
                </div>
              </div>

              <div className="cs-card-action">
                <Link to="/contact" className="cs-link">
                  Read Case Study →
                </Link>
              </div>
            </motion.div>

            {/* Case Study 3 */}
            <motion.div className="case-study-card" {...fadeUp}>
              <div className="cs-card-header">
                <span className="cs-badge">Case Study 3</span>
                <h3>Clinical Data Analysis</h3>
                <p className="cs-tagline">Turning complex healthcare data into meaningful insights</p>
                <p className="cs-desc">
                  ACE combines data management, analytics and machine learning to identify patterns and trends across patient and clinical data.
                </p>
              </div>

              <div className="cs-metrics-grid">
                <div className="cs-metric-box">
                  <span className="cs-metric-val">75%</span>
                  <span className="cs-metric-lbl">Improved accuracy</span>
                </div>
                <div className="cs-metric-box">
                  <span className="cs-metric-val">80%</span>
                  <span className="cs-metric-lbl">FTE savings</span>
                </div>
                <div className="cs-metric-box">
                  <span className="cs-metric-val">60%</span>
                  <span className="cs-metric-lbl">Reduction in human errors</span>
                </div>
              </div>

              <div className="cs-card-action">
                <Link to="/contact" className="cs-link">
                  Read Case Study →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ============================================================
          SECTION 9 — BUSINESS IMPACT
          ============================================================ */}
      <section className="ace-impact-section">
        <div className="ace-container">
          <motion.div className="section-header text-center" {...fadeUp}>
            <span className="section-eyebrow">Section 9 — Business Impact</span>
            <h2 className="section-title heading-gradient-red">
              Automation that delivers measurable impact.
            </h2>
            <p className="section-subtitle">
              ACE helps enterprises reduce manual effort, improve accuracy, accelerate processing, and scale critical operations.
            </p>
          </motion.div>

          <div className="impact-highlights-grid">
            <motion.div className="impact-card" {...fadeUp}>
              <div className="impact-icon-box red">
                <TrendingUp size={24} />
              </div>
              <h4>Efficiency</h4>
              <p>Reduce repetitive manual work and accelerate process execution.</p>
            </motion.div>

            <motion.div className="impact-card" {...fadeUp}>
              <div className="impact-icon-box green">
                <CheckCircle2 size={24} />
              </div>
              <h4>Accuracy</h4>
              <p>Minimize errors through automated extraction, validation, and decisioning.</p>
            </motion.div>

            <motion.div className="impact-card" {...fadeUp}>
              <div className="impact-icon-box blue">
                <RefreshCw size={24} />
              </div>
              <h4>Scale</h4>
              <p>Handle high-volume processes without proportionally increasing operational effort.</p>
            </motion.div>

            <motion.div className="impact-card" {...fadeUp}>
              <div className="impact-icon-box purple">
                <ShieldCheck size={24} />
              </div>
              <h4>Control</h4>
              <p>Bring business rules, workflows, data, and decisions into a connected process.</p>
            </motion.div>
          </div>

          <motion.div className="impact-closing-banner text-center" {...fadeUp}>
            <span className="impact-closing-text">Less manual effort. More intelligent operations.</span>
          </motion.div>
        </div>
      </section>


      {/* ============================================================
          SECTION 10 — FINAL CTA
          ============================================================ */}
      <section className="ace-final-cta-section">
        <div className="ace-container text-center">
          <motion.h2 className="final-cta-title heading-gradient-spectrum" {...fadeUp}>
            Ready to transform your enterprise processes?
          </motion.h2>
          <motion.p className="final-cta-desc" {...fadeUp}>
            Discover how ACE can turn complex processes into intelligent, scalable automation.
          </motion.p>
          <motion.div className="final-cta-buttons" {...fadeUp}>
            <Link to="/contact" className="btn-cinematic-primary">
              <span>Talk to an ACE Expert →</span>
            </Link>
            <button
              onClick={() => scrollToSection("why-ace")}
              className="btn-cinematic-secondary"
            >
              <span>Explore ACE →</span>
            </button>
          </motion.div>
        </div>
      </section>


      {/* ============================================================
          INTERACTIVE MODULE POPUP MODAL
          ============================================================ */}
      <AnimatePresence>
        {activeModuleModal && moduleDetails[activeModuleModal] && (
          <motion.div
            className="workflow-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModuleModal(null)}
          >
            <motion.div
              className="workflow-modal-content"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setActiveModuleModal(null)}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="modal-header">
                <span className="modal-badge">{moduleDetails[activeModuleModal].tag}</span>
                <h3>{moduleDetails[activeModuleModal].name}</h3>
                <p>{moduleDetails[activeModuleModal].desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
