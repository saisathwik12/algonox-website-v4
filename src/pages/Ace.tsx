import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";
import {
  Mail,
  FileText,
  GitCompare,
  Sliders,
  Workflow,
  Sparkles,
  BarChart3,
  Zap,
  Cpu,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Database,
  Layers,
  Globe,
  Server,
  Cloud,
  Lock,
  RefreshCw,
  X,
  Building2,
  Pill,
  Factory,
  Tv,
  Activity,
  Check,
  Play,
  Pause
} from "lucide-react";
import "./Ace.css";

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

// Workflow Modal Data mapping
const workflowDetails: Record<string, { title: string; subtitle: string; steps: { num: string; label: string; desc: string }[] }> = {
  ionic: {
    title: "IONIC Workflow Architecture",
    subtitle: "Intelligent Document Processing (IDP) from unstructured file intake to ERP payload.",
    steps: [
      { num: "01", label: "Document Ingestion", desc: "PDFs, Scans, Invoices, or Images received via Email, API, or Directory Watcher." },
      { num: "02", label: "Hybrid OCR & Layout Analysis", desc: "Routes document to optimal OCR engine based on resolution, layout, and document type." },
      { num: "03", label: "ML Entity Extraction", desc: "Extracts key fields (Dates, Amounts, Line Items, GST, Vendor IDs) with confidence scoring." },
      { num: "04", label: "GEARS Validation Check", desc: "Cross-checks extracted values against Master DB and natural language business rules." },
      { num: "05", label: "ERP Export", desc: "Posts validated structured payload directly into SAP, Oracle, or custom ERP systems." }
    ]
  },
  hertz: {
    title: "HERTZ Workflow Architecture",
    subtitle: "Cognitive Email Ingestion to Automated Downstream Action.",
    steps: [
      { num: "01", label: "Inbox Listening", desc: "Monitors high-volume enterprise mailboxes (AP, Support, Claims) in real time." },
      { num: "02", label: "Intent & Sentiment Classification", desc: "Analyzes email body and subject line to determine request type and urgency." },
      { num: "03", label: "Attachment Parsing", desc: "Extracts attached PDFs, Excel spreadsheets, or images and passes them to IONIC." },
      { num: "04", label: "Contextual Auto-Reply & Trigger", desc: "Sends immediate confirmation and initiates downstream approval or processing flows." }
    ]
  },
  gears: {
    title: "GEARS Workflow Architecture",
    subtitle: "Natural Language Business Rules Validation Engine.",
    steps: [
      { num: "01", label: "Data Schema Ingestion", desc: "Receives raw extracted data payload from IONIC or external enterprise systems." },
      { num: "02", label: "Master Data Cross-Referencing", desc: "Queries ERP vendor lists, PO thresholds, and client master records." },
      { num: "03", label: "Rule Evaluation", desc: "Evaluates rules (e.g. 'Invoice Amount < PO Limit' and 'Valid Tax ID')." },
      { num: "04", label: "Decision & Exception Flagging", desc: "Approve for auto-posting or flag specific rule failures for Human Review." }
    ]
  },
  smartflows: {
    title: "SMARTFLOWS Workflow Architecture",
    subtitle: "Visual AI Workflow Orchestration & Human-in-the-Loop Dispatch.",
    steps: [
      { num: "01", label: "Process Trigger", desc: "Initiates workflow upon data validation or external system event." },
      { num: "02", label: "Dynamic Task Routing", desc: "Routes task to automated bots, AI models, or specific team queues based on SLA." },
      { num: "03", label: "Human Review Interface", desc: "Provides intuitive side-by-side review panel for audit approvals or exception handling." },
      { num: "04", label: "State Synchronization", desc: "Updates enterprise databases, audit logs, and triggers final status notifications." }
    ]
  },
  lucid: {
    title: "LUCID Workflow Architecture",
    subtitle: "Automated Multi-Source Transaction Reconciliation Engine.",
    steps: [
      { num: "01", label: "Dual Data Intake", desc: "Ingests Datasets A (e.g. Bank Statements / POs) and Dataset B (e.g. ERP Ledger / Invoices)." },
      { num: "02", label: "Fuzzy & Exact Matching", desc: "Applies multi-pass matching algorithms on dates, reference IDs, and monetary values." },
      { num: "03", label: "Variance & Mismatch Tagging", desc: "Automatically matches 90%+ records and pinpoints exact variance amounts." },
      { num: "04", label: "Settlement Export", desc: "Generates reconciliation audit reports and queues adjustment journal entries." }
    ]
  },
  cosmos: {
    title: "COSMOS Workflow Architecture",
    subtitle: "Goal-Driven Agentic AI Orchestration.",
    steps: [
      { num: "01", label: "Goal Definition", desc: "Receives high-level enterprise objective (e.g., 'Resolve invoice discrepancy for Client X')." },
      { num: "02", label: "Contextual Reasoning", desc: "Queries multiple enterprise systems (CRM, ERP, Knowledge Base) to gather facts." },
      { num: "03", label: "Autonomous Execution", desc: "Agent plans sequence of API calls, executes lookups, and formulates resolution." },
      { num: "04", label: "Verified Outcome", desc: "Applies fix, logs full audit trail, and notifies operational leads." }
    ]
  },
  instabolt: {
    title: "INSTABOLT Workflow Architecture",
    subtitle: "Real-Time Operational Analytics & Dashboard Layer.",
    steps: [
      { num: "01", label: "Telemetry Aggregation", desc: "Streams real-time event logs from HERTZ, IONIC, GEARS, and SMARTFLOWS." },
      { num: "02", label: "KPI Computation", desc: "Calculates automation rates, processing turnaround times, and exception ages." },
      { num: "03", label: "Executive Dashboards", desc: "Renders responsive, live interactive charts and operational heatmaps." },
      { num: "04", label: "SLA Alerts", desc: "Sends proactive notifications if processing queues breach threshold limits." }
    ]
  }
};

