import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Globe,
  Compass,
  Layers,
  Cpu,
  Headphones,
  Lightbulb,
  Phone,
  BarChart3,
  Workflow,
  Clock,
  Pill,
  Calculator,
  Users,
  Zap,
  Briefcase,
  Building2,
  GraduationCap,
  Scale,
  Volume2,
  Mic,
  Smile
} from "lucide-react";
import "./SweetHello.css";

export default function SweetHello() {
  const [activeAgentIndex, setActiveAgentIndex] = useState(0);
  const [activeIntegrationCategory, setActiveIntegrationCategory] = useState<"CRM" | "ERP" | "Telephony" | "Scheduling" | "Messaging" | "APIs" | "Analytics" | "Identity">("CRM");
  const [activeCapabilityIndex, setActiveCapabilityIndex] = useState(0);

  const sectionAnimation = {
    initial: { opacity: 0, y: 60, scale: 0.97 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: false, amount: 0.12 },
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as any },
  };

  const agents = [
    {
      title: "Cadence",
      industry: "Healthcare Claims Automation",
      desc: "Verify insurance, process claims, answer policy questions, and reduce administrative workload.",
      icon: <Pill size={24} strokeWidth={1.5} />,
      userBubble: "Hi, can I verify my insurance policy status for claim #489?",
      aiBubble: "Yes, verified credentials. Claim #489 is approved under your premium policy plan."
    },
    {
      title: "Adama Krishi Mitra",
      industry: "Agriculture Advisory",
      desc: "Provide farming guidance, weather insights, crop recommendations, and local pricing in regional languages.",
      icon: <Globe size={24} strokeWidth={1.5} />,
      userBubble: "टमाटर की फसल में पत्ता लपेटक कीट का नियंत्रण कैसे करें?",
      aiBubble: "आप नीम के तेल का छिड़काव करें या शाम के समय उपयुक्त कीटनाशक का प्रयोग करें।"
    },
    {
      title: "Travel Assistant",
      industry: "Travel & Hospitality",
      desc: "Manage bookings, itinerary changes, cancellations, and customer inquiries around the clock.",
      icon: <Compass size={24} strokeWidth={1.5} />,
      userBubble: "Can I reschedule my flight to tomorrow morning?",
      aiBubble: "Checking available flights. Flight AI-204 has seats open at 8:00 AM. Should I book it?"
    },
    {
      title: "Retail Assistant",
      industry: "Retail Customer Support",
      desc: "Track orders, process returns, answer product questions, and provide shipping updates instantly.",
      icon: <Layers size={24} strokeWidth={1.5} />,
      userBubble: "Where is my order #SH-9812 and when will it arrive?",
      aiBubble: "Your order #SH-9812 has been shipped. It is scheduled for delivery this Wednesday by 4:00 PM."
    },
    {
      title: "Enterprise Custom Agents",
      industry: "Custom Workflows",
      desc: "Built specifically for your organization's workflows, systems, APIs, and business rules.",
      icon: <Cpu size={24} strokeWidth={1.5} />,
      userBubble: "Run database sync and trigger a Slack alert for the sales team.",
      aiBubble: "Database synchronization completed successfully. Slack notification sent to #sales-team."
    }
  ];

  const capabilities = [
    {
      title: "AI Agent Builder",
      desc: "Create intelligent voice agents without complex development.",
      icon: <Cpu size={20} strokeWidth={1.5} />,
      preview: (
        <div style={{ textAlign: "left", width: "100%" }}>
          <p style={{ color: "#820ad1", fontWeight: 700, fontSize: "11px", marginBottom: "8px", letterSpacing: "0.05em" }}>LIVE AGENT BUILDER SCHEMA</p>
          <pre style={{ background: "#f5f5f7", padding: "16px", borderRadius: "12px", fontSize: "12px", overflowX: "auto", color: "#1d1d1f", fontFamily: "monospace" }}>
{`agent("VoiceAssistant") {
  objective: "Support verification"
  defaultLanguage: "en-US"
  voice: "en-US-Neural-F"
  greet: "Hi, how can I help you today?"
}`}
          </pre>
        </div>
      )
    },
    {
      title: "Voice Studio",
      desc: "Customize voices, languages, accents, personalities, and conversation styles.",
      icon: <Headphones size={20} strokeWidth={1.5} />,
      preview: (
        <div style={{ width: "100%", textAlign: "left" }}>
          <p style={{ color: "#820ad1", fontWeight: 700, fontSize: "11px", marginBottom: "12px", letterSpacing: "0.05em" }}>SELECT VOICE PROFILE</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
            <div style={{ padding: "12px", border: "2px solid #820ad1", borderRadius: "8px", background: "rgba(130, 10, 209, 0.04)" }}>
              <p style={{ fontWeight: 700, fontSize: "13px", color: "#820ad1", margin: 0 }}>Aurora (Neural)</p>
              <p style={{ fontSize: "11px", color: "#86868b", margin: "4px 0 0" }}>Warm, friendly, customer support</p>
            </div>
            <div style={{ padding: "12px", border: "1px solid rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
              <p style={{ fontWeight: 700, fontSize: "13px", color: "#1d1d1f", margin: 0 }}>Ethan (Neural)</p>
              <p style={{ fontSize: "11px", color: "#86868b", margin: "4px 0 0" }}>Professional, clear, sales/retail</p>
            </div>
          </div>
          <div className="sweet-wave-animation" style={{ height: "30px" }}>
            <div className="sweet-wave-bar" />
            <div className="sweet-wave-bar" />
            <div className="sweet-wave-bar" />
            <div className="sweet-wave-bar" />
            <div className="sweet-wave-bar" />
            <div className="sweet-wave-bar" />
            <div className="sweet-wave-bar" />
          </div>
        </div>
      )
    },
    {
      title: "Knowledge Hub",
      desc: "Connect documents, FAQs, databases, APIs, and enterprise knowledge.",
      icon: <Lightbulb size={20} strokeWidth={1.5} />,
      preview: (
        <div style={{ width: "100%", textAlign: "left" }}>
          <p style={{ color: "#820ad1", fontWeight: 700, fontSize: "11px", marginBottom: "12px", letterSpacing: "0.05em" }}>KNOWLEDGE SOURCE MAP</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "#f5f5f7", padding: "10px 14px", borderRadius: "10px" }}>
              <span style={{ fontSize: "18px" }}>📄</span>
              <div>
                <p style={{ fontWeight: 700, fontSize: "13px", margin: 0 }}>insurance_policy_guide_2026.pdf</p>
                <p style={{ fontSize: "11px", color: "#86868b", margin: 0 }}>Updated 2 hours ago • PDF file</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "#f5f5f7", padding: "10px 14px", borderRadius: "10px" }}>
              <span style={{ fontSize: "18px" }}>🔌</span>
              <div>
                <p style={{ fontWeight: 700, fontSize: "13px", margin: 0 }}>Salesforce REST API Connector</p>
                <p style={{ fontSize: "11px", color: "#86868b", margin: 0 }}>Connected • 0ms sync latency</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Conversation Center",
      desc: "Manage conversations, transcripts, history, and customer interactions.",
      icon: <Phone size={20} strokeWidth={1.5} />,
      preview: (
        <div style={{ width: "100%", textAlign: "left" }}>
          <p style={{ color: "#820ad1", fontWeight: 700, fontSize: "11px", marginBottom: "12px", letterSpacing: "0.05em" }}>LIVE CONVERSATION RECORD</p>
          <div style={{ padding: "14px", background: "#f5f5f7", borderRadius: "12px", fontSize: "12px", maxHeight: "180px", overflowY: "auto" }}>
            <p style={{ margin: "0 0 8px 0" }}><strong style={{ color: "#820ad1" }}>[00:03] Call ID #98342:</strong> Connected</p>
            <p style={{ margin: "0 0 6px 0", color: "#515154" }}><strong>Customer:</strong> Hello, I want to reschedule my appointment.</p>
            <p style={{ margin: "0 0 6px 0", color: "#820ad1" }}><strong>Agent:</strong> Looking up schedules... I have slots tomorrow at 10 AM or 2 PM.</p>
          </div>
        </div>
      )
    },
    {
      title: "Analytics Dashboard",
      desc: "Monitor performance, sentiment, call quality, and business KPIs.",
      icon: <BarChart3 size={20} strokeWidth={1.5} />,
      preview: (
        <div style={{ width: "100%", textAlign: "left" }}>
          <p style={{ color: "#820ad1", fontWeight: 700, fontSize: "11px", marginBottom: "12px", letterSpacing: "0.05em" }}>CALL QUALITY STATISTICS</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <div style={{ background: "#f5f5f7", padding: "16px", borderRadius: "12px", textAlign: "center" }}>
              <p style={{ fontSize: "28px", fontWeight: "800", color: "#820ad1", margin: 0 }}>98.7%</p>
              <p style={{ fontSize: "11px", color: "#86868b", margin: "4px 0 0" }}>Accuracy Score</p>
            </div>
            <div style={{ background: "#f5f5f7", padding: "16px", borderRadius: "12px", textAlign: "center" }}>
              <p style={{ fontSize: "28px", fontWeight: "800", color: "#0071e3", margin: 0 }}>142ms</p>
              <p style={{ fontSize: "11px", color: "#86868b", margin: "4px 0 0" }}>Average Latency</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Enterprise Integrations",
      desc: "Connect seamlessly with CRM, ERP, telephony, scheduling, messaging, and identity platforms.",
      icon: <Workflow size={20} strokeWidth={1.5} />,
      preview: (
        <div style={{ width: "100%", textAlign: "left" }}>
          <p style={{ color: "#820ad1", fontWeight: 700, fontSize: "11px", marginBottom: "12px", letterSpacing: "0.05em" }}>SLACK & WEBHOOK TRIGGER</p>
          <pre style={{ background: "#f5f5f7", padding: "14px", borderRadius: "12px", fontSize: "11px", overflowX: "auto", color: "#1d1d1f", fontFamily: "monospace" }}>
{`POST /hooks/slack HTTP/1.1
Content-Type: application/json
{
  "event": "call_completed",
  "outcome": "meeting_scheduled",
  "date": "2026-07-07T10:00:00Z"
}`}
          </pre>
        </div>
      )
    }
  ];

  const integrations = {
    CRM: ["Salesforce", "HubSpot", "Zoho", "Microsoft Dynamics"],
    ERP: ["SAP", "Oracle", "NetSuite", "Workday"],
    Telephony: ["Twilio", "Genesys", "RingCentral", "Avaya", "Zoom Voice"],
    Scheduling: ["Google Calendar", "Outlook", "Calendly", "Cal.com"],
    Messaging: ["WhatsApp", "Slack", "Microsoft Teams", "Telegram", "SMS"],
    APIs: ["REST APIs", "GraphQL", "Webhooks"],
    Analytics: ["Power BI", "Tableau", "Looker", "Snowflake"],
    Identity: ["Okta", "Microsoft Entra ID", "SAML", "OAuth"]
  };

  const whyEnterprises = [
    {
      title: "Natural Conversations",
      desc: "Deliver human-like conversations with real-time speech recognition, interruption handling, and ultra-low latency responses.",
      icon: <Headphones size={24} strokeWidth={1.5} />,
      metric: "98% Natural Speech Accuracy"
    },
    {
      title: "Enterprise Automation",
      desc: "AI agents don't just answer questions—they execute workflows, update systems, create tickets, schedule appointments, and trigger business processes.",
      icon: <Workflow size={24} strokeWidth={1.5} />,
      metric: "100+ Systems Integrated"
    },
    {
      title: "Enterprise Knowledge",
      desc: "Provide accurate responses by connecting agents to business documents, FAQs, databases, APIs, and enterprise knowledge bases.",
      icon: <Lightbulb size={24} strokeWidth={1.5} />,
      metric: "Sub-Second RAG Latency"
    },
    {
      title: "Enterprise Scale",
      desc: "Handle thousands of simultaneous conversations securely across multiple channels with enterprise-grade reliability.",
      icon: <ShieldCheck size={24} strokeWidth={1.5} />,
      metric: "99.99% Uptime Guarantee"
    }
  ];

  return (
    <div className="sweet-pro-container">
      {/* 1. HERO SECTION (Redesigned with Split Panel & Side Image) */}
      <section className="sweet-pro-hero">
        <div className="sweet-pro-hero-glow" />
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1] as any }}
        >
          <div className="sweet-split-layout">
            <div>
              <p className="sweet-pro-kicker">ENTERPRISE AI VOICE PLATFORM</p>
              <h1 className="sweet-pro-hero-title" style={{ textAlign: "left", fontSize: "78px" }}>
                Sweet Hello
              </h1>
              <p className="sweet-pro-hero-subtitle" style={{ textAlign: "left", margin: "0 0 20px 0" }}>
                Every Business Conversation. Automated Intelligently.
              </p>
              <p className="sweet-pro-hero-desc" style={{ textAlign: "left", margin: "0 0 40px 0" }}>
                Build AI voice agents that answer calls, understand customer intent, execute business workflows, and integrate seamlessly with your enterprise systems—all from one intelligent platform.
              </p>
              <div className="sweet-pro-hero-ctas" style={{ justifyContent: "flex-start", marginBottom: 0 }}>
                <Link to="/contact" className="btn-pro-solid">
                  Schedule a Demo
                </Link>
                <a href="#ecosystem" className="btn-pro-outline">
                  Explore Platform ↓
                </a>
              </div>
            </div>

            <div className="hero-image-wrapper">
              <img
                src="/SweetHello/voice_agent_hero.png"
                alt="AI Voice Agent Hologram"
                className="hero-side-image"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. TRUSTED ENTERPRISE ECOSYSTEM (Logo Strip) */}
      <section id="ecosystem" className="sweet-pro-section" style={{ background: "#ffffff", padding: "80px 24px" }}>
        <motion.div className="container text-center" {...sectionAnimation}>
          <p className="sweet-pro-section-kicker">TRUSTED ENTERPRISE ECOSYSTEM</p>
          <h2 className="sweet-pro-section-title" style={{ fontSize: "36px", marginBottom: "16px" }}>
            Works with the Enterprise Tools You Already Use
          </h2>
          <p className="sweet-pro-section-desc centered" style={{ maxWidth: "800px", marginBottom: "40px" }}>
            Sweet Hello integrates seamlessly with leading CRM, ERP, telephony, scheduling, and collaboration platforms so your AI agents become a natural extension of your business.
          </p>
          <div className="sweet-pro-hero-marquee" style={{ marginTop: 0 }}>
            <div className="marquee-track">
              {[
                "Twilio",
                "Salesforce",
                "HubSpot",
                "SAP",
                "WhatsApp Business",
                "Genesys",
                "Google Calendar",
                "Slack",
                "Okta",
              ].map((item, idx) => (
                <span key={idx} style={{ color: "#820ad1", fontWeight: 700, fontSize: "18px" }}>
                  {item} &nbsp;•&nbsp;
                </span>
              ))}
              {[
                "Twilio",
                "Salesforce",
                "HubSpot",
                "SAP",
                "WhatsApp Business",
                "Genesys",
                "Google Calendar",
                "Slack",
                "Okta",
              ].map((item, idx) => (
                <span key={`dup-${idx}`} style={{ color: "#820ad1", fontWeight: 700, fontSize: "18px" }}>
                  {item} &nbsp;•&nbsp;
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. WHAT IS SWEET HELLO? (Redesigned with Split Panel & side Dashboard Image) */}
      <section className="sweet-pro-section" style={{ background: "#f5f5f7" }}>
        <motion.div className="container" {...sectionAnimation}>
          <div className="what-is-sweet-split">
            <div className="dashboard-image-wrapper">
              <img
                src="/SweetHello/voice_analytics_dashboard.png"
                alt="AI Voice Analytics Dashboard"
                className="dashboard-side-image"
              />
            </div>

            <div className="timeline-content" style={{ padding: "40px", height: "100%" }}>
              <p className="sweet-pro-section-kicker">WHAT IS SWEET HELLO?</p>
              <h2 className="sweet-pro-section-title" style={{ fontSize: "36px", marginBottom: "20px" }}>
                One Platform. Unlimited AI Voice Agents.
              </h2>
              <p style={{ fontSize: "20px", fontWeight: "600", lineHeight: "1.4", color: "#1d1d1f", marginBottom: "20px" }}>
                Sweet Hello is an enterprise AI Voice Agent Platform that enables organizations to build, deploy, and manage intelligent voice agents for customer engagement and business operations.
              </p>
              <p style={{ fontSize: "16px", color: "#86868b", lineHeight: "1.6", margin: 0 }}>
                Instead of building separate bots for every department, Sweet Hello provides a unified platform where organizations can create AI voice agents for sales, customer support, healthcare, insurance, HR, retail, finance, and countless other business functions.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. WHY ENTERPRISES CHOOSE SWEET HELLO (Redesigned with sticky left panel & benefits accordion list) */}
      <section className="sweet-pro-section" style={{ background: "#ffffff" }}>
        <motion.div className="container" {...sectionAnimation}>
          <div className="capabilities-split-container">
            <div style={{ alignSelf: "start", position: "sticky", top: "100px" }}>
              <p className="sweet-pro-section-kicker">THE ENTERPRISE CHOICE</p>
              <h2 className="sweet-pro-section-title" style={{ fontSize: "40px" }}>Why Enterprises Choose Sweet Hello</h2>
              <p style={{ fontSize: "17px", color: "#86868b", lineHeight: "1.5", marginTop: "16px" }}>
                Built to deliver production-grade robustness, compliance, and flawless client interactions for high-demand enterprise voice channels.
              </p>
            </div>
            
            <div className="benefits-split-list">
              {whyEnterprises.map((item, idx) => (
                <div key={idx} className="benefit-row">
                  <div className="benefit-row-header">
                    <div className="capabilities-icon" style={{ marginBottom: 0, width: "40px", height: "40px", borderRadius: "10px" }}>
                      {item.icon}
                    </div>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.desc}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: 700, color: "#820ad1", marginBottom: "8px" }}>
                    <span>{item.metric}</span>
                    <span>100% Verified</span>
                  </div>
                  <div className="benefit-progress-track">
                    <div className="benefit-progress-fill" style={{ width: idx === 0 ? "98%" : idx === 1 ? "85%" : idx === 2 ? "90%" : "99.99%" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 5. AI AGENTS POWERED BY SWEET HELLO (Redesigned with Selector Tabs & Simulated iPhone View) */}
      <section className="sweet-pro-section sweet-pro-showcase-section">
        <motion.div className="container" {...sectionAnimation}>
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <p className="sweet-pro-section-kicker">AI AGENTS POWERED BY SWEET HELLO</p>
            <h2 className="sweet-pro-section-title">Build AI Agents for Every Industry</h2>
          </div>

          <div className="capabilities-split-container" style={{ alignItems: "center" }}>
            {/* Left side: Tabs selector list */}
            <div className="capabilities-list-nav">
              {agents.map((agent, idx) => (
                <div
                  key={idx}
                  className={`capability-list-item ${activeAgentIndex === idx ? "active" : ""}`}
                  onClick={() => setActiveAgentIndex(idx)}
                >
                  <h3>
                    <span style={{ color: activeAgentIndex === idx ? "#820ad1" : "#86868b" }}>
                      {agent.icon}
                    </span>
                    {agent.title}
                  </h3>
                  <p style={{ fontWeight: 600, color: "#820ad1", fontSize: "12px", margin: "4px 0" }}>{agent.industry}</p>
                  <p>{agent.desc}</p>
                </div>
              ))}
            </div>

            {/* Right side: iPhone call simulator */}
            <div>
              <div className="phone-simulator">
                <div className="phone-screen">
                  <div className="phone-header">
                    <div className="phone-avatar-pulse">
                      <Volume2 size={32} />
                    </div>
                    <div className="phone-agent-name">{agents[activeAgentIndex].title}</div>
                    <div className="phone-agent-status">Active Voice Agent</div>
                  </div>

                  <div className="phone-transcript-area">
                    <div className="phone-bubble user">
                      {agents[activeAgentIndex].userBubble}
                    </div>
                    <div className="phone-bubble ai">
                      {agents[activeAgentIndex].aiBubble}
                    </div>
                  </div>

                  <div className="phone-waves">
                    <div className="phone-wave-bar" style={{ animationDelay: "0.1s" }} />
                    <div className="phone-wave-bar" style={{ animationDelay: "0.3s" }} />
                    <div className="phone-wave-bar" style={{ animationDelay: "0.5s" }} />
                    <div className="phone-wave-bar" style={{ animationDelay: "0.2s" }} />
                    <div className="phone-wave-bar" style={{ animationDelay: "0.4s" }} />
                    <div className="phone-wave-bar" style={{ animationDelay: "0.6s" }} />
                  </div>

                  <div className="phone-controls">
                    <button className="phone-btn"><Mic size={18} /></button>
                    <button className="phone-btn decline"><Phone size={18} style={{ transform: "rotate(135deg)" }} /></button>
                    <button className="phone-btn"><Smile size={18} /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 6. HOW SWEET HELLO WORKS (Redesigned with vertical flow timeline) */}
      <section className="sweet-pro-section sweet-pro-works-section">
        <motion.div className="container" {...sectionAnimation}>
          <div style={{ marginBottom: "64px", textAlign: "center" }}>
            <p className="sweet-pro-section-kicker">DEPLOYMENT LIFECYCLE</p>
            <h2 className="sweet-pro-section-title">How Sweet Hello Works</h2>
            <p className="sweet-pro-section-desc centered">From Idea to Production in Minutes</p>
          </div>

          <div className="works-flow-timeline">
            {[
              {
                step: "01",
                title: "Create",
                desc: "Describe your AI agent's objective using natural language.",
              },
              {
                step: "02",
                title: "Configure",
                desc: "Customize personality, voice, language, knowledge sources, and enterprise integrations.",
              },
              {
                step: "03",
                title: "Deploy",
                desc: "Launch instantly across phone systems, websites, mobile apps, WhatsApp, or collaboration platforms.",
              },
              {
                step: "04",
                title: "Monitor",
                desc: "Track conversations, analyze sentiment, review transcripts, and continuously improve performance.",
              },
            ].map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-number">{item.step}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 7. PLATFORM CAPABILITIES (Redesigned with interactive split preview) */}
      <section className="sweet-pro-section sweet-pro-capabilities-section">
        <motion.div className="container" {...sectionAnimation}>
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <p className="sweet-pro-section-kicker">PLATFORM CAPABILITIES</p>
            <h2 className="sweet-pro-section-title">Everything You Need to Build Enterprise AI Voice Agents</h2>
          </div>

          <div className="capabilities-split-container">
            {/* Left list of capabilities */}
            <div className="capabilities-list-nav">
              {capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className={`capability-list-item ${activeCapabilityIndex === idx ? "active" : ""}`}
                  onMouseEnter={() => setActiveCapabilityIndex(idx)}
                  onClick={() => setActiveCapabilityIndex(idx)}
                >
                  <h3>
                    <span style={{ color: activeCapabilityIndex === idx ? "#820ad1" : "#86868b" }}>
                      {cap.icon}
                    </span>
                    {cap.title}
                  </h3>
                  <p>{cap.desc}</p>
                </div>
              ))}
            </div>

            {/* Right preview box container */}
            <div className="capabilities-preview-box">
              {capabilities[activeCapabilityIndex].preview}
              <div style={{ marginTop: "24px", color: "#86868b", fontSize: "13px" }}>
                Hover or click capabilities on the left to inspect platform modules
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 8. ENTERPRISE INTEGRATIONS (Redesigned with Category Selector Hub) */}
      <section className="sweet-pro-section sweet-pro-ecosystem-section">
        <motion.div className="container" {...sectionAnimation}>
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <p className="sweet-pro-section-kicker">BUILT FOR YOUR EXISTING TECHNOLOGY STACK</p>
            <h2 className="sweet-pro-section-title">Enterprise Integrations</h2>
          </div>

          <div className="integrations-hub">
            {/* Category tabs */}
            <div className="integrations-categories">
              {Object.keys(integrations).map((cat) => (
                <button
                  key={cat}
                  className={`category-tab-btn ${activeIntegrationCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveIntegrationCategory(cat as any)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Glowing Brand Badges */}
            <div className="badge-glowing-grid">
              {integrations[activeIntegrationCategory].map((tool, idx) => (
                <div key={idx} className="badge-pill">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 9. ENTERPRISE USE CASES (Clean Badge Flex Grid) */}
      <section className="sweet-pro-section" style={{ background: "#ffffff" }}>
        <motion.div className="container" {...sectionAnimation}>
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <p className="sweet-pro-section-kicker">ENTERPRISE USE CASES</p>
            <h2 className="sweet-pro-section-title">AI Voice Agents Across Every Business Function</h2>
          </div>

          <div className="ecosystem-grid">
            {[
              {
                name: "Customer Support",
                desc: "Handle inquiries, resolve issues, and improve customer satisfaction with 24×7 availability.",
                icon: <Headphones size={20} />,
              },
              {
                name: "Sales Assistant",
                desc: "Qualify leads, schedule meetings, and follow up with prospects automatically.",
                icon: <Zap size={20} />,
              },
              {
                name: "Appointment Booking",
                desc: "Automate scheduling, reminders, cancellations, and rescheduling.",
                icon: <Clock size={20} />,
              },
              {
                name: "Healthcare",
                desc: "Verify insurance, schedule consultations, and answer patient questions.",
                icon: <Pill size={20} />,
              },
              {
                name: "Insurance",
                desc: "Handle policy inquiries, claims processing, and customer onboarding.",
                icon: <Calculator size={20} />,
              },
              {
                name: "HR Assistant",
                desc: "Answer employee questions, assist with onboarding, and automate HR workflows.",
                icon: <Users size={20} />,
              },
              {
                name: "Retail",
                desc: "Provide order tracking, product recommendations, and return processing.",
                icon: <Layers size={20} />,
              },
              {
                name: "IT Helpdesk",
                desc: "Reset passwords, troubleshoot common issues, and create support tickets.",
                icon: <Briefcase size={20} />,
              },
            ].map((useCase, idx) => (
              <div key={idx} className="ecosystem-card magic-border-card" style={{ minHeight: "220px" }}>
                <div className="ecosystem-icon">{useCase.icon}</div>
                <h3>{useCase.name}</h3>
                <p>{useCase.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 10. WHY SWEET HELLO (Redesigned with High-Impact Stats Metrics) */}
      <section className="sweet-pro-section sweet-pro-works-section">
        <motion.div className="container" {...sectionAnimation}>
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <p className="sweet-pro-section-kicker">DESIGNED FOR ENTERPRISE OPERATIONS</p>
            <h2 className="sweet-pro-section-title">Why Sweet Hello</h2>
          </div>

          <div className="stat-highlight-grid">
            {[
              {
                metric: "0s",
                title: "Faster Customer Response",
                desc: "Instantly answer every call with zero wait time.",
              },
              {
                metric: "100%",
                title: "Intelligent Automation",
                desc: "Execute workflows across enterprise systems without manual intervention.",
              },
              {
                metric: "80%",
                title: "Lower Operational Costs",
                desc: "Reduce repetitive support workloads while improving service quality.",
              },
              {
                metric: "24/7",
                title: "Always Available",
                desc: "Deliver consistent customer experiences 24 hours a day, every day.",
              },
              {
                metric: "SOC2",
                title: "Enterprise Security",
                desc: "Built with enterprise-grade security, encryption, access control, and compliance.",
              },
              {
                metric: "10k+",
                title: "Scalable Architecture",
                desc: "Support thousands of concurrent conversations across global deployments.",
              },
            ].map((why, idx) => (
              <div key={idx} className="stat-number-box">
                <div className="stat-metric">{why.metric}</div>
                <h3>{why.title}</h3>
                <p>{why.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 11. INDUSTRIES (Redesigned with Capsule Tags Layout) */}
      <section className="sweet-pro-section" style={{ background: "#ffffff" }}>
        <motion.div className="container" {...sectionAnimation}>
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <p className="sweet-pro-section-kicker">BUILT FOR EVERY INDUSTRY</p>
            <h2 className="sweet-pro-section-title">Industries</h2>
          </div>

          <div className="capsule-badge-container">
            {[
              { name: "Banking & Financial Services", icon: <Building2 size={16} /> },
              { name: "Healthcare", icon: <Pill size={16} /> },
              { name: "Insurance", icon: <Calculator size={16} /> },
              { name: "Retail & E-commerce", icon: <Layers size={16} /> },
              { name: "Manufacturing", icon: <Briefcase size={16} /> },
              { name: "Travel & Hospitality", icon: <Compass size={16} /> },
              { name: "Telecommunications", icon: <Phone size={16} /> },
              { name: "Logistics & Supply Chain", icon: <Globe size={16} /> },
              { name: "Government", icon: <Scale size={16} /> },
              { name: "Education", icon: <GraduationCap size={16} /> },
            ].map((ind, idx) => (
              <div key={idx} className="capsule-badge">
                <span className="capsule-icon-wrapper">{ind.icon}</span>
                <span>{ind.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="sweet-pro-vision-section">
        <div className="sweet-pro-vision-glow" />
        <motion.div className="container text-center" {...sectionAnimation}>
          <p className="sweet-pro-section-kicker">TRANSFORM EVERY BUSINESS CONVERSATION WITH AI</p>
          <h2 className="sweet-pro-vision-heading" style={{ fontSize: "40px", fontWeight: "800", marginBottom: "24px", lineHeight: "1.2" }}>
            Transform Every Business Conversation with AI
          </h2>
          <p className="sweet-pro-vision-sub" style={{ maxWidth: "800px", margin: "0 auto 32px", fontSize: "18px", color: "#515154" }}>
            Deploy intelligent AI voice agents that automate customer interactions, execute business workflows, and scale enterprise communication without increasing operational complexity.
          </p>

          <div className="sweet-pro-vision-tagline-box" style={{ margin: "24px auto" }}>
            <h3>One Platform. Unlimited AI Voice Agents.</h3>
          </div>

          <div className="sweet-pro-hero-ctas" style={{ justifyContent: "center", marginTop: "48px" }}>
            <Link to="/contact" className="btn-pro-solid">
              Schedule a Demo
            </Link>
            <Link to="/contact" className="btn-pro-outline">
              Talk to Sales
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
