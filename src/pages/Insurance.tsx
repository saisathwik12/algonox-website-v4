import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, FileCheck, ArrowRight, ChevronRight, 
  FileText, Brain, Workflow, GitCompare, Database, BarChart3,
  Umbrella, CheckCircle2, ShieldAlert, FileSpreadsheet, Shield
} from "lucide-react";
import "./IndustryCommon.css";
import "./Insurance.css";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

export default function Insurance() {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    { code: "IONIC", name: "Intelligent Data Extraction", desc: "Extract and structure information from policy documents, claims forms, loss reports, and medical records.", icon: FileText },
    { code: "GEARS", name: "Rules & Decision Engine", desc: "Apply underwriting guidelines, fraud rules, eligibility checks, and settlement logic consistently.", icon: Brain },
    { code: "Smartflows", name: "Workflow Orchestration", desc: "Connect adjusters, policyholders, core systems, and automated tasks into unified workflows.", icon: Workflow },
    { code: "LUCID", name: "Reconciliation Engine", desc: "Match premium receipts, claims payouts, and broker commissions across financial systems.", icon: GitCompare },
    { code: "COSMOS", name: "Master Data Management", desc: "Manage policyholder, agent, coverage, and claims data powering insurance operations.", icon: Database },
    { code: "Instabolt", name: "Reports & Analytics", desc: "Turn claims, loss ratios, and operational data into dashboards and predictive insights.", icon: BarChart3 },
  ];

  return (
    <div className="industry-page insurance-theme insurance-page">
      {/* 01 — HERO (With STP Claims Radar Visualizer) */}
      <section className="apple-hero-section">
        <div className="apple-hero-container">
          <motion.div {...fadeUp}>
            <div className="theme-domain-tag">
              <ShieldCheck size={15} />
              <span>Insurance Intelligence & Underwriting Automation</span>
            </div>
            <h1 className="apple-hero-title theme-gradient-title">
              Intelligent automation for modern insurance.
            </h1>
            <p className="apple-hero-sub">
              Transform complex insurance workflows with AI-powered automation — from first notice of loss and claims adjudication to underwriting support, policy servicing, and reconciliation.
            </p>
            <div className="apple-btn-group">
              <a href="#solutions" className="theme-btn-primary">
                Explore Insurance Solutions <ArrowRight size={16} />
              </a>
              <Link to="/contact" className="theme-btn-secondary">
                Talk to an Expert →
              </Link>
            </div>

            {/* Straight-Through Processing (STP) Claims Radar Sim */}
            <div className="stp-radar-box">
              <div className="stp-header">
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Shield size={18} color="#0071e3" />
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#f1f5f9", letterSpacing: "0.04em" }}>
                    AEGIS STRAIGHT-THROUGH CLAIMS RADAR
                  </span>
                </div>
                <div className="stp-status-tag">
                  <div className="stp-signal-dot" />
                  <span>AUTO-ADJUDICATED IN SECONDS</span>
                </div>
              </div>

              <div className="stp-flight-grid">
                <div className="stp-flight-card">
                  <div className="stp-card-stage">STAGE 01: FNOL INTAKE</div>
                  <div className="stp-card-name">Auto Collision Claim #CLM-4821</div>
                  <div className="stp-card-state">DOCS EXTRACTED (92% ACCURACY)</div>
                </div>
                <div className="stp-flight-card">
                  <div className="stp-card-stage">STAGE 02: FRAUD & COVERAGE</div>
                  <div className="stp-card-name">Active Policy #POL-9021</div>
                  <div className="stp-card-state">FRAUD RISK: 0.01 (CLEARED)</div>
                </div>
                <div className="stp-flight-card">
                  <div className="stp-card-stage">STAGE 03: SETTLEMENT</div>
                  <div className="stp-card-name">Instant Payout Approved</div>
                  <div className="stp-card-state">$3,450.00 DISPATCHED</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02 — THE INSURANCE CHALLENGE */}
      <section className="apple-section-fluid bg-subtle">
        <div className="apple-section-inner">
          <motion.div className="apple-header-left" {...fadeUp}>
            <span className="theme-domain-tag"><Umbrella size={14} /> THE INSURANCE CHALLENGE</span>
            <h2 className="apple-section-title">Insurance moves on trust. Manual operations create friction.</h2>
            <p className="apple-section-sub">
              Insurance carriers face escalating document volumes, complex policy wordings, legacy core system silos, fraud risks, and high customer expectations for fast claims turnaround.
            </p>
            <p className="apple-body-text">
              Algonox combines document AI, decision rules, and workflow orchestration to help insurers settle claims faster, underwrite with greater accuracy, and deliver seamless policyholder experiences.
            </p>
          </motion.div>

          <div className="challenge-grid">
            <motion.div className="challenge-item" {...fadeUp}>
              <div className="challenge-item-icon"><FileSpreadsheet size={18} /></div>
              <h3 className="impact-strip-item-title">Unstructured Claims Intake</h3>
              <p className="impact-strip-item-desc">Process diverse claims documents, accident photos, repair estimates, and medical records into structured data.</p>
            </motion.div>

            <motion.div className="challenge-item" {...fadeUp}>
              <div className="challenge-item-icon"><Brain size={18} /></div>
              <h3 className="impact-strip-item-title">Complex Policy Evaluation</h3>
              <p className="impact-strip-item-desc">Apply intricate policy coverage limits, deductibles, endorsements, and exclusions accurately.</p>
            </motion.div>

            <motion.div className="challenge-item" {...fadeUp}>
              <div className="challenge-item-icon"><Workflow size={18} /></div>
              <h3 className="impact-strip-item-title">Fragmented Core Systems</h3>
              <p className="impact-strip-item-desc">Bridge legacy policy admin, billing, and claims systems with automated data flows and orchestration.</p>
            </motion.div>

            <motion.div className="challenge-item" {...fadeUp}>
              <div className="challenge-item-icon"><ShieldAlert size={18} /></div>
              <h3 className="impact-strip-item-title">Fraud & Leakage Risks</h3>
              <p className="impact-strip-item-desc">Detect anomalies, cross-reference historical data, and flag suspicious claims for expert investigation.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 03 — INSURANCE USE CASES (Aegis Protection Cards) */}
      <section className="apple-section">
        <motion.div className="apple-header-centered" {...fadeUp}>
          <span className="theme-domain-tag"><FileCheck size={14} /> INSURANCE USE CASES</span>
          <h2 className="apple-section-title">Automation built around the policyholder lifecycle.</h2>
          <p className="apple-section-sub">
            From first notice of loss to straight-through claims adjudication, underwriting analysis, and premium reconciliation, automate what matters most.
          </p>
        </motion.div>

        <div className="aegis-grid">
          <motion.div className="aegis-card" {...fadeUp}>
            <div>
              <span className="aegis-badge">CLAIMS INTAKE</span>
              <h3 className="aegis-title">First Notice of Loss (FNOL) & Claims Intake</h3>
              <p className="aegis-desc">Capture FNOL data from emails, portal uploads, voice calls, and forms, automatically routing to the right claims track.</p>
            </div>
            <Link to="/claims-processing" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="aegis-card" {...fadeUp}>
            <div>
              <span className="aegis-badge">UNDERWRITING</span>
              <h3 className="aegis-title">Underwriting Document Extraction & Triaging</h3>
              <p className="aegis-desc">Extract risk information from submissions, SOVs, loss runs, and financial statements to accelerate underwriting decisions.</p>
            </div>
            <Link to="/intelligent-document-processing" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="aegis-card" {...fadeUp}>
            <div>
              <span className="aegis-badge">POLICY ADMIN</span>
              <h3 className="aegis-title">Policy Servicing & Endorsement Automation</h3>
              <p className="aegis-desc">Automate policy change requests, address updates, certificate of insurance issuance, and coverage endorsements.</p>
            </div>
            <Link to="/workflow-automation" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="aegis-card" {...fadeUp}>
            <div>
              <span className="aegis-badge">COMMISSIONS</span>
              <h3 className="aegis-title">Premium & Broker Commission Reconciliation</h3>
              <p className="aegis-desc">Match incoming premium payments, broker bordereaux statements, and commission splits across finance systems.</p>
            </div>
            <Link to="/lucid-reconciliations" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="aegis-card" {...fadeUp}>
            <div>
              <span className="aegis-badge">BODILY INJURY</span>
              <h3 className="aegis-title">Medical Record & Loss Run Analysis</h3>
              <p className="aegis-desc">Extract clinical findings, diagnostic codes, and loss history from lengthy medical records for accurate bodily injury evaluation.</p>
            </div>
            <Link to="/resources" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>
        </div>
      </section>

      {/* 04 — SOLUTIONS FOR INSURANCE */}
      <section className="apple-section-fluid bg-alt" id="solutions">
        <div className="apple-section-inner">
          <motion.div className="apple-header-left" {...fadeUp}>
            <span className="theme-domain-tag"><ShieldCheck size={14} /> SOLUTIONS FOR INSURANCE</span>
            <h2 className="apple-section-title">One insurance ecosystem. Multiple ways to automate.</h2>
            <p className="apple-section-sub">
              Bring document AI, decision rules, claims workflow automation, and financial reconciliation together across insurance operations.
            </p>
          </motion.div>

          <div className="solutions-list">
            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Intelligent Document Processing</div>
              <div className="solution-desc">Extract, validate, and structure information from policies, loss runs, claims forms, and medical records.</div>
              <Link to="/intelligent-document-processing" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>

            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Workflow Automation</div>
              <div className="solution-desc">Connect adjusters, policy admin systems, rules, and external partners into streamlined workflows.</div>
              <Link to="/workflow-automation" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>

            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Reconciliation Automation</div>
              <div className="solution-desc">Automate matching and reconciliation of premium payments, claims payouts, and broker statements.</div>
              <Link to="/lucid-reconciliations" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>

            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Conversational AI & Voice Agents</div>
              <div className="solution-desc">Automate FNOL intake, policy status queries, and claims follow-up calls with intelligent voice agents.</div>
              <Link to="/voice-agents" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>

            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Data Integration & Processing</div>
              <div className="solution-desc">Unify policy, billing, and claims data across disparate legacy core platforms.</div>
              <Link to="/process-automation" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 05 — POWERED BY ACE */}
      <section className="apple-section">
        <motion.div className="apple-header-centered" {...fadeUp}>
          <span className="theme-domain-tag"><Brain size={14} /> POWERED BY ACE</span>
          <h2 className="apple-section-title">One platform. Built for insurance complexity.</h2>
          <p className="apple-section-sub">
            ACE combines specialized capabilities to automate insurance operations — from FNOL intake and document classification to policy validation, rules decisioning, and settlement execution.
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

      {/* 06 — FEATURED WORKFLOW (Stepped Adjudication Runway) */}
      <section className="apple-section-fluid bg-subtle">
        <div className="apple-section-inner">
          <motion.div className="apple-header-centered" {...fadeUp}>
            <span className="theme-domain-tag"><Workflow size={14} /> FEATURED WORKFLOW</span>
            <p className="apple-hero-sub" style={{ marginBottom: 6 }}>From loss notice to payout.</p>
            <h2 className="apple-section-title">Claims intake to settlement, automated.</h2>
          </motion.div>

          <div className="adjudication-runway-container">
            {[
              { num: "01", title: "FNOL Loss Notice", tag: "Multi-Source" },
              { num: "02", title: "Doc & Image AI", tag: "Damage Extract" },
              { num: "03", title: "Coverage Check", tag: "Policy Active" },
              { num: "04", title: "Fraud Scoring", tag: "Low Risk" },
              { num: "05", title: "Adjudication", tag: "Auto-Approved" },
              { num: "06", title: "Instant Payout", tag: "ACH Settle" },
            ].map((node) => (
              <motion.div key={node.title} className="adjudication-node" {...fadeUp}>
                <div className="adjudication-num">{node.num}</div>
                <div className="adjudication-title">{node.title}</div>
                <div className="adjudication-tag">{node.tag}</div>
              </motion.div>
            ))}
          </div>

          <motion.div className="workflow-supporting" {...fadeUp}>
            <p className="apple-body-text">
              ACE automates the full claims workflow — extracting data from forms and damage reports, validating coverage in real time, routing exceptions, and enabling straight-through processing for standard claims.
            </p>
            <div style={{ marginTop: 22 }}>
              <Link to="/claims-processing" className="theme-btn-secondary">
                Explore Claims Automation →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 07 — CASE STUDY HIGHLIGHTS */}
      <section className="apple-section">
        <motion.div className="apple-header-left" {...fadeUp}>
          <span className="theme-domain-tag"><BarChart3 size={14} /> CASE STUDY HIGHLIGHTS</span>
          <h2 className="apple-section-title">Insurance automation. Proven in practice.</h2>
        </motion.div>

        <div className="case-studies-container">
          <motion.div className="case-study-block" {...fadeUp}>
            <h3 className="case-study-title">Auto & Property Claims Automation</h3>
            <div className="case-study-subtitle">Fast-track claim adjudication with intelligent document analysis.</div>
            <p className="case-study-desc">Automate FNOL intake, policy coverage lookup, damage estimate extraction, and payment processing.</p>
            <div className="case-metrics-row">
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">75%</div>
                <div className="case-metric-lbl">Faster turnaround</div>
              </div>
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">50%</div>
                <div className="case-metric-lbl">FTE reduction</div>
              </div>
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">92%</div>
                <div className="case-metric-lbl">Extraction accuracy</div>
              </div>
            </div>
            <Link to="/resources" className="theme-arrow-link">Read Case Study <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="case-study-block" {...fadeUp}>
            <h3 className="case-study-title">Commercial Underwriting Intake</h3>
            <div className="case-study-subtitle">Eliminate manual submission triage for underwriters.</div>
            <p className="case-study-desc">Extract broker emails, statement of values (SOVs), loss runs, and financial tables into standardized underwriting models.</p>
            <div className="case-metrics-row">
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">80%</div>
                <div className="case-metric-lbl">Time saved per submission</div>
              </div>
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">4x</div>
                <div className="case-metric-lbl">Quote capacity increase</div>
              </div>
            </div>
            <Link to="/resources" className="theme-arrow-link">Read Case Study <ChevronRight size={15} /></Link>
          </motion.div>
        </div>
      </section>

      {/* 08 — INSURANCE IMPACT (Guardian Shield Bento) */}
      <section className="apple-section-fluid bg-alt">
        <div className="apple-section-inner">
          <motion.div className="apple-header-centered" {...fadeUp}>
            <span className="theme-domain-tag"><CheckCircle2 size={14} /> INSURANCE IMPACT</span>
            <h2 className="apple-section-title">Make every insurance process work smarter.</h2>
          </motion.div>

          <div className="guardian-bento-grid">
            <motion.div className="guardian-bento-card" {...fadeUp}>
              <h3 className="impact-strip-item-title" style={{ color: "#1d4ed8" }}>Faster</h3>
              <p className="impact-strip-item-desc">Settle claims in hours instead of weeks with straight-through processing.</p>
            </motion.div>

            <motion.div className="guardian-bento-card" {...fadeUp}>
              <h3 className="impact-strip-item-title" style={{ color: "#1d4ed8" }}>More Accurate</h3>
              <p className="impact-strip-item-desc">Apply policy terms and underwriting rules consistently with zero manual slippage.</p>
            </motion.div>

            <motion.div className="guardian-bento-card" {...fadeUp}>
              <h3 className="impact-strip-item-title" style={{ color: "#1d4ed8" }}>More Scalable</h3>
              <p className="impact-strip-item-desc">Absorb catastrophic claim volume surges without backlogs or operational strain.</p>
            </motion.div>

            <motion.div className="guardian-bento-card" {...fadeUp}>
              <h3 className="impact-strip-item-title" style={{ color: "#1d4ed8" }}>More Responsive</h3>
              <p className="impact-strip-item-desc">Deliver proactive updates and instant communications across every customer touchpoint.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 09 — RELATED PRODUCTS */}
      <section className="apple-section">
        <motion.div className="apple-header-left" {...fadeUp}>
          <span className="theme-domain-tag">RELATED PRODUCTS</span>
          <h2 className="apple-section-title">Technology for every layer of insurance operations.</h2>
        </motion.div>

        <div className="related-products-grid">
          <motion.div className="related-product-item is-primary" {...fadeUp}>
            <div>
              <span className="product-tag-pill">Primary Platform</span>
              <h3 className="product-item-name">ACE</h3>
              <div className="product-item-sub">Enterprise Hyper Automation Platform</div>
              <p className="product-item-desc">
                Automate complex insurance workflows across document processing, policy validation, claims adjudication, and reconciliation.
              </p>
              <div className="product-relevant-to">
                <strong>Relevant to:</strong> FNOL intake · Underwriting triage · Claims adjudication · Policy servicing · Premium reconciliation
              </div>
            </div>
            <Link to="/ace" className="theme-arrow-link">Explore ACE <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="related-product-item" {...fadeUp}>
            <div>
              <h3 className="product-item-name">Voice Agent</h3>
              <div className="product-item-sub">AI-Powered Voice Automation</div>
              <p className="product-item-desc">
                Automate phone-based claims intake, policyholder support, payment reminders, and status updates with conversational voice AI.
              </p>
            </div>
            <Link to="/voice-agents" className="theme-arrow-link">Explore Voice Agent <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="related-product-item" {...fadeUp}>
            <div>
              <h3 className="product-item-name">IRIS</h3>
              <div className="product-item-sub">Enterprise AI Platform</div>
              <p className="product-item-desc">
                Provide adjusters and underwriters with intelligent policy search, clause comparison, and historical claim insights.
              </p>
            </div>
            <Link to="/iris" className="theme-arrow-link">Explore IRIS <ChevronRight size={15} /></Link>
          </motion.div>
        </div>
      </section>

      {/* 10 — FINAL CTA */}
      <section className="apple-cta-section">
        <motion.div {...fadeUp}>
          <h2 className="apple-section-title theme-gradient-title" style={{ maxWidth: 700, margin: "0 auto 16px auto" }}>
            Ready to transform insurance operations?
          </h2>
          <p className="apple-section-sub" style={{ margin: "0 auto 32px auto" }}>
            Turn complex insurance processes into intelligent, scalable automation.
          </p>
          <div className="apple-btn-group">
            <Link to="/contact" className="theme-btn-primary">
              Talk to an Insurance Expert →
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