// Capabilities Data (Apple "Take a closer look" Style)
const capabilities = [
  {
    label: "Platform Overview",
    heading: "One platform. Every enterprise workflow.",
    description: "ACE unifies intelligent document processing, AI, workflow automation, business rules, reconciliation, analytics, and enterprise integrations into one enterprise platform. Built on a modular architecture, it enables organizations to automate complex business processes while adapting to different industries, systems, and operational needs.",
    image: "/closer_look/overview.png"
  },
  {
    label: "Intelligent Document Processing",
    heading: "Documents become intelligence.",
    description: "Extract, classify, validate, and understand business information from invoices, claims, purchase orders, contracts, medical records, and more using AI-powered document intelligence.",
    image: "/closer_look/idp.png"
  },
  {
    label: "Workflow Automation",
    heading: "Work that moves itself.",
    description: "Design and automate business workflows with intelligent routing, approvals, notifications, escalations, and human-in-the-loop collaboration across enterprise operations.",
    image: "/closer_look/workflow.png"
  },
  {
    label: "Business Rules Engine",
    heading: "Every decision follows your rules.",
    description: "Configure business rules to validate data, enforce compliance, standardize decisions, and automate enterprise logic without changing core business systems.",
    image: "/closer_look/business_rules.png"
  },
  {
    label: "Reconciliation",
    heading: "Every transaction. Perfectly aligned.",
    description: "Automatically reconcile financial and operational data across systems, identify mismatches, and improve operational accuracy with intelligent reconciliation.",
    image: "/closer_look/reconciliation.png"
  },
  {
    label: "Enterprise AI",
    heading: "Intelligence built into every process.",
    description: "Leverage enterprise AI to understand business context, assist users, surface insights, and enable intelligent automation across every workflow.",
    image: "/closer_look/enterprise_ai.png"
  },
  {
    label: "Analytics & Reporting",
    heading: "Every workflow tells a story.",
    description: "Transform operational data into real-time dashboards, performance metrics, business insights, and actionable reports that support faster decision-making.",
    image: "/closer_look/analytics.png"
  },
  {
    label: "Enterprise Integrations",
    heading: "Connected by design.",
    description: "Integrate seamlessly with ERP, CRM, databases, cloud platforms, APIs, email systems, and enterprise applications without disrupting existing operations.",
    image: "/closer_look/integrations.png"
  },
  {
    label: "Deployment",
    heading: "Built for your enterprise.",
    description: "Deploy ACE on-premises, in the cloud, or as a SaaS solution, providing the flexibility to align with your infrastructure, compliance, and business requirements.",
    image: "/closer_look/deployment.png"
  }
];

