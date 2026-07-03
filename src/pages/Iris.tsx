import { useState, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Calculator,
  Briefcase,
  Megaphone,
  Users,
  Zap,
  Truck,
  ShieldCheck,
  Cpu,
  Workflow,
  BarChart3,
} from "lucide-react";
import "./Iris.css";

const queryTabs = [
  {
    id: "finance",
    dept: "Finance",
    icon: "💰",
    colleague: "Cyrus",
    prompt: "Cash flow forecast for next quarter?",
    response:
      "Based on current accounts receivable and recurring contracts, Q3 cash flow is projected at $2.4M. This represents a 14% growth quarter-over-quarter.",
    colleagueBg: "#34c759",
    initials: "CY",
    visual: {
      type: "metric",
      label: "Projected Cash Flow",
      value: "$2,420,000",
      detail: "+14% growth vs Q2",
      items: [
        { name: "Receivables", value: "$1.8M" },
        { name: "Contracts", value: "$0.6M" },
      ],
    },
  },
  {
    id: "sales",
    dept: "Sales",
    icon: "📈",
    colleague: "Vedant",
    prompt: "Win rate by region this month?",
    response:
      "North America leads with a 68% win rate, followed by EMEA at 54% and APAC at 42%. Overall global win rate is up 4% this month.",
    colleagueBg: "#007aff",
    initials: "VE",
    visual: {
      type: "bars",
      items: [
        { name: "North America", value: "68%", width: "68%", color: "#34c759" },
        { name: "EMEA", value: "54%", width: "54%", color: "#007aff" },
        { name: "APAC", value: "42%", width: "42%", color: "#8e8e93" },
      ],
    },
  },
  {
    id: "marketing",
    dept: "Marketing",
    icon: "📢",
    colleague: "Kiara",
    prompt: "Which campaign had the best ROI?",
    response:
      "The Q2 Enterprise Cloud campaign yielded the highest ROI at 4.2x, driven by strong response rates in North American financial services.",
    colleagueBg: "#ffcc00",
    initials: "KI",
    visual: {
      type: "metric",
      label: "Top Campaign ROI",
      value: "4.2x ROI",
      detail: "Q2 Enterprise Cloud",
      items: [
        { name: "Lead Gen", value: "1,240 new MQLs" },
        { name: "Pipeline", value: "$1.8M created" },
      ],
    },
  },
  {
    id: "hr",
    dept: "HR",
    icon: "👥",
    colleague: "Aria",
    prompt: "Attrition rate by department?",
    response:
      "Global attrition is at 5.2% annualized. Engineering remains the lowest at 4.2%, with Sales at 8.5% and Operations at 6.0%.",
    colleagueBg: "#ff2d55",
    initials: "AR",
    visual: {
      type: "bars",
      items: [
        { name: "Engineering", value: "4.2%", width: "42%", color: "#34c759" },
        { name: "Operations", value: "6.0%", width: "60%", color: "#ff9500" },
        { name: "Sales", value: "8.5%", width: "85%", color: "#ff2d55" },
      ],
    },
  },
  {
    id: "operations",
    dept: "Operations",
    icon: "⚙️",
    colleague: "Aarush",
    prompt: "SLA compliance this week?",
    response:
      "SLA compliance is currently at 99.4%, outperforming our target of 98.5%. Incident resolution times are down to 18 minutes.",
    colleagueBg: "#ff9500",
    initials: "AA",
    visual: {
      type: "metric",
      label: "SLA Compliance Rate",
      value: "99.4%",
      detail: "Target: 98.5% | Avg: 18m",
      items: [
        { name: "Total Tickets", value: "1,840" },
        { name: "On-Time SLA", value: "1,829" },
      ],
    },
  },
  {
    id: "procurement",
    dept: "Procurement",
    icon: "🛒",
    colleague: "Atlas",
    prompt: "Top vendors by spend this year?",
    response:
      "Year-to-date procurement spend is concentrated in Cloud Infrastructure ($1.4M) and Hardware Provisioning ($850K).",
    colleagueBg: "#5856d6",
    initials: "AT",
    visual: {
      type: "bars",
      items: [
        { name: "AWS Cloud Services", value: "$1.4M", width: "90%", color: "#5856d6" },
        { name: "Dell Hardware Systems", value: "$850K", width: "55%", color: "#8e8e93" },
      ],
    },
  },
  {
    id: "compliance",
    dept: "Compliance",
    icon: "🛡️",
    colleague: "Rachel",
    prompt: "Transactions flagged this month?",
    response:
      "Out of 124,000 total transactions processed, 14 were flagged for high-risk manual review. All 14 have been fully audited.",
    colleagueBg: "#28cd41",
    initials: "RA",
    visual: {
      type: "metric",
      label: "Compliance Status",
      value: "14 Flagged",
      detail: "100% resolved",
      items: [
        { name: "Audited Transactions", value: "124,000" },
        { name: "Pending Audits", value: "0" },
      ],
    },
  },
];

