import { corePages } from "../data";
import {
  Hero,
  ScrollAnimatedSection,
  GridTiles,
  TrustSection,
  AceProductsCarousel,
  DarkIndustriesSection,
  Testimonials,
} from "../App";
import "./Home.css";

export default function Home() {
  const page = corePages[0];
  const gridTiles = [
    {
      kicker: "Media Intelligence Platform",
      title: "Spectra",
      subtitle: "Operational intelligence for complex enterprise signals and business data streams.",
      link: "/spectra",
      backgroundImage: "/AI_products/Spectra.png",
      bgGradient: "linear-gradient(135deg, #fff5e6 0%, #fafafc 50%, #ebf5ff 100%)",
      bgColor: "#fbf9f6",
    },
    {
      kicker: "Voice Agents",
      title: "Sweet Hello",
      subtitle: "Conversational engagement automation for always-on customer and employee journeys.",
      link: "/sweet-hello",
      backgroundImage: "/AI_products/SweetHello.png",
      bgGradient: "linear-gradient(135deg, #fdfaff 0%, #f9f2ff 50%, #f0ebff 100%)",
      bgColor: "#fcf8fa",
    },
    {
      kicker: "Process Auditing",
      title: "Codara",
      subtitle: "Intelligent code generation and automated process auditing.",
      link: "/codara",
      backgroundImage: "/AI_products/Codara.png",
      bgGradient: "linear-gradient(135deg, #f5fcf8 0%, #e8f7ee 50%, #d2ebd9 100%)",
      bgColor: "#f4fcf7",
    },
    {
      kicker: "Enterprise AI",
      title: "IRIS",
      subtitle: "Recognition and insight layer for documents, operational data, and process intelligence.",
      link: "/iris",
      backgroundImage: "/AI_products/Iris.png",
      bgGradient: "linear-gradient(135deg, #fafafb 0%, #f1f3f7 50%, #e4e7f0 100%)",
      bgColor: "#f4f8fc",
    },
    {
      kicker: "Visualization",
      title: "Splash",
      subtitle: "Real-time dashboarding, analytics, and operational visibility.",
      link: "/splash",
      backgroundImage: "/AI_products/Splash.png",
      bgGradient: "linear-gradient(135deg, #f4fdfd 0%, #effaf7 50%, #f0f5fe 100%)",
      bgColor: "#f5f5f7",
    },
    {
      kicker: "Chat Bot",
      title: "Glide",
      subtitle: "Conversational AI connected to enterprise workflows, services, and case journeys.",
      link: "/glide",
      backgroundImage: "/AI_products/Glide.png",
      bgGradient: "linear-gradient(135deg, #f9f9fd 0%, #f0fdfd 50%, #fdfdf5 100%)",
      bgColor: "#fafafa",
    },
  ];

  const aceProducts = [
    {
      kicker: "Email Automation",
      title: "Hertz Email Automation",
      subtitle: "Cognitive email processing and response automation.",
      link: "/hertz-email",
    },
    {
      kicker: "Reporting",
      title: "Instabolt Reports",
      subtitle: "Fast reporting layer for dashboards, structured exports, and insights.",
      link: "/instabolt-reports",
    },
    {
      kicker: "Document Processing",
      title: "Ionic Extraction",
      subtitle: "Intelligent document processing for PDFs, scans, and forms.",
      link: "/ionic-extraction",
    },
    {
      kicker: "Reconciliations",
      title: "Lucid Reconciliations",
      subtitle: "Automated reconciliation workflows for banking and finance.",
      link: "/lucid-reconciliations",
    },
    {
      kicker: "Rules Engine",
      title: "GEARS (Rules Engine)",
      subtitle: "Operational reporting and automation engine for repeatable outputs.",
      link: "/gears",
    },
    {
      kicker: "Workflows",
      title: "Smartflows",
      subtitle: "Visual workflow automation with case management, rules, and approvals.",
      link: "/smartflows",
    },
    {
      kicker: "Data Management",
      title: "COSMOS Master Data Management",
      subtitle: "Connected command layer across master data and workflows.",
      link: "/cosmos-mdm",
    },
    {
      kicker: "Healthcare",
      title: "Medsense AI",
      subtitle: "RCM automation for demographics and charge sheets.",
      link: "/medsense-ai",
    },
    {
      kicker: "Pharmacovigilance",
      title: "PV Automate",
      subtitle: "Pharmacovigilance automation for adverse event compliance.",
      link: "/pv-automate",
    },
  ];

  return (
    <>
      <Hero page={page} className="homepage-hero" />

      <ScrollAnimatedSection isFirst={true}>
        <div className="ace-architecture-section" style={{ background: "transparent", color: "#1d1d1f", padding: "60px 0 20px" }}>
          <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <p className="label text-center" style={{ color: "#007aff" }}>Platform Blueprint</p>
            <h2 className="ace-architecture-title-large" style={{ color: "#1d1d1f", marginBottom: "1rem" }}>ACE Architecture</h2>
            <p className="subtitle text-center" style={{ maxWidth: "640px", margin: "0 auto 3rem", color: "#86868b" }}>
              Designed for high-performance enterprise automation. Watch the execution flow below.
            </p>

            <div className="ace-video-frame-container" style={{ width: "100%", maxWidth: "960px", background: "#f5f5f7", border: "1px solid rgba(0, 0, 0, 0.08)", boxShadow: "0 20px 40px rgba(0, 0, 0, 0.05)", padding: "12px" }}>
              <div className="ace-video-window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="ace-architecture-video"
              >
                <source src="/flow_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </ScrollAnimatedSection>

      <ScrollAnimatedSection>
        <div className="container" style={{ marginTop: "5rem", marginBottom: "2rem", textAlign: "left" }}>
          <p className="label">AI Products</p>
          <h2 className="title-medium" style={{ fontSize: "48px", letterSpacing: "-0.02em" }}>Intelligent Core Solutions</h2>
        </div>
        <GridTiles tiles={gridTiles} />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection>
        <TrustSection />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection>
        <div className="carousel-fullscreen-container">
          <div className="container" style={{ textAlign: "left" }}>
            <p className="label">Automation Engine</p>
            <h2 className="title-medium" style={{ fontSize: "48px", letterSpacing: "-0.02em" }}>ACE Products</h2>
          </div>
          <AceProductsCarousel products={aceProducts} />
        </div>
      </ScrollAnimatedSection>

      <ScrollAnimatedSection theme="dark">
        <DarkIndustriesSection />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection>
        <Testimonials />
      </ScrollAnimatedSection>
    </>
  );
}
