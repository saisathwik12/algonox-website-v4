import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Factory, Cpu, ArrowRight, ChevronRight, 
  FileText, Brain, Workflow, GitCompare, Database, BarChart3,
  Truck, Boxes, CheckCircle2, ShieldCheck, GitBranch, Radio
} from "lucide-react";
import "./IndustryCommon.css";
import "./Manufacturing.css";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

export default function Manufacturing() {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    { code: "IONIC", name: "Intelligent Data Extraction", desc: "Extract and structure information from purchase orders, bills of lading, supplier invoices, and QA specs.", icon: FileText },
    { code: "GEARS", name: "Rules & Decision Engine", desc: "Apply dynamic pricing models, tax rules, supply allocation logic, and compliance checks consistently.", icon: Brain },
    { code: "Smartflows", name: "Workflow Orchestration", desc: "Connect plant managers, suppliers, ERP systems, and logistics partners into automated workflows.", icon: Workflow },
    { code: "LUCID", name: "Reconciliation Engine", desc: "Match inventory receipts, vendor deliveries, PO lines, and intercompany tax entries across systems.", icon: GitCompare },
    { code: "COSMOS", name: "Master Data Management", desc: "Maintain centralized parts catalogs, vendor master records, BOMs, and asset registries.", icon: Database },
    { code: "Instabolt", name: "Reports & Analytics", desc: "Turn supply chain signals, plant telemetry, and cost data into predictive dashboards and alerts.", icon: BarChart3 },
  ];

  return (
    <div className="industry-page mfg-theme mfg-page">
      {/* 01 — HERO (With Smart Factory Telemetry Visualizer Sim) */}
      <section className="apple-hero-section">
        <div className="apple-hero-container">
          <motion.div {...fadeUp}>
            <div className="theme-domain-tag">
              <Factory size={15} />
              <span>Manufacturing Intelligence & Supply Chain Automation</span>
            </div>
            <h1 className="apple-hero-title theme-gradient-title">
              Intelligent automation for modern manufacturing.
            </h1>
            <p className="apple-hero-sub">
              Transform complex manufacturing and supply chain workflows with AI-powered automation — from supplier order management and intercompany tax to competitive pricing monitoring and inventory reconciliation.
            </p>
            <div className="apple-btn-group">
              <a href="#solutions" className="theme-btn-primary">
                Explore Manufacturing Solutions <ArrowRight size={16} />
              </a>
              <Link to="/contact" className="theme-btn-secondary">
                Talk to an Expert →
              </Link>
            </div>

            {/* Smart Factory Telemetry Visualizer Sim */}
            <div className="telemetry-visualizer-box">
              <div className="telemetry-header">
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Radio size={18} color="#0071e3" />
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#f1f5f9", letterSpacing: "0.04em" }}>
                    SMART FACTORY TELEMETRY & GLOBAL SUPPLY STREAM
                  </span>
                </div>
                <div className="telemetry-status-tag">
                  <span>PLANT CAPACITY: 94.2% OPTIMAL</span>
                </div>
              </div>

              <div className="telemetry-grid">
                <div className="telemetry-plant-card">
                  <div className="plant-card-tag">PLANT 01 (AUTOMOTIVE)</div>
                  <div className="plant-card-name">Supplier PO #PO-9402 Dispatched</div>
                  <div className="plant-card-val">BOM VERIFIED · SAP POSTED</div>
                </div>
                <div className="telemetry-plant-card">
                  <div className="plant-card-tag">DISTRIBUTOR PRICING</div>
                  <div className="plant-card-name">Spectra Price Crawler Active</div>
                  <div className="plant-card-val">42 CHANNELS MONITORED</div>
                </div>
                <div className="telemetry-plant-card">
                  <div className="plant-card-tag">GLOBAL LOGISTICS</div>
                  <div className="plant-card-name">Customs & Tax Reconciliation</div>
                  <div className="plant-card-val">100% TARIFF MATCHED</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02 — THE MANUFACTURING CHALLENGE */}
      <section className="apple-section-fluid bg-subtle">
        <div className="apple-section-inner">
          <motion.div className="apple-header-left" {...fadeUp}>
            <span className="theme-domain-tag"><Cpu size={14} /> THE MANUFACTURING CHALLENGE</span>
            <h2 className="apple-section-title">Production moves on precision. Supply chain friction costs millions.</h2>
            <p className="apple-section-sub">
              Industrial manufacturers coordinate thousands of global suppliers, multi-tier ERP systems, paper-heavy shipping manifests, fluctuating commodity prices, and stringent quality mandates.
            </p>
            <p className="apple-body-text">
              Algonox unifies document intelligence, predictive analytics, and workflow orchestration to help manufacturers eliminate supply bottlenecks, accelerate order-to-cash, and optimize operational margins.
            </p>
          </motion.div>

          <div className="challenge-grid">
            <motion.div className="challenge-item" {...fadeUp}>
              <div className="challenge-item-icon"><Boxes size={18} /></div>
              <h3 className="impact-strip-item-title">Complex Supply Logistics</h3>
              <p className="impact-strip-item-desc">Process hundreds of international bills of lading, customs declarations, and shipping documents without delays.</p>
            </motion.div>

            <motion.div className="challenge-item" {...fadeUp}>
              <div className="challenge-item-icon"><GitBranch size={18} /></div>
              <h3 className="impact-strip-item-title">Disparate Plant ERPs</h3>
              <p className="impact-strip-item-desc">Bridge legacy production software, warehouse management systems, and corporate SAP/Oracle instances.</p>
            </motion.div>

            <motion.div className="challenge-item" {...fadeUp}>
              <div className="challenge-item-icon"><BarChart3 size={18} /></div>
              <h3 className="impact-strip-item-title">Volatile Market Pricing</h3>
              <p className="impact-strip-item-desc">Monitor distributor pricing, raw material fluctuations, and competitor catalog shifts in real time.</p>
            </motion.div>

            <motion.div className="challenge-item" {...fadeUp}>
              <div className="challenge-item-icon"><ShieldCheck size={18} /></div>
              <h3 className="impact-strip-item-title">Intercompany Tax & Audit</h3>
              <p className="impact-strip-item-desc">Calculate and reconcile complex transfer pricing, customs duties, and multi-entity tax entries automatically.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 03 — MANUFACTURING USE CASES (Factory Floor Blueprint Cards) */}
      <section className="apple-section">
        <motion.div className="apple-header-centered" {...fadeUp}>
          <span className="theme-domain-tag"><Truck size={14} /> MANUFACTURING USE CASES</span>
          <h2 className="apple-section-title">Automation built around the factory and supply chain.</h2>
          <p className="apple-section-sub">
            From supplier purchase orders to intercompany tax reconciliation, competitive price tracking, and demand planning, automate critical workflows.
          </p>
        </motion.div>

        <div className="blueprint-grid">
          <motion.div className="blueprint-card" {...fadeUp}>
            <div>
              <span className="blueprint-badge">SUPPLY INTAKE</span>
              <h3 className="blueprint-title">Supplier PO & Order Processing</h3>
              <p className="blueprint-desc">Extract, validate, and convert unstructured supplier orders and customer purchase requests into ERP production orders.</p>
            </div>
            <Link to="/intelligent-document-processing" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="blueprint-card" {...fadeUp}>
            <div>
              <span className="blueprint-badge">PRICING INTEL</span>
              <h3 className="blueprint-title">Competitive Price Intelligence & Monitoring</h3>
              <p className="blueprint-desc">Track and analyze distributor, dealer, and competitor price movements across channels to optimize margin strategies.</p>
            </div>
            <Link to="/spectra" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="blueprint-card" {...fadeUp}>
            <div>
              <span className="blueprint-badge">TAX & AUDIT</span>
              <h3 className="blueprint-title">Intercompany Tax & Transfer Pricing</h3>
              <p className="blueprint-desc">Automate tax validation, transfer price matching, and cross-border billing reconciliation between legal entities.</p>
            </div>
            <Link to="/lucid-reconciliations" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="blueprint-card" {...fadeUp}>
            <div>
              <span className="blueprint-badge">INVENTORY MATCH</span>
              <h3 className="blueprint-title">Inventory & Goods Receipt Matching</h3>
              <p className="blueprint-desc">Reconcile plant warehouse receipts, advance shipping notices (ASNs), bills of lading, and freight invoices automatically.</p>
            </div>
            <Link to="/lucid-reconciliations" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="blueprint-card" {...fadeUp}>
            <div>
              <span className="blueprint-badge">DEMAND PLANNING</span>
              <h3 className="blueprint-title">Demand & Supply Forecasting</h3>
              <p className="blueprint-desc">Combine historical ERP shipments, market trends, and distributor lead times to predict manufacturing requirements.</p>
            </div>
            <Link to="/resources" className="theme-arrow-link">Explore Use Case <ChevronRight size={15} /></Link>
          </motion.div>
        </div>
      </section>

      {/* 04 — SOLUTIONS FOR MANUFACTURING */}
      <section className="apple-section-fluid bg-alt" id="solutions">
        <div className="apple-section-inner">
          <motion.div className="apple-header-left" {...fadeUp}>
            <span className="theme-domain-tag"><Cpu size={14} /> SOLUTIONS FOR MANUFACTURING</span>
            <h2 className="apple-section-title">One manufacturing ecosystem. Multiple ways to automate.</h2>
            <p className="apple-section-sub">
              Bring document AI, market intelligence, workflow automation, and reconciliation together across the manufacturing value chain.
            </p>
          </motion.div>

          <div className="solutions-list">
            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Intelligent Document Processing</div>
              <div className="solution-desc">Extract, validate, and ingest POs, shipping manifests, customs paperwork, and supplier invoices.</div>
              <Link to="/intelligent-document-processing" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>

            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Workflow Automation</div>
              <div className="solution-desc">Connect plants, procurement teams, suppliers, and ERPs into synchronized operational flows.</div>
              <Link to="/workflow-automation" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>

            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Market Intelligence (Spectra)</div>
              <div className="solution-desc">Monitor distributor pricing, competitor catalogs, and supply signals in real time.</div>
              <Link to="/spectra" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>

            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Reconciliation Automation</div>
              <div className="solution-desc">Match 3-way delivery receipts, PO lines, freight bills, and intercompany tax ledger entries.</div>
              <Link to="/lucid-reconciliations" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>

            <motion.div className="solution-row" {...fadeUp}>
              <div className="solution-name">Data Integration & Processing</div>
              <div className="solution-desc">Unify plant floor telemetry, inventory levels, and ERP transactions into unified dashboards.</div>
              <Link to="/process-automation" className="theme-arrow-link">Explore Solution <ChevronRight size={15} /></Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 05 — POWERED BY ACE */}
      <section className="apple-section">
        <motion.div className="apple-header-centered" {...fadeUp}>
          <span className="theme-domain-tag"><Brain size={14} /> POWERED BY ACE</span>
          <h2 className="apple-section-title">One platform. Built for industrial scale.</h2>
          <p className="apple-section-sub">
            ACE combines specialized capabilities to automate manufacturing operations — from order intake and pricing rules to supply orchestration, 3-way matching, and predictive analytics.
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

      {/* 06 — FEATURED WORKFLOW (Interactive Factory Assembly Conveyor Track) */}
      <section className="apple-section-fluid bg-subtle">
        <div className="apple-section-inner">
          <motion.div className="apple-header-centered" {...fadeUp}>
            <span className="theme-domain-tag"><Workflow size={14} /> FEATURED WORKFLOW</span>
            <p className="apple-hero-sub" style={{ marginBottom: 6 }}>From market signal to factory fulfillment.</p>
            <h2 className="apple-section-title">Demand forecasting and supply planning, automated.</h2>
          </motion.div>

          <div className="conveyor-track-container">
            {[
              { num: "01", title: "Market Signals", tag: "Distributor Feed" },
              { num: "02", title: "AI Demand Plan", tag: "Predictive Model" },
              { num: "03", title: "Capacity Check", tag: "Plant Line Bal" },
              { num: "04", title: "Auto Supplier POs", tag: "EDI / API Sync" },
              { num: "05", title: "Factory Schedule", tag: "ERP Trigger" },
              { num: "06", title: "Order Dispatch", tag: "Fulfillment SLA" },
            ].map((node) => (
              <motion.div key={node.title} className="conveyor-node" {...fadeUp}>
                <div className="conveyor-num">{node.num}</div>
                <div className="conveyor-title">{node.title}</div>
                <div className="conveyor-tag">{node.tag}</div>
              </motion.div>
            ))}
          </div>

          <motion.div className="workflow-supporting" {...fadeUp}>
            <p className="apple-body-text">
              ACE unites predictive intelligence, inventory thresholds, and ERP workflows to balance demand spikes, automate supplier purchasing, and prevent factory line downtime.
            </p>
            <div style={{ marginTop: 22 }}>
              <Link to="/resources" className="theme-btn-secondary">
                Explore Demand Planning →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 07 — CASE STUDY HIGHLIGHTS */}
      <section className="apple-section">
        <motion.div className="apple-header-left" {...fadeUp}>
          <span className="theme-domain-tag"><BarChart3 size={14} /> CASE STUDY HIGHLIGHTS</span>
          <h2 className="apple-section-title">Manufacturing automation. Proven in practice.</h2>
        </motion.div>

        <div className="case-studies-container">
          <motion.div className="case-study-block" {...fadeUp}>
            <h3 className="case-study-title">Intercompany Tax & Price Reconciliation</h3>
            <div className="case-study-subtitle">Eliminate manual tax adjustments across global subsidiaries.</div>
            <p className="case-study-desc">Automate multi-entity transfer price validations, tariff calculations, and ERP reconciliation.</p>
            <div className="case-metrics-row">
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">85%</div>
                <div className="case-metric-lbl">AHT reduction</div>
              </div>
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">100%</div>
                <div className="case-metric-lbl">Tax audit accuracy</div>
              </div>
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">60%</div>
                <div className="case-metric-lbl">Cost savings</div>
              </div>
            </div>
            <Link to="/resources" className="theme-arrow-link">Read Case Study <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="case-study-block" {...fadeUp}>
            <h3 className="case-study-title">Supplier Order Processing & Matching</h3>
            <div className="case-study-subtitle">Touchless PO generation from multi-format customer orders.</div>
            <p className="case-study-desc">Extract order line items, check inventory availability, generate manufacturing orders, and notify distributors.</p>
            <div className="case-metrics-row">
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">70%</div>
                <div className="case-metric-lbl">FTE reduction</div>
              </div>
              <div className="case-metric-item">
                <div className="case-metric-val theme-gradient-accent">95%</div>
                <div className="case-metric-lbl">Faster order turnaround</div>
              </div>
            </div>
            <Link to="/resources" className="theme-arrow-link">Read Case Study <ChevronRight size={15} /></Link>
          </motion.div>
        </div>
      </section>

      {/* 08 — MANUFACTURING IMPACT (Industrial Floor Bento) */}
      <section className="apple-section-fluid bg-alt">
        <div className="apple-section-inner">
          <motion.div className="apple-header-centered" {...fadeUp}>
            <span className="theme-domain-tag"><CheckCircle2 size={14} /> MANUFACTURING IMPACT</span>
            <h2 className="apple-section-title">Make every factory process work smarter.</h2>
          </motion.div>

          <div className="industrial-bento-grid">
            <motion.div className="industrial-bento-card" {...fadeUp}>
              <h3 className="impact-strip-item-title" style={{ color: "#c2410c" }}>Faster Fulfillment</h3>
              <p className="impact-strip-item-desc">Accelerate order processing, customs clearing, and supplier coordination.</p>
            </motion.div>

            <motion.div className="industrial-bento-card" {...fadeUp}>
              <h3 className="impact-strip-item-title" style={{ color: "#c2410c" }}>More Accurate</h3>
              <p className="impact-strip-item-desc">Eliminate manual matching errors across complex BOMs and tax schedules.</p>
            </motion.div>

            <motion.div className="industrial-bento-card" {...fadeUp}>
              <h3 className="impact-strip-item-title" style={{ color: "#c2410c" }}>More Scalable</h3>
              <p className="impact-strip-item-desc">Expand supply networks and production lines without administrative friction.</p>
            </motion.div>

            <motion.div className="industrial-bento-card" {...fadeUp}>
              <h3 className="impact-strip-item-title" style={{ color: "#c2410c" }}>More Resilient</h3>
              <p className="impact-strip-item-desc">Gain real-time operational visibility to preempt supply disruptions.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 09 — RELATED PRODUCTS */}
      <section className="apple-section">
        <motion.div className="apple-header-left" {...fadeUp}>
          <span className="theme-domain-tag">RELATED PRODUCTS</span>
          <h2 className="apple-section-title">Technology for every layer of manufacturing.</h2>
        </motion.div>

        <div className="related-products-grid">
          <motion.div className="related-product-item is-primary" {...fadeUp}>
            <div>
              <span className="product-tag-pill">Primary Platform</span>
              <h3 className="product-item-name">ACE</h3>
              <div className="product-item-sub">Enterprise Hyper Automation Platform</div>
              <p className="product-item-desc">
                Automate complex manufacturing processes across order intake, intercompany tax, ERP transactions, and supply chain reconciliation.
              </p>
              <div className="product-relevant-to">
                <strong>Relevant to:</strong> Supplier PO processing · Intercompany tax · Goods receipt reconciliation · Pricing monitoring · Demand planning
              </div>
            </div>
            <Link to="/ace" className="theme-arrow-link">Explore ACE <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="related-product-item" {...fadeUp}>
            <div>
              <h3 className="product-item-name">Spectra</h3>
              <div className="product-item-sub">Marketing & Operational Intelligence</div>
              <p className="product-item-desc">
                Monitor distributor pricing, competitive product listings, and market demand signals in real time.
              </p>
            </div>
            <Link to="/spectra" className="theme-arrow-link">Explore Spectra <ChevronRight size={15} /></Link>
          </motion.div>

          <motion.div className="related-product-item" {...fadeUp}>
            <div>
              <h3 className="product-item-name">Voice Agent</h3>
              <div className="product-item-sub">AI-Powered Voice Automation</div>
              <p className="product-item-desc">
                Automate distributor order status hotlines, dispatch coordination, and supplier inquiries with conversational voice AI.
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
            Ready to transform manufacturing operations?
          </h2>
          <p className="apple-section-sub" style={{ margin: "0 auto 32px auto" }}>
            Turn complex supply chain workflows into intelligent, scalable automation.
          </p>
          <div className="apple-btn-group">
            <Link to="/contact" className="theme-btn-primary">
              Talk to a Manufacturing Expert →
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
