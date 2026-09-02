import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Pill, Microscope, ArrowRight, ChevronRight, 
  FileText, Brain, Workflow, GitCompare, Database, BarChart3,
  FlaskConical, ShieldCheck, CheckCircle2, FileCheck, Layers, Sparkles
} from "lucide-react";
import "./IndustryCommon.css";
import "./Pharmaceuticals.css";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

export default function Pharmaceuticals() {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    { code: "IONIC", name: "Intelligent Data Extraction", desc: "Extract and structure information from pharmaceutical documents and data sources.", icon: FileText },
    { code: "GEARS", name: "Rules & Decision Engine", desc: "Apply validation rules, business logic, and decisioning consistently.", icon: Brain },
    { code: "Smartflows", name: "Workflow Orchestration", desc: "Connect processes, teams, systems, approvals, and actions.", icon: Workflow },
    { code: "LUCID", name: "Reconciliation Engine", desc: "Match and validate information across systems.", icon: GitCompare },
    { code: "COSMOS", name: "Master Data Management", desc: "Manage the data that supports pharmaceutical processes and operations.", icon: Database },
    { code: "Instabolt", name: "Reports & Analytics", desc: "Turn process and operational data into actionable insights.", icon: BarChart3 },
  ];

  return (
    <div className="industry-page pharma-theme pharma-page">
      {/* 01 — HERO (With Molecular Data Intelligence & Live Radar) */}
      <section className="apple-hero-section">
        <div className="apple-hero-container">
          <motion.div {...fadeUp}>
            <div className="theme-domain-tag">
              <Pill size={15} />
              <span>Pharmaceuticals & Life Sciences Intelligence</span>
            </div>
            <h1 className="apple-hero-title theme-gradient-title">
              Intelligent automation for modern pharmaceuticals.
            </h1>
            <p className="apple-hero-sub">
              Transform complex pharmaceutical operations with AI-powered automation — from pharmacovigilance and regulatory affairs to quality, forecasting, and finance.
            </p>
            <div className="apple-btn-group">
              <a href="#solutions" className="theme-btn-primary">
                Explore Pharmaceutical Solutions <ArrowRight size={16} />
              </a>
              <Link to="/contact" className="theme-btn-secondary">
                Talk to an Expert →
              </Link>
            </div>

            {/* Molecular Safety Signal Radar Sim */}
            <div className="molecular-radar-box">
              <div className="radar-header">
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <FlaskConical size={18} color="#0071e3" />
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#f1f5f9", letterSpacing: "0.04em" }}>
                    PHARMACOVIGILANCE SAFETY RADAR
                  </span>
                </div>
                <div className="radar-signal-badge">
                  <div className="radar-signal-dot" />
                  <span>REAL-TIME ICSR INGEST</span>
                </div>
              </div>

              <div className="radar-feed-list">
                <div className="radar-feed-row">
                  <div className="radar-feed-title">
                    <FileCheck size={15} color="#0071e3" />
                    <span>Adverse Event Intake #AE-9482 (Clinical Study Site 14)</span>
                  </div>
                  <div className="radar-feed-status">MedDRA CODED (LLT: NAUSEA)</div>
                </div>
                <div className="radar-feed-row">
                  <div className="radar-feed-title">
                    <Sparkles size={15} color="#0071e3" />
                    <span>DEA Chemical Import Validation #CI-391</span>
                  </div>
                  <div className="radar-feed-status">21 CFR PART 11 VERIFIED</div>
                </div>
                <div className="radar-feed-row">
                  <div className="radar-feed-title">
                    <Layers size={15} color="#0071e3" />
                    <span>QA/QC Batch Certificate of Analysis (CoA)</span>
                  </div>
                  <div className="radar-feed-status">100% SPEC MATCHED</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02 — THE PHARMACEUTICAL CHALLENGE */}
      <section className="apple-section-fluid bg-subtle">
        <div className="apple-section-inner">
          <motion.div className="apple-header-left" {...fadeUp}>
            <span className="theme-domain-tag"><Microscope size={14} /> THE PHARMACEUTICAL CHALLENGE</span>
            <h2 className="apple-section-title">Pharma moves on precision. Operations should too.</h2>
            <p className="apple-section-sub">
              Pharmaceutical organizations manage complex workflows across regulatory communications, safety data, quality processes, forecasting, documentation, and financial operations.
            </p>
            <p className="apple-body-text">
              Algonox brings intelligent automation, workflow orchestration, data processing, and decisioning together to help pharma teams streamline operations and reduce manual effort.
            </p>
          </motion.div>

          <div className="challenge-grid">
            <motion.div className="challenge-item" {...fadeUp}>
              <div className="challenge-item-icon"><FileCheck size={18} /></div>
              <h3 className="challenge-item-title">Regulatory Complexity</h3>
              <p className="challenge-item-desc">Manage high volumes of regulatory documents, communications, approvals, and follow-ups across multiple stakeholders.</p>
            </motion.div>

            <motion.div className="challenge-item" {...fadeUp}>
              <div className="challenge-item-icon"><Layers size={18} /></div>
              <h3 className="challenge-item-title">Data-Heavy Processes</h3>
              <p className="challenge-item-desc">Turn information from multiple sources into structured data for faster processing and analysis.</p>
            </motion.div>

            <motion.div className="challenge-item" {...fadeUp}>
              <div className="challenge-item-icon"><ShieldCheck size={18} /></div>
              <h3 className="challenge-item-title">Quality & Compliance</h3>
              <p className="challenge-item-desc">Automate repetitive validation and rule-based quality processes while maintaining process visibility.</p>
            </motion.div>

            <motion.div className="challenge-item" {...fadeUp}>
              <div className="challenge-item-icon"><Workflow size={18} /></div>
              <h3 className="challenge-item-title">Operational Delays</h3>
              <p className="challenge-item-desc">Reduce manual handoffs and repetitive activities across critical pharmaceutical workflows.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 03 — PHARMACEUTICAL USE CASES (Scientific Protocol Cards) */}
      <section className="apple-section">
        <motion.div className="apple-header-centered" {...fadeUp}>
          <span className="theme-domain-tag"><FlaskConical size={14} /> PHARMACEUTICAL USE CASES</span>
          <h2 className="apple-section-title">Automation built around pharmaceutical operations.</h2>
          <p className="apple-section-sub">
            From drug-safety workflows to regulatory communications, quality processes, forecasting, and financial operations, automate the processes that matter most.
          </p>
        </motion.div>

        <div className="protocol-grid">
          <motion.div className="protocol-card" {...fadeUp}>
            <div>
              <div className="protocol-meta-bar">
                <span className="protocol-code">PROTOCOL PV-01</span>
                <span style={{ fontSize: 11, color: "#818cf8", fontWeight: 600 }}>SAFETY LIFECYCLE</span>
              </div>
              <h3 className="protocol-title">Pharmacovigilance Automation</h3>
              <p className="protocol-desc">Streamline safety-data intake, adverse-event processing, validation, case management, and reporting workflows.</p>
            </div>
            <Link to="/pv-automate" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="protocol-card" {...fadeUp}>
            <div>
              <div className="protocol-meta-bar">
                <span className="protocol-code">PROTOCOL REG-02</span>
                <span style={{ fontSize: 11, color: "#818cf8", fontWeight: 600 }}>FDA / EMA COMPLIANCE</span>
              </div>
              <h3 className="protocol-title">Regulatory Affairs Communications</h3>
              <p className="protocol-desc">Streamline regulatory communications, document management, classification, tracking, and workflow coordination across stakeholders.</p>
            </div>
            <Link to="/resources" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="protocol-card" {...fadeUp}>
            <div>
              <div className="protocol-meta-bar">
                <span className="protocol-code">PROTOCOL QA-03</span>
                <span style={{ fontSize: 11, color: "#818cf8", fontWeight: 600 }}>BATCH INTEGRITY</span>
              </div>
              <h3 className="protocol-title">Quality Assurance & Quality Control Automation</h3>
              <p className="protocol-desc">Automate data extraction, validation, rule-based calculations, review, and reporting across QA/QC processes.</p>
            </div>
            <Link to="/resources" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="protocol-card" {...fadeUp}>
            <div>
              <div className="protocol-meta-bar">
                <span className="protocol-code">PROTOCOL IMP-04</span>
                <span style={{ fontSize: 11, color: "#818cf8", fontWeight: 600 }}>CHEMICAL AUDIT</span>
              </div>
              <h3 className="protocol-title">DEA Chemical Import Management</h3>
              <p className="protocol-desc">Streamline documentation, validation, approvals, and workflow execution involved in chemical import management.</p>
            </div>
            <Link to="/resources" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="protocol-card" {...fadeUp}>
            <div>
              <div className="protocol-meta-bar">
                <span className="protocol-code">PROTOCOL FST-05</span>
                <span style={{ fontSize: 11, color: "#818cf8", fontWeight: 600 }}>PREDICTIVE DEMAND</span>
              </div>
              <h3 className="protocol-title">Demand & Sales Forecasting</h3>
              <p className="protocol-desc">Use historical and operational data to support demand planning and sales forecasting across pharmaceutical products.</p>
            </div>
            <Link to="/resources" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="protocol-card" {...fadeUp}>
            <div>
              <div className="protocol-meta-bar">
                <span className="protocol-code">PROTOCOL FIN-06</span>
                <span style={{ fontSize: 11, color: "#818cf8", fontWeight: 600 }}>ACCOUNTS PAYABLE</span>
              </div>
              <h3 className="protocol-title">Invoice Processing & Posting</h3>
              <p className="protocol-desc">Automate invoice data extraction, validation, processing, and posting to downstream financial systems.</p>
            </div>
            <Link to="/invoice-processing" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>
        </div>
      </section>

      {/* 04 — SOLUTIONS FOR PHARMACEUTICALS */}
      <section className="apple-section-fluid bg-alt" id="solutions">
        <div className="apple-section-inner">
          <motion.div className="apple-header-left" {...fadeUp}>
            <span className="theme-domain-tag"><ShieldCheck size={14} /> SOLUTIONS FOR PHARMACEUTICALS</span>
            <h2 className="apple-section-title">One pharmaceutical ecosystem. Multiple ways to automate.</h2>
            <p className="apple-section-sub">
              Bring document intelligence, workflow automation, data processing, and reconciliation together across pharmaceutical operations.
            </p>
          </motion.div>

          <div className="solutions-list">
            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Intelligent Document Processing</div>
              <div className="solution-desc">Extract, classify, validate, and structure information from pharmaceutical documents.</div>
              <Link to="/intelligent-document-processing" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>

            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Workflow Automation</div>
              <div className="solution-desc">Connect people, systems, rules, approvals, and actions across pharmaceutical processes.</div>
              <Link to="/workflow-automation" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>

            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Data Integration & Processing</div>
              <div className="solution-desc">Bring data from multiple pharmaceutical sources together for analysis, forecasting, and operational processing.</div>
              <Link to="/process-automation" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>

            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Invoice & Accounts Payable Automation</div>
              <div className="solution-desc">Streamline invoice processing, validation, and posting across pharmaceutical finance operations.</div>
              <Link to="/invoice-processing" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>

            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Reconciliation Automation</div>
              <div className="solution-desc">Match and validate financial and operational information across systems.</div>
              <Link to="/lucid-reconciliations" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 05 — POWERED BY ACE */}
      <section className="apple-section">
        <motion.div className="apple-header-centered" {...fadeUp}>
          <span className="theme-domain-tag"><Brain size={14} /> POWERED BY ACE</span>
          <h2 className="apple-section-title">One platform. Built for pharmaceutical complexity.</h2>
          <p className="apple-section-sub">
            ACE brings together specialized capabilities to automate pharmaceutical workflows — from data intake and extraction to rules, orchestration, reconciliation, analytics, and reporting.
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

      {/* 06 — FEATURED WORKFLOW (Pharmacovigilance Triage Funnel) */}
      <section className="apple-section-fluid bg-subtle">
        <div className="apple-section-inner">
          <motion.div className="apple-header-centered" {...fadeUp}>
            <span className="theme-domain-tag"><Workflow size={14} /> FEATURED WORKFLOW</span>
            <p className="apple-hero-sub" style={{ marginBottom: 6 }}>From safety data to action.</p>
            <h2 className="apple-section-title">Pharmacovigilance, automated.</h2>
          </motion.div>

          <div className="triage-funnel-container">
            {[
              { num: "01", title: "Safety Data Intake", tag: "Multi-Source" },
              { num: "02", title: "Data Extraction", tag: "AE Symptoms" },
              { num: "03", title: "Case Classification", tag: "ICSR Triage" },
              { num: "04", title: "MedDRA Standard", tag: "LLT & PT Code" },
              { num: "05", title: "Review & Quality", tag: "Audit Ready" },
              { num: "06", title: "Regulatory Report", tag: "FDA / E2B(R3)" },
            ].map((step) => (
              <motion.div key={step.title} className="triage-step-card" {...fadeUp}>
                <div className="triage-step-num">{step.num}</div>
                <div className="triage-step-title">{step.title}</div>
                <div className="triage-step-tag">{step.tag}</div>
              </motion.div>
            ))}
          </div>

          <motion.div className="workflow-supporting" {...fadeUp}>
            <p className="apple-body-text">
              Automate the flow of pharmacovigilance data while reducing manual intervention across case processing, quality checks, and reporting.
            </p>
            <div style={{ marginTop: 22 }}>
              <Link to="/pv-automate" className="theme-btn-secondary">
                Explore Pharmacovigilance →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 07 — CASE STUDY HIGHLIGHTS */}
      <section className="apple-section">
        <motion.div className="apple-header-left" {...fadeUp}>
          <span className="theme-domain-tag"><BarChart3 size={14} /> CASE STUDY HIGHLIGHTS</span>
          <h2 className="apple-section-title">Pharmaceutical automation. Proven in practice.</h2>
        </motion.div>

        <div className="case-studies-container">
          <motion.div className="case-study-block" {...fadeUp}>
            <h3 className="case-study-title">Regulatory Affairs Communications</h3>
            <div className="case-study-subtitle">Keep regulatory communication moving.</div>
            <p className="case-study-desc">Automate communication monitoring, classification, allocation, tracking, and workflow coordination across regulatory processes.</p>
            <div className="case-metrics-row">
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">65%</div>
                <div className="case-metric-lbl">Higher efficiency</div>
              </div>
            </div>
            <Link to="/resources" className="theme-arrow-link">Read Case Study <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="case-study-block" {...fadeUp}>
            <h3 className="case-study-title">Quality Assurance & Quality Control</h3>
            <div className="case-study-subtitle">Automate quality processes with greater consistency.</div>
            <p className="case-study-desc">Connect multiple data sources, automate validations and rule-based calculations, and streamline review activities.</p>
            <div className="case-metrics-row">
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">100%</div>
                <div className="case-metric-lbl">Process automation</div>
              </div>
            </div>
            <Link to="/resources" className="theme-arrow-link">Read Case Study <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="case-study-block" {...fadeUp}>
            <h3 className="case-study-title">Clinical Trials Management</h3>
            <div className="case-study-subtitle">Accelerate complex clinical operations.</div>
            <p className="case-study-desc">Automate process activities across clinical-trial management while improving operational efficiency.</p>
            <div className="case-metrics-row">
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">75%</div>
                <div className="case-metric-lbl">Improved efficiency</div>
              </div>
            </div>
            <Link to="/resources" className="theme-arrow-link">Read Case Study <ChevronRight size={15} /></Link>
          </motion.div>
        </div>
      </section>

      {/* 08 — PHARMACEUTICAL IMPACT (Precision Lab Scorecard) */}
      <section className="apple-section-fluid bg-alt">
        <div className="apple-section-inner">
          <motion.div className="apple-header-centered" {...fadeUp}>
            <span className="theme-domain-tag"><CheckCircle2 size={14} /> PHARMACEUTICAL IMPACT</span>
            <h2 className="apple-section-title">Make every pharmaceutical process work smarter.</h2>
          </motion.div>

          <div className="lab-scorecard-grid">
            <motion.div className="lab-scorecard-item" {...fadeUp}>
              <h3 className="impact-strip-item-title" style={{ color: "#6366f1" }}>Faster</h3>
              <p className="impact-strip-item-desc">Reduce processing time across repetitive pharmaceutical workflows.</p>
            </motion.div>

            <motion.div className="lab-scorecard-item" {...fadeUp}>
              <h3 className="impact-strip-item-title" style={{ color: "#6366f1" }}>More Accurate</h3>
              <p className="impact-strip-item-desc">Apply automated extraction, validation, and business rules consistently.</p>
            </motion.div>

            <motion.div className="lab-scorecard-item" {...fadeUp}>
              <h3 className="impact-strip-item-title" style={{ color: "#6366f1" }}>More Scalable</h3>
              <p className="impact-strip-item-desc">Handle high-volume regulatory, quality, safety, and operational processes with less manual dependency.</p>
            </motion.div>

            <motion.div className="lab-scorecard-item" {...fadeUp}>
              <h3 className="impact-strip-item-title" style={{ color: "#6366f1" }}>More Connected</h3>
              <p className="impact-strip-item-desc">Bring documents, data, systems, workflows, and teams together.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 09 — RELATED PRODUCTS */}
      <section className="apple-section">
        <motion.div className="apple-header-left" {...fadeUp}>
          <span className="theme-domain-tag">RELATED PRODUCTS</span>
          <h2 className="apple-section-title">Technology for every layer of pharmaceutical operations.</h2>
        </motion.div>

        <div className="related-products-grid">
          <motion.div className="related-product-item is-primary" {...fadeUp}>
            <div>
              <span className="product-tag-pill">Primary Platform</span>
              <h3 className="product-item-name">ACE</h3>
              <div className="product-item-sub">Enterprise Hyper Automation Platform</div>
              <p className="product-item-desc">
                Automate complex pharmaceutical processes across documents, workflows, decisioning, data processing, reconciliation, and reporting.
              </p>
              <div className="product-relevant-to">
                <strong>Relevant to:</strong> Pharmacovigilance · Regulatory Affairs Communications · QA/QC · DEA Chemical Import Management · Demand & Sales Forecasting · Invoice Processing & Posting
              </div>
            </div>
            <Link to="/ace" className="theme-arrow-link">Explore ACE <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="related-product-item" {...fadeUp}>
            <div>
              <h3 className="product-item-name">IRIS</h3>
              <div className="product-item-sub">Enterprise AI Platform</div>
              <p className="product-item-desc">
                Bring enterprise AI capabilities to pharmaceutical knowledge, analysis, decision support, and information workflows.
              </p>
              <div className="product-relevant-to">
                <strong>Relevant to:</strong> Knowledge-intensive processes, analytical workflows, and AI-powered decision support where applicable.
              </div>
            </div>
            <Link to="/iris" className="theme-arrow-link">Explore IRIS <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="related-product-item" {...fadeUp}>
            <div>
              <h3 className="product-item-name">Voice Agent</h3>
              <div className="product-item-sub">AI-Powered Voice Automation</div>
              <p className="product-item-desc">
                Extend pharmaceutical operations to voice-driven interactions, follow-ups, service workflows, and internal coordination where conversational automation is applicable.
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
            Ready to transform pharmaceutical operations?
          </h2>
          <p className="apple-section-sub" style={{ margin: "0 auto 32px auto" }}>
            Turn complex processes into intelligent, scalable automation.
          </p>
          <div className="apple-btn-group">
            <Link to="/contact" className="theme-btn-primary">
              Talk to a Pharmaceutical Expert →
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