// Highlights Slides Data (Apple Style Carousel Content)
const highlightsSlides = [
  {
    id: 1,
    slideNum: "Slide 1",
    category: "The Platform",
    title: "One Platform. Infinite Automation.",
    description: "Bring AI, document intelligence, workflow automation, business rules, reconciliation, analytics, and enterprise integrations together in one intelligent platform.",
    visual: "ACE Core connected to all intelligent services."
  },
  {
    id: 2,
    slideNum: "Slide 2",
    category: "Intelligent Document Processing",
    highlight: "AI-Powered Document Intelligence",
    title: "Documents become decisions.",
    description: "Extract, classify, and understand business information from invoices, claims, contracts, purchase orders, medical records, and more—automatically.",
    visual: "Invoice → AI Extraction → ERP"
  },
  {
    id: 3,
    slideNum: "Slide 3",
    category: "Workflow Automation",
    highlight: "Low-Code Workflow Automation",
    title: "Work that moves itself.",
    description: "Design, orchestrate, and automate approvals, routing, notifications, and human-in-the-loop workflows across your enterprise.",
    visual: "Workflow moving automatically."
  },
  {
    id: 4,
    slideNum: "Slide 4",
    category: "Business Rules",
    highlight: "Intelligent Decision Engine",
    title: "Every decision follows your rules.",
    description: "Apply configurable business rules to validate information, enforce compliance, and automate enterprise decisions with consistency.",
    visual: "Incoming Data → Rules → Validated Output"
  },
  {
    id: 5,
    slideNum: "Slide 5",
    category: "Enterprise AI",
    highlight: "Enterprise AI & Knowledge Intelligence",
    title: "Intelligence built into every workflow.",
    description: "Leverage AI to understand enterprise context, search knowledge, generate insights, and assist users with smarter decisions.",
    visual: "AI brain connected to every module."
  },
  {
    id: 6,
    slideNum: "Slide 6",
    category: "Reconciliation",
    highlight: "Automated Reconciliation",
    title: "Confidence in every transaction.",
    description: "Automatically match and reconcile financial and operational data across multiple systems with speed and accuracy.",
    visual: "Invoice ↔ Purchase Order ↔ ERP"
  },
  {
    id: 7,
    slideNum: "Slide 7",
    category: "Analytics & Insights",
    highlight: "Operational Intelligence",
    title: "Every workflow tells a story.",
    description: "Turn operational data into real-time dashboards, business insights, and actionable reports for faster decision-making.",
    visual: "Interactive dashboard."
  },
  {
    id: 8,
    slideNum: "Slide 8",
    category: "Enterprise Integrations",
    highlight: "API-First Integration",
    title: "Works with what you already use.",
    description: "Connect seamlessly with ERP, CRM, cloud platforms, databases, APIs, and enterprise applications without disrupting existing systems.",
    visual: "SAP • Salesforce • Oracle • Microsoft • REST APIs"
  },
  {
    id: 9,
    slideNum: "Slide 9",
    category: "Built for Every Industry",
    highlight: "Industry-Agnostic Platform",
    title: "One platform. Every industry.",
    description: "From Banking and Healthcare to Manufacturing, Insurance, Media, and Pharmaceuticals, ACE adapts to your business—not the other way around.",
    visual: "Industry cards connected to ACE."
  },
  {
    id: 10,
    slideNum: "Slide 10",
    category: "Business Impact",
    highlight: "Enterprise Transformation",
    title: "Built to deliver measurable outcomes.",
    description: "Reduce manual effort, improve accuracy, accelerate decisions, strengthen compliance, and scale operations with confidence.",
    visual: "Animated metrics and KPI counters."
  }
];

