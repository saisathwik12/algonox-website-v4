import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Check
} from "lucide-react";
import "./Ace.css";

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

export default function Ace() {
  const [activeWorkflowModal, setActiveWorkflowModal] = useState<string | null>(null);
  const [activeArchTab, setActiveArchTab] = useState<"ingest" | "process" | "export">("process");

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
    { id: "hertz", name: "HERTZ", title: "Email Automation", desc: "Automates email intake, attachment extraction, and inbox workflow triggers.", icon: <Mail size={24} />, color: "#0071e3" },
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
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles size={14} className="badge-icon" />
            <span>Algonox Flagship Platform</span>
          </motion.div>

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

          {/* Animated Hero Canvas Diagram */}
          <motion.div 
            className="hero-flow-diagram"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="flow-card">
              <span className="flow-step-label">INTAKE</span>
              <p>Enterprise Documents</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-card highlight-ai">
              <span className="flow-step-label">INTELLIGENCE</span>
              <p>ACE AI & Rules</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-card highlight-auto">
              <span className="flow-step-label">ORCHESTRATION</span>
              <p>Workflow Automation</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-card highlight-outcome">
              <span className="flow-step-label">IMPACT</span>
              <p>Business Outcomes</p>
            </div>
          </motion.div>
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

          {/* Interactive Connected Architecture Graphic */}
          <motion.div className="ace-core-graphic" {...fadeUp}>
            <div className="core-node-center">
              <Cpu size={40} className="core-cpu-icon" />
              <h3>ACE PLATFORM</h3>
            </div>
            <div className="core-service-satellites">
              {intelligentServices.map((svc) => (
                <div key={svc.id} className="satellite-node" style={{ borderColor: `${svc.color}40` }}>
                  <span className="sat-icon" style={{ color: svc.color }}>{svc.icon}</span>
                  <span className="sat-name">{svc.name}</span>
                </div>
              ))}
            </div>
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
            <div className="spotlight-badge" style={{ color: "#0071e3", borderColor: "#0071e330" }}>HERTZ EMAIL</div>
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
