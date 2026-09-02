import { useState, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Mic,
  ShieldCheck,
  Brain,
  Zap,
  CheckCircle2,
  UserCheck,
  Search,
  Settings2,
  Headphones,
  BookOpen,
  Workflow,
  ClipboardList,
  Target,
  Compass,
  AlertTriangle,
  MessageSquare,
  Volume2,
  Database,
  RefreshCw,
  CalendarCheck,
  Filter,
  FileText,
  Rocket,
  RouteIcon,
  Phone,
  Clock,
  Users,
  Plane,
  Sprout,
  Server,
  ArrowRight,
  BarChart3,
  TrendingUp,
  Eye,
  Globe,
  Cpu,
  Activity,
  Link2,
} from "lucide-react";
import "./VoiceAgents.css";

/* ── animation helpers ── */
const ease = [0.25, 1, 0.5, 1] as const;
const stagger = (i: number, base = 0) => ({ duration: 0.8, ease, delay: base + i * 0.1 });
const fadeUp = (y = 20) => ({ initial: { opacity: 0, y }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" } });

/* ── Use‑case data ── */
const useCaseCategories = [
  {
    key: "customer",
    label: "Customer Operations",
    items: [
      { title: "Customer Support", desc: "Handle common queries, capture issues, and route conversations intelligently.", icon: <Headphones size={20} /> },
      { title: "Missed Call Recovery", desc: "Reconnect with missed callers and capture their intent.", icon: <Phone size={20} /> },
      { title: "After-Hours Support", desc: "Keep customer communication running beyond business hours.", icon: <Clock size={20} /> },
      { title: "Agent Overflow", desc: "Handle call spikes and escalate conversations when human support is needed.", icon: <Users size={20} /> },
    ],
  },
  {
    key: "sales",
    label: "Sales & Growth",
    items: [
      { title: "Lead Qualification", desc: "Understand prospect intent and qualify leads before human engagement.", icon: <Filter size={20} /> },
      { title: "Outbound Campaigns", desc: "Conduct personalized outbound conversations at scale.", icon: <Rocket size={20} /> },
      { title: "Customer Re-engagement", desc: "Reconnect with customers and drive the next interaction.", icon: <RefreshCw size={20} /> },
    ],
  },
  {
    key: "healthcare",
    label: "Healthcare",
    items: [
      { title: "Appointment Scheduling", desc: "Help customers book, reschedule, and confirm appointments.", icon: <CalendarCheck size={20} /> },
      { title: "Claims Follow-up", desc: "Communicate claim status, follow-ups, and next steps.", icon: <FileText size={20} /> },
      { title: "Patient Communication", desc: "Automate routine communication while maintaining conversational context.", icon: <MessageSquare size={20} /> },
    ],
  },
  {
    key: "travel",
    label: "Travel & Hospitality",
    items: [
      { title: "Booking Assistance", desc: "Handle booking-related questions and requests.", icon: <Plane size={20} /> },
      { title: "Travel Updates", desc: "Provide relevant updates and assistance during the journey.", icon: <Globe size={20} /> },
      { title: "Reservation Support", desc: "Manage customer requests and service interactions.", icon: <ClipboardList size={20} /> },
    ],
  },
  {
    key: "agriculture",
    label: "Agriculture",
    items: [
      { title: "Farmer Assistance", desc: "Provide conversational guidance and support.", icon: <Sprout size={20} /> },
      { title: "Issue Reporting", desc: "Capture reported problems and relevant information.", icon: <AlertTriangle size={20} /> },
      { title: "Expert Escalation", desc: "Route complex cases to the appropriate expert.", icon: <RouteIcon size={20} /> },
    ],
  },
  {
    key: "enterprise",
    label: "Enterprise & IT",
    items: [
      { title: "IT Helpdesk", desc: "Handle common IT requests and troubleshooting conversations.", icon: <Server size={20} /> },
      { title: "Service Requests", desc: "Capture requests and initiate downstream workflows.", icon: <Workflow size={20} /> },
      { title: "CRM Verification", desc: "Verify information and keep business records updated.", icon: <Database size={20} /> },
    ],
  },
];

/* ── Configure Intelligence Cards ── */
const configCards = [
  { title: "Persona", desc: "Define who the agent is and how it introduces itself.", icon: <UserCheck size={20} /> },
  { title: "Voice", desc: "Choose how the agent sounds, speaks, and communicates.", icon: <Volume2 size={20} /> },
  { title: "Knowledge", desc: "Give the agent the information it needs to answer accurately.", icon: <BookOpen size={20} /> },
  { title: "Workflow", desc: "Define the steps it should follow to complete a business process.", icon: <Workflow size={20} /> },
  { title: "Information", desc: "Specify what the agent needs to collect during conversations.", icon: <ClipboardList size={20} /> },
  { title: "Tactics", desc: "Configure objection handling, qualification, persuasion, or support strategies.", icon: <Target size={20} /> },
  { title: "Strategy", desc: "Define how the agent should approach and frame conversations.", icon: <Compass size={20} /> },
  { title: "Escalation", desc: "Specify exactly when a human should take over.", icon: <AlertTriangle size={20} /> },
  { title: "Hard Rules", desc: "Set the rules the agent must never violate.", icon: <ShieldCheck size={20} /> },
  { title: "Sample Conversations", desc: "Guide the agent with examples of desired interactions.", icon: <MessageSquare size={20} /> },
];

export default function VoiceAgents() {
  const [activeCategory, setActiveCategory] = useState("customer");

  return (
    <div className="va-page">
      {/* ══════════════════════════════════════════
          01 — HERO
      ══════════════════════════════════════════ */}
      <section className="va-card va-hero">
        <div className="va-hero-content">
          <motion.p className="va-eyebrow" {...fadeUp()} transition={stagger(0)}>
            SWEETHELLO
          </motion.p>
          <motion.h1 className="va-hero-title" {...fadeUp(30)} transition={stagger(0, 0.15)}>
            Voice AI that understands.<br />Reasons. Acts.
          </motion.h1>
          <motion.p className="va-hero-subtitle" {...fadeUp()} transition={stagger(0, 0.3)}>
            Build intelligent voice agents for any business workflow.
          </motion.p>
          <motion.p className="va-hero-desc" {...fadeUp()} transition={stagger(0, 0.4)}>
            SweetHello is an enterprise AI voice platform that enables businesses to create, configure, and deploy specialized voice agents that understand natural conversations, follow business workflows, take action, and seamlessly involve humans when needed.
          </motion.p>
          <motion.div className="va-hero-ctas" {...fadeUp()} transition={stagger(0, 0.5)}>
            <Link to="/contact" className="va-btn-solid">Book a Demo</Link>
            <a href="#platform" className="va-btn-outline">Explore How It Works ↓</a>
          </motion.div>

          {/* Flow strip */}
          <motion.div className="va-hero-flow" {...fadeUp()} transition={stagger(0, 0.65)}>
            {["Listen", "Understand", "Reason", "Act"].map((s, i) => (
              <Fragment key={s}>
                {i > 0 && <span className="va-flow-arrow">→</span>}
                <span className="va-flow-step">{s}</span>
              </Fragment>
            ))}
          </motion.div>

          <motion.div className="va-hero-pills" {...fadeUp()} transition={stagger(0, 0.8)}>
            {["Customer Support", "Sales", "Scheduling", "Claims", "Helpdesk"].map((t) => (
              <span key={t} className="va-pill">{t}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          02 — ONE PLATFORM
      ══════════════════════════════════════════ */}
      <section id="platform" className="va-card">
        <div className="container">
          <motion.p className="va-label" {...fadeUp()} transition={stagger(0)}>ONE PLATFORM. MANY POSSIBILITIES.</motion.p>
          <motion.h2 className="va-title" {...fadeUp(30)} transition={stagger(0, 0.15)}>
            Build a voice agent for the way<br />your business works.
          </motion.h2>
          <motion.p className="va-subtitle" {...fadeUp()} transition={stagger(0, 0.3)}>
            Every business has different conversations, processes, and customer needs. SweetHello provides the foundation to create and configure purpose-built AI voice agents for different domains, business functions, and workflows.
          </motion.p>
          <motion.p className="va-body-text" {...fadeUp()} transition={stagger(0, 0.4)}>
            Define what the agent knows, how it communicates, what it should do, what rules it must follow, and when it should involve a human. One platform. Different agents. Different workflows.
          </motion.p>

          {/* Visual flow */}
          <motion.div className="va-platform-flow" {...fadeUp()} transition={stagger(0, 0.5)}>
            {["SWEETHELLO\nVoice AI Platform", "CREATE & CONFIGURE", "SPECIALIZED AGENT", "BUSINESS WORKFLOW", "BUSINESS ACTION"].map((step, i) => (
              <Fragment key={i}>
                {i > 0 && <div className="va-vflow-line" />}
                <div className={`va-vflow-node ${i === 2 ? "va-vflow-highlight" : ""}`}>
                  {step.split("\n").map((l, li) => <span key={li}>{l}</span>)}
                </div>
              </Fragment>
            ))}
            {/* Floating labels around "SPECIALIZED AGENT" */}
            <div className="va-floating-labels">
              {["Healthcare", "Insurance", "Retail", "Travel", "Agriculture", "Banking", "Sales", "Customer Operations"].map((l) => (
                <span key={l} className="va-float-label">{l}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          03 — CONVERSATION TO ACTION
      ══════════════════════════════════════════ */}
      <section className="va-card">
        <div className="container">
          <motion.p className="va-label" {...fadeUp()} transition={stagger(0)}>FROM CONVERSATION TO ACTION</motion.p>
          <motion.h2 className="va-title" {...fadeUp(30)} transition={stagger(0, 0.15)}>
            More than a conversation.<br />An intelligent workflow.
          </motion.h2>
          <motion.p className="va-subtitle" {...fadeUp()} transition={stagger(0, 0.3)}>
            SweetHello doesn't stop at understanding what someone says. It connects the conversation to the information, decisions, and actions required to complete the task.
          </motion.p>

          <div className="va-process-flow">
            {[
              { num: "01", title: "Listen", desc: "Understand speech, intent, context, and conversational cues in real time.", icon: <Mic size={22} />, color: "#5e5ce6" },
              { num: "02", title: "Verify", desc: "Confirm relevant customer or business information before proceeding.", icon: <UserCheck size={22} />, color: "#0a84ff" },
              { num: "03", title: "Reason", desc: "Use knowledge, context, business rules, and configured workflows to determine the right next step.", icon: <Brain size={22} />, color: "#30d158" },
              { num: "04", title: "Act", desc: "Retrieve information, update records, trigger workflows, schedule appointments, or perform configured actions.", icon: <Zap size={22} />, color: "#ff9f0a" },
              { num: "05", title: "Resolve", desc: "Complete the interaction autonomously or escalate it to the right human.", icon: <CheckCircle2 size={22} />, color: "#ff375f" },
            ].map((step, idx) => (
              <Fragment key={idx}>
                <motion.div
                  className="va-process-card"
                  {...fadeUp(40)}
                  transition={{ duration: 0.7, delay: idx * 0.12, ease }}
                >
                  <div className="va-process-icon" style={{ background: `${step.color}12`, color: step.color }}>
                    {step.icon}
                  </div>
                  <div className="va-process-num" style={{ color: step.color }}>{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                  <div className="va-process-accent" style={{ background: `linear-gradient(90deg, ${step.color}, transparent)` }} />
                </motion.div>
                {idx < 4 && (
                  <motion.div className="va-process-arrow" {...fadeUp()} transition={{ duration: 0.5, delay: idx * 0.12 + 0.3 }}>
                    <ChevronRight size={18} strokeWidth={2.5} />
                  </motion.div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          04 — BUILD YOUR AGENT
      ══════════════════════════════════════════ */}
      <section className="va-card">
        <div className="container">
          <motion.p className="va-label" {...fadeUp()} transition={stagger(0)}>BUILD YOUR AGENT</motion.p>
          <motion.h2 className="va-title" {...fadeUp(30)} transition={stagger(0, 0.15)}>
            Create an AI voice agent in minutes.
          </motion.h2>
          <motion.p className="va-subtitle" {...fadeUp()} transition={stagger(0, 0.3)}>
            No technical expertise required. Simply describe the agent the way you would explain a new role to a team member. SweetHello turns that description into a structured agent configuration that you can review, refine, and deploy.
          </motion.p>

          <div className="va-builder-grid">
            {[
              { num: "01", title: "Describe", desc: "Tell SweetHello what the agent should do.", color: "#5e5ce6" },
              { num: "02", title: "Generate", desc: "Create the initial instructions, behavior, and conversation structure.", color: "#0a84ff" },
              { num: "03", title: "Customize", desc: "Fine-tune every part of the agent.", color: "#30d158" },
              { num: "04", title: "Deploy", desc: "Put your agent into live conversations.", color: "#ff9f0a" },
            ].map((step, idx) => (
              <motion.div key={idx} className="va-builder-card" {...fadeUp(40)} transition={{ duration: 0.7, delay: idx * 0.12, ease }}>
                <span className="va-builder-num" style={{ color: step.color }}>{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.p className="va-hint" {...fadeUp()} transition={stagger(0, 0.6)}>
            Start from scratch or use a pre-built template.
          </motion.p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          05 — CONFIGURE THE INTELLIGENCE
      ══════════════════════════════════════════ */}
      <section className="va-card">
        <div className="container">
          <motion.p className="va-label" {...fadeUp()} transition={stagger(0)}>CONFIGURE THE INTELLIGENCE</motion.p>
          <motion.h2 className="va-title" {...fadeUp(30)} transition={stagger(0, 0.15)}>
            You define how the agent thinks and works.
          </motion.h2>
          <motion.p className="va-subtitle" {...fadeUp()} transition={stagger(0, 0.3)}>
            Every voice agent can be configured around its specific business purpose.
          </motion.p>

          <div className="va-config-grid">
            {configCards.map((card, idx) => (
              <motion.div key={idx} className="va-config-card" {...fadeUp(30)} transition={{ duration: 0.6, delay: idx * 0.06, ease }}>
                <div className="va-config-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          06 — VOICE CUSTOMIZATION
      ══════════════════════════════════════════ */}
      <section className="va-card">
        <div className="container">
          <motion.p className="va-label" {...fadeUp()} transition={stagger(0)}>MAKE IT SOUND LIKE YOUR BUSINESS</motion.p>
          <motion.h2 className="va-title" {...fadeUp(30)} transition={stagger(0, 0.15)}>
            Every agent has a voice of its own.
          </motion.h2>
          <motion.p className="va-subtitle" {...fadeUp()} transition={stagger(0, 0.3)}>
            Create a voice experience that fits your brand, audience, and use case.
          </motion.p>

          <motion.div className="va-voice-split" {...fadeUp()} transition={stagger(0, 0.4)}>
            <div className="va-voice-options">
              {["Gender", "Age range", "Language", "Voice", "Speaking style", "Voice tuning"].map((opt) => (
                <div key={opt} className="va-voice-option">
                  <Settings2 size={16} />
                  <span>{opt}</span>
                </div>
              ))}
            </div>
            <div className="va-voice-visual">
              <div className="va-waveform">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} className="va-wave-bar" style={{ animationDelay: `${i * 0.08}s` }} />
                ))}
              </div>
              <p className="va-voice-tagline">Your workflow. Your voice. Your experience.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          07 — MEMORY
      ══════════════════════════════════════════ */}
      <section className="va-card">
        <div className="container">
          <motion.p className="va-label" {...fadeUp()} transition={stagger(0)}>MEMORY</motion.p>
          <motion.h2 className="va-title" {...fadeUp(30)} transition={stagger(0, 0.15)}>
            Remember what matters.
          </motion.h2>
          <motion.p className="va-subtitle" {...fadeUp()} transition={stagger(0, 0.3)}>
            Conversations shouldn't start from zero every time. SweetHello gives each agent its own dedicated memory, allowing it to retain relevant information across interactions.
          </motion.p>

          <div className="va-memory-grid">
            {[
              { title: "Remember", desc: "Store configured information from previous conversations.", color: "#5e5ce6" },
              { title: "Recall", desc: "Bring relevant context into future interactions.", color: "#0a84ff" },
              { title: "Personalize", desc: "Use that context to make conversations more relevant.", color: "#30d158" },
              { title: "Act", desc: "Use remembered information to move the workflow forward.", color: "#ff9f0a" },
            ].map((step, idx) => (
              <Fragment key={idx}>
                <motion.div className="va-memory-card" {...fadeUp(30)} transition={{ duration: 0.7, delay: idx * 0.12, ease }}>
                  <div className="va-memory-dot" style={{ background: step.color }} />
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </motion.div>
              </Fragment>
            ))}
          </div>
          <motion.div className="va-memory-flow" {...fadeUp()} transition={stagger(0, 0.6)}>
            <span>Conversation 01</span>
            <span className="va-flow-arrow">→</span>
            <span className="va-flow-step">Memory</span>
            <span className="va-flow-arrow">→</span>
            <span>Conversation 02</span>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          08 — TAKE ACTION
      ══════════════════════════════════════════ */}
      <section className="va-card">
        <div className="container">
          <motion.p className="va-label" {...fadeUp()} transition={stagger(0)}>TAKE ACTION, NOT JUST ANSWERS</motion.p>
          <motion.h2 className="va-title" {...fadeUp(30)} transition={stagger(0, 0.15)}>
            Turn every conversation into an outcome.
          </motion.h2>
          <motion.p className="va-subtitle" {...fadeUp()} transition={stagger(0, 0.3)}>
            A great voice agent shouldn't just tell someone what to do. It should be able to do the work.
          </motion.p>

          <div className="va-actions-grid">
            {[
              { title: "Retrieve information", desc: "Access relevant enterprise data.", icon: <Search size={20} /> },
              { title: "Update records", desc: "Capture and synchronize information.", icon: <Database size={20} /> },
              { title: "Schedule appointments", desc: "Find available slots and confirm bookings.", icon: <CalendarCheck size={20} /> },
              { title: "Qualify leads", desc: "Understand intent and collect qualification details.", icon: <Filter size={20} /> },
              { title: "Create requests", desc: "Initiate tickets, service requests, or workflows.", icon: <FileText size={20} /> },
              { title: "Trigger actions", desc: "Connect conversations to downstream business processes.", icon: <Zap size={20} /> },
              { title: "Verify information", desc: "Confirm customer or business data.", icon: <ShieldCheck size={20} /> },
              { title: "Route conversations", desc: "Send complex interactions to the right human or team.", icon: <RouteIcon size={20} /> },
            ].map((action, idx) => (
              <motion.div key={idx} className="va-action-card" {...fadeUp(30)} transition={{ duration: 0.6, delay: idx * 0.07, ease }}>
                <div className="va-action-icon">{action.icon}</div>
                <h3>{action.title}</h3>
                <p>{action.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div className="va-action-flow" {...fadeUp()} transition={stagger(0, 0.7)}>
            {["Conversation", "Decision", "Action"].map((s, i) => (
              <Fragment key={s}>
                {i > 0 && <span className="va-flow-arrow">→</span>}
                <span className="va-flow-step">{s}</span>
              </Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          09 — ENTERPRISE CONNECTED
      ══════════════════════════════════════════ */}
      <section className="va-card">
        <div className="container">
          <motion.p className="va-label" {...fadeUp()} transition={stagger(0)}>CONNECTED TO YOUR ENTERPRISE</motion.p>
          <motion.h2 className="va-title" {...fadeUp(30)} transition={stagger(0, 0.15)}>
            Works with the systems your business already runs on.
          </motion.h2>
          <motion.p className="va-subtitle" {...fadeUp()} transition={stagger(0, 0.3)}>
            SweetHello connects the voice experience with your existing enterprise ecosystem.
          </motion.p>

          <motion.div className="va-arch-flow" {...fadeUp()} transition={stagger(0, 0.4)}>
            <div className="va-arch-node va-arch-caller">
              <Phone size={20} />
              <span>Caller</span>
            </div>
            <div className="va-arch-line" />
            <div className="va-arch-node">
              <Headphones size={20} />
              <span>Telephony</span>
            </div>
            <div className="va-arch-line" />
            <div className="va-arch-node va-arch-core">
              <div className="va-arch-core-inner">
                <span className="va-arch-core-title">SweetHello Voice AI</span>
                <div className="va-arch-core-steps">
                  <span>Speech</span>
                  <ChevronRight size={14} />
                  <span>Intelligence</span>
                  <ChevronRight size={14} />
                  <span>Voice</span>
                </div>
              </div>
            </div>
            <div className="va-arch-line" />
            <div className="va-arch-node">
              <Server size={20} />
              <span>Enterprise Systems</span>
              <span className="va-arch-sub">CRM · ERP · APIs · Databases · Workflows</span>
            </div>
            <div className="va-arch-line" />
            <div className="va-arch-node va-arch-action">
              <Zap size={20} />
              <span>Business Action</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          10 — USE CASES
      ══════════════════════════════════════════ */}
      <section className="va-card">
        <div className="container">
          <motion.p className="va-label" {...fadeUp()} transition={stagger(0)}>USE CASES</motion.p>
          <motion.h2 className="va-title" {...fadeUp(30)} transition={stagger(0, 0.15)}>
            Built for the conversations your<br />business has every day.
          </motion.h2>
          <motion.p className="va-subtitle" {...fadeUp()} transition={stagger(0, 0.3)}>
            From high-volume customer interactions to specialized enterprise workflows, SweetHello can power purpose-built voice agents across functions and industries.
          </motion.p>

          <motion.div className="va-usecase-tabs" {...fadeUp()} transition={stagger(0, 0.4)}>
            {useCaseCategories.map((cat) => (
              <button
                key={cat.key}
                className={`va-tab-btn ${activeCategory === cat.key ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="va-usecase-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease }}
            >
              {useCaseCategories.find((c) => c.key === activeCategory)?.items.map((item, idx) => (
                <div key={idx} className="va-usecase-card">
                  <div className="va-usecase-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <motion.p className="va-hint" {...fadeUp()} transition={stagger(0, 0.6)}>
            If there's a conversation, there's a workflow waiting to be automated.
          </motion.p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          11 — HUMAN + AI
      ══════════════════════════════════════════ */}
      <section className="va-card">
        <div className="container">
          <motion.p className="va-label" {...fadeUp()} transition={stagger(0)}>HUMAN + AI</motion.p>
          <motion.h2 className="va-title" {...fadeUp(30)} transition={stagger(0, 0.15)}>
            AI when it can. Humans when they should.
          </motion.h2>
          <motion.p className="va-subtitle" {...fadeUp()} transition={stagger(0, 0.3)}>
            Not every conversation should end with automation. SweetHello can recognize when an interaction requires human expertise and escalate it with the relevant conversation context.
          </motion.p>

          <motion.div className="va-escalation-flow" {...fadeUp()} transition={stagger(0, 0.4)}>
            <div className="va-esc-side">
              <div className="va-esc-badge ai">AI Agent</div>
              <div className="va-esc-steps">
                {["Understand", "Attempt Resolution", "Detect Complexity"].map((s, i) => (
                  <Fragment key={s}>
                    {i > 0 && <div className="va-esc-line" />}
                    <div className="va-esc-step">{s}</div>
                  </Fragment>
                ))}
              </div>
            </div>
            <div className="va-esc-transfer">
              <ArrowRight size={24} />
            </div>
            <div className="va-esc-side">
              <div className="va-esc-badge human">Human Agent</div>
              <p className="va-esc-note">The customer doesn't have to repeat the story. The human receives the context needed to continue.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          12 — CONVERSATION INTELLIGENCE
      ══════════════════════════════════════════ */}
      <section className="va-card">
        <div className="container">
          <motion.p className="va-label" {...fadeUp()} transition={stagger(0)}>CONVERSATION INTELLIGENCE</motion.p>
          <motion.h2 className="va-title" {...fadeUp(30)} transition={stagger(0, 0.15)}>
            Every conversation leaves you smarter.
          </motion.h2>
          <motion.p className="va-subtitle" {...fadeUp()} transition={stagger(0, 0.3)}>
            SweetHello automatically records conversations and maintains transcripts, giving teams visibility into what customers are asking and how agents are performing.
          </motion.p>

          <div className="va-intel-grid">
            {[
              { title: "Review", desc: "Access conversation history and transcripts.", icon: <Eye size={22} />, color: "#5e5ce6" },
              { title: "Understand", desc: "Identify customer needs, recurring questions, and interaction patterns.", icon: <Brain size={22} />, color: "#0a84ff" },
              { title: "Measure", desc: "Monitor agent performance, outcomes, and escalations.", icon: <BarChart3 size={22} />, color: "#30d158" },
              { title: "Improve", desc: "Refine prompts, workflows, knowledge, and business rules.", icon: <TrendingUp size={22} />, color: "#ff9f0a" },
            ].map((step, idx) => (
              <motion.div key={idx} className="va-intel-card" {...fadeUp(30)} transition={{ duration: 0.7, delay: idx * 0.12, ease }}>
                <div className="va-intel-icon" style={{ background: `${step.color}12`, color: step.color }}>
                  {step.icon}
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div className="va-intel-flow" {...fadeUp()} transition={stagger(0, 0.6)}>
            {["Talk", "Capture", "Understand", "Improve"].map((s, i) => (
              <Fragment key={s}>
                {i > 0 && <span className="va-flow-arrow">→</span>}
                <span className="va-flow-step">{s}</span>
              </Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          13 — ENTERPRISE SCALE
      ══════════════════════════════════════════ */}
      <section className="va-card">
        <div className="container">
          <motion.p className="va-label" {...fadeUp()} transition={stagger(0)}>BUILT FOR ENTERPRISE SCALE</motion.p>
          <motion.h2 className="va-title" {...fadeUp(30)} transition={stagger(0, 0.15)}>
            From one agent to an entire voice workforce.
          </motion.h2>
          <motion.p className="va-subtitle" {...fadeUp()} transition={stagger(0, 0.3)}>
            SweetHello is designed for high-volume enterprise voice operations, supporting always-on availability, concurrent conversations, real-time interactions, and integration with enterprise systems.
          </motion.p>

          <div className="va-scale-grid">
            {[
              { metric: "24/7", title: "Always Available", icon: <Clock size={24} /> },
              { metric: "Real-Time", title: "Natural Conversations", icon: <Activity size={24} /> },
              { metric: "Enterprise", title: "Built for High-Volume", icon: <Cpu size={24} /> },
              { metric: "Integrated", title: "Connected to Business Systems", icon: <Link2 size={24} /> },
            ].map((stat, idx) => (
              <motion.div key={idx} className="va-scale-card" {...fadeUp(30)} transition={{ duration: 0.7, delay: idx * 0.12, ease }}>
                <div className="va-scale-icon">{stat.icon}</div>
                <div className="va-scale-metric">{stat.metric}</div>
                <p>{stat.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          14 — FINAL CTA
      ══════════════════════════════════════════ */}
      <section className="va-card va-cta-section">
        <div className="container">
          <motion.h2 className="va-cta-title" {...fadeUp(30)} transition={stagger(0, 0.15)}>
            Give your business a voice that can act.
          </motion.h2>
          <motion.p className="va-cta-sub" {...fadeUp()} transition={stagger(0, 0.3)}>
            Build intelligent voice agents for your workflows with SweetHello.
          </motion.p>
          <motion.div className="va-hero-ctas" {...fadeUp()} transition={stagger(0, 0.45)}>
            <Link to="/contact" className="va-btn-solid">Book a Demo</Link>
          </motion.div>
          <motion.p className="va-cta-tagline" {...fadeUp()} transition={stagger(0, 0.6)}>
            Create. Configure. Connect. Deploy.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