const getTabIcon = (id: string) => {
  switch (id) {
    case "finance":
      return <Calculator size={18} />;
    case "sales":
      return <Briefcase size={18} />;
    case "marketing":
      return <Megaphone size={18} />;
    case "hr":
      return <Users size={18} />;
    case "operations":
      return <Zap size={18} />;
    case "procurement":
      return <Truck size={18} />;
    case "compliance":
      return <ShieldCheck size={18} />;
    default:
      return <Calculator size={18} />;
  }
};

export default function Iris() {
  const [activeTab, setActiveTab] = useState("finance");
  return (
    <div className="iris-page-container">
      {/* HERO SECTION */}
      <section className="iris-section-card iris-hero">
        <div className="iris-hero-content">
          <motion.p
            className="iris-hero-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          >
            ALGONOX • ENTERPRISE AI
          </motion.p>
          <motion.h1
            className="iris-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
          >
            IRIS<span className="iris-dot">.</span>
          </motion.h1>
          <motion.p
            className="iris-hero-subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
          >
            Your enterprise, now with an AI colleague for every team. Ask. Retrieve. Act.
          </motion.p>
          <motion.div
            className="iris-hero-ctas"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.45 }}
          >
            <Link to="/contact" className="btn-solid-blue">
              Schedule a Demo
            </Link>
            <a href="#how-iris-works" className="btn-outline-blue">
              Learn more ↓
            </a>
          </motion.div>

          <motion.div
            className="iris-hero-pills"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.6 }}
          >
            <span>Enterprise AI Colleagues</span>
            <span>Natural Language Queries</span>
            <span>Role-Based Access</span>
            <span>Workflow Automation</span>
            <span>Multi-System Integration</span>
          </motion.div>
        </div>
      </section>

      {/* Colleagues Marquee Bar */}
      <div className="iris-section-card iris-colleagues-bar-card">
        <div className="iris-colleagues-bar">
          <div className="iris-colleagues-bar-track">
            {[
              "Atlas • Executive",
              "Cyrus • Finance",
              "Aria • HR",
              "Vedant • Analytics",
              "Aarush • Operations",
              "Kiara • Marketing",
              "Rachel • Healthcare",
              "Nora • Manufacturing",
            ].map((item, idx) => (
              <span key={idx}>{item}</span>
            ))}
            {/* Duplicate for infinite loop */}
            {[
              "Atlas • Executive",
              "Cyrus • Finance",
              "Aria • HR",
              "Vedant • Analytics",
              "Aarush • Operations",
              "Kiara • Marketing",
              "Rachel • Healthcare",
              "Nora • Manufacturing",
            ].map((item, idx) => (
              <span key={`dup-${idx}`}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION: HOW IRIS WORKS */}
      <section id="how-iris-works" className="iris-section-card iris-process-section">
        <div className="container">
          <motion.p
            className="iris-label"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          >
            HOW IRIS WORKS
          </motion.p>
          <motion.h2
            className="iris-title-large"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
          >
            Engage. Reason. Recommend. Act.
          </motion.h2>
          <motion.p
            className="iris-subtitle"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
          >
            Four steps from question to outcome — no dashboards to navigate, no analyst required.
          </motion.p>

          <div className="iris-process-flow">
            {[
              {
                num: "01",
                title: "Engage",
                desc: "Describe your objective in plain language — exactly as you'd brief a colleague.",
                color: "#5e5ce6",
                icon: "💬",
              },
              {
                num: "02",
                title: "Reason",
                desc: "IRIS retrieves data across systems, applies business context, and builds a complete picture.",
                color: "#0a84ff",
                icon: "🧠",
              },
              {
                num: "03",
                title: "Recommend",
                desc: "Delivers structured insights and recommendations with supporting evidence and rationale.",
                color: "#30d158",
                icon: "📊",
              },
              {
                num: "04",
                title: "Act",
                desc: "With your approval, IRIS executes workflows across enterprise systems with a full audit trail.",
                color: "#ff9f0a",
                icon: "⚡",
              },
            ].map((step, idx) => (
              <Fragment key={idx}>
                <motion.div
                  className="iris-process-card"
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.25, 1, 0.5, 1] }}
                >
                  <div
                    className="iris-process-icon-ring"
                    style={{ background: `${step.color}15`, borderColor: `${step.color}30` }}
                  >
                    <span className="iris-process-icon-emoji">{step.icon}</span>
                  </div>
                  <div className="iris-process-num" style={{ color: step.color }}>
                    {step.num}
                  </div>
                  <h3 className="iris-process-title">{step.title}</h3>
                  <p className="iris-process-desc">{step.desc}</p>
                  <div
                    className="iris-process-accent-line"
                    style={{ background: `linear-gradient(90deg, ${step.color}, transparent)` }}
                  />
                </motion.div>
                {idx < 3 && (
                  <motion.div
                    className="iris-process-arrow"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: idx * 0.12 + 0.3 }}
                  >
                    <ChevronRight size={20} strokeWidth={2.5} />
                  </motion.div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: AI COLLEAGUES STUDIO */}
      <section className="iris-section-card iris-studio-section">
        <div className="container">
          <motion.p
            className="iris-label iris-label-dark"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          >
            AI COLLEAGUES STUDIO
          </motion.p>
          <motion.h2
            className="iris-title-large"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
          >
            One AI colleague for every department.
          </motion.h2>
          <motion.p
            className="iris-subtitle"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
          >
            Purpose-built, role-aware, and trained for each business function — not a generic chatbot.
          </motion.p>

          {/* Colleagues Grid */}
          <div className="iris-colleagues-grid">
            {[
              { code: "AT", name: "Atlas", role: "EXECUTIVE", desc: "Cross functional intelligence for C-suite decisions.", bg: "#5856d6" },
              { code: "CY", name: "Cyrus", role: "FINANCE", desc: "Cash flow, forecasts, and financial modelling.", bg: "#34c759" },
              { code: "AR", name: "Aria", role: "HUMAN RESOURCES", desc: "Attrition, hiring trends, and workforce analytics.", bg: "#ff2d55" },
              { code: "VE", name: "Vedant", role: "ANALYTICS", desc: "Strategy insights from operational and market data.", bg: "#007aff" },
              { code: "AA", name: "Aarush", role: "OPERATIONS", desc: "SLA compliance, logistics, and operational health.", bg: "#ff9500" },
              { code: "KI", name: "Kiara", role: "MARKETING", desc: "Campaign ROI, channel performance, and growth signals.", bg: "#ffcc00" },
              { code: "RA", name: "Rachel", role: "HEALTHCARE", desc: "Clinical data, diagnostics, and patient insights.", bg: "#28cd41" },
              { code: "NO", name: "Nora", role: "MANUFACTURING", desc: "Pharma ops, production tracking, and quality intelligence.", bg: "#8e8e93" },
            ].map((colleague, idx) => (
              <motion.div
                key={idx}
                className="iris-colleague-card"
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.06, ease: [0.25, 1, 0.5, 1] }}
              >
                <div className="iris-avatar-wrap">
                  <div className="iris-avatar" style={{ backgroundColor: colleague.bg }}>
                    {colleague.code}
                  </div>
                  <div className="iris-avatar-glow" style={{ background: colleague.bg }} />
                  <div className="iris-status-dot" style={{ borderColor: "#0b0b0c" }}>
                    <div className="iris-status-inner" />
                  </div>
                </div>
                <div className="iris-colleague-info">
                  <p className="iris-colleague-role" style={{ color: colleague.bg }}>
                    {colleague.role}
                  </p>
                  <h3 className="iris-colleague-name">{colleague.name}</h3>
                  <p className="iris-colleague-desc">{colleague.desc}</p>
                </div>
                <div className="iris-colleague-arrow">
                  <ChevronRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: ASK ANYTHING QUERIES */}
      <section className="iris-section-card iris-queries-section">
        <div className="container">
          <div className="iris-queries-container">
            <motion.p
              className="iris-label"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            >
              ASK ANYTHING
            </motion.p>
            <motion.h2
              className="iris-queries-title"
              style={{ marginBottom: "16px" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
            >
              Every department gets its own view.
            </motion.h2>
            <motion.p
              className="iris-queries-subtitle"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
            >
              Each team only sees what's relevant to them — and can ask in their own language.
            </motion.p>

            <motion.div
              className="iris-queries-showcase"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {/* Tabs */}
              <div className="iris-queries-tabs">
                {queryTabs.map((t) => (
                  <button
                    key={t.id}
                    className={`iris-query-tab-btn ${activeTab === t.id ? "active" : ""}`}
                    onClick={() => setActiveTab(t.id)}
                    style={{ "--colleague-color": t.colleagueBg } as React.CSSProperties}
                  >
                    <span
                      className="tab-icon-wrapper"
                      style={{
                        backgroundColor: activeTab === t.id ? `${t.colleagueBg}15` : "rgba(0,0,0,0.03)",
                      }}
                    >
                      <span
                        className="tab-icon-lucide"
                        style={{
                          color: activeTab === t.id ? t.colleagueBg : "#86868b",
                        }}
                      >
                        {getTabIcon(t.id)}
                      </span>
                    </span>
                    <span className="tab-dept">{t.dept}</span>
                  </button>
                ))}
              </div>

              {/* Preview Window */}
              <div className="iris-queries-preview">
                <div className="preview-window-header">
                  <div className="window-controls">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <span className="window-title">IRIS Colleague Interface</span>
                </div>

                <div className="preview-window-body">
                  <AnimatePresence mode="wait">
                    {(() => {
                      const t = queryTabs.find((x) => x.id === activeTab);
                      if (!t) return null;
                      return (
                        <motion.div
                          key={t.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="iris-queries-preview-content"
                        >
                          {/* User Query Block */}
                          <div className="user-query-container">
                            <div className="user-avatar-tag">User Query</div>
                            <div className="user-query-bubble">"{t.prompt}"</div>
                          </div>

                          {/* Divider line */}
                          <div className="chat-divider"></div>

                          {/* Colleague Response Block */}
                          <div className="colleague-response-container">
                            <div className="colleague-info-header">
                              <div className="colleague-avatar" style={{ backgroundColor: t.colleagueBg }}>
                                {t.initials}
                              </div>
                              <div className="colleague-details">
                                <span className="colleague-name">{t.colleague}</span>
                                <span className="colleague-role">{t.dept} Colleague</span>
                              </div>
                              <span className="colleague-status-badge">Online</span>
                            </div>

                            <p className="colleague-response-text">{t.response}</p>

                            {/* Visual Data Representation */}
                            <div className="colleague-visual-card">
                              {t.visual.type === "metric" ? (
                                <div className="metric-visual">
                                  <span className="metric-label">{t.visual.label}</span>
                                  <div className="metric-main-row">
                                    <span className="metric-value">{t.visual.value}</span>
                                    <span className="metric-change" style={{ color: t.colleagueBg }}>
                                      {t.visual.detail}
                                    </span>
                                  </div>
                                  <div className="submetrics-list">
                                    {t.visual.items?.map((item: any, i: number) => (
                                      <div key={i} className="submetric-row">
                                        <span className="submetric-name">{item.name}</span>
                                        <span className="submetric-value">{item.value}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <div className="bars-visual">
                                  <span className="metric-label">Operational Metrics</span>
                                  <div className="bars-list">
                                    {t.visual.items?.map((item: any, i: number) => (
                                      <div key={i} className="bar-row">
                                        <div className="bar-info">
                                          <span className="bar-name">{item.name}</span>
                                          <span className="bar-value">{item.value}</span>
                                        </div>
                                        <div className="bar-track-bg">
                                          <motion.div
                                            className="bar-fill-indicator"
                                            style={{ backgroundColor: item.color }}
                                            initial={{ width: 0 }}
                                            animate={{ width: item.width }}
                                            transition={{ duration: 0.8, delay: 0.1 }}
                                          />
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })()}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION: PLATFORM CAPABILITIES */}
      <section className="iris-section-card iris-capabilities-section">
        <div className="container">
          <motion.p
            className="iris-label"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          >
            PLATFORM CAPABILITIES
          </motion.p>
          <motion.h2
            className="iris-title-large"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
          >
            Built for how enterprises actually work.
          </motion.h2>
          <motion.p
            className="iris-subtitle"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
          >
            Every feature engineered to reduce friction between your people and your data.
          </motion.p>

          <div className="iris-bento-grid">
            {[
              {
                title: "Role-Based Access",
                desc: "Each AI colleague accesses enterprise data based on department roles, permissions, and organizational hierarchy. No over-exposure, no silos broken unnecessarily.",
                theme: "dark",
                icon: "🔐",
                accent: "#5e5ce6",
                span: "wide",
              },
              {
                title: "Built for Every Business Function",
                desc: "IRIS Automations empowers AI colleagues to proactively monitor events and automate business actions with minimal human intervention.",
                theme: "blue",
                icon: "📊",
                accent: "#0a84ff",
                span: "normal",
              },
              {
                title: "Workflow Automation",
                desc: "Schedule meetings, assign tasks, create tickets, trigger approvals, escalate incidents — all with audit trails.",
                theme: "light",
                icon: "⚙️",
                accent: "#ff9f0a",
                span: "normal",
              },
              {
                title: "Enterprise Memory",
                desc: "IRIS retains interaction history, decisions, and preferences to deliver increasingly contextual support.",
                theme: "light",
                icon: "🧠",
                accent: "#30d158",
                span: "normal",
              },
              {
                title: "Multi-Tenant Architecture",
                desc: "Isolated environments with separate data and workflows for different organizations or business units.",
                theme: "dark",
                icon: "🏢",
                accent: "#ff375f",
                span: "normal",
              },
              {
                title: "Continuous Improvement",
                desc: "Learns from every interaction and outcome. Your IRIS gets sharper as your team uses it.",
                theme: "gradient",
                icon: "📈",
                accent: "#bf5af2",
                span: "wide",
              },
              {
                title: "Universal Connectivity",
                desc: "ERP, CRM, HRMS, dashboards, APIs, databases — no rip-and-replace required.",
                theme: "blue",
                icon: "🔗",
                accent: "#0a84ff",
                span: "normal",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className={`iris-bento-card theme-${item.theme} ${item.span === "wide" ? "bento-wide" : ""}`}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.25, 1, 0.5, 1] }}
              >
                <div
                  className="iris-bento-icon"
                  style={{ background: `${item.accent}18`, borderColor: `${item.accent}35` }}
                >
                  <span>{item.icon}</span>
                </div>
                <h3 className="iris-bento-card-title">{item.title}</h3>
                <p className="iris-bento-card-desc">{item.desc}</p>
                <div className="iris-bento-glow" style={{ background: item.accent }} />
              </motion.div>
            ))}
          </div>

          {/* ============================================================
              WHAT IRIS AUTOMATIONS ENABLES (Light Theme Aligned)
          ============================================================ */}
          <div className="iris-automations-section" style={{ padding: "100px 0 0" }}>
            <motion.p
              className="iris-label"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              style={{ textAlign: "center" }}
            >
              AUTOMATION POWER
            </motion.p>

            <motion.h2
              className="iris-title-large"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              style={{ textAlign: "center", marginBottom: "16px" }}
            >
              What IRIS Automations Enables
            </motion.h2>

            <motion.p
              className="iris-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              style={{ textAlign: "center", margin: "0 auto" }}
            >
              Powerful capabilities designed to streamline every enterprise workflow.
            </motion.p>

            <div className="iris-automations-grid">
              {[
                {
                  icon: <Zap size={28} />,
                  title: "Intelligent Triggers",
                  desc: "Start automations based on events, schedules, or business conditions.",
                },
                {
                  icon: <Cpu size={28} />,
                  title: "Smart Actions",
                  desc: "Automate notifications, reports, approvals, and routine business tasks.",
                },
                {
                  icon: <Workflow size={28} />,
                  title: "Connected Workflows",
                  desc: "Integrate seamlessly with your existing business applications and processes.",
                },
                {
                  icon: <Users size={28} />,
                  title: "Flexible Access",
                  desc: "Enable automations for individuals, teams, or the entire organization.",
                },
                {
                  icon: <BarChart3 size={28} />,
                  title: "Centralized Monitoring",
                  desc: "Track automation activity, status, and performance from one place.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="iris-automation-card"
                  initial={{ opacity: 0, y: 40, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.25, 1, 0.5, 1] }}
                >
                  <div className="iris-automation-icon">{item.icon}</div>
                  <h3 className="iris-automation-title">{item.title}</h3>
                  <p className="iris-automation-desc">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: BUSINESS IMPACT */}
      <section className="iris-section-card iris-impact-section">
        <div className="container">
          <motion.p
            className="iris-label"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          >
            BUSINESS IMPACT
          </motion.p>
          <motion.h2
            className="iris-title-large iris-impact-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
          >
            Measurable outcomes across the enterprise.
          </motion.h2>

          <div className="iris-impact-split">
            {/* Without IRIS */}
            <motion.div
              className="iris-impact-col without"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3>WITHOUT IRIS</h3>
              <ul>
                <li>
                  <span className="iris-cross">✖</span> Employees wait days for data-driven answers
                </li>
                <li>
                  <span className="iris-cross">✖</span> Knowledge siloed within individual teams
                </li>
                <li>
                  <span className="iris-cross">✖</span> Analysts spend majority of time on repetitive extraction
                </li>
                <li>
                  <span className="iris-cross">✖</span> Decisions delayed by incomplete information
                </li>
                <li>
                  <span className="iris-cross">✖</span> Only technical staff can access enterprise data
                </li>
              </ul>
            </motion.div>

            {/* With IRIS */}
            <motion.div
              className="iris-impact-col with"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3>WITH IRIS</h3>
              <ul>
                <li>
                  <span className="iris-check">✔</span> Insights and recommendations delivered in seconds
                </li>
                <li>
                  <span className="iris-check">✔</span> Enterprise knowledge accessible to every team member
                </li>
                <li>
                  <span className="iris-check">✔</span> Analysts redirected to strategic, high-value work
                </li>
                <li>
                  <span className="iris-check">✔</span> Decisions informed by real-time, cross-system context
                </li>
                <li>
                  <span className="iris-check">✔</span> Every employee supported by a dedicated AI colleague
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION: WORKS WITH YOUR ENTIRE STACK */}
      <section className="iris-section-card iris-stack-section">
        <div className="container">
          <motion.h2
            className="iris-title-large"
            style={{ color: "#ffffff", textAlign: "center" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
          >
            Works with your entire stack.
          </motion.h2>
          <motion.p
            className="iris-subtitle"
            style={{ color: "#86868b", textAlign: "center", marginBottom: "48px" }}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
          >
            IRIS connects to the systems your teams already rely on.
          </motion.p>

          <div className="iris-stack-grid">
            {[
              "Databases",
              "CRM Platforms",
              "HRMS Systems",
              "Finance Apps",
              "Dashboards",
              "Documents",
              "APIs & Webhooks",
              "Workflows",
            ].map((stack, idx) => (
              <motion.div
                key={idx}
                className="iris-stack-card"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                {stack}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="iris-section-card iris-cta-section">
        <div className="container" style={{ textAlign: "center" }}>
          <motion.h2
            className="iris-cta-title"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
          >
            Ready to meet your
            <br />
            <span className="iris-cta-gradient">AI colleague?</span>
          </motion.h2>
          <motion.p
            className="iris-cta-subtitle"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          >
            Deploy IRIS across your enterprise and give every team the intelligence they need to move
            faster.
          </motion.p>
          <div className="iris-hero-ctas" style={{ justifyContent: "center", marginTop: "32px" }}>
            <Link to="/contact" className="btn-solid-blue">
              Schedule a Demo
            </Link>
            <Link to="/contact" className="btn-outline-blue" style={{ background: "#ffffff" }}>
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
