import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Landmark, ShieldCheck, ArrowRight, ChevronRight, 
  FileText, Brain, Workflow, GitCompare, Database, BarChart3,
  Lock, CreditCard, Scale, CheckCircle2, ShieldAlert, Cpu, Sparkles
} from "lucide-react";
import "./IndustryCommon.css";
import "./Banking.css";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

export default function Banking() {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    { code: "IONIC", name: "Intelligent Data Extraction", desc: "Extract and structure information from complex banking documents.", icon: FileText },
    { code: "GEARS", name: "Rules & Decision Engine", desc: "Apply business rules, validations, and decision logic consistently.", icon: Brain },
    { code: "Smartflows", name: "Workflow Orchestration", desc: "Connect processes, people, systems, and actions.", icon: Workflow },
    { code: "LUCID", name: "Reconciliation Engine", desc: "Match, validate, and reconcile information across systems.", icon: GitCompare },
    { code: "COSMOS", name: "Master Data Management", desc: "Manage the data that powers banking processes.", icon: Database },
    { code: "Instabolt", name: "Reports & Analytics", desc: "Turn process data into actionable insights.", icon: BarChart3 },
  ];

  return (
    <div className="industry-page banking-theme banking-page">
      {/* 01 — HERO (With Live Trust & Security Terminal Sim) */}
      <section className="apple-hero-section">
        <div className="apple-hero-container">
          <motion.div {...fadeUp}>
            <div className="theme-domain-tag">
              <Landmark size={15} />
              <span>Banking Intelligence & Hyper Automation</span>
            </div>
            <h1 className="apple-hero-title theme-gradient-title">
              Intelligent automation for modern banking.
            </h1>
            <p className="apple-hero-sub">
              Transform complex banking operations with AI-powered automation — from customer onboarding and risk assessment to lending, reconciliation, and operational workflows.
            </p>
            <div className="apple-btn-group">
              <a href="#solutions" className="theme-btn-primary">
                Explore Banking Solutions <ArrowRight size={16} />
              </a>
              <Link to="/contact" className="theme-btn-secondary">
                Talk to an Expert →
              </Link>
            </div>

            {/* Interactive Live Trust Verification Terminal Sim */}
            <div className="banking-hero-terminal">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <div className="terminal-dot dot-red" />
                  <div className="terminal-dot dot-yellow" />
                  <div className="terminal-dot dot-green" />
                </div>
                <div className="terminal-title">ALGONOX TRUST & COMPLIANCE ENGINE — KYC REAL-TIME PIPELINE</div>
                <div className="terminal-badge">LIVE STREAM</div>
              </div>
              <div className="terminal-body">
                <div className="terminal-row">
                  <div className="terminal-label">
                    <FileText size={15} color="#38bdf8" />
                    <span>Customer Document Ingestion (Passport / ID / PAN)</span>
                  </div>
                  <div className="terminal-val val-success">EXTRACTED (99.8% ACCURACY)</div>
                </div>
                <div className="terminal-row">
                  <div className="terminal-label">
                    <ShieldCheck size={15} color="#34d399" />
                    <span>Government Database Validation (NSDL / AML Check)</span>
                  </div>
                  <div className="terminal-val val-success">VERIFIED — ZERO MATCHES</div>
                </div>
                <div className="terminal-row">
                  <div className="terminal-label">
                    <Cpu size={15} color="#818cf8" />
                    <span>Risk Scoring & Automated Credit Underwriting</span>
                  </div>
                  <div className="terminal-val val-highlight">SCORE: 820 / LOW RISK</div>
                </div>
                <div className="terminal-progress-bar">
                  <div className="terminal-progress-fill" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02 — THE BANKING CHALLENGE (Asymmetric Security Split-Grid) */}
      <section className="apple-section-fluid bg-subtle">
        <div className="apple-section-inner">
          <div className="security-split-challenge">
            <motion.div {...fadeUp}>
              <span className="theme-domain-tag"><ShieldCheck size={14} /> THE BANKING CHALLENGE</span>
              <h2 className="apple-section-title">Banking moves fast. Operations need to keep up.</h2>
              <p className="apple-section-sub">
                Banking processes often span documents, data, validations, multiple systems, and complex decision-making.
              </p>
              <p className="apple-body-text">
                Algonox brings intelligence and automation together to help banking teams reduce manual effort, streamline workflows, and move from data to decisions faster.
              </p>
              <div style={{ marginTop: 28 }}>
                <a href="#solutions" className="theme-arrow-link" style={{ fontSize: 16 }}>
                  Learn how ACE solves this <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>

            <motion.div className="security-matrix-box" {...fadeUp}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", color: "#38bdf8", textTransform: "uppercase" }}>
                  Operational Vulnerability Matrix
                </div>
                <ShieldAlert size={18} color="#ef4444" />
              </div>

              <div className="security-matrix-grid">
                <div className="security-node">
                  <div className="security-node-title">Manual Operations</div>
                  <div className="security-node-desc">Reduce repetitive work across document-heavy and rule-driven banking processes.</div>
                </div>

                <div className="security-node">
                  <div className="security-node-title">Complex Decisioning</div>
                  <div className="security-node-desc">Bring data, business rules, and analytics together to support consistent decisions.</div>
                </div>

                <div className="security-node">
                  <div className="security-node-title">Disconnected Processes</div>
                  <div className="security-node-desc">Connect information, workflows, and systems across the banking ecosystem.</div>
                </div>

                <div className="security-node">
                  <div className="security-node-title">Reconciliation & Validation</div>
                  <div className="security-node-desc">Automate matching, validation, exception handling, and reconciliation across financial data.</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 03 — BANKING USE CASES (Vault Glass Cards Grid) */}
      <section className="apple-section">
        <motion.div className="apple-header-centered" {...fadeUp}>
          <span className="theme-domain-tag"><CreditCard size={14} /> BANKING USE CASES</span>
          <h2 className="apple-section-title">Automation built around banking.</h2>
          <p className="apple-section-sub">
            From onboarding customers to managing risk, processing loans, and reconciling financial data, automate the processes that matter most.
          </p>
        </motion.div>

        <div className="vault-grid">
          <motion.div className="vault-card" {...fadeUp}>
            <div>
              <div className="vault-icon-badge"><Lock size={20} /></div>
              <h3 className="vault-card-title">KYC & Customer Onboarding</h3>
              <p className="vault-card-desc">Accelerate customer verification with intelligent document processing, validation, risk assessment, and workflow automation.</p>
            </div>
            <Link to="/kyc-aml" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="vault-card" {...fadeUp}>
            <div>
              <div className="vault-icon-badge"><Brain size={20} /></div>
              <h3 className="vault-card-title">Credit Risk Assessment</h3>
              <p className="vault-card-desc">Turn financial and credit data into actionable risk insights for faster, more consistent lending decisions.</p>
            </div>
            <Link to="/resources" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="vault-card" {...fadeUp}>
            <div>
              <div className="vault-icon-badge"><Workflow size={20} /></div>
              <h3 className="vault-card-title">Mortgage Loan Processing</h3>
              <p className="vault-card-desc">Simplify document-heavy mortgage workflows with intelligent processing and workflow automation.</p>
            </div>
            <Link to="/resources" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="vault-card" {...fadeUp}>
            <div>
              <div className="vault-icon-badge"><CheckCircle2 size={20} /></div>
              <h3 className="vault-card-title">Loan Approval</h3>
              <p className="vault-card-desc">Connect data, business rules, and workflows to streamline loan decisioning and approval processes.</p>
            </div>
            <Link to="/resources" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="vault-card" {...fadeUp}>
            <div>
              <div className="vault-icon-badge"><GitCompare size={20} /></div>
              <h3 className="vault-card-title">Bank Reconciliation</h3>
              <p className="vault-card-desc">Automate data matching, validation, reconciliation, and exception handling across banking systems.</p>
            </div>
            <Link to="/lucid-reconciliations" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="vault-card" {...fadeUp}>
            <div>
              <div className="vault-icon-badge"><Scale size={20} /></div>
              <h3 className="vault-card-title">Legal Enforcement Agency (LEA) Automation</h3>
              <p className="vault-card-desc">Streamline the processing of legal-enforcement requests through intelligent document processing and workflow automation.</p>
            </div>
            <Link to="/resources" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>
        </div>
      </section>

      {/* 04 — SOLUTIONS FOR BANKING */}
      <section className="apple-section-fluid bg-alt" id="solutions">
        <div className="apple-section-inner">
          <motion.div className="apple-header-left" {...fadeUp}>
            <span className="theme-domain-tag"><Scale size={14} /> SOLUTIONS FOR BANKING</span>
            <h2 className="apple-section-title">One banking ecosystem. Multiple ways to automate.</h2>
            <p className="apple-section-sub">
              Bring document intelligence, workflow automation, decisioning, reconciliation, and data processing together across critical banking operations.
            </p>
          </motion.div>

          <div className="solutions-list">
            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Intelligent Document Processing</div>
              <div className="solution-desc">Extract and structure information from banking documents for faster downstream processing.</div>
              <Link to="/intelligent-document-processing" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>

            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Workflow Automation</div>
              <div className="solution-desc">Connect people, systems, rules, and actions into streamlined banking workflows.</div>
              <Link to="/workflow-automation" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>

            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Reconciliation Automation</div>
              <div className="solution-desc">Automate matching, validation, exception handling, and reconciliation across financial data.</div>
              <Link to="/lucid-reconciliations" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>

            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">KYC & Customer Onboarding</div>
              <div className="solution-desc">Simplify document verification, customer validation, risk assessment, and onboarding workflows.</div>
              <Link to="/kyc-aml" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>

            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Data Integration & Processing</div>
              <div className="solution-desc">Bring data from multiple sources together for analysis, decision-making, and reporting.</div>
              <Link to="/process-automation" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 05 — POWERED BY ACE */}
      <section className="apple-section">
        <motion.div className="apple-header-centered" {...fadeUp}>
          <span className="theme-domain-tag"><Brain size={14} /> POWERED BY ACE</span>
          <h2 className="apple-section-title">One platform. Built for complex banking processes.</h2>
          <p className="apple-section-sub">
            ACE brings together specialized capabilities to automate banking workflows — from data intake and understanding to decisioning, execution, reconciliation, and reporting.
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

      {/* 06 — FEATURED WORKFLOW (Live Status KYC Runway) */}
      <section className="apple-section-fluid bg-subtle">
        <div className="apple-section-inner">
          <motion.div className="apple-header-centered" {...fadeUp}>
            <span className="theme-domain-tag"><Workflow size={14} /> FEATURED WORKFLOW</span>
            <p className="apple-hero-sub" style={{ marginBottom: 6 }}>From documents to decisions.</p>
            <h2 className="apple-section-title">A smarter way to automate KYC.</h2>
          </motion.div>

          <div className="runway-track">
            {[
              { num: "01", title: "Customer Documents", status: "Auto-Ingest" },
              { num: "02", title: "Data Extraction", status: "99.8% Accurate" },
              { num: "03", title: "PAN / NSDL Validation", status: "API Verified" },
              { num: "04", title: "Rules & Risk Scoring", status: "Low Risk" },
              { num: "05", title: "Exception Handling", status: "Smart Routed" },
              { num: "06", title: "Customer Approval", status: "Instant Issue" },
            ].map((step) => (
              <motion.div key={step.title} className="runway-step" {...fadeUp}>
                <span className="runway-num">{step.num}</span>
                <div className="runway-title">{step.title}</div>
                <div className="runway-status-chip">{step.status}</div>
              </motion.div>
            ))}
          </div>

          <motion.div className="workflow-supporting" {...fadeUp}>
            <p className="apple-body-text">
              ACE combines intelligent document extraction, validation, workflow orchestration, and risk-based decisioning to streamline KYC processing.
            </p>
            <div style={{ marginTop: 22 }}>
              <Link to="/kyc-aml" className="theme-btn-secondary">
                Explore KYC Automation →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 07 — CASE STUDY HIGHLIGHTS */}
      <section className="apple-section">
        <motion.div className="apple-header-left" {...fadeUp}>
          <span className="theme-domain-tag"><BarChart3 size={14} /> CASE STUDY HIGHLIGHTS</span>
          <h2 className="apple-section-title">Automation with measurable outcomes.</h2>
        </motion.div>

        <div className="case-studies-container">
          <motion.div className="case-study-block" {...fadeUp}>
            <h3 className="case-study-title">KYC Automation</h3>
            <div className="case-study-subtitle">Faster onboarding. Less manual dependency.</div>
            <p className="case-study-desc">Automate document verification, validation, workflow orchestration, and risk-based decisioning.</p>
            <div className="case-metrics-row">
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">65%</div>
                <div className="case-metric-lbl">FTE reduction</div>
              </div>
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">90%</div>
                <div className="case-metric-lbl">AHT reduction</div>
              </div>
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">78%</div>
                <div className="case-metric-lbl">SLA achieved</div>
              </div>
            </div>
            <Link to="/resources" className="theme-arrow-link">Read Case Study <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="case-study-block" {...fadeUp}>
            <h3 className="case-study-title">Risk Assessment</h3>
            <div className="case-study-subtitle">Turn complex financial data into actionable risk insights.</div>
            <p className="case-study-desc">Combine data extraction, analytics, prediction, rules, and reporting to support risk assessment.</p>
            <div className="case-metrics-row">
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">70%</div>
                <div className="case-metric-lbl">FTE savings</div>
              </div>
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">85%</div>
                <div className="case-metric-lbl">AHT reduction</div>
              </div>
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">87%</div>
                <div className="case-metric-lbl">Increased efficiency</div>
              </div>
            </div>
            <Link to="/resources" className="theme-arrow-link">Read Case Study <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="case-study-block" {...fadeUp}>
            <h3 className="case-study-title">Vendor Reconciliation</h3>
            <div className="case-study-subtitle">Automate reconciliation across banking systems.</div>
            <p className="case-study-desc">Automate report collection, data matching, reconciliation, exception handling, and vendor communication.</p>
            <div className="case-metrics-row">
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">50%</div>
                <div className="case-metric-lbl">FTE reduction</div>
              </div>
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">70%</div>
                <div className="case-metric-lbl">AHT reduction</div>
              </div>
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">45%</div>
                <div className="case-metric-lbl">Reduction in operating costs</div>
              </div>
            </div>
            <Link to="/resources" className="theme-arrow-link">Read Case Study <ChevronRight size={15} /></Link>
          </motion.div>
        </div>
      </section>

      {/* 08 — BANKING IMPACT (Asymmetric Modern Bento Grid) */}
      <section className="apple-section-fluid bg-alt">
        <div className="apple-section-inner">
          <motion.div className="apple-header-centered" {...fadeUp}>
            <span className="theme-domain-tag"><CheckCircle2 size={14} /> BANKING IMPACT</span>
            <h2 className="apple-section-title">Make every banking process work smarter.</h2>
          </motion.div>

          <div className="banking-bento-grid">
            <motion.div className="bento-card-large" {...fadeUp}>
              <div>
                <span className="theme-domain-tag" style={{ background: "rgba(255,255,255,0.15)", color: "#ffffff", borderColor: "rgba(255,255,255,0.3)" }}>
                  Speed & Precision
                </span>
                <h3 style={{ fontSize: 32, fontWeight: 700, marginTop: 14, lineHeight: 1.2 }}>
                  Faster Operations. Sub-Second Validation.
                </h3>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, marginTop: 12, lineHeight: 1.6 }}>
                  Reduce processing time across repetitive operational workflows and ensure continuous compliance at enterprise scale.
                </p>
              </div>
              <div style={{ display: "flex", gap: 14, alignItems: "center", marginTop: 24 }}>
                <Sparkles size={20} color="#38bdf8" />
                <span style={{ fontSize: 14, fontWeight: 600, color: "#38bdf8" }}>Zero Manual Bottlenecks</span>
              </div>
            </motion.div>

            <motion.div className="bento-card-small" {...fadeUp}>
              <h3 className="impact-strip-item-title" style={{ color: "#0066cc" }}>More Accurate</h3>
              <p className="impact-strip-item-desc">Apply automated validation and business rules consistently.</p>
            </motion.div>

            <motion.div className="bento-card-small" {...fadeUp}>
              <h3 className="impact-strip-item-title" style={{ color: "#0066cc" }}>More Scalable</h3>
              <p className="impact-strip-item-desc">Handle high-volume processes without proportionally increasing manual effort.</p>
            </motion.div>

            <motion.div className="bento-card-small" {...fadeUp} style={{ gridColumn: "span 2" }}>
              <h3 className="impact-strip-item-title" style={{ color: "#0066cc" }}>More Connected</h3>
              <p className="impact-strip-item-desc">Bring documents, data, workflows, and systems together into one unified intelligence fabric.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 09 — RELATED PRODUCTS */}
      <section className="apple-section">
        <motion.div className="apple-header-left" {...fadeUp}>
          <span className="theme-domain-tag">RELATED PRODUCTS</span>
          <h2 className="apple-section-title">Technology for every layer of banking.</h2>
        </motion.div>

        <div className="related-products-grid">
          <motion.div className="related-product-item is-primary" {...fadeUp}>
            <div>
              <span className="product-tag-pill">Primary Platform</span>
              <h3 className="product-item-name">ACE</h3>
              <div className="product-item-sub">Enterprise Hyper Automation Platform</div>
              <p className="product-item-desc">
                Automate complex banking processes across documents, workflows, decisioning, reconciliation, and reporting.
              </p>
              <div className="product-relevant-to">
                <strong>Relevant to:</strong> KYC & Customer Onboarding · Credit Risk Assessment · Mortgage Loan Processing · Loan Approval · Bank Reconciliation · LEA Automation
              </div>
            </div>
            <Link to="/ace" className="theme-arrow-link">Explore ACE <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="related-product-item" {...fadeUp}>
            <div>
              <h3 className="product-item-name">IRIS</h3>
              <div className="product-item-sub">Enterprise AI Platform</div>
              <p className="product-item-desc">
                Bring enterprise AI capabilities to banking knowledge, analysis, decision support, and intelligent information workflows.
              </p>
              <div className="product-relevant-to">
                <strong>Relevant to:</strong> Use cases where banking teams need AI-powered knowledge access, analysis, or decision support.
              </div>
            </div>
            <Link to="/iris" className="theme-arrow-link">Explore IRIS <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="related-product-item" {...fadeUp}>
            <div>
              <h3 className="product-item-name">Voice Agent</h3>
              <div className="product-item-sub">AI-Powered Voice Automation</div>
              <p className="product-item-desc">
                Automate voice-based banking interactions and operational workflows across customer and service journeys.
              </p>
              <div className="product-relevant-to">
                <strong>Relevant to:</strong> Voice-driven customer interactions, service requests, follow-ups, and other banking workflows where conversational automation is applicable.
              </div>
            </div>
            <Link to="/voice-agents" className="theme-arrow-link">Explore Voice Agent <ChevronRight size={15} /></Link>
          </motion.div>
        </div>
      </section>

      {/* 10 — FINAL CTA */}
      <section className="apple-cta-section">
        <motion.div {...fadeUp}>
          <h2 className="apple-section-title theme-gradient-title" style={{ maxWidth: 700, margin: "0 auto 16px auto" }}>
            Ready to transform banking operations?
          </h2>
          <p className="apple-section-sub" style={{ margin: "0 auto 32px auto" }}>
            Turn complex processes into intelligent, scalable automation.
          </p>
          <div className="apple-btn-group">
            <Link to="/contact" className="theme-btn-primary">
              Talk to a Banking Expert →
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
