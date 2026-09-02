import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Tv, Sparkles, ArrowRight, ChevronRight, 
  FileText, Brain, Workflow, GitCompare, Database, BarChart3,
  Radio, Layers, CheckCircle2, LineChart
} from "lucide-react";
import "./IndustryCommon.css";
import "./Media.css";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

export default function Media() {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    { code: "IONIC", name: "Intelligent Data Extraction", desc: "Extract and structure information from media, campaign, and contract documents.", icon: FileText },
    { code: "GEARS", name: "Rules & Decision Engine", desc: "Apply validation rules, business logic, and operational decisioning consistently.", icon: Brain },
    { code: "Smartflows", name: "Workflow Orchestration", desc: "Connect media operations, teams, systems, and actions into streamlined workflows.", icon: Workflow },
    { code: "LUCID", name: "Reconciliation Engine", desc: "Match and validate operational and financial data across media systems.", icon: GitCompare },
    { code: "COSMOS", name: "Master Data Management", desc: "Manage the data that powers media planning, operations, and reporting.", icon: Database },
    { code: "Instabolt", name: "Reports & Analytics", desc: "Turn operational and campaign data into actionable insights.", icon: BarChart3 },
  ];

  return (
    <div className="industry-page media-theme media-page">
      {/* 01 — HERO (With Dynamic Multi-Channel Spectrum Equalizer Sim) */}
      <section className="apple-hero-section">
        <div className="apple-hero-container">
          <motion.div {...fadeUp}>
            <div className="theme-domain-tag">
              <Tv size={15} />
              <span>Media Intelligence & Signal Automation</span>
            </div>
            <h1 className="apple-hero-title theme-gradient-title">
              Intelligent automation for modern media operations.
            </h1>
            <p className="apple-hero-sub">
              Transform complex media workflows with AI-powered automation — from campaign execution and marketing intelligence to document operations, billing, and reporting.
            </p>
            <div className="apple-btn-group">
              <a href="#solutions" className="theme-btn-primary">
                Explore Media Solutions <ArrowRight size={16} />
              </a>
              <Link to="/contact" className="theme-btn-secondary">
                Talk to an Expert →
              </Link>
            </div>

            {/* Multi-Channel Spectrum Equalizer Sim */}
            <div className="spectrum-visualizer-box">
              <div className="spectrum-header">
                <div className="spectrum-tag">
                  <Sparkles size={14} />
                  <span>SPECTRA SIGNAL ENGINE — MULTI-CHANNEL AD OPS</span>
                </div>
                <div className="equalizer-bars">
                  <div className="eq-bar" />
                  <div className="eq-bar" />
                  <div className="eq-bar" />
                  <div className="eq-bar" />
                  <div className="eq-bar" />
                </div>
              </div>

              <div className="channel-stream-grid">
                <div className="channel-stream-card">
                  <div className="channel-stream-type">CHANNEL 01</div>
                  <div className="channel-stream-name">CTV & OTT STREAMS</div>
                </div>
                <div className="channel-stream-card">
                  <div className="channel-stream-type">CHANNEL 02</div>
                  <div className="channel-stream-name">PROGRAMMATIC ADS</div>
                </div>
                <div className="channel-stream-card">
                  <div className="channel-stream-type">CHANNEL 03</div>
                  <div className="channel-stream-name">INSERTION ORDERS</div>
                </div>
                <div className="channel-stream-card">
                  <div className="channel-stream-type">CHANNEL 04</div>
                  <div className="channel-stream-name">DELIVERY BILLING</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02 — THE MEDIA CHALLENGE */}
      <section className="apple-section-fluid bg-subtle">
        <div className="apple-section-inner">
          <motion.div className="apple-header-left" {...fadeUp}>
            <span className="theme-domain-tag"><Sparkles size={14} /> THE MEDIA CHALLENGE</span>
            <h2 className="apple-section-title">Media operations move across platforms, data, and fast-moving workflows.</h2>
            <p className="apple-section-sub">
              Media organizations manage high-velocity operations across campaigns, cross-platform performance data, contracts, billing, partner coordination, and reporting.
            </p>
            <p className="apple-body-text">
              Algonox brings intelligence, automation, and operational analytics together to help media teams reduce manual effort, improve visibility, and execute faster across every channel.
            </p>
          </motion.div>

          <div className="challenge-grid">
            <motion.div className="challenge-item" {...fadeUp}>
              <div className="challenge-item-icon"><Layers size={18} /></div>
              <h3 className="challenge-item-title">Fragmented Data & Platforms</h3>
              <p className="challenge-item-desc">Bring together campaign, audience, and operational data from multiple platforms into one view.</p>
            </motion.div>

            <motion.div className="challenge-item" {...fadeUp}>
              <div className="challenge-item-icon"><Workflow size={18} /></div>
              <h3 className="challenge-item-title">Manual Operational Workflows</h3>
              <p className="challenge-item-desc">Reduce repetitive tasks across media planning, trafficking, billing, and reporting.</p>
            </motion.div>

            <motion.div className="challenge-item" {...fadeUp}>
              <div className="challenge-item-icon"><BarChart3 size={18} /></div>
              <h3 className="challenge-item-title">Cross-Platform Reporting</h3>
              <p className="challenge-item-desc">Automate data collection, validation, and dashboarding across advertising and operational channels.</p>
            </motion.div>

            <motion.div className="challenge-item" {...fadeUp}>
              <div className="challenge-item-icon"><GitCompare size={18} /></div>
              <h3 className="challenge-item-title">Billing & Reconciliation</h3>
              <p className="challenge-item-desc">Match delivery data, invoices, and contracts across partners and financial systems.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 03 — MEDIA USE CASES (Live Channel Feed Cards) */}
      <section className="apple-section">
        <motion.div className="apple-header-centered" {...fadeUp}>
          <span className="theme-domain-tag"><Radio size={14} /> MEDIA USE CASES</span>
          <h2 className="apple-section-title">Automation built around media operations.</h2>
          <p className="apple-section-sub">
            From campaign intelligence to invoice processing, reconciliation, and workflow automation, automate the processes that keep media moving.
          </p>
        </motion.div>

        <div className="channel-feed-grid">
          <motion.div className="channel-feed-card" {...fadeUp}>
            <div>
              <span className="channel-feed-badge">SPECTRA FEED 01</span>
              <h3 className="channel-feed-title">Cross-Platform Campaign Intelligence</h3>
              <p className="channel-feed-desc">Bring campaign signals, performance data, and operational metrics together across channels for real-time visibility and decision-making.</p>
            </div>
            <Link to="/spectra" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="channel-feed-card" {...fadeUp}>
            <div>
              <span className="channel-feed-badge">FINANCE FEED 02</span>
              <h3 className="channel-feed-title">Media Invoice Processing & Reconciliation</h3>
              <p className="channel-feed-desc">Extract, validate, match, and reconcile media invoices, insertion orders, and delivery data against contracts.</p>
            </div>
            <Link to="/invoice-processing" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="channel-feed-card" {...fadeUp}>
            <div>
              <span className="channel-feed-badge">AD OPS FEED 03</span>
              <h3 className="channel-feed-title">Operational Workflow Automation</h3>
              <p className="channel-feed-desc">Automate approvals, handoffs, notifications, and task orchestration across media and ad-ops teams.</p>
            </div>
            <Link to="/workflow-automation" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="channel-feed-card" {...fadeUp}>
            <div>
              <span className="channel-feed-badge">ANALYTICS FEED 04</span>
              <h3 className="channel-feed-title">Automated Reporting & Dashboards</h3>
              <p className="channel-feed-desc">Turn disparate media and operational data into automated reports, dashboards, and executive insights.</p>
            </div>
            <Link to="/resources" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="channel-feed-card" {...fadeUp}>
            <div>
              <span className="channel-feed-badge">CONTRACTS FEED 05</span>
              <h3 className="channel-feed-title">Contract & Rights Data Extraction</h3>
              <p className="channel-feed-desc">Extract terms, rights, dates, and financial conditions from media contracts and agreements into structured data.</p>
            </div>
            <Link to="/intelligent-document-processing" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>
        </div>
      </section>

      {/* 04 — SOLUTIONS FOR MEDIA */}
      <section className="apple-section-fluid bg-alt" id="solutions">
        <div className="apple-section-inner">
          <motion.div className="apple-header-left" {...fadeUp}>
            <span className="theme-domain-tag"><LineChart size={14} /> SOLUTIONS FOR MEDIA</span>
            <h2 className="apple-section-title">One media ecosystem. Multiple ways to automate.</h2>
            <p className="apple-section-sub">
              Bring operational intelligence, document processing, workflow automation, and reconciliation together across media operations.
            </p>
          </motion.div>

          <div className="solutions-list">
            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Marketing Intelligence & Operations (Spectra)</div>
              <div className="solution-desc">Turn complex media signals and performance data into operational intelligence and actionable decisions.</div>
              <Link to="/spectra" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>

            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Intelligent Document Processing</div>
              <div className="solution-desc">Extract, validate, and structure data from insertion orders, contracts, invoices, and media files.</div>
              <Link to="/intelligent-document-processing" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>

            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Workflow Automation</div>
              <div className="solution-desc">Connect teams, systems, approvals, and actions into streamlined media workflows.</div>
              <Link to="/workflow-automation" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>

            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Reconciliation Automation</div>
              <div className="solution-desc">Match and validate delivery data, invoices, and payments across platforms and systems.</div>
              <Link to="/lucid-reconciliations" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>

            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Data Integration & Processing</div>
              <div className="solution-desc">Bring media and operational data from multiple sources together for reporting and analysis.</div>
              <Link to="/process-automation" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 05 — POWERED BY ACE & SPECTRA */}
      <section className="apple-section">
        <motion.div className="apple-header-centered" {...fadeUp}>
          <span className="theme-domain-tag"><Brain size={14} /> POWERED BY ACE & SPECTRA</span>
          <h2 className="apple-section-title">Platforms built for data-driven media operations.</h2>
          <p className="apple-section-sub">
            Combine ACE's hyper-automation platform with Spectra's operational intelligence to transform how media teams process data, manage workflows, and make decisions.
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

        <div style={{ textAlign: "center", marginTop: 32, display: "flex", gap: 20, justifyContent: "center" }}>
          <Link to="/ace" className="theme-arrow-link" style={{ fontSize: 15 }}>
            Explore ACE <ArrowRight size={15} />
          </Link>
          <Link to="/spectra" className="theme-arrow-link" style={{ fontSize: 15 }}>
            Explore Spectra <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* 06 — FEATURED WORKFLOW (Broadcast Flight Timeline) */}
      <section className="apple-section-fluid bg-subtle">
        <div className="apple-section-inner">
          <motion.div className="apple-header-centered" {...fadeUp}>
            <span className="theme-domain-tag"><Workflow size={14} /> FEATURED WORKFLOW</span>
            <p className="apple-hero-sub" style={{ marginBottom: 6 }}>From insertion order to reconciliation.</p>
            <h2 className="apple-section-title">Media invoice processing and reconciliation, automated.</h2>
          </motion.div>

          <div className="broadcast-timeline-container">
            {[
              { num: "01", title: "IO & Invoice Intake", tag: "Multi-Format" },
              { num: "02", title: "Rate Extraction", tag: "Line Item Match" },
              { num: "03", title: "Contract Validation", tag: "Terms Check" },
              { num: "04", title: "Delivery Matching", tag: "Ad Server Sync" },
              { num: "05", title: "Approval Routing", tag: "Exception Smart" },
              { num: "06", title: "Posting & Export", tag: "ERP Updated" },
            ].map((node) => (
              <motion.div key={node.title} className="broadcast-node-card" {...fadeUp}>
                <div className="broadcast-node-num">{node.num}</div>
                <div className="broadcast-node-title">{node.title}</div>
                <div className="broadcast-node-tag">{node.tag}</div>
              </motion.div>
            ))}
          </div>

          <motion.div className="workflow-supporting" {...fadeUp}>
            <p className="apple-body-text">
              Automate the flow of media financial documents while reducing manual matching effort, improving accuracy, and accelerating processing cycles.
            </p>
            <div style={{ marginTop: 22 }}>
              <Link to="/invoice-processing" className="theme-btn-secondary">
                Explore Media Invoice Automation →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 07 — CASE STUDY HIGHLIGHTS */}
      <section className="apple-section">
        <motion.div className="apple-header-left" {...fadeUp}>
          <span className="theme-domain-tag"><BarChart3 size={14} /> CASE STUDY HIGHLIGHTS</span>
          <h2 className="apple-section-title">Media automation. Proven in practice.</h2>
        </motion.div>

        <div className="case-studies-container">
          <motion.div className="case-study-block" {...fadeUp}>
            <h3 className="case-study-title">Invoice Processing & Reconciliation</h3>
            <div className="case-study-subtitle">Accelerate financial operations in fast-moving media workflows.</div>
            <p className="case-study-desc">Automate data extraction, contract validation, delivery matching, and posting across high-volume media invoices.</p>
            <div className="case-metrics-row">
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">60%</div>
                <div className="case-metric-lbl">FTE reduction</div>
              </div>
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">85%</div>
                <div className="case-metric-lbl">AHT reduction</div>
              </div>
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">90%</div>
                <div className="case-metric-lbl">Automation rate</div>
              </div>
            </div>
            <Link to="/resources" className="theme-arrow-link">Read Case Study <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="case-study-block" {...fadeUp}>
            <h3 className="case-study-title">Campaign Operations & Reporting</h3>
            <div className="case-study-subtitle">Real-time visibility across multi-channel campaigns.</div>
            <p className="case-study-desc">Automate data collection, validation, and dashboarding across advertising channels and operational workflows.</p>
            <div className="case-metrics-row">
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">75%</div>
                <div className="case-metric-lbl">Faster reporting cycles</div>
              </div>
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">95%</div>
                <div className="case-metric-lbl">Data accuracy</div>
              </div>
            </div>
            <Link to="/resources" className="theme-arrow-link">Read Case Study <ChevronRight size={15} /></Link>
          </motion.div>
        </div>
      </section>

      {/* 08 — MEDIA IMPACT (Spectrum Ribbon) */}
      <section className="apple-section-fluid bg-alt">
        <div className="apple-section-inner">
          <motion.div className="apple-header-centered" {...fadeUp}>
            <span className="theme-domain-tag"><CheckCircle2 size={14} /> MEDIA IMPACT</span>
            <h2 className="apple-section-title">Make every media process work smarter.</h2>
          </motion.div>

          <div className="media-ribbon-grid">
            <motion.div className="media-ribbon-card" {...fadeUp}>
              <h3 className="impact-strip-item-title" style={{ color: "#e11d48" }}>Faster</h3>
              <p className="impact-strip-item-desc">Accelerate campaign operations, reporting cycles, and financial processing.</p>
            </motion.div>

            <motion.div className="media-ribbon-card" {...fadeUp}>
              <h3 className="impact-strip-item-title" style={{ color: "#e11d48" }}>More Accurate</h3>
              <p className="impact-strip-item-desc">Apply automated validation, matching, and business rules consistently.</p>
            </motion.div>

            <motion.div className="media-ribbon-card" {...fadeUp}>
              <h3 className="impact-strip-item-title" style={{ color: "#e11d48" }}>More Scalable</h3>
              <p className="impact-strip-item-desc">Handle high-volume campaigns, documents, and data streams with less manual dependency.</p>
            </motion.div>

            <motion.div className="media-ribbon-card" {...fadeUp}>
              <h3 className="impact-strip-item-title" style={{ color: "#e11d48" }}>More Connected</h3>
              <p className="impact-strip-item-desc">Bring platforms, data, workflows, and teams together.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 09 — RELATED PRODUCTS */}
      <section className="apple-section">
        <motion.div className="apple-header-left" {...fadeUp}>
          <span className="theme-domain-tag">RELATED PRODUCTS</span>
          <h2 className="apple-section-title">Technology for every layer of media operations.</h2>
        </motion.div>

        <div className="related-products-grid">
          <motion.div className="related-product-item is-primary" {...fadeUp}>
            <div>
              <span className="product-tag-pill">Primary Platform</span>
              <h3 className="product-item-name">Spectra</h3>
              <div className="product-item-sub">Marketing Intelligence & Operations Platform</div>
              <p className="product-item-desc">
                Operational intelligence for complex media signals, campaigns, and cross-channel performance data.
              </p>
              <div className="product-relevant-to">
                <strong>Relevant to:</strong> Campaign intelligence · Performance monitoring · Cross-channel analytics · Marketing operations
              </div>
            </div>
            <Link to="/spectra" className="theme-arrow-link">Explore Spectra <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="related-product-item is-primary" {...fadeUp}>
            <div>
              <span className="product-tag-pill">Primary Platform</span>
              <h3 className="product-item-name">ACE</h3>
              <div className="product-item-sub">Enterprise Hyper Automation Platform</div>
              <p className="product-item-desc">
                Automate complex media processes across documents, workflows, decisioning, reconciliation, and reporting.
              </p>
              <div className="product-relevant-to">
                <strong>Relevant to:</strong> Invoice processing · Contract data extraction · Reconciliation · Workflow automation
              </div>
            </div>
            <Link to="/ace" className="theme-arrow-link">Explore ACE <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="related-product-item" {...fadeUp}>
            <div>
              <h3 className="product-item-name">IRIS</h3>
              <div className="product-item-sub">Enterprise AI Platform</div>
              <p className="product-item-desc">
                Bring enterprise AI capabilities to media knowledge, content analysis, and decision-support workflows where applicable.
              </p>
            </div>
            <Link to="/iris" className="theme-arrow-link">Explore IRIS <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="related-product-item" {...fadeUp}>
            <div>
              <h3 className="product-item-name">Voice Agent</h3>
              <div className="product-item-sub">AI-Powered Voice Automation</div>
              <p className="product-item-desc">
                Automate voice-driven interactions across subscriber servicing, inquiries, and operational communications where applicable.
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
            Ready to transform media operations?
          </h2>
          <p className="apple-section-sub" style={{ margin: "0 auto 32px auto" }}>
            Turn complex workflows into intelligent, scalable automation.
          </p>
          <div className="apple-btn-group">
            <Link to="/contact" className="theme-btn-primary">
              Talk to a Media Expert →
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
