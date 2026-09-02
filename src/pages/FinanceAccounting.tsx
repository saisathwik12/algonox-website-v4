import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Calculator, Scale, ArrowRight, ChevronRight, 
  FileText, Brain, Workflow, GitCompare, Database, BarChart3,
  Coins, CheckCircle2, ShieldCheck, DollarSign, Check, Layers
} from "lucide-react";
import "./IndustryCommon.css";
import "./FinanceAccounting.css";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

export default function FinanceAccounting() {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    { code: "IONIC", name: "Intelligent Data Extraction", desc: "Extract and structure information from invoices, receipts, financial statements, and documents.", icon: FileText },
    { code: "GEARS", name: "Rules & Decision Engine", desc: "Apply validation rules, tax rules, matching logic, and approval policies consistently.", icon: Brain },
    { code: "Smartflows", name: "Workflow Orchestration", desc: "Connect finance teams, ERP systems, approval chains, and automated tasks.", icon: Workflow },
    { code: "LUCID", name: "Reconciliation Engine", desc: "Match and reconcile transactions, statements, ledgers, and accounts across systems.", icon: GitCompare },
    { code: "COSMOS", name: "Master Data Management", desc: "Manage vendor, customer, GL, and master data powering financial processes.", icon: Database },
    { code: "Instabolt", name: "Reports & Analytics", desc: "Turn financial and process data into reports, dashboards, and actionable insights.", icon: BarChart3 },
  ];

  return (
    <div className="industry-page finance-theme finance-page">
      {/* 01 — HERO (With Interactive 3-Way Match Verification Simulator) */}
      <section className="apple-hero-section">
        <div className="apple-hero-container">
          <motion.div {...fadeUp}>
            <div className="theme-domain-tag">
              <Calculator size={15} />
              <span>Finance & Accounting Hyper Automation</span>
            </div>
            <h1 className="apple-hero-title theme-gradient-title">
              Intelligent automation for modern finance and accounting.
            </h1>
            <p className="apple-hero-sub">
              Transform financial operations with AI-powered automation — from invoice processing and accounts payable to bank reconciliation, ledger matching, and financial reporting.
            </p>
            <div className="apple-btn-group">
              <a href="#solutions" className="theme-btn-primary">
                Explore Finance Solutions <ArrowRight size={16} />
              </a>
              <Link to="/contact" className="theme-btn-secondary">
                Talk to an Expert →
              </Link>
            </div>

            {/* Interactive 3-Way Match Verification Simulator */}
            <div className="match-simulator-box">
              <div className="match-header">
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Layers size={18} color="#0071e3" />
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#f1f5f9", letterSpacing: "0.04em" }}>
                    TOUCHLESS 3-WAY MATCH VERIFICATION
                  </span>
                </div>
                <div className="match-status-tag">
                  <Check size={14} color="#34d399" />
                  <span>ERP SYNC: 100% RECONCILED</span>
                </div>
              </div>

              <div className="match-3way-grid">
                <div className="match-doc-card">
                  <div className="match-doc-type">DOCUMENT 01</div>
                  <div className="match-doc-title">Purchase Order #PO-8821</div>
                  <div className="match-doc-val">QTY: 500 · $45,000.00</div>
                </div>
                <div className="match-doc-card">
                  <div className="match-doc-type">DOCUMENT 02</div>
                  <div className="match-doc-title">Goods Receipt #GR-1049</div>
                  <div className="match-doc-val">QTY: 500 · VERIFIED WAREHOUSE</div>
                </div>
                <div className="match-doc-card">
                  <div className="match-doc-type">DOCUMENT 03</div>
                  <div className="match-doc-title">Vendor Invoice #INV-920</div>
                  <div className="match-doc-val">LINE ITEMS: 100% MATCHED</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02 — THE FINANCE & ACCOUNTING CHALLENGE */}
      <section className="apple-section-fluid bg-subtle">
        <div className="apple-section-inner">
          <motion.div className="apple-header-left" {...fadeUp}>
            <span className="theme-domain-tag"><Scale size={14} /> THE FINANCE & ACCOUNTING CHALLENGE</span>
            <h2 className="apple-section-title">Finance moves on accuracy. Manual processes slow it down.</h2>
            <p className="apple-section-sub">
              Finance and accounting teams manage high-volume documents, repetitive data entry, multi-way matching, complex approval hierarchies, and reconciliation across disparate ERP and banking systems.
            </p>
            <p className="apple-body-text">
              Algonox brings intelligence, automation, and reconciliation together to help finance organizations reduce cycle times, eliminate manual errors, and maintain audit-ready control.
            </p>
          </motion.div>

          <div className="friction-heatmap-grid">
            <motion.div className="friction-heatmap-card" {...fadeUp}>
              <div className="friction-icon-badge"><FileText size={20} /></div>
              <h3 className="impact-strip-item-title">Document-Heavy Intake</h3>
              <p className="impact-strip-item-desc">Process high volumes of invoices, receipts, credit notes, and statements from thousands of vendors into structured data.</p>
            </motion.div>

            <motion.div className="friction-heatmap-card" {...fadeUp}>
              <div className="friction-icon-badge"><GitCompare size={20} /></div>
              <h3 className="impact-strip-item-title">Complex Matching & Reconciliation</h3>
              <p className="impact-strip-item-desc">Perform 2-way and 3-way matching across POs, goods receipts, invoices, and bank statements manually.</p>
            </motion.div>

            <motion.div className="friction-heatmap-card" {...fadeUp}>
              <div className="friction-icon-badge"><Workflow size={20} /></div>
              <h3 className="impact-strip-item-title">Slow Approval Cycles</h3>
              <p className="impact-strip-item-desc">Overcome manual handoffs, email approvals, and delayed exception routing that stretch payment cycles.</p>
            </motion.div>

            <motion.div className="friction-heatmap-card" {...fadeUp}>
              <div className="friction-icon-badge"><ShieldCheck size={20} /></div>
              <h3 className="impact-strip-item-title">Audit & Compliance Pressure</h3>
              <p className="impact-strip-item-desc">Ensure complete visibility, policy enforcement, and audit trails across all financial transactions and entries.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 03 — FINANCE & ACCOUNTING USE CASES (Precision Ledger Cards) */}
      <section className="apple-section">
        <motion.div className="apple-header-centered" {...fadeUp}>
          <span className="theme-domain-tag"><Coins size={14} /> FINANCE & ACCOUNTING USE CASES</span>
          <h2 className="apple-section-title">Automation built around financial operations.</h2>
          <p className="apple-section-sub">
            From invoice capture to bank reconciliation, ledger matching, and reporting, automate the critical processes that power your enterprise.
          </p>
        </motion.div>

        <div className="ledger-grid">
          <motion.div className="ledger-card" {...fadeUp}>
            <div>
              <span className="ledger-badge">ACCOUNTS PAYABLE</span>
              <h3 className="ledger-title">Accounts Payable & Invoice Processing</h3>
              <p className="ledger-desc">Extract, validate, 3-way match, route for approval, and post invoice data directly into ERP systems at scale.</p>
            </div>
            <Link to="/invoice-processing" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="ledger-card" {...fadeUp}>
            <div>
              <span className="ledger-badge">RECONCILIATION</span>
              <h3 className="ledger-title">Bank & GL Reconciliation</h3>
              <p className="ledger-desc">Automate transaction matching, exception detection, rule-based resolution, and ledger reconciliations across banking partners.</p>
            </div>
            <Link to="/lucid-reconciliations" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="ledger-card" {...fadeUp}>
            <div>
              <span className="ledger-badge">VENDOR AUDIT</span>
              <h3 className="ledger-title">Vendor Onboarding & Compliance</h3>
              <p className="ledger-desc">Streamline vendor document collection, tax validation, bank detail verification, and master data updates.</p>
            </div>
            <Link to="/kyc-aml" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="ledger-card" {...fadeUp}>
            <div>
              <span className="ledger-badge">EXPENSES</span>
              <h3 className="ledger-title">Expense Report Auditing</h3>
              <p className="ledger-desc">Extract receipt data, cross-check against corporate policies, flag policy violations, and route for automated approval.</p>
            </div>
            <Link to="/resources" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="ledger-card" {...fadeUp}>
            <div>
              <span className="ledger-badge">PERIOD CLOSE</span>
              <h3 className="ledger-title">Financial Close & Reporting</h3>
              <p className="ledger-desc">Accelerate period-end close workflows with automated checklist execution, data consolidation, and financial statement generation.</p>
            </div>
            <Link to="/resources" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>
        </div>
      </section>

      {/* 04 — SOLUTIONS FOR FINANCE & ACCOUNTING */}
      <section className="apple-section-fluid bg-alt" id="solutions">
        <div className="apple-section-inner">
          <motion.div className="apple-header-left" {...fadeUp}>
            <span className="theme-domain-tag"><DollarSign size={14} /> SOLUTIONS FOR FINANCE</span>
            <h2 className="apple-section-title">One financial ecosystem. Multiple ways to automate.</h2>
            <p className="apple-section-sub">
              Bring invoice intelligence, workflow automation, reconciliation, and data processing together across finance operations.
            </p>
          </motion.div>

          <div className="solutions-list">
            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Invoice & Accounts Payable Automation</div>
              <div className="solution-desc">Extract, validate, match, and post invoice data with minimal human intervention.</div>
              <Link to="/invoice-processing" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>

            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Reconciliation Automation</div>
              <div className="solution-desc">Automate multi-way data matching, exception handling, and ledger reconciliation across accounts.</div>
              <Link to="/lucid-reconciliations" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>

            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Intelligent Document Processing</div>
              <div className="solution-desc">Extract and validate information from receipts, tax forms, contracts, and financial statements.</div>
              <Link to="/intelligent-document-processing" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>

            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Workflow Automation</div>
              <div className="solution-desc">Connect teams, ERPs, approval rules, and automated tasks into unified financial workflows.</div>
              <Link to="/workflow-automation" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>

            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Data Integration & Processing</div>
              <div className="solution-desc">Bring financial data from multiple ERPs, banks, and subledgers together for consolidated reporting.</div>
              <Link to="/process-automation" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 05 — POWERED BY ACE */}
      <section className="apple-section">
        <motion.div className="apple-header-centered" {...fadeUp}>
          <span className="theme-domain-tag"><Brain size={14} /> POWERED BY ACE</span>
          <h2 className="apple-section-title">One platform. Built for financial precision.</h2>
          <p className="apple-section-sub">
            ACE combines specialized capabilities to automate financial workflows — from invoice extraction and 3-way matching to reconciliation, journal entry creation, and analytics.
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

      {/* 06 — FEATURED WORKFLOW (3-Way Match Stepped AP Track) */}
      <section className="apple-section-fluid bg-subtle">
        <div className="apple-section-inner">
          <motion.div className="apple-header-centered" {...fadeUp}>
            <span className="theme-domain-tag"><Workflow size={14} /> FEATURED WORKFLOW</span>
            <p className="apple-hero-sub" style={{ marginBottom: 6 }}>From invoice arrival to ERP entry.</p>
            <h2 className="apple-section-title">Accounts Payable invoice processing, automated.</h2>
          </motion.div>

          <div className="match-track-container">
            {[
              { num: "01", title: "Invoice Intake", tag: "Multi-Channel" },
              { num: "02", title: "Line-Item Extraction", tag: "Tax & Total" },
              { num: "03", title: "PO & GR Matching", tag: "3-Way Match" },
              { num: "04", title: "Approval Routing", tag: "Exception Smart" },
              { num: "05", title: "ERP Posting", tag: "SAP / Oracle" },
              { num: "06", title: "Reconciliation", tag: "GL Balanced" },
            ].map((node) => (
              <motion.div key={node.title} className="match-track-node" {...fadeUp}>
                <div className="match-track-num">{node.num}</div>
                <div className="match-track-title">{node.title}</div>
                <div className="match-track-tag">{node.tag}</div>
              </motion.div>
            ))}
          </div>

          <motion.div className="workflow-supporting" {...fadeUp}>
            <p className="apple-body-text">
              ACE automates the entire accounts payable lifecycle — extracting line items, matching against purchase orders and receipts, routing exceptions, and posting directly into your ERP.
            </p>
            <div style={{ marginTop: 22 }}>
              <Link to="/invoice-processing" className="theme-btn-secondary">
                Explore Invoice Automation →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 07 — CASE STUDY HIGHLIGHTS */}
      <section className="apple-section">
        <motion.div className="apple-header-left" {...fadeUp}>
          <span className="theme-domain-tag"><BarChart3 size={14} /> CASE STUDY HIGHLIGHTS</span>
          <h2 className="apple-section-title">Finance automation. Proven in practice.</h2>
        </motion.div>

        <div className="case-studies-container">
          <motion.div className="case-study-block" {...fadeUp}>
            <h3 className="case-study-title">Invoice Processing Automation</h3>
            <div className="case-study-subtitle">Scale accounts payable with touchless invoice matching.</div>
            <p className="case-study-desc">Extract invoice header and line items, perform automated 3-way matching, and post into SAP/Oracle ERPs.</p>
            <div className="case-metrics-row">
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">70%</div>
                <div className="case-metric-lbl">FTE reduction</div>
              </div>
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">90%</div>
                <div className="case-metric-lbl">Faster cycle time</div>
              </div>
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">99%</div>
                <div className="case-metric-lbl">Extraction accuracy</div>
              </div>
            </div>
            <Link to="/resources" className="theme-arrow-link">Read Case Study <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="case-study-block" {...fadeUp}>
            <h3 className="case-study-title">Multi-Bank Reconciliation</h3>
            <div className="case-study-subtitle">Eliminate manual matching across high-volume accounts.</div>
            <p className="case-study-desc">Automate multi-entity bank statement collection, transaction matching, exception handling, and ledger reconciliation.</p>
            <div className="case-metrics-row">
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">65%</div>
                <div className="case-metric-lbl">Cost reduction</div>
              </div>
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">80%</div>
                <div className="case-metric-lbl">Faster month-end close</div>
              </div>
            </div>
            <Link to="/resources" className="theme-arrow-link">Read Case Study <ChevronRight size={15} /></Link>
          </motion.div>
        </div>
      </section>

      {/* 08 — FINANCE IMPACT (Precision Scorecard) */}
      <section className="apple-section-fluid bg-alt">
        <div className="apple-section-inner">
          <motion.div className="apple-header-centered" {...fadeUp}>
            <span className="theme-domain-tag"><CheckCircle2 size={14} /> FINANCE IMPACT</span>
            <h2 className="apple-section-title">Make every financial process work smarter.</h2>
          </motion.div>

          <div className="finance-scorecard-grid">
            <motion.div className="finance-scorecard-item" {...fadeUp}>
              <h3 className="impact-strip-item-title" style={{ color: "#b45309" }}>Faster Close</h3>
              <p className="impact-strip-item-desc">Accelerate invoice processing, reconciliations, and period-end close cycles.</p>
            </motion.div>

            <motion.div className="finance-scorecard-item" {...fadeUp}>
              <h3 className="impact-strip-item-title" style={{ color: "#b45309" }}>More Accurate</h3>
              <p className="impact-strip-item-desc">Eliminate manual entry errors and apply matching rules with strict precision.</p>
            </motion.div>

            <motion.div className="finance-scorecard-item" {...fadeUp}>
              <h3 className="impact-strip-item-title" style={{ color: "#b45309" }}>More Scalable</h3>
              <p className="impact-strip-item-desc">Handle surges in transaction volume without expanding headcount.</p>
            </motion.div>

            <motion.div className="finance-scorecard-item" {...fadeUp}>
              <h3 className="impact-strip-item-title" style={{ color: "#b45309" }}>More Compliant</h3>
              <p className="impact-strip-item-desc">Maintain continuous audit readiness with immutable digital logs for every step.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 09 — RELATED PRODUCTS */}
      <section className="apple-section">
        <motion.div className="apple-header-left" {...fadeUp}>
          <span className="theme-domain-tag">RELATED PRODUCTS</span>
          <h2 className="apple-section-title">Technology for every layer of finance and accounting.</h2>
        </motion.div>

        <div className="related-products-grid">
          <motion.div className="related-product-item is-primary" {...fadeUp}>
            <div>
              <span className="product-tag-pill">Primary Platform</span>
              <h3 className="product-item-name">ACE</h3>
              <div className="product-item-sub">Enterprise Hyper Automation Platform</div>
              <p className="product-item-desc">
                Automate complex financial processes across documents, workflows, decisioning, reconciliation, and ERP integration.
              </p>
              <div className="product-relevant-to">
                <strong>Relevant to:</strong> Invoice processing · Bank reconciliation · Vendor onboarding · Expense audit · Period-end close
              </div>
            </div>
            <Link to="/ace" className="theme-arrow-link">Explore ACE <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="related-product-item" {...fadeUp}>
            <div>
              <h3 className="product-item-name">IRIS</h3>
              <div className="product-item-sub">Enterprise AI Platform</div>
              <p className="product-item-desc">
                Bring enterprise AI capabilities to financial analysis, policy queries, and spend intelligence workflows where applicable.
              </p>
            </div>
            <Link to="/iris" className="theme-arrow-link">Explore IRIS <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="related-product-item" {...fadeUp}>
            <div>
              <h3 className="product-item-name">Voice Agent</h3>
              <div className="product-item-sub">AI-Powered Voice Automation</div>
              <p className="product-item-desc">
                Automate vendor payment inquiries, collections outreach, and internal helpdesk workflows with natural voice automation.
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
            Ready to transform finance and accounting operations?
          </h2>
          <p className="apple-section-sub" style={{ margin: "0 auto 32px auto" }}>
            Turn complex financial workflows into intelligent, scalable automation.
          </p>
          <div className="apple-btn-group">
            <Link to="/contact" className="theme-btn-primary">
              Talk to a Finance Expert →
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
