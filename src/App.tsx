import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import { Menu, X, Search, ChevronRight, Play, Pause, Landmark, Calculator, ShieldCheck, Pill, Briefcase, Tv, Factory, Cpu, Truck, Megaphone, Headphones, Scale, Globe, Users, Zap, Phone, ArrowRight } from "lucide-react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { groups, testimonials } from "./data";
import "./App.css";

import Home from "./pages/Home";
import Iris from "./pages/Iris";
import Spectra from "./pages/Spectra";
import SweetHello from "./pages/SweetHello";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import ListingPage from "./pages/ListingPage";
import DetailPage from "./pages/DetailPage";

const navItems = [
  { key: "products", label: "Products" },
  { key: "ace", label: "ACE", href: "/ace" },
  { key: "spectra", label: "Spectra", href: "/spectra" },
  { key: "sweet-hello", label: "Sweet Hello", href: "/sweet-hello" },
  { key: "codara", label: "Codara", href: "/codara" },
  { key: "iris", label: "Iris", href: "/iris" },
  { key: "splash", label: "Splash", href: "/splash" },
  { key: "glide", label: "Glide", href: "/glide" },
  { key: "industries", label: "Industries" },
  { key: "solutions", label: "Solutions" },
  { key: "about", label: "About", href: "/about" },
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// ============================================================
// SCROLL PROGRESS BAR
// ============================================================
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}







