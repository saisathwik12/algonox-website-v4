import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  CircleDollarSign, RefreshCw, ArrowRight, ChevronRight, 
  FileText, Brain, Workflow, GitCompare, Database, BarChart3,
  Receipt, CreditCard, CheckCircle2, FileSpreadsheet, ShieldCheck
} from "lucide-react";
import "./IndustryCommon.css";
import "./RCM.css";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

export default function RCM() {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    { code: "IONIC", name: "Intelligent Data Extraction", desc: "Extract and structure information from complex RCM documents.", icon: FileText },
    { code: "GEARS", name: "Rules & Decision Engine", desc: "Apply validation rules, business logic, and decisioning consistently.", icon: Brain },
    { code: "Smartflows", name: "Workflow Orchestration", desc: "Connect processes, teams, systems, and actions.", icon: Workflow },
    { code: "LUCID", name: "Reconciliation Engine", desc: "Match, validate, and reconcile information across systems and processes.", icon: GitCompare },
    { code: "COSMOS", name: "Master Data Management", desc: "Manage the data that powers RCM operations.", icon: Database },
    { code: "Instabolt", name: "Reports & Analytics", desc: "Turn process data into actionable revenue cycle insights.", icon: BarChart3 },
  ];

  return (
    <div className="industry-page rcm-theme rcm-page">
      {/* 01 — HERO (With Rotating Cashflow Velocity Loop Sim) */}
      <section className="apple-hero-section">
        <div className="apple-hero-container">
          <motion.div {...fadeUp}>
            <div className="theme-domain-tag">
              <CircleDollarSign size={15} />
              <span>Revenue Cycle Management & Financial Health</span>
            </div>
            <h1 className="apple-hero-title theme-gradient-title">
              Intelligent automation for the revenue cycle.
            </h1>
            <p className="apple-hero-sub">
              Transform complex RCM processes with AI-powered automation — from prior authorization and document extraction to payment posting, reconciliation, and coding.
            </p>
            <div className="apple-btn-group">
              <a href="#solutions" className="theme-btn-primary">
                Explore RCM Solutions <ArrowRight size={16} />
              </a>
              <Link to="/contact" className="theme-btn-secondary">
                Talk to an Expert →
              </Link>
            </div>

            {/* Rotating Cashflow Velocity Loop Sim */}
            <div className="velocity-ring-box">
              <div className="velocity-header">
                <div className="velocity-title-tag">
                  <RefreshCw size={15} className="spin-slow" />
                  <span>CONTINUOUS CASHFLOW ACCELERATION LOOP</span>
                </div>
                <div style={{ color: "#34d399", fontSize: 11, fontFamily: "monospace" }}>REAL-TIME ERA RECONCILIATION</div>
              </div>

              <div className="velocity-cycle-grid">
                <div className="velocity-cycle-node">
                  <div className="velocity-node-label">01. INTAKE</div>
                  <div className="velocity-node-val">100% SLA</div>
                </div>
                <div className="velocity-cycle-node">
                  <div className="velocity-node-label">02. EXTRACTION</div>
                  <div className="velocity-node-val">90% TOUCHLESS</div>
                </div>
                <div className="velocity-cycle-node">
                  <div className="velocity-node-label">03. ERA MATCH</div>
                  <div className="velocity-node-val">99.2% ACCURACY</div>
                </div>
                <div className="velocity-cycle-node">
                  <div className="velocity-node-label">04. POSTING</div>
                  <div className="velocity-node-val">-60% AR DAYS</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02 — THE RCM CHALLENGE (Revenue Leakage Audit Grid) */}
      <section className="apple-section-fluid bg-subtle">
        <div className="apple-section-inner">
          <motion.div className="apple-header-left" {...fadeUp}>
            <span className="theme-domain-tag"><RefreshCw size={14} /> THE RCM CHALLENGE</span>
            <h2 className="apple-section-title">Revenue cycles move across documents, rules, and systems.</h2>
            <p className="apple-section-sub">
              RCM workflows span high-volume documents, complex coding rules, payer requirements, payment matching, exception handling, and multiple healthcare IT systems.
            </p>
            <p className="apple-body-text">
              Algonox brings intelligence, automation, and reconciliation together to help revenue cycle teams reduce manual effort, improve accuracy, and accelerate processing from intake to payment.
            </p>
          </motion.div>

          <div className="leakage-audit-grid">
            <motion.div className="leakage-audit-card" {...fadeUp}>
              <div className="leakage-card-icon"><FileSpreadsheet size={20} /></div>
              <h3 className="leakage-card-title">Document Complexity</h3>
              <p className="leakage-card-desc">Process high volumes of EOBs, membership documents, authorization requests, and financial files into structured data.</p>
            </motion.div>

            <motion.div className="leakage-audit-card" {...fadeUp}>
              <div className="leakage-card-icon"><Workflow size={20} /></div>
              <h3 className="leakage-card-title">Manual Processing</h3>
              <p className="leakage-card-desc">Reduce repetitive manual work across intake, data extraction, validation, posting, and reconciliation.</p>
            </motion.div>

            <motion.div className="leakage-audit-card" {...fadeUp}>
              <div className="leakage-card-icon"><GitCompare size={20} /></div>
              <h3 className="leakage-card-title">Data Matching & Reconciliation</h3>
              <p className="leakage-card-desc">Match, validate, and reconcile information across disparate healthcare and financial systems.</p>
            </motion.div>

            <motion.div className="leakage-audit-card" {...fadeUp}>
              <div className="leakage-card-icon"><ShieldCheck size={20} /></div>
              <h3 className="leakage-card-title">Rule & Coding Complexity</h3>
              <p className="leakage-card-desc">Apply business rules, validations, and coding logic consistently across revenue cycle workflows.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 03 — RCM USE CASES (Cashflow Accelerator Cards) */}
      <section className="apple-section">
        <motion.div className="apple-header-centered" {...fadeUp}>
          <span className="theme-domain-tag"><Receipt size={14} /> RCM USE CASES</span>
          <h2 className="apple-section-title">Automation built around the revenue cycle.</h2>
          <p className="apple-section-sub">
            From authorization and document extraction to payment posting, reconciliation, and coding, automate the processes that keep revenue moving.
          </p>
        </motion.div>

        <div className="accelerator-grid">
          <motion.div className="accelerator-card" {...fadeUp}>
            <div>
              <span className="accelerator-badge">ACCELERATOR 01</span>
              <h3 className="accelerator-title">Prior Authorization Automation</h3>
              <p className="accelerator-desc">Streamline document intake, extraction, validation, business-rule decisioning, and downstream workflow execution.</p>
            </div>
            <Link to="/resources" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="accelerator-card" {...fadeUp}>
            <div>
              <span className="accelerator-badge">ACCELERATOR 02</span>
              <h3 className="accelerator-title">EOB & Membership Data Extraction</h3>
              <p className="accelerator-desc">Extract, classify, validate, and structure information from complex Explanation of Benefits (EOB) and membership documents.</p>
            </div>
            <Link to="/resources" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="accelerator-card" {...fadeUp}>
            <div>
              <span className="accelerator-badge">ACCELERATOR 03</span>
              <h3 className="accelerator-title">Payment Posting & Reconciliation</h3>
              <p className="accelerator-desc">Automate payment capture, validation, matching, posting, and reconciliation across revenue cycle workflows.</p>
            </div>
            <Link to="/resources" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="accelerator-card" {...fadeUp}>
            <div>
              <span className="accelerator-badge">ACCELERATOR 04</span>
              <h3 className="accelerator-title">Bank Reconciliation</h3>
              <p className="accelerator-desc">Automate data matching, validation, exception handling, and reconciliation across banking and financial systems.</p>
            </div>
            <Link to="/lucid-reconciliations" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="accelerator-card" {...fadeUp}>
            <div>
              <span className="accelerator-badge">ACCELERATOR 05</span>
              <h3 className="accelerator-title">Medical Coding Automation</h3>
              <p className="accelerator-desc">Automate medical coding workflows and support coding accuracy through intelligent automation.</p>
            </div>
            <Link to="/codara" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>
        </div>
      </section>

      {/* 04 — SOLUTIONS FOR RCM */}
      <section className="apple-section-fluid bg-alt" id="solutions">
        <div className="apple-section-inner">
          <motion.div className="apple-header-left" {...fadeUp}>
            <span className="theme-domain-tag"><CreditCard size={14} /> SOLUTIONS FOR RCM</span>
            <h2 className="apple-section-title">One revenue cycle ecosystem. Multiple ways to automate.</h2>
            <p className="apple-section-sub">
              Bring document intelligence, workflow orchestration, reconciliation, and medical coding together across revenue cycle operations.
            </p>
          </motion.div>

          <div className="solutions-list">
            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Intelligent Document Processing</div>
              <div className="solution-desc">Extract, classify, validate, and structure information from complex RCM documents.</div>
              <Link to="/intelligent-document-processing" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>

            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Workflow Automation</div>
              <div className="solution-desc">Connect people, systems, business rules, and actions across RCM workflows.</div>
              <Link to="/workflow-automation" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>

            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Reconciliation Automation</div>
              <div className="solution-desc">Match, validate, and reconcile information across revenue cycle and financial processes.</div>
              <Link to="/lucid-reconciliations" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>

            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Data Integration & Processing</div>
              <div className="solution-desc">Bring RCM data from multiple sources together for processing, analysis, and reporting.</div>
              <Link to="/process-automation" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>

            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Medical Coding Automation</div>
              <div className="solution-desc">Streamline and automate medical coding workflows to improve coding operations.</div>
              <Link to="/codara" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 05 — POWERED BY ACE */}
      <section className="apple-section">
        <motion.div className="apple-header-centered" {...fadeUp}>
          <span className="theme-domain-tag"><Brain size={14} /> POWERED BY ACE</span>
          <h2 className="apple-section-title">One platform. Built for revenue cycle complexity.</h2>
          <p className="apple-section-sub">
            ACE combines specialized capabilities to automate RCM workflows — from document intake and data extraction to decisioning, workflow orchestration, reconciliation, and reporting.
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

      {/* 06 — FEATURED WORKFLOW (Continuous ERA Payment Posting Loop) */}
      <section className="apple-section-fluid bg-subtle">
        <div className="apple-section-inner">
          <motion.div className="apple-header-centered" {...fadeUp}>
            <span className="theme-domain-tag"><Workflow size={14} /> FEATURED WORKFLOW</span>
            <p className="apple-hero-sub" style={{ marginBottom: 6 }}>From remittance to reconciliation.</p>
            <h2 className="apple-section-title">Payment posting and reconciliation, automated.</h2>
          </motion.div>

          <div className="era-loop-container">
            {[
              { num: "01", title: "Remittance Intake", status: "835 / Paper ERA" },
              { num: "02", title: "Data Extraction", status: "Line-Item Parse" },
              { num: "03", title: "Rules Validation", status: "CARC / RARC" },
              { num: "04", title: "3-Way Match", status: "EHR / PM Sync" },
              { num: "05", title: "Auto Posting", status: "Touchless Entry" },
              { num: "06", title: "Reconciled", status: "GL Balanced" },
            ].map((node) => (
              <motion.div key={node.title} className="era-node-card" {...fadeUp}>
                <div className="era-node-num">{node.num}</div>
                <div className="era-node-title">{node.title}</div>
                <div className="era-node-status">{node.status}</div>
              </motion.div>
            ))}
          </div>

          <motion.div className="workflow-supporting" {...fadeUp}>
            <p className="apple-body-text">
              ACE combines intelligent document extraction, reconciliation, and workflow orchestration to streamline payment posting and reduce manual intervention across the revenue cycle.
            </p>
            <div style={{ marginTop: 22 }}>
              <Link to="/lucid-reconciliations" className="theme-btn-secondary">
                Explore Payment Reconciliation →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 07 — CASE STUDY HIGHLIGHTS */}
      <section className="apple-section">
        <motion.div className="apple-header-left" {...fadeUp}>
          <span className="theme-domain-tag"><BarChart3 size={14} /> CASE STUDY HIGHLIGHTS</span>
          <h2 className="apple-section-title">RCM automation. Proven in practice.</h2>
        </motion.div>

        <div className="case-studies-container">
          <motion.div className="case-study-block" {...fadeUp}>
            <h3 className="case-study-title">EOB & Membership Data Extraction</h3>
            <div className="case-study-subtitle">Turn high-volume healthcare documents into structured data.</div>
            <p className="case-study-desc">Automate classification, extraction, validation, and processing of complex EOB and membership documents.</p>
            <div className="case-metrics-row">
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">60%</div>
                <div className="case-metric-lbl">FTE reduction</div>
              </div>
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">90%</div>
                <div className="case-metric-lbl">Automated extraction</div>
              </div>
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">76%</div>
                <div className="case-metric-lbl">Reduction in errors</div>
              </div>
            </div>
            <Link to="/resources" className="theme-arrow-link">Read Case Study <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="case-study-block" {...fadeUp}>
            <h3 className="case-study-title">Prior Authorization Automation</h3>
            <div className="case-study-subtitle">Accelerate authorization workflows.</div>
            <p className="case-study-desc">Automate document extraction, business-rule validation, decisioning, and downstream workflow execution.</p>
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
                <div className="case-metric-lbl">Reduction in errors</div>
              </div>
            </div>
            <Link to="/resources" className="theme-arrow-link">Read Case Study <ChevronRight size={15} /></Link>
          </motion.div>
        </div>
      </section>

      {/* 08 — RCM IMPACT (Revenue Velocity Scoreboard) */}
      <section className="apple-section-fluid bg-alt">
        <div className="apple-section-inner">
          <motion.div className="apple-header-centered" {...fadeUp}>
            <span className="theme-domain-tag"><CheckCircle2 size={14} /> RCM IMPACT</span>
            <h2 className="apple-section-title">Make every revenue cycle process work smarter.</h2>
          </motion.div>

          <div className="rcm-bento-grid">
            <motion.div className="rcm-bento-card" {...fadeUp}>
              <h3 className="impact-strip-item-title" style={{ color: "#059669" }}>Faster Posting</h3>
              <p className="impact-strip-item-desc">Accelerate document intake, extraction, validation, posting, and reconciliation.</p>
            </motion.div>

            <motion.div className="rcm-bento-card" {...fadeUp}>
              <h3 className="impact-strip-item-title" style={{ color: "#059669" }}>More Accurate</h3>
              <p className="impact-strip-item-desc">Apply automated validation, matching, and business rules consistently.</p>
            </motion.div>

            <motion.div className="rcm-bento-card" {...fadeUp}>
              <h3 className="impact-strip-item-title" style={{ color: "#059669" }}>More Scalable</h3>
              <p className="impact-strip-item-desc">Handle high-volume revenue cycle processes with less manual dependency.</p>
            </motion.div>

            <motion.div className="rcm-bento-card" {...fadeUp}>
              <h3 className="impact-strip-item-title" style={{ color: "#059669" }}>More Connected</h3>
              <p className="impact-strip-item-desc">Bring documents, data, systems, workflows, and teams together.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 09 — RELATED PRODUCTS */}
      <section className="apple-section">
        <motion.div className="apple-header-left" {...fadeUp}>
          <span className="theme-domain-tag">RELATED PRODUCTS</span>
          <h2 className="apple-section-title">Technology for every layer of the revenue cycle.</h2>
        </motion.div>

        <div className="related-products-grid">
          <motion.div className="related-product-item is-primary" {...fadeUp}>
            <div>
              <span className="product-tag-pill">Primary Platform</span>
              <h3 className="product-item-name">ACE</h3>
              <div className="product-item-sub">Enterprise Hyper Automation Platform</div>
              <p className="product-item-desc">
                Automate complex RCM processes across documents, workflows, decisioning, reconciliation, and reporting.
              </p>
              <div className="product-relevant-to">
                <strong>Relevant to:</strong> Prior Authorization · EOB & Membership Data Extraction · Payment Posting & Reconciliation · Bank Reconciliation
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
                Automate medical coding workflows and support coding accuracy.
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
                Bring enterprise AI capabilities to revenue cycle knowledge, analysis, and decision-support workflows where applicable.
              </p>
            </div>
            <Link to="/iris" className="theme-arrow-link">Explore IRIS <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="related-product-item" {...fadeUp}>
            <div>
              <h3 className="product-item-name">Voice Agent</h3>
              <div className="product-item-sub">AI-Powered Voice Automation</div>
              <p className="product-item-desc">
                Automate voice-driven interactions across patient billing inquiries, follow-ups, and service workflows where applicable.
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
            Ready to transform revenue cycle operations?
          </h2>
          <p className="apple-section-sub" style={{ margin: "0 auto 32px auto" }}>
            Turn complex RCM processes into intelligent, scalable automation.
          </p>
          <div className="apple-btn-group">
            <Link to="/contact" className="theme-btn-primary">
              Talk to an RCM Expert →
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
