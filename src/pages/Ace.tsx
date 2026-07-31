import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  ChevronDown,
  Plus,
  X
} from "lucide-react";
import "./Ace.css";

const closerLookFeatures = [
  {
    id: "modularity",
    label: "Modularity",
    desc: "Select only the microservices your business processes require. Our Pick-and-Choose microservices architecture lets you scale dynamically.",
    visual: (
      <div className="visual-modularity">
        <div className="connector-lines">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
        </div>
        <div className="modularity-grid">
          <div className="mod-node active">HERTZ</div>
          <div className="mod-node active">IONIC</div>
          <div className="mod-node active">GEARS</div>
          <div className="mod-node">LUCID</div>
        </div>
      </div>
    )
  },
  {
    id: "ocr",
    label: "Hybrid OCR",
    desc: "Intelligently route documents to optimal OCR engines (proprietary or cloud-based) depending on file quality, format, and layout style for maximum extraction accuracy.",
    visual: (
      <div className="visual-ocr">
        <div className="ocr-doc-box">
          <div className="ocr-scan-line"></div>
          <div className="ocr-field field-1 highlight-green">Invoice Date: 2026-07-31</div>
          <div className="ocr-field field-2 highlight-blue">Total Amount: $48,000.00</div>
        </div>
      </div>
    )
  },
  {
    id: "rules",
    label: "Natural Language Rules",
    desc: "Define validation rules and compliance guidelines in plain business language. GEARS validates input data instantly against your master databases.",
    visual: (
      <div className="visual-rules">
        <div className="rules-console">
          <div className="console-line text-blue">IF: Invoice.Amount &gt; PO.Limit</div>
          <div className="console-line text-purple">THEN: Route to DeptManager</div>
          <div className="console-status success">✓ Validation Rule Loaded</div>
        </div>
      </div>
    )
  },
  {
    id: "agentic",
    label: "Agentic AI",
    desc: "COSMOS enables task-aware AI agents to plan, reason, and execute goal-driven workflows autonomously, making smart decisions on data exceptions.",
    visual: (
      <div className="visual-agentic">
        <div className="agentic-flow">
          <div className="agentic-agent">
            <span className="agent-avatar">🤖</span>
            <span>COSMOS Agent</span>
          </div>
          <div className="agentic-bubble">"Checking database for missing customer IDs..."</div>
        </div>
      </div>
    )
  },
  {
    id: "human",
    label: "Human-in-the-Loop",
    desc: "Bring people into the workflow dynamically for exceptions, validation audits, and approvals through a simple unified review interface.",
    visual: (
      <div className="visual-human">
        <div className="human-ui">
          <p className="ui-title">Pending Human Review</p>
          <div className="ui-issue">⚠️ Invoice Amount Mismatch</div>
          <div className="ui-actions">
            <button className="ui-btn approve">Approve</button>
            <button className="ui-btn reject">Reject</button>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "deploy",
    label: "Deploy Anywhere",
    desc: "Deploy on-premises for strict data compliance, on your private/public cloud, or consume directly as a secure SaaS service.",
    visual: (
      <div className="visual-deploy">
        <div className="deploy-nodes">
          <div className="node-icon">🏢 On-Premises</div>
          <div className="node-icon">☁️ Private Cloud</div>
          <div className="node-icon">⚡ SaaS Service</div>
        </div>
      </div>
    )
  }
];

const defaultPlatformVisual = (
  <div className="visual-modularity">
    <div className="modularity-grid">
      <div className="mod-node active">HERTZ</div>
      <div className="mod-node active">IONIC</div>
      <div className="mod-node active">GEARS</div>
      <div className="mod-node active">LUCID</div>
      <div className="mod-node active">SMARTFLOWS</div>
      <div className="mod-node active">COSMOS</div>
    </div>
  </div>
);

export default function Ace() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);


  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as any }
  };

  const modules = [
    {
      id: "hertz",
      name: "HERTZ",
      tagline: "Email Automation",
      desc: "Automates business processes that start with or depend on emails by eliminating manual inbox handling.",
      icon: <Mail size={22} />,
      color: "#0071e3",
      features: ["Receive & read business emails", "Download & process attachments", "Trigger downstream workflows"],
      mockup: (
        <div className="ace-mockup-inbox">
          <div className="mockup-inbox-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="mockup-title">HERTZ Active Email Queue</span>
          </div>
          <div className="mockup-inbox-list">
            <div className="inbox-item active">
              <span className="inbox-icon">📨</span>
              <div className="inbox-meta">
                <p className="inbox-sender">vendor@supply.com</p>
                <p className="inbox-subject">Invoice_98124_AP.pdf</p>
              </div>
              <span className="inbox-status processing">Processing</span>
            </div>
            <div className="inbox-item">
              <span className="inbox-icon">📨</span>
              <div className="inbox-meta">
                <p className="inbox-sender">client@finance.com</p>
                <p className="inbox-subject">Q3_Statement_Reconciliation.xlsx</p>
              </div>
              <span className="inbox-status queued">Queued</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "ionic",
      name: "IONIC",
      tagline: "Intelligent Data Extraction",
      desc: "ACE's Intelligent Document Processing (IDP) module. Extracts structured information from documents such as invoices, forms, PDFs, scans, and Excel files.",
      icon: <FileText size={22} />,
      color: "#34c759",
      features: ["Hybrid OCR engine routing", "ML-based entity tagging", "Document classification & GenAI search"],
      mockup: (
        <div className="ace-mockup-extraction">
          <div className="mockup-inbox-header">
            <span className="mockup-title">IONIC Extraction Panel</span>
          </div>
          <div className="mockup-extraction-grid">
            <div className="extraction-doc-preview">
              <div className="doc-line title">INVOICE</div>
              <div className="doc-line highlight">INV-2026-98124</div>
              <div className="doc-line amount">$48,000.00</div>
            </div>
            <div className="extraction-results">
              <div className="result-field"><span className="label">Invoice No:</span> <span className="val">98124</span></div>
              <div className="result-field"><span className="label">Amount:</span> <span className="val">$48,000.00</span></div>
              <div className="result-field status"><span className="label">Confidence:</span> <span className="val green">99.4%</span></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "lucid",
      name: "LUCID",
      tagline: "Reconciliations",
      desc: "Compares transaction data sets from different enterprise systems or documents to automatically match accounts and identify anomalies.",
      icon: <GitCompare size={22} />,
      color: "#ffcc00",
      features: ["Invoice vs Purchase Order", "Bank Statement vs ERP ledger", "Automated mismatch flag & alert"],
      mockup: (
        <div className="ace-mockup-reconcile">
          <div className="mockup-inbox-header"><span className="mockup-title">LUCID Reconciliation Engine</span></div>
          <div className="reconcile-comparison">
            <div className="recon-col">
              <span className="recon-label">Source A (PO)</span>
              <p className="recon-val">₹50,000</p>
            </div>
            <div className="recon-vs">VS</div>
            <div className="recon-col">
              <span className="recon-label">Source B (Invoice)</span>
              <p className="recon-val red-text">₹48,000</p>
            </div>
          </div>
          <div className="reconcile-mismatch">⚠️ Mismatch Identified: Underpayment of ₹2,000</div>
        </div>
      )
    },
    {
      id: "gears",
      name: "GEARS",
      tagline: "Business Rules Engine",
      desc: "The validation and decision-making hub of ACE. Automatically checks if extracted and processed data complies with custom organizational compliance guidelines.",
      icon: <Sliders size={22} />,
      color: "#ff9500",
      features: ["Natural language rule definitions", "Master data validation", "Data dictionary field normalization"],
      mockup: (
        <div className="ace-mockup-gears">
          <div className="mockup-inbox-header"><span className="mockup-title">GEARS Business Rule Validator</span></div>
          <div className="gears-rules">
            <div className="rule-item passed">
              <span className="rule-bullet">✔</span>
              <span>Rule: Inv Date {"<"} Current Date</span>
            </div>
            <div className="rule-item failed">
              <span className="rule-bullet">✘</span>
              <span>Rule: Amount {"<"} PO Limit (₹80,000)</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "smartflows",
      name: "SMARTFLOWS",
      tagline: "AI Workflows",
      desc: "Orchestrates complex business workflows, routing tasks between AI models, databases, downstream enterprise apps, and human reviewers.",
      icon: <Workflow size={22} />,
      color: "#5856d6",
      features: ["Visual business flow orchestration", "Automated approvals routing", "Integrations with ERP & databases"],
      mockup: (
        <div className="ace-mockup-workflow">
          <div className="mockup-inbox-header"><span className="mockup-title">SMARTFLOWS Designer</span></div>
          <div className="workflow-graph">
            <div className="node active">Extract</div>
            <div className="connector">→</div>
            <div className="node highlight">Validate</div>
            <div className="connector">→</div>
            <div className="node">Approve</div>
          </div>
        </div>
      )
    },
    {
      id: "cosmos",
      name: "COSMOS",
      tagline: "Agentic AI Enabler",
      desc: "Unlocks next-generation Agentic AI capabilities in the ACE platform, enabling goal-driven task planning, context awareness, and autonomous execution.",
      icon: <Sparkles size={22} />,
      color: "#af52de",
      features: ["Goal-oriented task routing", "Context-aware processing", "Agentic automation enablement"],
      mockup: (
        <div className="ace-mockup-cosmos">
          <div className="mockup-inbox-header"><span className="mockup-title">COSMOS Agentic Workspace</span></div>
          <div className="cosmos-prompt">
            <p className="prompt-label">Current Goal:</p>
            <p className="prompt-text">"Resolve invoice exceptions by querying CRM data."</p>
            <div className="prompt-progress">
              <div className="progress-bar"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "instabolt",
      name: "INSTABOLT",
      tagline: "Reports & Dashboards",
      desc: "The analytics engine of ACE. Displays end-to-end processing volumes, success rates, bottleneck locations, and critical operational metrics.",
      icon: <BarChart3 size={22} />,
      color: "#ff2d55",
      features: ["Real-time dashboard reporting", "Key business performance indicators", "Pending action bottlenecks list"],
      mockup: (
        <div className="ace-mockup-reports">
          <div className="mockup-inbox-header"><span className="mockup-title">INSTABOLT Operational Metrics</span></div>
          <div className="reports-stats">
            <div className="stat-card">
              <span className="stat-num">98.2%</span>
              <span className="stat-label">Automation Rate</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">14,240</span>
              <span className="stat-label">Processed Docs</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="ace-page">


      {/* Hero Section */}
      <section id="overview" className="ace-hero">
        <div className="ace-container text-center">
          <motion.p 
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Algonox Cognitive Engine (ACE)
          </motion.p>
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            ACE
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Modular Enterprise Hyper-Automation.
          </motion.p>
          <motion.div 
            className="hero-description-box"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p>
              An end-to-end framework designed to digitize, process, validate, orchestrate, reconcile, analyze, and integrate business data through unified microservices.
            </p>
          </motion.div>

          <motion.div 
            className="hero-canvas"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Sample Image Box Placeholder */}
            <div className="canvas-placeholder">
              <div className="canvas-header-bar">
                <span className="canvas-dot red"></span>
                <span className="canvas-dot yellow"></span>
                <span className="canvas-dot green"></span>
                <span className="canvas-path">workspace / algonox-cognitive-engine</span>
              </div>
              <div className="canvas-content-box">
                <img src="/ace_dashboard_sample.png" alt="ACE Workspace Dashboard" className="canvas-img-placeholder" style={{ display: "none" }} />
                <div className="canvas-sample-space">
                  <div className="sample-icon-ring">
                    <Cpu size={48} className="cpu-glow" />
                  </div>
                  <h3>ACE Modular Hyper-Automation</h3>
                  <p>Pick and choose microservices for Banking, Healthcare, Media, and Manufacturing workflows.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Take a Closer Look Section */}
      <section className="ace-closer-look-section">
        <div className="ace-container">
          <motion.h2
            className="closer-look-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Explore every capability.
          </motion.h2>

          <div className="closer-look-card">
            {/* ✕ top-right close button: closes open box when active */}
            <AnimatePresence>
              {activeFeature !== null && (
                <motion.button
                  className="closer-look-close"
                  onClick={() => setActiveFeature(null)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  aria-label="Close feature details"
                >
                  <X size={14} />
                </motion.button>
              )}
            </AnimatePresence>

            <div className="closer-look-grid">

              {/* ──── LEFT: pill list ──── */}
              <div className="closer-look-left">
                {/* pill list — each item uses layout so the list reflows smoothly */}
                <div className="cl-pill-list">
                  {closerLookFeatures.map((feat, idx) => {
                    const isActive = idx === activeFeature;
                    return (
                      <motion.div
                        key={feat.id}
                        layout
                        transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                        className="cl-pill-row"
                      >
                        {/* inactive pill */}
                        {!isActive && (
                          <motion.button
                            layout
                            className="cl-pill"
                            onClick={() => setActiveFeature(idx)}
                            initial={false}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <span className="cl-pill-icon"><Plus size={13} /></span>
                            <span className="cl-pill-label">{feat.label}</span>
                          </motion.button>
                        )}

                        {/* active: pill label stays, description expands below */}
                        {isActive && (
                          <motion.div
                            layout
                            className="cl-active-item"
                          >
                            <div className="cl-active-label" onClick={() => setActiveFeature(null)} style={{ cursor: "pointer" }}>
                              <span className="cl-pill-icon active-icon">
                                <ChevronDown size={13} />
                              </span>
                              <span className="cl-pill-label">{feat.label}</span>
                            </div>
                            <AnimatePresence>
                              <motion.p
                                key={feat.id + "-desc"}
                                className="cl-active-desc"
                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                              >
                                {feat.desc}
                              </motion.p>
                            </AnimatePresence>
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* ──── RIGHT: visual panel ──── */}
              <div className="closer-look-right">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature !== null ? activeFeature : "default"}
                    className="cl-visual-panel"
                    initial={{ opacity: 0, y: 12, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.97 }}
                    transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                  >
                    {activeFeature !== null ? closerLookFeatures[activeFeature].visual : defaultPlatformVisual}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Vision & Purpose Section */}
      <section id="vision" className="ace-vision-section">
        <div className="ace-container">
          <motion.div 
            className="section-header"
            {...fadeUp}
          >
            <p className="section-label">Core Philosophy</p>
            <h2 className="section-title">Modular. Scalable. Intelligent.</h2>
          </motion.div>

          <div className="vision-grid">
            <motion.div 
              className="vision-card"
              {...fadeUp}
            >
              <span className="card-kicker">The Vision</span>
              <h3>Transform operations into intelligent digital workflows.</h3>
              <p>
                ACE combines Artificial Intelligence, Machine Learning, Robotic Process Automation, Business Rules, and Agentic AI within a single platform. Instead of automating isolated activities, it orchestrates the complete lifecycle from ingestion to delivery.
              </p>
            </motion.div>

            <motion.div 
              className="vision-card"
              {...fadeUp}
            >
              <span className="card-kicker">The Purpose</span>
              <h3>Simplify automation by consolidating enterprise tools.</h3>
              <p>
                Rather than deploying separate tools for document extraction, workflows, reporting, and rules, ACE consolidates these capabilities. This reduces operational complexity while increasing ROI across the enterprise.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* End-to-End Lifecycle */}
      <section className="ace-lifecycle-section">
        <div className="ace-container">
          <motion.div 
            className="section-header text-center"
            {...fadeUp}
          >
            <p className="section-label">Operational Flow</p>
            <h2 className="section-title">End-to-End Automation Lifecycle</h2>
          </motion.div>

          <div className="lifecycle-grid">
            <motion.div className="lifecycle-step" {...fadeUp}>
              <div className="step-num">01</div>
              <h4>Ingest</h4>
              <p>Capture unstructured business data directly from incoming emails, scanned documents, files, and enterprise databases.</p>
            </motion.div>
            <motion.div className="lifecycle-step" {...fadeUp}>
              <div className="step-num">02</div>
              <h4>Process</h4>
              <p>Classify documents, extract text, validate data schemas, apply natural language rules, reconcile accounts, and orchestrate approvals.</p>
            </motion.div>
            <motion.div className="lifecycle-step" {...fadeUp}>
              <div className="step-num">03</div>
              <h4>Export</h4>
              <p>Deliver processed, verified outcomes to downstream ERPs, databases, APIs, custom file formats, and interactive dashboards.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="ace-modules-section">
        <div className="ace-container">
          <motion.div 
            className="section-header"
            {...fadeUp}
          >
            <p className="section-label">Microservices Suite</p>
            <h2 className="section-title">ACE Modules</h2>
            <p className="section-subtitle">
              A pick-and-choose microservices architecture that allows you to deploy only the services your business workflows require.
            </p>
          </motion.div>

          <div className="modules-list">
            {modules.map((mod, idx) => (
              <motion.div 
                key={mod.id} 
                className={`module-showcase-row ${idx % 2 === 1 ? "reverse" : ""}`}
                {...fadeUp}
              >
                <div className="module-info-col">
                  <div className="module-icon-badge" style={{ backgroundColor: `${mod.color}15`, color: mod.color }}>
                    {mod.icon}
                  </div>
                  <span className="module-pill-name" style={{ color: mod.color }}>{mod.name}</span>
                  <h3 className="module-tagline">{mod.tagline}</h3>
                  <p className="module-desc">{mod.desc}</p>
                  <ul className="module-feature-list">
                    {mod.features.map((feat, fidx) => (
                      <li key={fidx}>
                        <Zap size={14} style={{ color: mod.color, marginRight: "8px", flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="module-mockup-col">
                  {mod.mockup}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section removed to maintain technical product focus */}
    </div>
  );
}