// ============================================================
// NAVIGATION
// ============================================================
export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => { setMobileOpen(false); setActiveMenu(null); }, [location.pathname]);

  // Determine current page title for the subnav (now integrated in main nav)
  let pageTitle = "Algonox";
  if (location.pathname === "/about") pageTitle = "About Algonox";
  else if (location.pathname === "/resources") pageTitle = "Resources";
  else if (location.pathname === "/contact") pageTitle = "Contact Us";
  else if (location.pathname === "/products") pageTitle = "Products Suite";
  else if (location.pathname === "/ai-solutions") pageTitle = "AI Solutions";
  else if (location.pathname === "/automation-solutions") pageTitle = "Automation";
  else if (location.pathname === "/industries") pageTitle = "Industries";
  else if (location.pathname === "/use-cases") pageTitle = "Use Cases";
  else {
    // Check if it's a detail page
    const matchedGroup = Object.values(groups).find(g => 
      g.items.some(item => item[1] === location.pathname)
    );
    if (matchedGroup) {
      const item = matchedGroup.items.find(i => i[1] === location.pathname);
      if (item) pageTitle = item[0];
    }
  }

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-left">
            <Link to="/" className="logo" aria-label="Algonox Home">
              <img src="/algonox_logo.png" alt="Algonox Logo" />
            </Link>
            <span className="nav-title-divider">|</span>
            <span className="nav-page-title">{pageTitle}</span>
          </div>

          <div className="nav-links" onMouseLeave={() => setActiveMenu(null)}>
            {navItems.map((item) => (
              <div
                key={item.key}
                className="nav-item"
                onMouseEnter={() => (!item.href && groups[item.key as keyof typeof groups]) ? setActiveMenu(item.key) : setActiveMenu(null)}
              >
                <Link to={item.href || groups[item.key as keyof typeof groups]?.href || `/${item.key}`}>
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          <div className="nav-right-actions">
            <button className="icon-btn" aria-label="Search"><Search size={15} /></button>
            <Link to="/contact" className="nav-book-btn">Book a Demo</Link>
            <button className="icon-btn menu-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle Menu">
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {activeMenu && groups[activeMenu as keyof typeof groups] && (
            <motion.div
              className="mega-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
              onMouseEnter={() => setActiveMenu(activeMenu)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="mega-columns">
                {activeMenu === "products" ? (
                  <>
                    {/* Column 1: Primary Large Links */}
                    <div className="mega-col">
                      <span className="mega-col-label">In Products:</span>
                      <div className="mega-large-links">
                        {[
                          ["ACE", "/ace"],
                          ["Spectra", "/spectra"],
                          ["Sweet Hello", "/sweet-hello"],
                          ["Codara", "/codara"],
                          ["Iris", "/iris"],
                          ["Splash", "/splash"],
                          ["Glide", "/glide"]
                        ].map(([name, href], idx) => (
                          <motion.div
                            key={name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.02 }}
                          >
                            <Link to={href} className="mega-large-link">
                              {name}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Column 2: Standard Secondary Links */}
                    <div className="mega-col">
                      <span className="mega-col-label">Explore More</span>
                      <div className="mega-standard-links">
                        {groups.products.items
                          .filter(([name]) => !["ACE", "Spectra", "Sweet Hello", "Codara", "IRIS", "Iris", "Splash", "Glide"].includes(name))
                          .map(([name, href], idx) => (
                            <motion.div
                              key={name}
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.02 }}
                            >
                              <Link to={href} className="mega-standard-link">
                                {name}
                              </Link>
                            </motion.div>
                          ))}
                      </div>
                    </div>

                    {/* Column 3: Quick Actions */}
                    <div className="mega-col">
                      <span className="mega-col-label">Quick Links</span>
                      <div className="mega-standard-links">
                        {[
                          ["Schedule a Demo", "/contact"],
                          ["Customer Stories", "/resources"],
                          ["Developer Docs", "/resources"],
                          ["Pricing Guide", "/contact"],
                          ["Technical Whitepapers", "/resources"],
                        ].map(([name, href], idx) => (
                          <motion.div
                            key={name}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.02 }}
                          >
                            <Link to={href} className="mega-standard-link">
                              {name}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Column 1: Primary Large Links */}
                    <div className="mega-col">
                      <span className="mega-col-label">Explore {groups[activeMenu as keyof typeof groups].label}</span>
                      <div className="mega-large-links">
                        {groups[activeMenu as keyof typeof groups].items.slice(0, Math.ceil(groups[activeMenu as keyof typeof groups].items.length / 2)).map(([name, href], idx) => (
                          <motion.div
                            key={name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.02 }}
                          >
                            <Link to={href} className="mega-large-link">
                              {name}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Column 2: Standard Secondary Links */}
                    <div className="mega-col">
                      <span className="mega-col-label">Explore More</span>
                      <div className="mega-standard-links">
                        {groups[activeMenu as keyof typeof groups].items.slice(Math.ceil(groups[activeMenu as keyof typeof groups].items.length / 2)).map(([name, href], idx) => (
                          <motion.div
                            key={name}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.02 }}
                          >
                            <Link to={href} className="mega-standard-link">
                              {name}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Column 3: Quick Actions */}
                    <div className="mega-col">
                      <span className="mega-col-label">Quick Links</span>
                      <div className="mega-standard-links">
                        {[
                          ["Schedule a Demo", "/contact"],
                          ["Customer Stories", "/resources"],
                          ["Developer Docs", "/resources"],
                          ["Pricing Guide", "/contact"],
                          ["Technical Whitepapers", "/resources"],
                        ].map(([name, href], idx) => (
                          <motion.div
                            key={name}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.02 }}
                          >
                            <Link to={href} className="mega-standard-link">
                              {name}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.key}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.04 }}
              >
                <Link
                  to={item.href || groups[item.key as keyof typeof groups]?.href || `/${item.key}`}
                  className="mobile-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ============================================================
// HERO WITH PARALLAX (Clean Solid Light Mode)
// ============================================================
export function Hero({ page, className = "" }: { page: any; className?: string }) {
  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState(800);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const y = useTransform(scrollY, [0, windowHeight], [0, -80]);
  const scale = useTransform(scrollY, [0, windowHeight], [1, 0.93]);
  const opacity = useTransform(scrollY, [0, windowHeight * 0.8], [1, 0]);

  return (
    <section className={`hero light-mode-hero ${className}`}>
      <motion.div className="hero-content" style={{ y, opacity, scale }}>
        <motion.p
          className="label"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {page.eyebrow}
        </motion.p>
        <motion.h1 
          className="title-large text-slate-900"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
        >
          {page.h1}
        </motion.h1>
        <motion.h2
          className="subtitle"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {page.desc}
        </motion.h2>
        <motion.div
          className="cta-row-links"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Link to="/contact" className="btn-solid-blue">
            Book a Demo
          </Link>
          <Link to="/products" className="btn-outline-blue">
            Learn more
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ============================================================
// PRODUCT TILE (Feature Section - Clean Solid Backgrounds)
// ============================================================
export function Tile({ kicker, title, subtitle, ctaText = "Book a Demo", ctaLink = "#", theme = "light" }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className={`tile feature-tile ${theme === "dark" ? "theme-dark" : ""}`}>
      <div className="tile-content">
        <motion.p
          className="label"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {kicker}
        </motion.p>
        <motion.h2 
          className="tile-title text-slate-900"
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="tile-subtitle"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {subtitle}
        </motion.p>
        <motion.div
          className="cta-row-links"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link to={ctaLink} className="btn-solid-blue">
            {ctaText}
          </Link>
          <Link to={ctaLink} className="btn-outline-blue">
            Learn more
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// BENTO GRID TILES (Grid Layout - Solid Light Backgrounds)
// ============================================================
export function ThreeDText({ text }: { text: string }) {
  return (
    <span className="threed-title-text">
      {text}
    </span>
  );
}

function GridTile({ tile, index }: { tile: any; index: number }) {
  const hasBg = !!tile.backgroundImage;
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.setProperty('--rx', `${-y * 15}deg`);
    cardRef.current.style.setProperty('--ry', `${x * 15}deg`);
  }

  function handleMouseLeave() {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty('--rx', '0deg');
    cardRef.current.style.setProperty('--ry', '0deg');
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`mini-tile grid-tile ${hasBg ? 'has-bg' : ''} magic-border-card`}
      style={{
        background: hasBg ? undefined : (tile.bgGradient || tile.bgColor || '#f5f5f7'),
        transformOrigin: "center center"
      }}
      initial={{ opacity: 0, y: 50, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (index % 2) * 0.08 }}
    >
      {hasBg && (
        <div className="mini-tile-bg-wrapper">
          <img
            src={tile.backgroundImage}
            alt={tile.title}
            className="mini-tile-bg-image"
          />
          <div className="mini-tile-bg-overlay" />
        </div>
      )}
      <div className="mini-tile-inner">
        <p className={`label ${hasBg ? 'text-white/80' : 'text-blue-600'}`}>{tile.kicker}</p>
        <h2 className={`mini-title ${hasBg ? 'text-white font-semibold' : 'text-slate-900'}`}>
          <ThreeDText text={tile.title} />
        </h2>
        <p className={`mini-subtitle ${hasBg ? 'text-white/90' : 'text-slate-600'}`}>{tile.subtitle}</p>
        <div className="cta-row-links">
          <Link to={tile.link} className="btn-solid-blue" style={{ fontSize: '13px', padding: '6px 16px' }}>
            Learn More
          </Link>
          <Link to="/contact" className={hasBg ? "btn-outline-white" : "btn-outline-blue"} style={{ fontSize: '13px', padding: '5px 16px' }}>
            Book Demo
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export function GridTiles({ tiles }: { tiles: any[] }) {
  return (
    <section className="grid-section">
      <div className="grid">
        {tiles.map((tile, i) => (
          <GridTile key={i} tile={tile} index={i} />
        ))}
      </div>
    </section>
  );
}

// ============================================================
// CAROUSEL SLIDER FOR TESTIMONIALS
// ============================================================
export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className="testimonials">
      <div className="container testimonials-header" ref={headerRef}>
        <div>
          <p className="label">Customer Stories</p>
          <motion.h2 
            className="title-large text-slate-900"
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
          >
            Trusted by enterprises worldwide.
          </motion.h2>
        </div>
        <div className="carousel-controls">
          <button onClick={scrollLeft} className="carousel-arrow" aria-label="Scroll left">
            <ChevronRight style={{ transform: "rotate(180deg)" }} size={20} />
          </button>
          <button onClick={scrollRight} className="carousel-arrow" aria-label="Scroll right">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="testimonials-carousel-wrapper" ref={scrollRef}>
        <div className="testimonials-carousel-track">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <span className="testimonial-quotes">“</span>
              <p className="quote">{t.quote}</p>
              <div className="author">
                <strong>{t.author}</strong>
                <span>{t.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FOOTER (Directory style)
// ============================================================
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-disclaimer">
          <p>
            Algonox provides enterprise AI and intelligent automation solutions. Product availability and specifications may change.
          </p>
          <p>
            All custom capabilities, low-code processes, and agentic workflows are governed under enterprise data protection guidelines.
          </p>
        </div>
        <div className="footer-divider" />
        <div className="footer-links">
          <div className="footer-col">
            <h4>Products</h4>
            {groups.products.items.slice(0, 6).map(([name, href]) => (
              <Link key={name} to={href}>{name}</Link>
            ))}
          </div>
          <div className="footer-col">
            <h4>AI Solutions</h4>
            {groups.ai.items.map(([name, href]) => (
              <Link key={name} to={href}>{name}</Link>
            ))}
          </div>
          <div className="footer-col">
            <h4>Automation</h4>
            {groups.automation.items.map(([name, href]) => (
              <Link key={name} to={href}>{name}</Link>
            ))}
          </div>
          <div className="footer-col">
            <h4>Industries</h4>
            {groups.industries.items.slice(0, 6).map(([name, href]) => (
              <Link key={name} to={href}>{name}</Link>
            ))}
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About Algonox</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/contact">Contact Sales</Link>
            <Link to="/resources">Careers</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>Copyright © {new Date().getFullYear()} Algonox Inc. All rights reserved.</p>
          </div>
          <div className="footer-legal">
            <Link to="/resources">Privacy Policy</Link>
            <Link to="/resources">Terms of Use</Link>
            <Link to="/resources">Legal Docs</Link>
            <Link to="/resources">Site Map</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// CAROUSEL FOR ACE PRODUCTS (Apple Services Style)
// ============================================================
const getProductImage = (title: string): string => {
  const mapping: Record<string, string> = {
    "Hertz Email Automation": "/ACE_products/Hertz.png",
    "Instabolt Reports": "/ACE_products/Instabolt.png",
    "Ionic Extraction": "/ACE_products/ionic extraction.png",
    "Lucid Reconciliations": "/ACE_products/lucid.png",
    "GEARS (Rules Engine)": "/ACE_products/Gears.png",
    "Smartflows": "/ACE_products/Smartflows.png",
    "COSMOS Master Data Management": "/ACE_products/COSMOS.png",
    "Medsense AI": "/ACE_products/MedsenseAI.png",
    "PV Automate": "/ACE_products/PV Automate.png"
  };
  return mapping[title] || "";
};

const getProductTheme = (title: string) => {
  const mapping: Record<string, { bg: string; text: string; btnBg: string; btnText: string }> = {
    "Hertz Email Automation": { bg: "#0000004D", text: "#ffffff", btnBg: "#1d1d1f", btnText: "#ffffff" },
    "Instabolt Reports": { bg: "#0000004D", text: "#ffffff", btnBg: "#1d1d1f", btnText: "#ffffff" },
    "Ionic Extraction": { bg: "#0000004D", text: "#ffffff", btnBg: "#1d1d1f", btnText: "#ffffff" },
    "Lucid Reconciliations": { bg: "#0000004D", text: "#ffffff", btnBg: "#1d1d1f", btnText: "#ffffff" },
    "GEARS (Rules Engine)": { bg: "#0000004D", text: "#ffffff", btnBg: "#1d1d1f", btnText: "#ffffff" },
    "Smartflows": { bg: "#0000004D", text: "#ffffff", btnBg: "#ffffff", btnText: "#ffffff" },
    "COSMOS Master Data Management": { bg: "#0000004D", text: "#ffffff", btnBg: "#1d1d1f", btnText: "#ffffff" },
    "Medsense AI": { bg: "transparent", text: "#1d1d1f", btnBg: "#1d1d1f", btnText: "#ffffff" },
    "PV Automate": { bg: "#00000080", text: "#ffffff", btnBg: "#1d1d1f", btnText: "#ffffff" }
  };
  return mapping[title] || { bg: "#eef2f7", text: "#1d1d1f", btnBg: "#1d1d1f", btnText: "#ffffff" };
};

export function AceProductsCarousel({ products }: { products: any[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0); // fractional scroll position for smooth interpolation
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<number | null>(null);

  // Premium HSL/Hex light gradients to simulate clean banners
  const gradients = [
    "linear-gradient(135deg, #f5f5f7, #e8e8ed)", // Soft Cool Grey
    "linear-gradient(135deg, #fafafc, #f4ecd8)", // Warm Cream
    "linear-gradient(135deg, #eef2f7, #dce5ef)", // Soft Ice Blue
    "linear-gradient(135deg, #f3f0f7, #e3dbed)", // Pale Violet/Lavender
    "linear-gradient(135deg, #eff6f0, #dcebe1)", // Minty Green
    "linear-gradient(135deg, #fff7f2, #fce6db)", // Pale Peach/Coral
    "linear-gradient(135deg, #fbf0f3, #f2dbdf)", // Soft Lilac
    "linear-gradient(135deg, #f0f7f7, #dbeded)", // Misty Teal
    "linear-gradient(135deg, #ffffff, #f0f0f2)", // Alabaster
    "linear-gradient(135deg, #fefaf0, #f6ebd0)"  // Pale Gold
  ];

  // Initialize scroll position to the middle section (index = products.length)
  useEffect(() => {
    if (scrollRef.current) {
      const firstCard = scrollRef.current.querySelector(".product-card") as HTMLElement;
      if (firstCard) {
        const gap = window.innerWidth <= 600 ? 8 : 16;
        const cardWidth = firstCard.offsetWidth + gap;
        scrollRef.current.scrollLeft = products.length * cardWidth;
      }
    }
  }, [products.length]);

  // Keep scroll aligned on window resize
  useEffect(() => {
    const handleResize = () => {
      if (scrollRef.current) {
        const firstCard = scrollRef.current.querySelector(".product-card") as HTMLElement;
        if (firstCard) {
          const gap = window.innerWidth <= 600 ? 8 : 16;
          const cardWidth = firstCard.offsetWidth + gap;
          scrollRef.current.scrollLeft = (products.length + activeIndex) * cardWidth;
        }
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex, products.length]);

  // Auto-play effect
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % products.length;
        scrollToSlide(next);
        return next;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying, products.length]);

  const scrollToSlide = (index: number) => {
    if (scrollRef.current) {
      const firstCard = scrollRef.current.querySelector(".product-card") as HTMLElement;
      if (firstCard) {
        const gap = window.innerWidth <= 600 ? 8 : 16;
        const cardWidth = firstCard.offsetWidth + gap;
        scrollRef.current.scrollTo({
          left: (products.length + index) * cardWidth,
          behavior: "smooth",
        });
      }
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const firstCard = scrollRef.current.querySelector(".product-card") as HTMLElement;
      if (firstCard) {
        const gap = window.innerWidth <= 600 ? 8 : 16;
        const cardWidth = firstCard.offsetWidth + gap;
        const scrollLeft = scrollRef.current.scrollLeft;
        const totalWidth = products.length * cardWidth;

        // Compute fractional progress within the middle copy for smooth interpolation
        const fractionalIdx = (scrollLeft - totalWidth) / cardWidth;
        const normalizedFractional = ((fractionalIdx % products.length) + products.length) % products.length;
        setScrollProgress(normalizedFractional);

        // Calculate current active index relative to the middle section during swipe
        const currentIdx = Math.round((scrollLeft - totalWidth) / cardWidth);
        const normalizedIdx = (currentIdx + products.length) % products.length;
        if (normalizedIdx >= 0 && normalizedIdx < products.length && normalizedIdx !== activeIndex) {
          setActiveIndex(normalizedIdx);
        }

        // Setup a debounce to reset the scroll position when scrolling settles
        if (scrollTimeoutRef.current) {
          window.clearTimeout(scrollTimeoutRef.current);
        }
        scrollTimeoutRef.current = window.setTimeout(() => {
          handleScrollEnd();
        }, 150);
      }
    }
  };

  const handleScrollEnd = () => {
    if (scrollRef.current) {
      const firstCard = scrollRef.current.querySelector(".product-card") as HTMLElement;
      if (firstCard) {
        const gap = window.innerWidth <= 600 ? 8 : 16;
        const cardWidth = firstCard.offsetWidth + gap;
        const scrollLeft = scrollRef.current.scrollLeft;
        const totalWidth = products.length * cardWidth;

        const currentIdx = Math.round(scrollLeft / cardWidth);
        // If we settled on a card in the first copy
        if (currentIdx < products.length) {
          scrollRef.current.scrollLeft = scrollLeft + totalWidth;
        } 
        // If we settled on a card in the third copy
        else if (currentIdx >= 2 * products.length) {
          scrollRef.current.scrollLeft = scrollLeft - totalWidth;
        }
      }
    }
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    scrollToSlide(index);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Apple-style indicator: compute continuous distance from scroll progress for each dot
  const getIndicatorProps = (dotIndex: number) => {
    const n = products.length;
    // Wrap-aware continuous distance (handles looping)
    const rawDist = Math.abs(dotIndex - scrollProgress);
    const distance = Math.min(rawDist, n - rawDist);

    // Interpolation breakpoints: 0 = active, 1 = near, 2 = approaching, 3+ = far
    const clampedDist = Math.min(distance, 3);

    // Width: 34px (active) → 22px (near) → 14px (approaching) → 8px (far)
    let width: number;
    if (clampedDist <= 1) {
      width = 34 - (34 - 22) * clampedDist; // 34 → 22
    } else if (clampedDist <= 2) {
      width = 22 - (22 - 14) * (clampedDist - 1); // 22 → 14
    } else {
      width = 14 - (14 - 8) * (clampedDist - 2); // 14 → 8
    }

    // Height: 10px when pill-like (distance < 2.5), shrink to 8px when far
    const height = clampedDist < 2.5 ? 10 : 10 - (10 - 8) * Math.min((clampedDist - 2.5) * 2, 1);

    // Scale: 1.05 at center → 1.0 near → 0.85 far
    let scale: number;
    if (clampedDist <= 1) {
      scale = 1.05 - 0.05 * clampedDist;
    } else {
      scale = 1.0 - 0.15 * Math.min((clampedDist - 1) / 2, 1);
    }

    // Opacity: 1 at center → 0.35 far
    const opacity = Math.max(1 - clampedDist * 0.22, 0.35);

    // Background: dark near center, lighter far away
    const bgAlpha = clampedDist <= 1
      ? 0.95 - (0.95 - 0.7) * clampedDist
      : clampedDist <= 2
        ? 0.7 - (0.7 - 0.5) * (clampedDist - 1)
        : 0.5 - (0.5 - 0.25) * Math.min(clampedDist - 2, 1);

    return {
      width,
      height,
      scale,
      opacity,
      backgroundColor: `rgba(0, 0, 0, ${bgAlpha})`,
      borderRadius: width > 12 ? 5 : 999,
    };
  };

  const appleEase = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="products-carousel-section">
      <div className="products-carousel-wrapper" ref={scrollRef} onScroll={handleScroll}>
        <div className="products-carousel-track">
          {[...products, ...products, ...products].map((p, i) => {
            const originalIndex = i % products.length;
            const isActive = originalIndex === activeIndex;
            const bgImage = getProductImage(p.title);
             const theme = getProductTheme(p.title);
             return (
               <div 
                 key={i} 
                 className={`product-card ${isActive ? "active" : ""} ${bgImage ? "has-bg" : ""}`}
                 style={{ 
                   background: bgImage ? undefined : gradients[originalIndex % gradients.length],
                   backgroundSize: "cover",
                   ['--bg-image' as any]: bgImage ? `url("${bgImage}")` : undefined,
                   ['--theme-color' as any]: theme.bg,
                   ['--card-text-color' as any]: theme.text,
                   ['--btn-bg-color' as any]: theme.btnBg,
                   ['--btn-text-color' as any]: theme.btnText
                 }}
               >
                <div className="product-card-body">
                  <p className="product-card-eyebrow">{p.kicker}</p>
                  <h3 className="product-card-title">{p.title}</h3>
                  <p className="product-card-subtitle">{p.subtitle}</p>
                </div>
                <div className="product-card-footer">
                  <Link to={p.link} className="product-card-btn">
                    Learn more
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="carousel-indicators-container">
        <div className="carousel-dots">
          {products.map((_, i) => {
            const props = getIndicatorProps(i);
            return (
              <motion.button
                key={i}
                onClick={() => handleDotClick(i)}
                className="carousel-dot"
                aria-label={`Go to slide ${i + 1}`}
                animate={{
                  width: props.width,
                  height: props.height,
                  scale: props.scale,
                  opacity: props.opacity,
                  backgroundColor: props.backgroundColor,
                  borderRadius: props.borderRadius,
                }}
                transition={{
                  duration: 0.5,
                  ease: appleEase as any,
                }}
              />
            );
          })}
        </div>
        <button className="carousel-play-pause" onClick={togglePlay} aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}>
          {isPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" />}
        </button>
      </div>
    </section>
  );
}

// ============================================================
// VIEWPORT SCROLL ANIMATED SECTION WRAPPER (Premium Dribbble "Spanning" Effect)
// ============================================================
export function ScrollAnimatedSection({ children, isFirst = false, theme = "light" }: { children: React.ReactNode; isFirst?: boolean; theme?: "light" | "dark" }) {
  // If it's the first section overlaying the sticky Hero, we want it to scroll up natively
  // as a solid opaque panel with no entrance container-level animations.
  if (isFirst) {
    return (
      <div className={`scroll-section-container ${theme === "dark" ? "theme-dark" : ""}`} style={{ padding: "40px 0" }}>
        <div className="scroll-section-inner" style={{ background: "transparent", overflow: "hidden" }}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={`scroll-section-container ${theme === "dark" ? "theme-dark" : ""}`} style={{ padding: "40px 0", perspective: "1200px" }}>
      <motion.div 
        style={{ 
          transformOrigin: "center center",
          overflow: "hidden",
          background: "transparent"
        }}
        className="scroll-section-inner"
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// ============================================================
// CUSTOMER TRUST SECTION
// ============================================================
export function TrustSection() {
  const logos = [
    { id: "deloitte", alt: "Deloitte", src: "/companies/Deloitte.png" },
    { id: "kfintech", alt: "KFintech", src: "/companies/KFintech.png" },
    { id: "drreddy", alt: "Dr. Reddy's", src: "/companies/Dr._Reddy's.png" },
    { id: "capgemini", alt: "Capgemini", src: "/companies/Capgemini.png" },
    { id: "icici", alt: "ICICI Bank", src: "/companies/ICICI Bank.png" },
    { id: "adama", alt: "Adama", src: "/companies/Adama.png" },
    { id: "indusind", alt: "IndusInd Bank", src: "/companies/IndusInd Bank.png" },
    { id: "50mncs", alt: "50+ MNCs", text: "50+ MNCs" }
  ];

  // Split into two tracks for a dynamic double-marquee effect
  const track1Logos = logos.slice(0, 4);
  const track2Logos = logos.slice(4);

  // Duplicate the list enough times to ensure a seamless infinite scroll loop
  const marquee1 = [...track1Logos, ...track1Logos, ...track1Logos, ...track1Logos, ...track1Logos, ...track1Logos];
  const marquee2 = [...track2Logos, ...track2Logos, ...track2Logos, ...track2Logos, ...track2Logos, ...track2Logos];

  return (
    <section className="trust-section">
      <div className="trust-inner">
        <div className="trust-title" style={{ maxWidth: '1000px' }}>
          <div className="trust-title-text" style={{ fontSize: 'var(--trust-title-size)', lineHeight: '1.5', wordSpacing: 'normal', textAlign: 'center', fontWeight: 500 }}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
            >
              Our customers are ahead of all their peers
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
            >
              in technology enabled revenue growth and cost optimizations
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="logo-marquee-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="logo-marquee-track">
            {marquee1.map((logo, idx) => (
              <div key={`t1-${logo.id}-${idx}`} className="trust-logo-wrapper">
                {logo.src ? (
                  <img src={logo.src} alt={logo.alt} className="trust-logo-img" />
                ) : (
                  <span className="trust-logo-text">{logo.text}</span>
                )}
              </div>
            ))}
          </div>
          <div className="logo-marquee-track reverse">
            {marquee2.map((logo, idx) => (
              <div key={`t2-${logo.id}-${idx}`} className="trust-logo-wrapper">
                {logo.src ? (
                  <img src={logo.src} alt={logo.alt} className="trust-logo-img" />
                ) : (
                  <span className="trust-logo-text">{logo.text}</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="trust-footer">
          <motion.div 
            className="trust-footer-text"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            Trusted Globally
          </motion.div>
          <motion.h3 
            className="trust-footer-sub"
            initial={{ opacity: 0, scale: 0.75 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-10% 0px" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            Not once but again & again
          </motion.h3>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// DYNAMIC DARK INDUSTRIES SHOWCASE (Premium Interactive Grid)
// ============================================================
export function DarkIndustriesSection() {
  const industries = [
    {
      id: "banking",
      name: "Banking",
      icon: Landmark,
      product: "ACE",
      usecases: [
        "Automation in LEA using ACE",
        "Automating Credit Risk Assessment using ACE",
        "Stock statements automation",
        "Mortgage Loan processing automation",
        "Loan approval using AI & ML",
        "Bank Reconciliation Process"
      ]
    },
    {
      id: "finance-accounting",
      name: "Finance & Accounting",
      icon: Calculator,
      product: "ACE",
      usecases: [
        "Automation of Invoice Processing using ACE",
        "Accounts Payable Automation",
        "Forecast vs. Actual Analysis (Expenses, Revenue, Cash)",
        "Investment Management Automation",
        "Tax Deductions & TDS Reconciliations"
      ]
    },
    {
      id: "insurance",
      name: "Insurance",
      icon: ShieldCheck,
      product: "ACE",
      usecases: [
        "Automation of Healthcare Insurance using ACE",
        "Contract Analysis using ACE",
        "Insurance Claim Processing"
      ]
    },
    {
      id: "pharma",
      name: "Pharmaceutical",
      icon: Pill,
      usecases: [
        "RPA Implementation for QA-QC Adherence",
        "Clinical Trials Management via Intelligent Automation",
        "Supply Chain & Inventory Management",
        "Regulatory Affairs Communications Automation",
        "Quality Assurance & Quality Control Automation",
        "Compliance Process Automation",
        "Predictive Maintenance"
      ]
    },
    {
      id: "fin-services",
      name: "Financial Services",
      icon: Briefcase,
      product: "ACE",
      usecases: [
        "Automation of Compliance Reports Generation",
        "Credit Identification & Reconciliation using ACE",
        "AI Platform for Govt. Agency Integration",
        "Mutual Fund Reconciliation",
        "Fraud Detection & Prevention",
        "Automation of KYC & AML Operations",
        "Underwriting Support & Contract Management"
      ]
    },
    {
      id: "media",
      name: "Media",
      icon: Tv,
      usecases: [
        "Automation of Planning using RPA"
      ]
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      icon: Factory,
      usecases: [
        "Competitive Pricing, Monitoring & Analytics",
        "Data Entry Automation into ERP/CRM Systems",
        "Sales Personnel Claims Validation & Processing",
        "Intercompany Tax Processing & Quarterly Closeouts",
        "Materials & Resource Distributions",
        "Remittance Processing"
      ]
    },
    {
      id: "ites",
      name: "ITES",
      icon: Cpu,
      usecases: [
        "Incident Management using AI & NLP",
        "Contact Center Process Automation"
      ]
    },
    {
      id: "logistics",
      name: "Logistics",
      icon: Truck,
      usecases: [
        "Price Forecasting & Analytics",
        "ERP Database Update & Reporting Automation",
        "Automating Route Creation using AI & ML",
        "Order & Inventory Tracking"
      ]
    },
    {
      id: "marketing",
      name: "Marketing",
      icon: Megaphone,
      usecases: [
        "Campaign Management & Ingestion"
      ]
    },
    {
      id: "bpo",
      name: "BPO",
      icon: Headphones,
      usecases: [
        "Automated Customer Responses & Email Automation"
      ]
    },
    {
      id: "legal",
      name: "Legal",
      icon: Scale,
      usecases: [
        "Artificial Intelligence-Based Legal Research",
        "Predicting Legal Outcomes & Case Reasoning"
      ]
    },
    {
      id: "outsourcing",
      name: "Outsourcing",
      icon: Globe,
      usecases: [
        "Revenue Cycle Management (RCM) Automation"
      ]
    },
    {
      id: "hr",
      name: "HR",
      icon: Users,
      usecases: [
        "Payroll Process Automation"
      ]
    },
    {
      id: "energy",
      name: "Energy",
      icon: Zap,
      usecases: [
        "Asset Performance Management"
      ]
    },
    {
      id: "telecom",
      name: "Telecommunications",
      icon: Phone,
      usecases: [
        "Hardware Ticket Resolution & Automation",
        "Porting & Verifying Customer Information",
        "Billing Data Management"
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(0);
  const activeInd = industries[activeTab];

  return (
    <section className="dark-ind-section">
      <div className="dark-ind-header">
        <p className="label" style={{ color: "#86868b", marginBottom: "12px" }}>Built for high-volume operations</p>
        <h2 className="dark-ind-title">
          Designed for compliance-driven industries.
        </h2>
        <p className="dark-ind-subtitle">
          Algonox engine automates complex, scale-heavy journeys across the enterprise ecosystem.
        </p>
      </div>

      <div className="dark-ind-explorer">
        {/* Left Side: Tabs List */}
        <div className="dark-ind-tabs-col">
          <div className="dark-ind-tabs-container">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              const isActive = idx === activeTab;
              return (
                <button
                  key={ind.id}
                  className={`dark-ind-tab-btn ${isActive ? "active" : ""}`}
                  onClick={() => setActiveTab(idx)}
                >
                  <Icon size={16} className="dark-ind-tab-icon" />
                  <span>{ind.name}</span>
                  <ChevronRight size={14} className="dark-ind-tab-arrow" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Details View */}
        <div className="dark-ind-details-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeInd.id}
              className="dark-ind-details-card"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <div className="dark-ind-card-header">
                <div className="dark-ind-card-title-row">
                  <div className="dark-ind-card-avatar">
                    <activeInd.icon size={22} />
                  </div>
                  <h3 className="dark-ind-card-name">{activeInd.name}</h3>
                </div>
                {activeInd.product && (
                  <span className="dark-ind-card-product-badge">
                    Powered by {activeInd.product}
                  </span>
                )}
              </div>

              <div className="dark-ind-card-body">
                <h4 className="dark-ind-section-label">Solutions & Use Cases</h4>
                <div className="dark-ind-usecases-grid">
                  {activeInd.usecases.map((uc, uidx) => (
                    <motion.div
                      key={uidx}
                      className="dark-ind-usecase-item"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: uidx * 0.05 }}
                    >
                      <ArrowRight size={14} className="dark-ind-usecase-bullet" />
                      <span>{uc}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {activeInd.product && (
                <div className="dark-ind-card-footer">
                  <div className="dark-ind-product-promo">
                    <p className="dark-ind-promo-text">
                      Need custom templates for {activeInd.name}? Algonox {activeInd.product} features ready-to-deploy adapters for all of these workflows.
                    </p>
                    <Link to={`/${activeInd.product.toLowerCase()}`} className="dark-ind-promo-btn">
                      <span>Explore {activeInd.product} Platform</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// ============================================================
/* Moved old page-level components to src/pages/ */

// AMBIENT BACKGROUND GLOWS (Cre8tera Style)
// ============================================================
function AmbientBackground() {
  return (
    <div className="ambient-background">
      <div className="ambient-blob blob-1" />
      <div className="ambient-blob blob-2" />
      <div className="ambient-blob blob-3" />
      <div className="ambient-blob blob-4" />
    </div>
  );
}

// ============================================================
// MAIN APP
// ============================================================
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollProgress />
      <div className="app light-theme">
        <AmbientBackground />
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ListingPage groupKey="products" />} />
            <Route path="/ai-solutions" element={<ListingPage groupKey="ai" />} />
            <Route path="/automation-solutions" element={<ListingPage groupKey="automation" />} />
            <Route path="/solutions" element={<ListingPage groupKey="solutions" />} />
            <Route path="/industries" element={<ListingPage groupKey="industries" />} />
            <Route path="/use-cases" element={<ListingPage groupKey="usecases" />} />
            <Route path="/iris" element={<Iris />} />
            <Route path="/spectra" element={<Spectra />} />
            <Route path="/sweet-hello" element={<SweetHello />} />
            {Object.values(groups).flatMap((group) =>
              group.items.map(([_, href]) => {
                const slug = href.replace("/", "");
                if (slug === "iris" || slug === "spectra" || slug === "sweet-hello") return null;
                return <Route key={href} path={href} element={<DetailPage slug={slug} />} />;
              })
            )}
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}