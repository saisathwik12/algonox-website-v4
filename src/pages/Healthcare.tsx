import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  HeartPulse, Activity, ArrowRight, ChevronRight, 
  FileText, Brain, Workflow, GitCompare, Database,
  CheckCircle2, Stethoscope, Sparkles, XCircle, AlertCircle
} from "lucide-react";
import "./IndustryCommon.css";
import "./Healthcare.css";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

export default function Healthcare() {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    { code: "IONIC", name: "Intelligent Data Extraction", desc: "Extract and structure information from complex healthcare documents.", icon: FileText },
    { code: "GEARS", name: "Rules & Decision Engine", desc: "Apply business rules, validations, and decision logic consistently.", icon: Brain },
    { code: "Smartflows", name: "Workflow Orchestration", desc: "Connect processes, people, systems, and actions.", icon: Workflow },
    { code: "LUCID", name: "Reconciliation Engine", desc: "Match and validate information across systems and processes.", icon: GitCompare },
    { code: "COSMOS", name: "Master Data Management", desc: "Manage the data that powers healthcare processes.", icon: Database },
    { code: "Medsense AI", name: "Healthcare Intelligence", desc: "Apply AI-powered intelligence to healthcare data and processes.", icon: Sparkles },
  ];

  return (
    <div className="industry-page healthcare-theme healthcare-page">
      {/* 01 — HERO (With Live Animated Clinical ECG Monitor Sim) */}
      <section className="apple-hero-section">
        <div className="apple-hero-container">
          <motion.div {...fadeUp}>
            <div className="theme-domain-tag">
              <HeartPulse size={15} />
              <span>Healthcare Intelligence & Clinical Automation</span>
            </div>
            <h1 className="apple-hero-title theme-gradient-title">
              Intelligent automation for modern healthcare.
            </h1>
            <p className="apple-hero-sub">
              Transform complex healthcare processes with AI-powered automation — from prior authorization and document processing to clinical data analysis and healthcare operations.
            </p>
            <div className="apple-btn-group">
              <a href="#solutions" className="theme-btn-primary">
                Explore Healthcare Solutions <ArrowRight size={16} />
              </a>
              <Link to="/contact" className="theme-btn-secondary">
                Talk to an Expert →
              </Link>
            </div>

            {/* Interactive Live Clinical ECG Waveform & Care Pulse Sim */}
            <div className="ecg-waveform-container">
              <div className="ecg-grid-lines" />
              <div className="ecg-monitor-header">
                <div className="ecg-status-text">
                  <div className="ecg-pulse-dot" />
                  <span>ALGONOX CLINICAL ORCHESTRATION PULSE — ACTIVE</span>
                </div>
                <div style={{ color: "#34d399", fontSize: 11, fontFamily: "monospace" }}>HIPAA COMPLIANT / AES-256</div>
              </div>

              {/* Animated SVG ECG Heartbeat Wave */}
              <svg className="ecg-svg" viewBox="0 0 800 60" preserveAspectRatio="none">
                <path 
                  className="ecg-path" 
                  d="M 0 30 L 120 30 L 140 30 L 150 10 L 160 55 L 175 5 L 185 45 L 195 30 L 320 30 L 340 30 L 350 10 L 360 55 L 375 5 L 385 45 L 395 30 L 520 30 L 540 30 L 550 10 L 560 55 L 575 5 L 585 45 L 595 30 L 720 30 L 740 30 L 750 10 L 760 55 L 775 5 L 785 45 L 795 30 L 800 30" 
                />
              </svg>

              <div className="ecg-stat-pills">
                <div className="ecg-pill">PRIOR AUTH: 100% SLA</div>
                <div className="ecg-pill">EXTRACTION: 90% AUTO</div>
                <div className="ecg-pill">ACCURACY: 99.4%</div>
                <div className="ecg-pill">CLINICAL LATENCY: 180ms</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02 — THE HEALTHCARE CHALLENGE (Before vs. After Clinical Comparison) */}
      <section className="apple-section-fluid bg-subtle">
        <div className="apple-section-inner">
          <motion.div className="apple-header-left" {...fadeUp}>
            <span className="theme-domain-tag"><Activity size={14} /> THE HEALTHCARE CHALLENGE</span>
            <h2 className="apple-section-title">Healthcare is complex. Every process matters.</h2>
            <p className="apple-section-sub">
              Healthcare operations bring together high-volume documents, sensitive information, complex rules, multiple systems, and teams working across different stages of a process.
            </p>
            <p className="apple-body-text">
              Algonox brings intelligence, automation, and orchestration together to help healthcare organizations streamline operations and make complex processes more efficient.
            </p>
          </motion.div>

          <div className="clinical-comparison-container">
            {/* Legacy Friction */}
            <motion.div className="comparison-card card-legacy" {...fadeUp}>
              <div className="comparison-header">
                <AlertCircle size={18} />
                <span>Legacy Operational Friction</span>
              </div>
              <div className="comparison-list">
                <div className="comparison-item">
                  <XCircle size={18} color="#ef4444" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong>Document Complexity:</strong> Heavy backlogs processing unstructured medical charts, EOBs, and member IDs.
                  </div>
                </div>
                <div className="comparison-item">
                  <XCircle size={18} color="#ef4444" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong>Manual Operations:</strong> Repetitive, error-prone clinical data entry across non-integrated EMR systems.
                  </div>
                </div>
                <div className="comparison-item">
                  <XCircle size={18} color="#ef4444" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong>Delayed Decisioning:</strong> Prior authorization requests waiting days for manual clinician sign-off.
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Algonox AI Transformation */}
            <motion.div className="comparison-card card-ai" {...fadeUp}>
              <div className="comparison-header">
                <CheckCircle2 size={18} />
                <span>Algonox Intelligent Transformation</span>
              </div>
              <div className="comparison-list">
                <div className="comparison-item">
                  <CheckCircle2 size={18} color="#34d399" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong>Automated Intake:</strong> Sub-second document parsing with Medsense AI and 90%+ extraction accuracy.
                  </div>
                </div>
                <div className="comparison-item">
                  <CheckCircle2 size={18} color="#34d399" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong>Intelligent Orchestration:</strong> Unified workflows connecting patients, providers, and payers in real time.
                  </div>
                </div>
                <div className="comparison-item">
                  <CheckCircle2 size={18} color="#34d399" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong>Instant Auto-Adjudication:</strong> Rule-based automated approvals achieving 100% SLA compliance.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 03 — HEALTHCARE USE CASES (Diagnostic Stack Cards) */}
      <section className="apple-section">
        <motion.div className="apple-header-centered" {...fadeUp}>
          <span className="theme-domain-tag"><Stethoscope size={14} /> HEALTHCARE USE CASES</span>
          <h2 className="apple-section-title">Automation built around healthcare.</h2>
          <p className="apple-section-sub">
            From authorization and data extraction to clinical analysis, quality, and regulatory workflows, automate the processes that matter most.
          </p>
        </motion.div>

        <div className="diagnostic-stack-grid">
          <motion.div className="diagnostic-card" {...fadeUp}>
            <div>
              <span className="diagnostic-tag">Clinical Workflow</span>
              <h3 className="diagnostic-title">Prior Authorization Automation</h3>
              <p className="diagnostic-desc">Streamline document intake, data extraction, validation, decisioning, and workflow execution.</p>
            </div>
            <Link to="/resources" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="diagnostic-card" {...fadeUp}>
            <div>
              <span className="diagnostic-tag">Data Processing</span>
              <h3 className="diagnostic-title">EOB & Membership Data Extraction</h3>
              <p className="diagnostic-desc">Transform complex EOB and membership documents into structured, actionable data.</p>
            </div>
            <Link to="/resources" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="diagnostic-card" {...fadeUp}>
            <div>
              <span className="diagnostic-tag">Analytics</span>
              <h3 className="diagnostic-title">Clinical Data Analysis</h3>
              <p className="diagnostic-desc">Turn patient and clinical data into meaningful patterns, trends, and insights for analysis and decision support.</p>
            </div>
            <Link to="/resources" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="diagnostic-card" {...fadeUp}>
            <div>
              <span className="diagnostic-tag">Drug Safety</span>
              <h3 className="diagnostic-title">Pharmacovigilance Automation</h3>
              <p className="diagnostic-desc">Automate safety-data intake, case triage, adverse-event processing, validation, and reporting workflows.</p>
            </div>
            <Link to="/pv-automate" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="diagnostic-card" {...fadeUp}>
            <div>
              <span className="diagnostic-tag">Compliance</span>
              <h3 className="diagnostic-title">Quality Assurance & Quality Control Automation</h3>
              <p className="diagnostic-desc">Automate data acquisition, validation, review, and reporting across quality processes.</p>
            </div>
            <Link to="/resources" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="diagnostic-card" {...fadeUp}>
            <div>
              <span className="diagnostic-tag">Coordination</span>
              <h3 className="diagnostic-title">Regulatory Affairs Communications</h3>
              <p className="diagnostic-desc">Streamline regulatory workflows, coordination, document handling, and communication across teams.</p>
            </div>
            <Link to="/resources" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>
        </div>
      </section>

      {/* 04 — SOLUTIONS FOR HEALTHCARE */}
      <section className="apple-section-fluid bg-alt" id="solutions">
        <div className="apple-section-inner">
          <motion.div className="apple-header-left" {...fadeUp}>
            <span className="theme-domain-tag"><HeartPulse size={14} /> SOLUTIONS FOR HEALTHCARE</span>
            <h2 className="apple-section-title">One healthcare ecosystem. Multiple ways to automate.</h2>
            <p className="apple-section-sub">
              Bring document intelligence, workflow automation, data processing, and intelligent decisioning together across healthcare operations.
            </p>
          </motion.div>

          <div className="solutions-list">
            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Intelligent Document Processing</div>
              <div className="solution-desc">Extract, classify, validate, and structure information from complex healthcare documents.</div>
              <Link to="/intelligent-document-processing" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>

            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Workflow Automation</div>
              <div className="solution-desc">Connect people, systems, rules, and actions across healthcare processes.</div>
              <Link to="/workflow-automation" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>

            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Data Integration & Processing</div>
              <div className="solution-desc">Bring healthcare data from multiple sources together for processing, analysis, and reporting.</div>
              <Link to="/process-automation" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>

            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Reconciliation Automation</div>
              <div className="solution-desc">Match and validate information across healthcare and financial processes.</div>
              <Link to="/lucid-reconciliations" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>

            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Conversational AI</div>
              <div className="solution-desc">Enable intelligent conversational interactions across healthcare workflows where applicable.</div>
              <Link to="/conversational-ai" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 05 — POWERED BY ACE */}
      <section className="apple-section">
        <motion.div className="apple-header-centered" {...fadeUp}>
          <span className="theme-domain-tag"><Brain size={14} /> POWERED BY ACE</span>
          <h2 className="apple-section-title">One platform. Built for healthcare complexity.</h2>
          <p className="apple-section-sub">
            ACE combines specialized capabilities to automate healthcare workflows — from document intake and data extraction to decisioning, orchestration, analytics, and reporting.
          </p>
        </motion.div>

        <div className="powered-selector">
          {modules.map((m, idx) => (
            <button
              key={m.code}
              className={`powered-pill ${activeModule === idx ? "active" : ""}`}
              onClick={() => setActiveModule(idx)}
            >
              {m.code}
            </button>
          ))}
        </div>

        <motion.div
          key={activeModule}
          className="powered-display-box"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="powered-module-code">{modules[activeModule].code}</div>
          <div className="powered-module-name">{modules[activeModule].name}</div>
          <div className="powered-module-desc">{modules[activeModule].desc}</div>
        </motion.div>

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <Link to="/ace" className="theme-arrow-link" style={{ fontSize: 15 }}>
            Explore ACE <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* 06 — FEATURED WORKFLOW (Interactive Clinical Decision Tree) */}
      <section className="apple-section-fluid bg-subtle">
        <div className="apple-section-inner">
          <motion.div className="apple-header-centered" {...fadeUp}>
            <span className="theme-domain-tag"><Workflow size={14} /> FEATURED WORKFLOW</span>
            <p className="apple-hero-sub" style={{ marginBottom: 6 }}>From documentation to decision.</p>
            <h2 className="apple-section-title">Prior Authorization, automated.</h2>
          </motion.div>

          <div className="decision-tree-container">
            {[
              { num: "01", title: "Auth Request", tag: "EHR Ingest" },
              { num: "02", title: "Document Intake", tag: "Clinical Chart" },
              { num: "03", title: "Data Extraction", tag: "ICD-10 / CPT" },
              { num: "04", title: "Policy Validation", tag: "Payer Rules" },
              { num: "05", title: "Clinical Decisioning", tag: "Auto-Adjudicated" },
              { num: "06", title: "Workflow Execution", tag: "EMR Updated" },
            ].map((node) => (
              <motion.div key={node.title} className="decision-node" {...fadeUp}>
                <div className="decision-badge">{node.num}</div>
                <div className="decision-node-title">{node.title}</div>
                <div className="decision-status-tag">{node.tag}</div>
              </motion.div>
            ))}
          </div>

          <motion.div className="workflow-supporting" {...fadeUp}>
            <p className="apple-body-text">
              ACE combines intelligent document processing, business rules, and workflow orchestration to streamline prior authorization and reduce manual intervention.
            </p>
            <div style={{ marginTop: 22 }}>
              <Link to="/resources" className="theme-btn-secondary">
                Explore Prior Authorization →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 07 — CASE STUDY HIGHLIGHTS */}
      <section className="apple-section">
        <motion.div className="apple-header-left" {...fadeUp}>
          <span className="theme-domain-tag"><Activity size={14} /> CASE STUDY HIGHLIGHTS</span>
          <h2 className="apple-section-title">Healthcare automation. Proven in practice.</h2>
        </motion.div>

        <div className="case-studies-container">
          <motion.div className="case-study-block" {...fadeUp}>
            <h3 className="case-study-title">Prior Authorization Automation</h3>
            <div className="case-study-subtitle">Faster decisions. Fewer manual interventions.</div>
            <p className="case-study-desc">Automate document intake, extraction, validation, decisioning, and downstream workflow execution.</p>
            <div className="case-metrics-row">
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">100%</div>
                <div className="case-metric-lbl">SLA achieved</div>
              </div>
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">40%</div>
                <div className="case-metric-lbl">FTE reduction</div>
              </div>
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">95%</div>
                <div className="case-metric-lbl">Reduction in manual errors</div>
              </div>
            </div>
            <Link to="/resources" className="theme-arrow-link">Read Case Study <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="case-study-block" {...fadeUp}>
            <h3 className="case-study-title">EOB & Membership Data Extraction</h3>
            <div className="case-study-subtitle">Turn complex healthcare documents into actionable data.</div>
            <p className="case-study-desc">Automate classification, extraction, validation, and processing of EOB and membership information.</p>
            <div className="case-metrics-row">
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">60%</div>
                <div className="case-metric-lbl">FTE reduction</div>
              </div>
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">90%</div>
                <div className="case-metric-lbl">Automated document extraction</div>
              </div>
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">76%</div>
                <div className="case-metric-lbl">Reduction in manual errors</div>
              </div>
            </div>
            <Link to="/resources" className="theme-arrow-link">Read Case Study <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="case-study-block" {...fadeUp}>
            <h3 className="case-study-title">Clinical Data Analysis</h3>
            <div className="case-study-subtitle">From complex clinical data to meaningful insights.</div>
            <p className="case-study-desc">Use data management, analytics, and machine learning to identify patterns and trends across clinical information.</p>
            <div className="case-metrics-row">
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">75%</div>
                <div className="case-metric-lbl">Improved accuracy</div>
              </div>
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">80%</div>
                <div className="case-metric-lbl">FTE savings</div>
              </div>
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">60%</div>
                <div className="case-metric-lbl">Reduction in human errors</div>
              </div>
            </div>
            <Link to="/resources" className="theme-arrow-link">Read Case Study <ChevronRight size={15} /></Link>
          </motion.div>
        </div>
      </section>

      {/* 08 — HEALTHCARE IMPACT (Care Metrics Ribbon) */}
      <section className="apple-section-fluid bg-alt">
        <div className="apple-section-inner">
          <motion.div className="apple-header-centered" {...fadeUp}>
            <span className="theme-domain-tag"><CheckCircle2 size={14} /> HEALTHCARE IMPACT</span>
            <h2 className="apple-section-title">Make every healthcare process work smarter.</h2>
          </motion.div>

          <div className="care-ribbon-grid">
            <motion.div className="care-ribbon-card" {...fadeUp}>
              <h3 className="impact-strip-item-title" style={{ color: "#00966d" }}>Faster Care</h3>
              <p className="impact-strip-item-desc">Accelerate document processing and operational workflows from days to seconds.</p>
            </motion.div>

            <motion.div className="care-ribbon-card" {...fadeUp}>
              <h3 className="impact-strip-item-title" style={{ color: "#00966d" }}>More Accurate</h3>
              <p className="impact-strip-item-desc">Improve consistency through automated extraction, validation, and clinical rules.</p>
            </motion.div>

            <motion.div className="care-ribbon-card" {...fadeUp}>
              <h3 className="impact-strip-item-title" style={{ color: "#00966d" }}>More Scalable</h3>
              <p className="impact-strip-item-desc">Handle high-volume healthcare processes with less manual dependency.</p>
            </motion.div>

            <motion.div className="care-ribbon-card" {...fadeUp}>
              <h3 className="impact-strip-item-title" style={{ color: "#00966d" }}>More Connected</h3>
              <p className="impact-strip-item-desc">Bring healthcare data, workflows, systems, and clinical teams together.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 09 — RELATED PRODUCTS */}
      <section className="apple-section">
        <motion.div className="apple-header-left" {...fadeUp}>
          <span className="theme-domain-tag">RELATED PRODUCTS</span>
          <h2 className="apple-section-title">Technology for every layer of healthcare.</h2>
        </motion.div>

        <div className="related-products-grid">
          <motion.div className="related-product-item is-primary" {...fadeUp}>
            <div>
              <span className="product-tag-pill">Primary Platform</span>
              <h3 className="product-item-name">ACE</h3>
              <div className="product-item-sub">Enterprise Hyper Automation Platform</div>
              <p className="product-item-desc">
                Automate complex healthcare processes across documents, workflows, decisioning, reconciliation, analytics, and reporting.
              </p>
              <div className="product-relevant-to">
                <strong>Relevant to:</strong> Prior Authorization · EOB & Membership Data Extraction · Clinical Data Analysis · Pharmacovigilance · Quality Assurance & Quality Control · Regulatory Affairs Communications
              </div>
            </div>
            <Link to="/ace" className="theme-arrow-link">Explore ACE <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="related-product-item is-primary" {...fadeUp}>
            <div>
              <span className="product-tag-pill">Specialized Solution</span>
              <h3 className="product-item-name">Codara</h3>
              <div className="product-item-sub">Medical Coding Automation</div>
              <p className="product-item-desc">
                Automate medical coding workflows and streamline coding operations.
              </p>
              <div className="product-relevant-to">
                <strong>Relevant to:</strong> Medical coding processes within healthcare and revenue cycle operations.
              </div>
            </div>
            <Link to="/codara" className="theme-arrow-link">Explore Codara <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="related-product-item" {...fadeUp}>
            <div>
              <h3 className="product-item-name">IRIS</h3>
              <div className="product-item-sub">Enterprise AI Platform</div>
              <p className="product-item-desc">
                Bring enterprise AI capabilities to healthcare knowledge, analysis, and decision-support workflows where applicable.
              </p>
            </div>
            <Link to="/iris" className="theme-arrow-link">Explore IRIS <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="related-product-item" {...fadeUp}>
            <div>
              <h3 className="product-item-name">Voice Agent</h3>
              <div className="product-item-sub">AI-Powered Voice Automation</div>
              <p className="product-item-desc">
                Automate voice-driven healthcare interactions, follow-ups, scheduling, and service workflows where applicable.
              </p>
            </div>
            <Link to="/voice-agents" className="theme-arrow-link">Explore Voice Agent <ChevronRight size={15} /></Link>
          </motion.div>
        </div>
      </section>

      {/* 10 — FINAL CTA */}
      <section className="apple-cta-section">
        <motion.div {...fadeUp}>
          <h2 className="apple-section-title theme-gradient-title" style={{ maxWidth: 700, margin: "0 auto 16px auto" }}>
            Ready to transform healthcare operations?
          </h2>
          <p className="apple-section-sub" style={{ margin: "0 auto 32px auto" }}>
            Turn complex healthcare processes into intelligent, scalable automation.
          </p>
          <div className="apple-btn-group">
            <Link to="/contact" className="theme-btn-primary">
              Talk to a Healthcare Expert →
            </Link>
            <Link to="/ace" className="theme-btn-secondary">
              Explore ACE →
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