export default function Ace() {
  const [activeWorkflowModal, setActiveWorkflowModal] = useState<string | null>(null);
  const [activeArchTab, setActiveArchTab] = useState<"ingest" | "process" | "export">("process");

  // Highlights Carousel State
  const [activeHighlightIndex, setActiveHighlightIndex] = useState(0);
  const [isHighlightPlaying, setIsHighlightPlaying] = useState(true);
  const highlightTrackRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);

  // Take a Closer Look State
  const [activeCapIndex, setActiveCapIndex] = useState(0);

  // Autoplay interval
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
        // Center the card in the viewport
        const targetScrollLeft = card.offsetLeft - (track.offsetWidth / 2) + (card.offsetWidth / 2);
        track.scrollTo({ left: targetScrollLeft, behavior: "smooth" });

        const timer = setTimeout(() => {
          isProgrammaticScroll.current = false;
        }, 500);
        return () => clearTimeout(timer);
      }
    }
  }, [activeHighlightIndex]);

  // Update active slide on user manual scroll
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
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as any }
  };

  const challengeItems = [
    "Invoices.", "Claims.", "Medical Records.", "Purchase Orders.",
    "Contracts.", "Emails.", "Approvals.", "Compliance."
  ];

  const intelligentServices = [
    { id: "hertz", name: "HERTZ", title: "Email Automation", desc: "Automates email intake, attachment extraction, and inbox workflow triggers.", icon: <Mail size={24} />, color: "#0090F7" },
    { id: "ionic", name: "IONIC", title: "Intelligent Data Extraction", desc: "Extracts structured data from unstructured PDFs, forms, scans, and documents.", icon: <FileText size={24} />, color: "#34c759" },
    { id: "gears", name: "GEARS", title: "Business Rules Engine", desc: "Validates compliance and data rules in plain natural business language.", icon: <Sliders size={24} />, color: "#ff9500" },
    { id: "smartflows", name: "SMARTFLOWS", title: "AI Workflows", desc: "Orchestrates complex business workflows, approval flows, and task routing.", icon: <Workflow size={24} />, color: "#5856d6" },
    { id: "lucid", name: "LUCID", title: "Reconciliations", desc: "Compares multi-source datasets to match accounts and flag mismatches automatically.", icon: <GitCompare size={24} />, color: "#ffcc00" },
    { id: "cosmos", name: "COSMOS", title: "Agentic AI Enabler", desc: "Enables goal-driven task reasoning and autonomous multi-step execution.", icon: <Sparkles size={24} />, color: "#af52de" },
    { id: "instabolt", name: "INSTABOLT", title: "Reports & Dashboards", desc: "Delivers real-time processing telemetry, SLA metrics, and operational visibility.", icon: <BarChart3 size={24} />, color: "#ff2d55" }
  ];

  const industries = [
    {
      title: "Banking",
      icon: <Building2 size={24} />,
      href: "/banking",
      items: ["KYC & AML Review", "Loan Processing", "Trade Finance Documents", "Account Reconciliation"]
    },
    {
      title: "Revenue Cycle Management",
      icon: <Activity size={24} />,
      href: "/rcm",
      items: ["Claims Intake & Adjudication", "Medical Coding Review", "Prior Authorization", "Payment Posting & Denial Ops"]
    },
    {
      title: "Pharmaceuticals",
      icon: <Pill size={24} />,
      href: "/pharmaceuticals",
      items: ["Batch Production Records (BPR)", "Pharmacovigilance Signals", "SOP Compliance Audits", "Lab Data Intake"]
    },
    {
      title: "Manufacturing",
      icon: <Factory size={24} />,
      href: "/manufacturing",
      items: ["Purchase Orders (PO)", "Vendor Onboarding", "Inventory Reconciliation", "Quality Certificate Inspection"]
    },
    {
      title: "Insurance",
      icon: <ShieldCheck size={24} />,
      href: "/insurance",
      items: ["FNOL Claims Intake", "Policy Document Processing", "Underwriting Support", "Renewal Validation"]
    },
    {
      title: "Media & Entertainment",
      icon: <Tv size={24} />,
      href: "/media",
      items: ["Campaign Approvals", "Creative Rights Review", "Insertion Order Processing", "Budget Reconciliation"]
    }
  ];

  const ecosystemTools = [
    "SAP", "Oracle ERP", "Salesforce", "Microsoft Dynamics", "Workday",
    "ServiceNow", "REST APIs", "SQL Databases", "AWS / Azure", "SharePoint", "Snowflake"
  ];

  return (
    <div className="ace-cinematic-page">
      {/* SECTION 1: HERO */}
      <section className="ace-hero-cinematic">
        <div className="hero-grid-bg"></div>
        <div className="hero-particles"></div>
        <div className="ace-container text-center relative z-10">
          <motion.span 
            className="hero-eyebrow"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Algonox Flagship Platform
          </motion.span>

          <motion.h1 
            className="hero-main-title"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            ACE
          </motion.h1>

          <motion.p 
            className="hero-main-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The Enterprise Hyper Automation Platform
          </motion.p>

          <motion.h2 
            className="hero-statement"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Transform Documents. Automate Decisions. <br />
            Accelerate Business. Power Enterprise Intelligence.
          </motion.h2>

          <motion.p 
            className="hero-tagline-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            One Platform. Infinite Automation.
          </motion.p>

          <motion.div 
            className="hero-cta-group"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link to="/contact" className="btn-cinematic-primary">
              <span>Request Demo</span>
              <ArrowRight size={16} />
            </Link>
            <a href="#how-it-works" className="btn-cinematic-secondary">
              <span>Watch Platform Overview</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* SECTION: GET THE HIGHLIGHTS (Apple Highlights Carousel) */}
      <section className="ace-highlights-section">
        <div className="highlights-header-container">
          <motion.h2 
            className="highlights-main-title"
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

      {/* SECTION: ONE PLATFORM, EVERY INDUSTRY, ENDLESS POSSIBILITIES */}
      <section className="ace-family-grid-section">
        
        <div className="family-single-card-container">
            
            {/* Process Card 1 (Top Left) */}
            <div className="inner-process-card top-left">
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
                      <div className="line" />
                    </div>
                  </div>
                  <div className="scan-line" />
                  <div className="json-output">
                    <code>{"{"}</code>
                    <code>  "vendor": "Algonox Inc",</code>
                    <code>  "total": 14250.00,</code>
                    <code>  "status": "extracted"</code>
                    <code>{"}"}</code>
                  </div>
                </div>
              </div>
              <div className="family-card-info">
                <h4>Invoice Processing</h4>
                <p>From manual data entry to intelligent automation.</p>
              </div>
            </div>

            {/* Process Card 2 (Top Right) */}
            <div className="inner-process-card top-right">
              <div className="family-card-visual-wrapper">
                <div className="visual-claims-proc">
                  <div className="claim-doc">
                    <span className="doc-tag">CLAIM #981</span>
                    <div className="doc-content">
                      <span className="doc-bar" />
                      <span className="doc-bar short" />
                    </div>
                  </div>
                  <div className="claim-arrow">→</div>
                  <div className="claim-status-node">
                    <span className="node-icon">✓</span>
                    <span className="node-label">Validated</span>
                  </div>
                  <div className="claim-arrow">→</div>
                  <div className="claim-status-node approve">
                    <span className="node-icon">★</span>
                    <span className="node-label">Approved</span>
                  </div>
                </div>
              </div>
              <div className="family-card-info">
                <h4>Claims Processing</h4>
                <p>Accelerating decisions with intelligent workflows.</p>
              </div>
            </div>

            {/* Header Area inside the card (Center) */}
            <div className="family-center-text-block">
              <motion.h2 
                className="family-main-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                One platform. <br />
                Every industry. <br />
                Endless possibilities.
              </motion.h2>
              
              <motion.p 
                className="family-supporting-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                ACE is Algonox's Enterprise Hyper Automation Platform, bringing together AI, intelligent document processing, workflow orchestration, business rules, reconciliation, analytics, and enterprise integrations into one unified platform. Designed to adapt across industries and business functions, ACE empowers organizations to automate complex processes, accelerate decisions, and drive enterprise-wide transformation.
              </motion.p>

              <motion.div 
                className="family-cta-wrapper"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Link to="/contact" className="btn-family-cta">
                  <span>Explore ACE</span>
                </Link>
              </motion.div>
            </div>

            {/* Process Card 3 (Bottom Left) */}
            <div className="inner-process-card bottom-left">
              <div className="family-card-visual-wrapper">
                <div className="visual-customer-onboarding">
                  <div className="onboard-profile">
                    <div className="profile-avatar" />
                    <div className="profile-lines">
                      <div className="profile-line" />
                      <div className="profile-line short" />
                    </div>
                  </div>
                  <div className="identity-badge">
                    <span className="badge-dot" />
                    <span>ID Verified</span>
                  </div>
                  <div className="onboard-status">
                    <span className="onboard-check">✓</span>
                    <span>Onboarded</span>
                  </div>
                </div>
              </div>
              <div className="family-card-info">
                <h4>Customer Onboarding</h4>
                <p>Creating seamless onboarding experiences.</p>
              </div>
            </div>

            {/* Process Card 4 (Bottom Right) */}
            <div className="inner-process-card bottom-right">
              <div className="family-card-visual-wrapper">
                <div className="visual-po-automation">
                  <div className="po-doc">
                    <span className="po-title">PO #504</span>
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
                    <span className="db-label">ERP Sync</span>
                  </div>
                </div>
              </div>
              <div className="family-card-info">
                <h4>Purchase Order Automation</h4>
                <p>Connecting procurement with enterprise operations.</p>
              </div>
            </div>

          </div>

      </section>

      {/* SECTION: EXPLORE THE ACE PLATFORM (Take a Closer Look — Apple MacBook Neo Style) */}
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
              {/* Chevron arrows — floating outside, to the left of the pills */}
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

            {/* Right Column: Transparent spacer allowing full background image to show unified across left & right */}
            <div className="closer-look-right" />
          </div>
        </div>
      </section>

      {/* SECTION 2: THE CHALLENGE */}
      <section className="ace-challenge-section">
        <div className="ace-container">
          <motion.div className="challenge-header" {...fadeUp}>
            <span className="challenge-eyebrow">The Enterprise Reality</span>
            <h2 className="challenge-title">Disconnected Data. Manual Workarounds.</h2>
          </motion.div>

          <div className="challenge-chips-grid">
            {challengeItems.map((item, idx) => (
              <motion.div 
                key={idx}
                className="challenge-chip"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                {item}
              </motion.div>
            ))}
          </div>

          <motion.div className="challenge-story-box" {...fadeUp}>
            <p className="story-lead">
              Every enterprise depends on thousands of critical business processes every single day.
            </p>
            <p className="story-sub">
              Yet most organizations still rely on disconnected systems, manual data entry, and fragmented tools—slowing down operations and increasing risk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: MEET ACE */}
      <section className="ace-meet-section">
        <div className="ace-container text-center">
          <motion.div className="section-label-glow" {...fadeUp}>
            <span>Introducing the Platform</span>
          </motion.div>
          <motion.h2 className="meet-heading" {...fadeUp}>
            Meet ACE.
          </motion.h2>
          <motion.p className="meet-lead-text" {...fadeUp}>
            ACE is Algonox's Enterprise Hyper Automation Platform. It unifies AI, Intelligent Document Processing, Business Rules, Workflow Automation, Reconciliation, Reporting, and Enterprise Integrations into one scalable platform.
          </motion.p>

          <motion.div className="ace-modules-minimal-row" {...fadeUp}>
            {intelligentServices.map((svc, idx) => (
              <motion.div 
                key={svc.id} 
                className="minimal-module-chip"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <span className="chip-icon-wrap" style={{ color: svc.color }}>{svc.icon}</span>
                <span className="chip-label">{svc.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: HOW ACE WORKS (SIGNATURE ARCHITECTURE) */}
      <section id="how-it-works" className="ace-how-it-works-section">
        <div className="ace-container">
          <motion.div className="section-header text-center" {...fadeUp}>
            <span className="section-eyebrow">Signature Architecture</span>
            <h2 className="section-title">How ACE Works</h2>
            <p className="section-subtitle">
              From raw unstructured intake to verified enterprise payload in seconds.
            </p>
          </motion.div>

          <div className="arch-nav-tabs">
            <button 
              className={`arch-tab-btn ${activeArchTab === "ingest" ? "active" : ""}`}
              onClick={() => setActiveArchTab("ingest")}
            >
              1. INGEST
            </button>
            <button 
              className={`arch-tab-btn ${activeArchTab === "process" ? "active" : ""}`}
              onClick={() => setActiveArchTab("process")}
            >
              2. PROCESS
            </button>
            <button 
              className={`arch-tab-btn ${activeArchTab === "export" ? "active" : ""}`}
              onClick={() => setActiveArchTab("export")}
            >
              3. EXPORT
            </button>
          </div>

          <div className="arch-layers-display">
            <AnimatePresence mode="wait">
              {activeArchTab === "ingest" && (
                <motion.div 
                  key="ingest"
                  className="arch-layer-card ingest-card"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="layer-badge">STAGE 01 — INGEST</div>
                  <h3>Collect Enterprise Information</h3>
                  <p>Capture unstructured and semi-structured business data directly from any channel.</p>
                  <div className="node-chips-grid">
                    <span className="node-chip">Emails & Attachments</span>
                    <span className="node-chip">Scanned PDFs & Forms</span>
                    <span className="node-chip">Images & Scans</span>
                    <span className="node-chip">ERP & CRM Events</span>
                    <span className="node-chip">REST APIs & Webhooks</span>
                  </div>
                </motion.div>
              )}

              {activeArchTab === "process" && (
                <motion.div 
                  key="process"
                  className="arch-layer-card process-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="layer-badge">STAGE 02 — PROCESS</div>
                  <h3>Extract. Understand. Validate. Automate. Decide.</h3>
                  <p>Apply intelligent AI services, natural language rules, and workflow orchestration.</p>
                  <div className="process-pipeline-nodes">
                    <div className="pipe-node"><span>Extract</span><small>IONIC IDP</small></div>
                    <div className="pipe-arrow">→</div>
                    <div className="pipe-node"><span>Validate</span><small>GEARS Engine</small></div>
                    <div className="pipe-arrow">→</div>
                    <div className="pipe-node"><span>Reconcile</span><small>LUCID</small></div>
                    <div className="pipe-arrow">→</div>
                    <div className="pipe-node"><span>Orchestrate</span><small>SMARTFLOWS</small></div>
                  </div>
                </motion.div>
              )}

              {activeArchTab === "export" && (
                <motion.div 
                  key="export"
                  className="arch-layer-card export-card"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="layer-badge">STAGE 03 — EXPORT</div>
                  <h3>Integrate. Trigger. Report.</h3>
                  <p>Deliver verified, structured outcomes directly to downstream enterprise systems and dashboards.</p>
                  <div className="node-chips-grid">
                    <span className="node-chip">SAP / Oracle Sync</span>
                    <span className="node-chip">Live INSTABOLT Dashboards</span>
                    <span className="node-chip">Database Audit Logging</span>
                    <span className="node-chip">Automated Email Notifications</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* SECTION 5: MEET THE INTELLIGENT SERVICES */}
      <section className="ace-services-section">
        <div className="ace-container">
          <motion.div className="section-header text-center" {...fadeUp}>
            <span className="section-eyebrow">Modular Microservices</span>
            <h2 className="section-title">Meet the Intelligent Services</h2>
            <p className="section-subtitle">
              Deploy individually or combine seamlessly to automate complete end-to-end workflows.
            </p>
          </motion.div>

          <div className="services-cards-grid">
            {intelligentServices.map((svc) => (
              <motion.div 
                key={svc.id} 
                className="service-interactive-card"
                {...fadeUp}
                whileHover={{ y: -6, boxShadow: `0 12px 30px ${svc.color}20` }}
              >
                <div className="svc-header">
                  <div className="svc-icon-box" style={{ backgroundColor: `${svc.color}15`, color: svc.color }}>
                    {svc.icon}
                  </div>
                  <span className="svc-name" style={{ color: svc.color }}>{svc.name}</span>
                </div>
                <h4>{svc.title}</h4>
                <p>{svc.desc}</p>
                <button 
                  className="svc-workflow-btn" 
                  onClick={() => setActiveWorkflowModal(svc.id)}
                >
                  <span>Explore Service Story</span>
                  <ChevronRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: MODULE STORYTELLING (APPLE-STYLE SPOTLIGHTS) */}
      <section className="ace-spotlights-section">
        <div className="ace-container">
          <motion.div className="section-header text-center" {...fadeUp}>
            <span className="section-eyebrow">In-Depth Microservice Stories</span>
            <h2 className="section-title">Platform Capabilities in Action</h2>
          </motion.div>

          {/* IONIC SPOTLIGHT */}
          <motion.div className="spotlight-block" {...fadeUp}>
            <div className="spotlight-badge" style={{ color: "#34c759", borderColor: "#34c75930" }}>IONIC IDP</div>
            <h3 className="spotlight-headline">Documents become Intelligence.</h3>
            <p className="spotlight-body">
              IONIC transforms unstructured enterprise documents into structured, business-ready information using AI-powered Intelligent Document Processing.
            </p>

            <div className="spotlight-visual-flow">
              <div className="vis-step">Invoice / Scan</div>
              <div className="vis-arrow">→</div>
              <div className="vis-step highlight">Hybrid OCR</div>
              <div className="vis-arrow">→</div>
              <div className="vis-step highlight">ML Extraction</div>
              <div className="vis-arrow">→</div>
              <div className="vis-step">Structured ERP Data</div>
            </div>

            <div className="spotlight-meta-grid">
              <div className="meta-col">
                <h5>Used In Industries</h5>
                <p>Healthcare, Banking, Manufacturing, Insurance, Finance, Pharma</p>
              </div>
              <div className="meta-col">
                <h5>Popular Workflows</h5>
                <p>Invoice Processing, Claims, KYC, Medical Records, Contracts, Purchase Orders</p>
              </div>
            </div>

            <button className="btn-spotlight-workflow" onClick={() => setActiveWorkflowModal("ionic")}>
              <span>View Workflow</span>
              <ArrowRight size={14} />
            </button>
          </motion.div>

          {/* HERTZ SPOTLIGHT */}
          <motion.div className="spotlight-block" {...fadeUp}>
            <div className="spotlight-badge" style={{ color: "#915cf0", borderColor: "#915cf030" }}>HERTZ EMAIL</div>
            <h3 className="spotlight-headline">Inboxes become Automated Action.</h3>
            <p className="spotlight-body">
              HERTZ eliminates manual inbox monitoring by reading business emails, extracting attachments, and initiating downstream operational workflows.
            </p>

            <div className="spotlight-visual-flow">
              <div className="vis-step">Business Email</div>
              <div className="vis-arrow">→</div>
              <div className="vis-step highlight">Intent Classify</div>
              <div className="vis-arrow">→</div>
              <div className="vis-step highlight">Attachment Parse</div>
              <div className="vis-arrow">→</div>
              <div className="vis-step">Workflow Trigger</div>
            </div>

            <button className="btn-spotlight-workflow" onClick={() => setActiveWorkflowModal("hertz")}>
              <span>View Workflow</span>
              <ArrowRight size={14} />
            </button>
          </motion.div>

          {/* GEARS SPOTLIGHT */}
          <motion.div className="spotlight-block" {...fadeUp}>
            <div className="spotlight-badge" style={{ color: "#ff9500", borderColor: "#ff950030" }}>GEARS RULES</div>
            <h3 className="spotlight-headline">Complex Rules, Zero Code.</h3>
            <p className="spotlight-body">
              GEARS evaluates data against custom organizational guidelines, master databases, and compliance rules written in plain business language.
            </p>

            <button className="btn-spotlight-workflow" onClick={() => setActiveWorkflowModal("gears")}>
              <span>View Workflow</span>
              <ArrowRight size={14} />
            </button>
          </motion.div>

          {/* SMARTFLOWS SPOTLIGHT */}
          <motion.div className="spotlight-block" {...fadeUp}>
            <div className="spotlight-badge" style={{ color: "#5856d6", borderColor: "#5856d630" }}>SMARTFLOWS</div>
            <h3 className="spotlight-headline">Orchestration at Enterprise Scale.</h3>
            <p className="spotlight-body">
              SMARTFLOWS manages visual workflow orchestration, dynamically routing tasks between AI models, human reviewers, and enterprise software.
            </p>

            <button className="btn-spotlight-workflow" onClick={() => setActiveWorkflowModal("smartflows")}>
              <span>View Workflow</span>
              <ArrowRight size={14} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7: BUILT FOR EVERY INDUSTRY */}
      <section className="ace-industries-gateway-section">
        <div className="ace-container">
          <motion.div className="section-header text-center" {...fadeUp}>
            <span className="section-eyebrow">Industry Gateway</span>
            <h2 className="section-title">One Platform. Every Industry.</h2>
            <p className="section-subtitle">
              ACE powers critical compliance-driven operations across key enterprise sectors.
            </p>
          </motion.div>

          <div className="industry-gateway-grid">
            {industries.map((ind, idx) => (
              <motion.div 
                key={idx} 
                className="industry-gateway-card"
                {...fadeUp}
              >
                <div className="ind-header">
                  <span className="ind-icon">{ind.icon}</span>
                  <h4>{ind.title}</h4>
                </div>
                <ul className="ind-item-list">
                  {ind.items.map((item, iidx) => (
                    <li key={iidx}>
                      <Check size={14} className="check-bullet" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to={ind.href} className="ind-explore-link">
                  <span>Explore {ind.title}</span>
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: ENTERPRISE ECOSYSTEM */}
      <section className="ace-ecosystem-section">
        <div className="ace-container text-center">
          <motion.div className="section-header" {...fadeUp}>
            <span className="section-eyebrow">Seamless Integrations</span>
            <h2 className="section-title">Works with the tools you already use.</h2>
          </motion.div>

          <div className="ecosystem-chips">
            {ecosystemTools.map((tool, idx) => (
              <motion.div 
                key={idx} 
                className="eco-chip"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: DEPLOY ANYWHERE */}
      <section className="ace-deploy-section">
        <div className="ace-container">
          <motion.div className="section-header text-center" {...fadeUp}>
            <span className="section-eyebrow">Deployment Flexibility</span>
            <h2 className="section-title">Deploy Anywhere</h2>
          </motion.div>

          <div className="deploy-cards-grid">
            <motion.div className="deploy-card" {...fadeUp}>
              <Cloud size={32} className="deploy-icon" />
              <h3>Cloud Service</h3>
              <p>Elastic SaaS or private cloud deployment with continuous updates and multi-region redundancy.</p>
            </motion.div>

            <motion.div className="deploy-card highlight" {...fadeUp}>
              <Server size={32} className="deploy-icon" />
              <h3>On-Premises</h3>
              <p>Air-gapped deployment within your data centers for total data sovereignty and strict compliance.</p>
            </motion.div>

            <motion.div className="deploy-card" {...fadeUp}>
              <Globe size={32} className="deploy-icon" />
              <h3>Hybrid Architecture</h3>
              <p>Execute extraction locally on-premise while leveraging cloud models for dynamic peak workloads.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 10: ENTERPRISE READY */}
      <section className="ace-enterprise-ready-section">
        <div className="ace-container text-center">
          <motion.div className="section-header" {...fadeUp}>
            <span className="section-eyebrow">Platform Architecture</span>
            <h2 className="section-title">Enterprise Ready</h2>
          </motion.div>

          <div className="ready-badges-grid">
            <div className="ready-pill"><Cloud size={16} /> Cloud Native</div>
            <div className="ready-pill"><Layers size={16} /> Microservices Architecture</div>
            <div className="ready-pill"><Zap size={16} /> Low-Code / No-Code</div>
            <div className="ready-pill"><ShieldCheck size={16} /> Human-in-the-Loop</div>
            <div className="ready-pill"><Cpu size={16} /> AI-Powered Core</div>
            <div className="ready-pill"><RefreshCw size={16} /> Infinitely Scalable</div>
            <div className="ready-pill"><Lock size={16} /> Enterprise Security & SOC2</div>
            <div className="ready-pill"><Database size={16} /> API-First Integration</div>
          </div>
        </div>
      </section>

      {/* SECTION 11: BUSINESS OUTCOMES */}
      <section className="ace-outcomes-section">
        <div className="ace-container">
          <motion.div className="section-header text-center" {...fadeUp}>
            <span className="section-eyebrow">Proven ROI</span>
            <h2 className="section-title">Business Outcomes</h2>
          </motion.div>

          <div className="outcomes-grid">
            <motion.div className="outcome-card" {...fadeUp}>
              <span className="outcome-number">85%+</span>
              <p className="outcome-label">Reduction in Manual Processing Effort</p>
            </motion.div>

            <motion.div className="outcome-card" {...fadeUp}>
              <span className="outcome-number">99.4%</span>
              <p className="outcome-label">Data Extraction & Validation Accuracy</p>
            </motion.div>

            <motion.div className="outcome-card" {...fadeUp}>
              <span className="outcome-number">10x</span>
              <p className="outcome-label">Faster Operational Turnaround Speed</p>
            </motion.div>

            <motion.div className="outcome-card" {...fadeUp}>
              <span className="outcome-number">100%</span>
              <p className="outcome-label">Audit Visibility & Rule Governance</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 12: CUSTOMER SUCCESS */}
      <section className="ace-testimonials-section">
        <div className="ace-container text-center">
          <motion.div className="section-header" {...fadeUp}>
            <span className="section-eyebrow">Enterprise Trust</span>
            <h2 className="section-title">Trusted by Global Operations</h2>
          </motion.div>

          <motion.div className="testimonial-quote-box" {...fadeUp}>
            <p className="quote-text">
              "ACE transformed our high-volume invoice and reconciliation workflows. We reduced turnaround time from 3 days to under 4 minutes while maintaining 100% audit compliance."
            </p>
            <span className="quote-author">— Head of Shared Services, Global Enterprise</span>
          </motion.div>
        </div>
      </section>

      {/* SECTION 13: FINAL CTA */}
      <section className="ace-final-cta-section">
        <div className="ace-container text-center">
          <motion.h2 className="final-cta-title" {...fadeUp}>
            Ready to transform enterprise automation?
          </motion.h2>
          <motion.p className="final-cta-desc" {...fadeUp}>
            Schedule an architecture session with our enterprise AI team.
          </motion.p>
          <motion.div className="final-cta-buttons" {...fadeUp}>
            <Link to="/contact" className="btn-cinematic-primary">
              <span>Request Demo</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-cinematic-secondary">
              <span>Talk to an Expert</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* INTERACTIVE WORKFLOW POPUP MODAL */}
      <AnimatePresence>
        {activeWorkflowModal && workflowDetails[activeWorkflowModal] && (
          <motion.div 
            className="workflow-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveWorkflowModal(null)}
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
                onClick={() => setActiveWorkflowModal(null)}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="modal-header">
                <h3>{workflowDetails[activeWorkflowModal].title}</h3>
                <p>{workflowDetails[activeWorkflowModal].subtitle}</p>
              </div>

              <div className="modal-steps-timeline">
                {workflowDetails[activeWorkflowModal].steps.map((st, idx) => (
                  <div key={idx} className="timeline-step">
                    <div className="step-badge">{st.num}</div>
                    <div className="step-body">
                      <h4>{st.label}</h4>
                      <p>{st.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
