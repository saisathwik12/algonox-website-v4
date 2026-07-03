import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Globe,
  Compass,
  Layers,
  Cpu,
  ChevronRight,
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
} from "lucide-react";
import "./SweetHello.css";

export default function SweetHello() {
  const showcaseScrollRef = useRef<HTMLDivElement>(null);

  const scrollShowcaseCards = (direction: "left" | "right") => {
    if (showcaseScrollRef.current) {
      const scrollAmount = 340;
      showcaseScrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const sectionAnimation = {
    initial: { opacity: 0, y: 60, scale: 0.97 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: false, amount: 0.12 },
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as any },
  };

  return (
    <div className="sweet-pro-container">
      {/* 1. HERO SECTION */}
      <section className="sweet-pro-hero">
        <div className="sweet-pro-hero-glow" />
        <motion.div
          className="container sweet-pro-hero-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1] as any }}
        >
          <motion.p
            className="sweet-pro-kicker"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] as any }}
          >
            SWEETHELLO • ENTERPRISE AI VOICE PLATFORM
          </motion.p>
          <motion.h1
            className="sweet-pro-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] as any, delay: 0.1 }}
          >
            SweetHello
          </motion.h1>
          <motion.p
            className="sweet-pro-hero-subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] as any, delay: 0.2 }}
          >
            Build Intelligent AI Voice Agents for Every Business Conversation
          </motion.p>
          <motion.p
            className="sweet-pro-hero-desc"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] as any, delay: 0.25 }}
          >
            Create, deploy, and manage enterprise AI voice agents that automate customer interactions,
            execute business workflows, and deliver natural conversations—all from a single platform.
          </motion.p>

          <motion.div
            className="sweet-pro-hero-ctas"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] as any, delay: 0.3 }}
          >
            <Link to="/contact" className="btn-pro-solid">
              Schedule a Demo
            </Link>
            <a href="#capabilities" className="btn-pro-outline">
              Explore Platform ↓
            </a>
          </motion.div>

          <motion.div
            className="sweet-pro-hero-marquee"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
          >
            <div className="marquee-label">INTEGRATED ECOSYSTEM CHANNELS</div>
            <div className="marquee-track">
              {[
                "Twilio Telephony",
                "Salesforce CRM",
                "HubSpot CRM",
                "WhatsApp Business",
                "Genesys Cloud",
                "Slack Integration",
                "Google Calendar",
                "SAP ERP",
                "Okta Identity",
              ].map((item, idx) => (
                <span key={idx}>{item}</span>
              ))}
              {[
                "Twilio Telephony",
                "Salesforce CRM",
                "HubSpot CRM",
                "WhatsApp Business",
                "Genesys Cloud",
                "Slack Integration",
                "Google Calendar",
                "SAP ERP",
                "Okta Identity",
              ].map((item, idx) => (
                <span key={`dup-${idx}`}>{item}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. SHOWCASE: AI AGENTS POWERED BY SWEETHELLO */}
      <section className="sweet-pro-section sweet-pro-showcase-section">
        <motion.div className="container" {...sectionAnimation}>
          <div className="sweet-pro-showcase-header">
            <p className="sweet-pro-section-kicker">ONE PLATFORM. MULTIPLE AI AGENTS.</p>
            <h2 className="sweet-pro-section-title">AI Voice Agents Powered by SweetHello</h2>
            <p className="sweet-pro-section-desc">
              From healthcare claims to agricultural advising, SweetHello powers robust, domain-specific voice
              assistants that run on secure, scalable cloud architectures.
            </p>
          </div>
        </motion.div>

        <div className="sweet-pro-showcase-track">
          <div className="sweet-pro-showcase-list" ref={showcaseScrollRef}>
            {[
              {
                title: "Cadence",
                industry: "Healthcare Claims Automation",
                desc: "Instantly verify insurance coverage, process medical claims, and resolve policy inquiries with zero wait times.",
                icon: <ShieldCheck size={28} strokeWidth={1.5} />,
              },
              {
                title: "Adama Krishi Mitra",
                industry: "Agriculture Advisory",
                desc: "Deliver real-time farming advisory, soil health data, and local crop pricing in native regional languages.",
                icon: <Globe size={28} strokeWidth={1.5} />,
              },
              {
                title: "Travel Assistant",
                industry: "Booking & Customer Support",
                desc: "Automate flight adjustments, hotel bookings, and complex itinerary questions around the clock.",
                icon: <Compass size={28} strokeWidth={1.5} />,
              },
              {
                title: "Retail Assistant",
                industry: "Order Tracking & Customer Service",
                desc: "Manage order tracking, process refunds, and answer shipping status queries instantly.",
                icon: <Layers size={28} strokeWidth={1.5} />,
              },
              {
                title: "Custom Enterprise Agents",
                industry: "Built for your business",
                desc: "Tailored to your specific enterprise architecture, APIs, workflows, and database layers.",
                icon: <Cpu size={28} strokeWidth={1.5} />,
              },
            ].map((agent, idx) => (
              <div key={idx} className="sweet-pro-showcase-card">
                <div className="showcase-icon-box">{agent.icon}</div>
                <h3>{agent.title}</h3>
                <h4>{agent.industry}</h4>
                <p>{agent.desc}</p>
                <Link to="/contact" className="showcase-card-arrow" aria-label="Learn more">
                  <ChevronRight size={18} strokeWidth={2} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <div className="sweet-showcase-nav">
            <button className="challenge-nav-btn" onClick={() => scrollShowcaseCards("left")} aria-label="Scroll left">
              <ChevronRight size={20} strokeWidth={2} style={{ transform: "rotate(180deg)" }} />
            </button>
            <button className="challenge-nav-btn" onClick={() => scrollShowcaseCards("right")} aria-label="Scroll right">
              <ChevronRight size={20} strokeWidth={2} />
            </button>
          </div>
        </div>

        <motion.div className="container" {...sectionAnimation}>
          <div className="sweet-pro-quote">
            <h3>What is SweetHello?</h3>
            <h2>
              SweetHello is an enterprise AI Voice Agent Platform that enables organizations to build, deploy,
              and manage intelligent voice agents for customer engagement and business operations.
            </h2>
          </div>
        </motion.div>
      </section>

      {/* 3. PLATFORM CAPABILITIES */}
      <section id="capabilities" className="sweet-pro-section sweet-pro-capabilities-section">
        <motion.div className="container" {...sectionAnimation}>
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <p className="sweet-pro-section-kicker">PLATFORM CAPABILITIES</p>
            <h2 className="sweet-pro-section-title">One Platform. Unlimited AI Voice Agents.</h2>
            <p className="sweet-pro-section-desc centered">
              Equip your organization with a single comprehensive stack to create, orchestrate, and optimize
              conversational voice streams.
            </p>
          </div>

          <div className="capabilities-grid">
            {[
              {
                title: "AI Agent Builder",
                desc: "Create AI voice agents for any business use case.",
                icon: <Cpu size={28} strokeWidth={1.5} />,
              },
              {
                title: "Voice Studio",
                desc: "Customize voice, language, and conversation style.",
                icon: <Headphones size={28} strokeWidth={1.5} />,
              },
              {
                title: "Knowledge Hub",
                desc: "Equip agents with business knowledge and documents.",
                icon: <Lightbulb size={28} strokeWidth={1.5} />,
              },
              {
                title: "Conversations",
                desc: "Manage calls, transcripts, and interaction history.",
                icon: <Phone size={28} strokeWidth={1.5} />,
              },
              {
                title: "Analytics",
                desc: "Monitor performance through real-time dashboards.",
                icon: <BarChart3 size={28} strokeWidth={1.5} />,
              },
              {
                title: "Integrations",
                desc: "Connect with CRM, ERP, telephony, and enterprise systems.",
                icon: <Workflow size={28} strokeWidth={1.5} />,
              },
            ].map((cap, idx) => (
              <div key={idx} className="capabilities-card">
                <div className="capabilities-icon">{cap.icon}</div>
                <h3>{cap.title}</h3>
                <p>{cap.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="sweet-pro-section sweet-pro-works-section">
        <motion.div className="container" {...sectionAnimation}>
          <div style={{ marginBottom: "64px", textAlign: "left" }}>
            <p className="sweet-pro-section-kicker">ENGINEERING LIFECYCLE</p>
            <h2 className="sweet-pro-section-title">How It Works</h2>
            <p className="sweet-pro-section-desc">
              Create an AI voice agent, customize its behavior, deploy it instantly, and monitor every
              conversation from a unified dashboard.
            </p>
          </div>

          <div className="sweet-pro-works-flow">
            {[
              {
                step: "01",
                title: "Create",
                desc: "Describe your agent's objective and outline core conversational goals in natural language.",
              },
              {
                step: "02",
                title: "Configure",
                desc: "Configure behavior, select accents and languages, and link databases or documents in the Knowledge Hub.",
              },
              {
                step: "03",
                title: "Deploy",
                desc: "Launch instantly onto telephony networks (SIP/PSTN), web portals, messaging systems, or native apps.",
              },
              {
                step: "04",
                title: "Monitor",
                desc: "Analyze live transcripts, track interaction history, evaluate sentiment, and continuously improve models.",
              },
            ].map((item, idx) => (
              <div key={idx} className="sweet-pro-works-card">
                <div className="works-step-num">
                  {item.step} • {item.title}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. KEY FEATURES BENTO GRID */}
      <section className="sweet-pro-section">
        <motion.div className="container" {...sectionAnimation}>
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <p className="sweet-pro-section-kicker">KEY FEATURES</p>
            <h2 className="sweet-pro-section-title">Robust Enterprise Infrastructure</h2>
          </div>

          <div className="sweet-pro-bento-grid">
            {/* 1. Human-like Conversations */}
            <div className="sweet-bento-card bento-wide">
              <div className="sweet-bento-glow-spot" />
              <div className="sweet-bento-content">
                <span className="sweet-bento-icon">
                  <Headphones size={20} />
                </span>
                <h3>Human-like Conversations</h3>
                <p>
                  Natural speech patterns, dynamic interruption handling, and ultra-low latency text-to-speech
                  for seamless conversations.
                </p>
                <div className="sweet-bento-visual sweet-wave-animation">
                  <div className="sweet-wave-bar" />
                  <div className="sweet-wave-bar" />
                  <div className="sweet-wave-bar" />
                  <div className="sweet-wave-bar" />
                  <div className="sweet-wave-bar" />
                  <div className="sweet-wave-bar" />
                  <div className="sweet-wave-bar" />
                </div>
              </div>
            </div>

            {/* 2. Multi-language Support */}
            <div className="sweet-bento-card">
              <div className="sweet-bento-glow-spot" />
              <div className="sweet-bento-content">
                <span className="sweet-bento-icon">
                  <Globe size={20} />
                </span>
                <h3>Multi-language Support</h3>
                <p>
                  Equipped to speak and understand 50+ languages and accents globally, ensuring localized
                  customer engagement.
                </p>
              </div>
            </div>

            {/* 3. Intelligent Call Routing */}
            <div className="sweet-bento-card">
              <div className="sweet-bento-glow-spot" />
              <div className="sweet-bento-content">
                <span className="sweet-bento-icon">
                  <Phone size={20} />
                </span>
                <h3>Intelligent Call Routing</h3>
                <p>
                  Determine intent instantly and execute warm call transfers to appropriate departments or
                  live agents.
                </p>
              </div>
            </div>

            {/* 4. Knowledge-driven Responses */}
            <div className="sweet-bento-card bento-wide">
              <div className="sweet-bento-glow-spot" />
              <div className="sweet-bento-content">
                <span className="sweet-bento-icon">
                  <Lightbulb size={20} />
                </span>
                <h3>Knowledge-driven Responses</h3>
                <p>
                  RAG architecture feeds agents with up-to-date business wikis, PDFs, FAQs, and product sheets
                  for accurate answers.
                </p>
                <div className="sweet-bento-visual sweet-doc-mock">
                  <div className="sweet-doc-line" />
                  <div className="sweet-doc-line highlight" />
                  <div className="sweet-doc-line short" />
                </div>
              </div>
            </div>

            {/* 5. Conversation Analytics */}
            <div className="sweet-bento-card">
              <div className="sweet-bento-glow-spot" />
              <div className="sweet-bento-content">
                <span className="sweet-bento-icon">
                  <BarChart3 size={20} />
                </span>
                <h3>Conversation Analytics</h3>
                <p>
                  Complete transcript indexing, automated sentiment analysis, and operational performance
                  dashboards.
                </p>
              </div>
            </div>

            {/* 6. Enterprise Integrations */}
            <div className="sweet-bento-card">
              <div className="sweet-bento-glow-spot" />
              <div className="sweet-bento-content">
                <span className="sweet-bento-icon">
                  <Workflow size={20} />
                </span>
                <h3>Enterprise Integrations</h3>
                <p>Connect with your existing systems: CRMs, ERPs, scheduling tools, and helpdesks out of the box.</p>
              </div>
            </div>

            {/* 7. Secure Operations */}
            <div className="sweet-bento-card">
              <div className="sweet-bento-glow-spot" />
              <div className="sweet-bento-content">
                <span className="sweet-bento-icon">
                  <ShieldCheck size={20} />
                </span>
                <h3>Secure Operations</h3>
                <p>
                  Enterprise compliance including HIPAA guidelines, SOC2 framework standards, and encrypted
                  communications.
                </p>
              </div>
            </div>

            {/* 8. 24×7 Availability */}
            <div className="sweet-bento-card">
              <div className="sweet-bento-glow-spot" />
              <div className="sweet-bento-content">
                <span className="sweet-bento-icon">
                  <Clock size={20} />
                </span>
                <h3>24×7 Availability</h3>
                <p>Deliver support around the clock. Instantly handle infinite concurrent calls with zero busy signals.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 6. BUILD AI AGENTS BY USE CASE */}
      <section className="sweet-pro-section sweet-pro-works-section">
        <motion.div className="container" {...sectionAnimation}>
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <p className="sweet-pro-section-kicker">TAILORED FLOWS</p>
            <h2 className="sweet-pro-section-title">Build AI Agents for Any Use Case</h2>
            <p className="sweet-pro-section-desc centered">
              Custom-built agent archetypes optimized for various functional and operational roles.
            </p>
          </div>

          <div className="industries-grid" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
            {[
              { name: "Customer Support", icon: <Headphones size={28} /> },
              { name: "Sales Assistant", icon: <Zap size={28} /> },
              { name: "Appointment Booking", icon: <Clock size={28} /> },
              { name: "IT Helpdesk", icon: <Briefcase size={28} /> },
              { name: "Hospitality", icon: <Compass size={28} /> },
              { name: "Healthcare", icon: <Pill size={28} /> },
              { name: "Retail", icon: <Layers size={28} /> },
              { name: "Travel", icon: <Globe size={28} /> },
              { name: "Insurance", icon: <Calculator size={28} /> },
              { name: "HR Assistant", icon: <Users size={28} /> },
            ].map((useCase, idx) => (
              <div key={idx} className="industry-card" style={{ padding: "24px 16px", minHeight: "140px" }}>
                <div className="showcase-icon-box" style={{ marginBottom: "12px" }}>
                  {useCase.icon}
                </div>
                <h3 style={{ fontSize: "15px", fontWeight: "700" }}>{useCase.name}</h3>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 7. WORKS WITH YOUR EXISTING ECOSYSTEM (INTEGRATIONS) */}
      <section className="sweet-pro-section sweet-pro-ecosystem-section">
        <motion.div className="container" {...sectionAnimation}>
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <p className="sweet-pro-section-kicker">ENTERPRISE COMPATIBILITY</p>
            <h2 className="sweet-pro-section-title">Works with Your Existing Ecosystem</h2>
            <p className="sweet-pro-section-desc centered">
              SweetHello integrates seamlessly with your tech stack to read, write, and execute database operations.
            </p>
          </div>

          <div className="ecosystem-grid">
            {[
              { type: "CRM", desc: "Salesforce, HubSpot, Zoho, Microsoft Dynamics", icon: <Users size={16} /> },
              { type: "ERP", desc: "SAP, Oracle, NetSuite, Workday", icon: <Briefcase size={16} /> },
              { type: "Telephony", desc: "Twilio, Genesys, Avaya, RingCentral, Zoom Voice", icon: <Phone size={16} /> },
              { type: "Scheduling", desc: "Calendly, Google Calendar, Outlook, Cal.com", icon: <Clock size={16} /> },
              { type: "Messaging", desc: "WhatsApp, Slack, MS Teams, Telegram, SMS", icon: <Layers size={16} /> },
              { type: "APIs", desc: "REST endpoints, Webhooks, GraphQL integration", icon: <Cpu size={16} /> },
              { type: "Analytics", desc: "PowerBI, Tableau, Looker Studio, Snowflake", icon: <BarChart3 size={16} /> },
              { type: "Identity", desc: "Okta, Microsoft Entra ID, PingIdentity, SAML/OIDC", icon: <ShieldCheck size={16} /> },
            ].map((eco, idx) => (
              <div key={idx} className="ecosystem-card">
                <div className="ecosystem-icon">{eco.icon}</div>
                <h3>{eco.type}</h3>
                <p>{eco.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 8. INDUSTRIES GRID */}
      <section className="sweet-pro-section">
        <motion.div className="container" {...sectionAnimation}>
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <p className="sweet-pro-section-kicker">VERSATILE VERTICALS</p>
            <h2 className="sweet-pro-section-title">Industries</h2>
          </div>

          <div className="industries-grid">
            {[
              { name: "Banking", icon: "🏦" },
              { name: "Healthcare", icon: "🏥" },
              { name: "Retail", icon: "🛍" },
              { name: "Travel", icon: "✈" },
              { name: "Telecom", icon: "📞" },
              { name: "Manufacturing", icon: "🏭" },
              { name: "Logistics", icon: "🚚" },
              { name: "Insurance", icon: "🛡" },
            ].map((ind, idx) => (
              <div key={idx} className="industry-card">
                <div className="industry-icon">{ind.icon}</div>
                <h3>{ind.name}</h3>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 9. WHY SWEETHELLO */}
      <section className="sweet-pro-section sweet-pro-works-section">
        <motion.div className="container" {...sectionAnimation}>
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <p className="sweet-pro-section-kicker">THE COMPETITIVE EDGE</p>
            <h2 className="sweet-pro-section-title">Why SweetHello</h2>
          </div>

          <div className="why-grid">
            {[
              {
                title: "Faster Customer Response",
                desc: "Reduce wait times to zero. Greet every customer instantly with automated response streams.",
                icon: "⚡",
              },
              {
                title: "Intelligent Automation",
                desc: "Trigger multi-system workflows, update databases, and complete bookings directly from speech.",
                icon: "🤖",
              },
              {
                title: "Operational Efficiency",
                desc: "Drive cost reductions up to 80% per customer contact while maintaining QA scores.",
                icon: "📈",
              },
              {
                title: "Enterprise Scale",
                desc: "Deploy highly available global systems backed by robust SLA metrics and SOC2 security frameworks.",
                icon: "🌍",
              },
            ].map((why, idx) => (
              <div key={idx} className="why-card">
                <div className="why-glow" />
                <span className="why-icon">{why.icon}</span>
                <h3>{why.title}</h3>
                <p>{why.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 10. VISION & FINAL CTA */}
      <section className="sweet-pro-vision-section">
        <div className="sweet-pro-vision-glow" />
        <motion.div className="container text-center" {...sectionAnimation}>
          <p className="sweet-pro-section-kicker">THE NEXT ERA OF CONVERSATION</p>
          <h2 className="sweet-pro-vision-heading">
            Automate customer interactions, execute business workflows, and deliver natural conversations.
          </h2>
          <p className="sweet-pro-vision-sub">
            Transition your enterprise operations to always-on, intelligent voice-enabled systems.
          </p>

          <div className="sweet-pro-vision-tagline-box">
            <h3>One Platform. Unlimited AI Voice Agents. Built for your business.</h3>
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
