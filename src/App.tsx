import { useState, useEffect, useRef, Fragment } from "react";
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
import { groups, corePages, testimonials } from "./data";
import "./App.css";

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
function Nav() {
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
function Hero({ page, className = "" }: { page: any; className?: string }) {
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
function Tile({ kicker, title, subtitle, ctaText = "Book a Demo", ctaLink = "#", theme = "light" }: any) {
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
function GridTile({ tile, index }: { tile: any; index: number }) {
  return (
    <motion.div
      className="mini-tile grid-tile"
      style={{
        background: tile.bgGradient || tile.bgColor || '#f5f5f7',
        transformOrigin: "center center"
      }}
      initial={{ opacity: 0, y: 50, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (index % 2) * 0.08 }}
    >
      <div className="mini-tile-inner">
        <p className="label">{tile.kicker}</p>
        <h2 className="mini-title text-slate-900">{tile.title}</h2>
        <p className="mini-subtitle">{tile.subtitle}</p>
        <div className="cta-row-links">
          <Link to={tile.link} className="btn-solid-blue" style={{ fontSize: '13px', padding: '6px 16px' }}>
            Learn More
          </Link>
          <Link to="/contact" className="btn-outline-blue" style={{ fontSize: '13px', padding: '5px 16px' }}>
            Book Demo
          </Link>
        </div>
      </div>
      {tile.backgroundImage && (
        <motion.div 
          className="mini-tile-image-wrapper"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-20% 0px" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={tile.backgroundImage}
            alt={tile.title}
            className="mini-tile-image"
          />
        </motion.div>
      )}
    </motion.div>
  );
}

function GridTiles({ tiles }: { tiles: any[] }) {
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
function Testimonials() {
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
function Footer() {
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
    "GEARS (Rules Engine)": "/ACE_products/Gear.png",
    "Smartflows": "/ACE_products/Smartflows.png",
    "COSMOS Master Data Management": "/ACE_products/COSMOS.png",
    "Medsense AI": "/ACE_products/Medsense ai.png",
    "PV Automate": "/ACE_products/PV Automate.png"
  };
  return mapping[title] || "";
};

const getProductTheme = (title: string) => {
  const mapping: Record<string, { bg: string; text: string; btnBg: string; btnText: string }> = {
    "Hertz Email Automation": { bg: "#e2e2f7", text: "#1d1d1f", btnBg: "#1d1d1f", btnText: "#ffffff" },
    "Instabolt Reports": { bg: "#dce3d6", text: "#1d1d1f", btnBg: "#1d1d1f", btnText: "#ffffff" },
    "Ionic Extraction": { bg: "#e9e5f9", text: "#1d1d1f", btnBg: "#1d1d1f", btnText: "#ffffff" },
    "Lucid Reconciliations": { bg: "#d8e7f8", text: "#1d1d1f", btnBg: "#1d1d1f", btnText: "#ffffff" },
    "GEARS (Rules Engine)": { bg: "#fbf1e7", text: "#1d1d1f", btnBg: "#1d1d1f", btnText: "#ffffff" },
    "Smartflows": { bg: "#e2eef7", text: "#1d1d1f", btnBg: "#1d1d1f", btnText: "#ffffff" },
    "COSMOS Master Data Management": { bg: "#e1f0f7", text: "#1d1d1f", btnBg: "#1d1d1f", btnText: "#ffffff" },
    "Medsense AI": { bg: "#0d383b", text: "#ffffff", btnBg: "#ffffff", btnText: "#0d383b" },
    "PV Automate": { bg: "#e9f2fd", text: "#1d1d1f", btnBg: "#1d1d1f", btnText: "#ffffff" }
  };
  return mapping[title] || { bg: "#eef2f7", text: "#1d1d1f", btnBg: "#1d1d1f", btnText: "#ffffff" };
};

function AceProductsCarousel({ products }: { products: any[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
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
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`carousel-dot ${i === activeIndex ? "active" : ""}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
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
function ScrollAnimatedSection({ children, isFirst = false, theme = "light" }: { children: React.ReactNode; isFirst?: boolean; theme?: "light" | "dark" }) {
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
function TrustSection() {
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
function DarkIndustriesSection() {
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
// HOME PAGE
// ============================================================
function HomePage() {
  const page = corePages[0];
  const gridTiles = [
    { kicker: "Media Intelligence Platform", title: "Spectra", subtitle: "Operational intelligence for complex enterprise signals and business data streams.", link: "/spectra", backgroundImage: "/AI_products/Spectra.png", bgGradient: "linear-gradient(135deg, #fff5e6 0%, #fafafc 50%, #ebf5ff 100%)", bgColor: "#fbf9f6" },
    { kicker: "Voice Agents", title: "Sweet Hello", subtitle: "Conversational engagement automation for always-on customer and employee journeys.", link: "/sweet-hello", backgroundImage: "/AI_products/SweetHello.png", bgGradient: "linear-gradient(135deg, #fdfaff 0%, #f9f2ff 50%, #f0ebff 100%)", bgColor: "#fcf8fa" },
    { kicker: "Process Auditing", title: "Codara", subtitle: "Intelligent code generation and automated process auditing.", link: "/codara", backgroundImage: "/AI_products/Codara.png", bgGradient: "linear-gradient(135deg, #f5fcf8 0%, #e8f7ee 50%, #d2ebd9 100%)", bgColor: "#f4fcf7" },
    { kicker: "Enterprise AI", title: "IRIS", subtitle: "Recognition and insight layer for documents, operational data, and process intelligence.", link: "/iris", backgroundImage: "/AI_products/Iris.png", bgGradient: "linear-gradient(135deg, #fafafb 0%, #f1f3f7 50%, #e4e7f0 100%)", bgColor: "#f4f8fc" },
    { kicker: "Visualization", title: "Splash", subtitle: "Real-time dashboarding, analytics, and operational visibility.", link: "/splash", backgroundImage: "https://placehold.co/800x600/e2e8f0/64748b?text=Splash+Image", bgGradient: "linear-gradient(135deg, #f4fdfd 0%, #effaf7 50%, #f0f5fe 100%)", bgColor: "#f5f5f7" },
    { kicker: "Chat Bot", title: "Glide", subtitle: "Conversational AI connected to enterprise workflows, services, and case journeys.", link: "/glide", backgroundImage: "/AI_products/Glide.png", bgGradient: "linear-gradient(135deg, #f9f9fd 0%, #f0fdfd 50%, #fdfdf5 100%)", bgColor: "#fafafa" },
  ];

  const aceProducts = [
    { kicker: "Email Automation", title: "Hertz Email Automation", subtitle: "Cognitive email processing and response automation.", link: "/hertz-email" },
    { kicker: "Reporting", title: "Instabolt Reports", subtitle: "Fast reporting layer for dashboards, structured exports, and insights.", link: "/instabolt-reports" },
    { kicker: "Document Processing", title: "Ionic Extraction", subtitle: "Intelligent document processing for PDFs, scans, and forms.", link: "/ionic-extraction" },
    { kicker: "Reconciliations", title: "Lucid Reconciliations", subtitle: "Automated reconciliation workflows for banking and finance.", link: "/lucid-reconciliations" },
    { kicker: "Rules Engine", title: "GEARS (Rules Engine)", subtitle: "Operational reporting and automation engine for repeatable outputs.", link: "/gears" },
    { kicker: "Workflows", title: "Smartflows", subtitle: "Visual workflow automation with case management, rules, and approvals.", link: "/smartflows" },
    { kicker: "Data Management", title: "COSMOS Master Data Management", subtitle: "Connected command layer across master data and workflows.", link: "/cosmos-mdm" },
    { kicker: "Healthcare", title: "Medsense AI", subtitle: "RCM automation for demographics and charge sheets.", link: "/medsense-ai" },
    { kicker: "Pharmacovigilance", title: "PV Automate", subtitle: "Pharmacovigilance automation for adverse event compliance.", link: "/pv-automate" },
  ];

  return (
    <>
      <Hero page={page} className="homepage-hero" />
      
      <ScrollAnimatedSection isFirst={true}>
        <div className="ace-architecture-section" style={{ background: 'transparent', color: '#1d1d1f', padding: '60px 0 20px' }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p className="label text-center" style={{ color: '#007aff' }}>Platform Blueprint</p>
            <h2 className="ace-architecture-title-large" style={{ color: '#1d1d1f', marginBottom: '1rem' }}>ACE Architecture</h2>
            <p className="subtitle text-center" style={{ maxWidth: '640px', margin: '0 auto 3rem', color: '#86868b' }}>
              Designed for high-performance enterprise automation. Watch the execution flow below.
            </p>
            
            <div className="ace-video-frame-container" style={{ width: '100%', maxWidth: '960px', background: '#f5f5f7', border: '1px solid rgba(0, 0, 0, 0.08)', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)', padding: '12px' }}>
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

// ============================================================
// LISTING PAGE
// ============================================================
function ListingPage({ groupKey }: { groupKey: string }) {
  const group = groups[groupKey as keyof typeof groups];
  if (!group) return null;

  const heroItems = group.items.slice(0, 2);
  const gridItems = group.items.slice(2);

  return (
    <>
      <section className="hero light-mode-hero">
        <div className="hero-content">
          <p className="label">{group.kicker}</p>
          <motion.h1 
            className="title-large text-slate-900 centered"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
          >
            {group.title}
          </motion.h1>
          <p className="subtitle">{group.desc}</p>
          <div className="cta-row-links">
            <Link to="/contact" className="btn-solid-blue">Schedule a Demo</Link>
            <Link to="/" className="btn-outline-blue">Back to Home</Link>
          </div>
        </div>
      </section>

      {heroItems.map((item) => (
        <Tile key={item[1]} kicker={group.label} title={item[0]} subtitle={item[2]} ctaText="Learn more" ctaLink={item[1]} />
      ))}

      {gridItems.length > 0 && (
        <GridTiles tiles={gridItems.map((item: any) => ({
          kicker: group.label, title: item[0], subtitle: item[2],
          link: item[1],
        }))} />
      )}
      <Testimonials />
    </>
  );
}

// ============================================================
// CUSTOM IRIS DETAIL PAGE (Apple-Style Showcase)
// ============================================================
const queryTabs = [
  {
    id: "finance",
    dept: "Finance",
    icon: "💰",
    colleague: "Cyrus",
    prompt: "Cash flow forecast for next quarter?",
    response: "Based on current accounts receivable and recurring contracts, Q3 cash flow is projected at $2.4M. This represents a 14% growth quarter-over-quarter.",
    colleagueBg: "#34c759",
    initials: "CY",
    visual: {
      type: "metric",
      label: "Projected Cash Flow",
      value: "$2,420,000",
      detail: "+14% growth vs Q2",
      items: [
        { name: "Receivables", value: "$1.8M" },
        { name: "Contracts", value: "$0.6M" }
      ]
    }
  },
  {
    id: "sales",
    dept: "Sales",
    icon: "📈",
    colleague: "Vedant",
    prompt: "Win rate by region this month?",
    response: "North America leads with a 68% win rate, followed by EMEA at 54% and APAC at 42%. Overall global win rate is up 4% this month.",
    colleagueBg: "#007aff",
    initials: "VE",
    visual: {
      type: "bars",
      items: [
        { name: "North America", value: "68%", width: "68%", color: "#34c759" },
        { name: "EMEA", value: "54%", width: "54%", color: "#007aff" },
        { name: "APAC", value: "42%", width: "42%", color: "#8e8e93" }
      ]
    }
  },
  {
    id: "marketing",
    dept: "Marketing",
    icon: "📢",
    colleague: "Kiara",
    prompt: "Which campaign had the best ROI?",
    response: "The Q2 Enterprise Cloud campaign yielded the highest ROI at 4.2x, driven by strong response rates in North American financial services.",
    colleagueBg: "#ffcc00",
    initials: "KI",
    visual: {
      type: "metric",
      label: "Top Campaign ROI",
      value: "4.2x ROI",
      detail: "Q2 Enterprise Cloud",
      items: [
        { name: "Lead Gen", value: "1,240 new MQLs" },
        { name: "Pipeline", value: "$1.8M created" }
      ]
    }
  },
  {
    id: "hr",
    dept: "HR",
    icon: "👥",
    colleague: "Aria",
    prompt: "Attrition rate by department?",
    response: "Global attrition is at 5.2% annualized. Engineering remains the lowest at 4.2%, with Sales at 8.5% and Operations at 6.0%.",
    colleagueBg: "#ff2d55",
    initials: "AR",
    visual: {
      type: "bars",
      items: [
        { name: "Engineering", value: "4.2%", width: "42%", color: "#34c759" },
        { name: "Operations", value: "6.0%", width: "60%", color: "#ff9500" },
        { name: "Sales", value: "8.5%", width: "85%", color: "#ff2d55" }
      ]
    }
  },
  {
    id: "operations",
    dept: "Operations",
    icon: "⚙️",
    colleague: "Aarush",
    prompt: "SLA compliance this week?",
    response: "SLA compliance is currently at 99.4%, outperforming our target of 98.5%. Incident resolution times are down to 18 minutes.",
    colleagueBg: "#ff9500",
    initials: "AA",
    visual: {
      type: "metric",
      label: "SLA Compliance Rate",
      value: "99.4%",
      detail: "Target: 98.5% | Avg: 18m",
      items: [
        { name: "Total Tickets", value: "1,840" },
        { name: "On-Time SLA", value: "1,829" }
      ]
    }
  },
  {
    id: "procurement",
    dept: "Procurement",
    icon: "🛒",
    colleague: "Atlas",
    prompt: "Top vendors by spend this year?",
    response: "Year-to-date procurement spend is concentrated in Cloud Infrastructure ($1.4M) and Hardware Provisioning ($850K).",
    colleagueBg: "#5856d6",
    initials: "AT",
    visual: {
      type: "bars",
      items: [
        { name: "AWS Cloud Services", value: "$1.4M", width: "90%", color: "#5856d6" },
        { name: "Dell Hardware Systems", value: "$850K", width: "55%", color: "#8e8e93" }
      ]
    }
  },
  {
    id: "compliance",
    dept: "Compliance",
    icon: "🛡️",
    colleague: "Rachel",
    prompt: "Transactions flagged this month?",
    response: "Out of 124,000 total transactions processed, 14 were flagged for high-risk manual review. All 14 have been fully audited.",
    colleagueBg: "#28cd41",
    initials: "RA",
    visual: {
      type: "metric",
      label: "Compliance Status",
      value: "14 Flagged",
      detail: "100% resolved",
      items: [
        { name: "Audited Transactions", value: "124,000" },
        { name: "Pending Audits", value: "0" }
      ]
    }
  }
];

const getTabIcon = (id: string) => {
  switch (id) {
    case "finance": return <Calculator size={18} />;
    case "sales": return <Briefcase size={18} />;
    case "marketing": return <Megaphone size={18} />;
    case "hr": return <Users size={18} />;
    case "operations": return <Zap size={18} />;
    case "procurement": return <Truck size={18} />;
    case "compliance": return <ShieldCheck size={18} />;
    default: return <Calculator size={18} />;
  }
};

function IrisDetailPage() {
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
            <Link to="/contact" className="btn-solid-blue">Schedule a Demo</Link>
            <a href="#how-iris-works" className="btn-outline-blue">Learn more ↓</a>
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
              "Atlas • Executive", "Cyrus • Finance", "Aria • HR", "Vedant • Analytics", 
              "Aarush • Operations", "Kiara • Marketing", "Rachel • Healthcare", "Nora • Manufacturing"
            ].map((item, idx) => (
              <span key={idx}>{item}</span>
            ))}
            {/* Duplicate for infinite loop */}
            {[
              "Atlas • Executive", "Cyrus • Finance", "Aria • HR", "Vedant • Analytics", 
              "Aarush • Operations", "Kiara • Marketing", "Rachel • Healthcare", "Nora • Manufacturing"
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
              { num: "01", title: "Engage", desc: "Describe your objective in plain language — exactly as you'd brief a colleague.", color: "#5e5ce6", icon: "💬" },
              { num: "02", title: "Reason", desc: "IRIS retrieves data across systems, applies business context, and builds a complete picture.", color: "#0a84ff", icon: "🧠" },
              { num: "03", title: "Recommend", desc: "Delivers structured insights and recommendations with supporting evidence and rationale.", color: "#30d158", icon: "📊" },
              { num: "04", title: "Act", desc: "With your approval, IRIS executes workflows across enterprise systems with a full audit trail.", color: "#ff9f0a", icon: "⚡" }
            ].map((step, idx) => (
              <Fragment key={idx}>
                <motion.div
                  className="iris-process-card"
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.25, 1, 0.5, 1] }}
                >
                  <div className="iris-process-icon-ring" style={{ background: `${step.color}15`, borderColor: `${step.color}30` }}>
                    <span className="iris-process-icon-emoji">{step.icon}</span>
                  </div>
                  <div className="iris-process-num" style={{ color: step.color }}>{step.num}</div>
                  <h3 className="iris-process-title">{step.title}</h3>
                  <p className="iris-process-desc">{step.desc}</p>
                  <div className="iris-process-accent-line" style={{ background: `linear-gradient(90deg, ${step.color}, transparent)` }} />
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
              { code: "NO", name: "Nora", role: "MANUFACTURING", desc: "Pharma ops, production tracking, and quality intelligence.", bg: "#8e8e93" }
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
                  <div className="iris-status-dot" style={{ borderColor: '#0b0b0c' }}>
                    <div className="iris-status-inner" />
                  </div>
                </div>
                <div className="iris-colleague-info">
                  <p className="iris-colleague-role" style={{ color: colleague.bg }}>{colleague.role}</p>
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
                    className={`iris-query-tab-btn ${activeTab === t.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(t.id)}
                    style={{ '--colleague-color': t.colleagueBg } as React.CSSProperties}
                  >
                    <span 
                      className="tab-icon-wrapper"
                      style={{ 
                        backgroundColor: activeTab === t.id ? `${t.colleagueBg}15` : 'rgba(0,0,0,0.03)'
                      }}
                    >
                      <span 
                        className="tab-icon-lucide"
                        style={{ 
                          color: activeTab === t.id ? t.colleagueBg : '#86868b'
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
                            <div className="user-query-bubble">
                              "{t.prompt}"
                            </div>
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
                            
                            <p className="colleague-response-text">
                              {t.response}
                            </p>

                            {/* Visual Data Representation */}
                            <div className="colleague-visual-card">
                              {t.visual.type === "metric" ? (
                                <div className="metric-visual">
                                  <span className="metric-label">{t.visual.label}</span>
                                  <div className="metric-main-row">
                                    <span className="metric-value">{t.visual.value}</span>
                                    <span className="metric-change" style={{ color: t.colleagueBg }}>{t.visual.detail}</span>
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
                span: "wide"
              },
              { 
                title: "Universal Connectivity", 
                desc: "ERP, CRM, HRMS, dashboards, APIs, databases — no rip-and-replace required.",
                theme: "blue",
                icon: "🔗",
                accent: "#0a84ff",
                span: "normal"
              },
              { 
                title: "Workflow Automation", 
                desc: "Schedule meetings, assign tasks, create tickets, trigger approvals, escalate incidents — all with audit trails.",
                theme: "light",
                icon: "⚙️",
                accent: "#ff9f0a",
                span: "normal"
              },
              { 
                title: "Enterprise Memory", 
                desc: "IRIS retains interaction history, decisions, and preferences to deliver increasingly contextual support.",
                theme: "light",
                icon: "🧠",
                accent: "#30d158",
                span: "normal"
              },
              { 
                title: "Multi-Tenant Architecture", 
                desc: "Isolated environments with separate data and workflows for different organizations or business units.",
                theme: "dark",
                icon: "🏢",
                accent: "#ff375f",
                span: "normal"
              },
              { 
                title: "Continuous Improvement", 
                desc: "Learns from every interaction and outcome. Your IRIS gets sharper as your team uses it.",
                theme: "gradient",
                icon: "📈",
                accent: "#bf5af2",
                span: "wide"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className={`iris-bento-card theme-${item.theme} ${item.span === 'wide' ? 'bento-wide' : ''}`}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.25, 1, 0.5, 1] }}
              >
                <div className="iris-bento-icon" style={{ background: `${item.accent}18`, borderColor: `${item.accent}35` }}>
                  <span>{item.icon}</span>
                </div>
                <h3 className="iris-bento-card-title">{item.title}</h3>
                <p className="iris-bento-card-desc">{item.desc}</p>
                <div className="iris-bento-glow" style={{ background: item.accent }} />
              </motion.div>
            ))}
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
            className="iris-title-large"
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
                <li><span className="iris-cross">✖</span> Employees wait days for data-driven answers</li>
                <li><span className="iris-cross">✖</span> Knowledge siloed within individual teams</li>
                <li><span className="iris-cross">✖</span> Analysts spend majority of time on repetitive extraction</li>
                <li><span className="iris-cross">✖</span> Decisions delayed by incomplete information</li>
                <li><span className="iris-cross">✖</span> Only technical staff can access enterprise data</li>
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
                <li><span className="iris-check">✔</span> Insights and recommendations delivered in seconds</li>
                <li><span className="iris-check">✔</span> Enterprise knowledge accessible to every team member</li>
                <li><span className="iris-check">✔</span> Analysts redirected to strategic, high-value work</li>
                <li><span className="iris-check">✔</span> Decisions informed by real-time, cross-system context</li>
                <li><span className="iris-check">✔</span> Every employee supported by a dedicated AI colleague</li>
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
            {["Databases", "CRM Platforms", "HRMS Systems", "Finance Apps", "Dashboards", "Documents", "APIs & Webhooks", "Workflows"].map((stack, idx) => (
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
            Ready to meet your<br />
            <span className="iris-cta-gradient">AI colleague?</span>
          </motion.h2>
          <motion.p 
            className="iris-cta-subtitle"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          >
            Deploy IRIS across your enterprise and give every team the intelligence they need to move faster.
          </motion.p>
          <div className="iris-hero-ctas" style={{ justifyContent: "center", marginTop: "32px" }}>
            <Link to="/contact" className="btn-solid-blue">Schedule a Demo</Link>
            <Link to="/contact" className="btn-outline-blue" style={{ background: "#ffffff" }}>Talk to Sales</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// ============================================================
// DETAIL PAGE
// ============================================================
function DetailPage({ slug }: { slug: string }) {
  const ctaRef = useRef(null);
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" });
  let foundItem: any = null;
  let foundGroup: any = null;
  for (const [key, group] of Object.entries(groups)) {
    const item = group.items.find((i) => i[1] === `/${slug}`);
    if (item) { foundItem = item; foundGroup = { key, ...group }; break; }
  }

  if (!foundItem) {
    return (
      <section className="hero light-mode-hero">
        <div className="hero-content">
          <h1 className="title-large">Page not found</h1>
          <Link to="/" className="btn-solid-blue">Go home</Link>
        </div>
      </section>
    );
  }

  const [name, href, desc] = foundItem;
  const relatedItems = foundGroup.items.filter((i: any[]) => i[1] !== href).slice(0, 4);

  if (slug === "iris") {
    return <IrisDetailPage />;
  }

  return (
    <>
      <section className="hero light-mode-hero">
        <div className="hero-content">
          <p className="label">{foundGroup.label}</p>
          <motion.h1 
            className="title-large text-slate-900 centered"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
          >
            {name}
          </motion.h1>
          <p className="subtitle">{desc}</p>
          <div className="cta-row-links">
            <Link to="/contact" className="btn-solid-blue">Schedule a Demo</Link>
            <Link to={foundGroup.href} className="btn-outline-blue">Back to {foundGroup.label}</Link>
          </div>
        </div>
      </section>

      {slug === "ace" && (
        <section className="ace-architecture-section">
          <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p className="label text-center" style={{ color: '#007aff' }}>Platform Blueprint</p>
            <h2 className="ace-architecture-title-large">ACE Architecture</h2>
            <p className="subtitle text-center" style={{ maxWidth: '640px', margin: '0 auto 3rem', color: '#86868b' }}>
              Designed for high-performance enterprise automation. Watch the execution flow below.
            </p>
            
            <div className="ace-video-frame-container" style={{ width: '100%', maxWidth: '960px' }}>
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
                <source src="flow_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>
      )}

      <Tile kicker={`${foundItem[3]} Overview`} title={`${name} in action`} subtitle="See how it integrates with your existing enterprise workflows." ctaText="Watch Demo" ctaLink="/contact" />

      {relatedItems.length > 0 && (
        <section className="grid-section">
          <div className="container" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="label">Explore More</p>
            <h2 className="title-medium text-slate-900">Related {foundGroup.label}</h2>
          </div>
          <GridTiles tiles={relatedItems.map((item: any) => ({
            kicker: foundGroup.label, title: item[0], subtitle: item[2],
            link: item[1],
          }))} />
        </section>
      )}

      <section className="cta-section" ref={ctaRef}>
        <div className="container" style={{ textAlign: "center" }}>
          <motion.h2 
            className="title-large text-slate-900 centered"
            initial={{ y: 40, opacity: 0 }}
            animate={isCtaInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
          >
            Ready to transform your operations?
          </motion.h2>
          <p className="subtitle">Let's discuss how {name} can work for your enterprise.</p>
          <Link to="/contact" className="btn-solid-blue">Schedule a Demo</Link>
        </div>
      </section>
    </>
  );
}

// ============================================================
// STATIC PAGE
// ============================================================
function StaticPage({ slug }: { slug: string }) {
  const page = corePages.find((p) => p.path === `/${slug}`);
  if (!page) {
    return (
      <section className="hero light-mode-hero">
        <div className="hero-content">
          <h1 className="title-large">Page not found</h1>
          <Link to="/" className="btn-solid-blue">Go home</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="hero light-mode-hero">
        <div className="hero-content">
          <p className="label">{page.eyebrow}</p>
          <motion.h1 
            className="title-large text-slate-900 centered"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
          >
            {page.h1}
          </motion.h1>
          <p className="subtitle">{page.desc}</p>
          <div className="cta-row-links">
            <Link to="/contact" className="btn-solid-blue">Schedule a Demo</Link>
            <Link to="/" className="btn-outline-blue">Back to Home</Link>
          </div>
        </div>
      </section>

      {slug === "about" && (
        <>
          <Tile kicker="Our Mission" title="Intelligent automation for every enterprise." subtitle="We help organizations modernize operations through AI, low-code automation, and cognitive workflows." ctaText="Meet the Team" ctaLink="/contact" />
          <Tile kicker="Global Presence" title="Serving enterprises worldwide." subtitle="From banking to healthcare, our solutions power compliance-driven operations across continents." ctaText="View Case Studies" ctaLink="/resources" />
        </>
      )}

      {slug === "resources" && (
        <GridTiles tiles={[
          { kicker: "Whitepaper", title: "Enterprise AI Playbook", subtitle: "A comprehensive guide to implementing AI at scale.", link: "/contact" },
          { kicker: "Case Study", title: "Banking Transformation", subtitle: "How a leading bank reduced processing time by 90%.", link: "/contact" },
          { kicker: "Guide", title: "IDP Best Practices", subtitle: "Essential patterns for document automation success.", link: "/contact" },
          { kicker: "Webinar", title: "Future of Automation", subtitle: "Expert insights on next-gen enterprise workflows.", link: "/contact" },
        ]} />
      )}

      {slug === "contact" && (
        <>
          <section className="contact-form">
            <div className="container">
              <div className="form-card">
                <h2>Get in Touch</h2>
                <p>Fill out the form below and our team will reach out within 24 hours.</p>
                <form onSubmit={(e) => { e.preventDefault(); alert("Thank you! We will contact you soon."); }} className="form">
                  <div className="form-row">
                    <div className="form-group"><label>First Name</label><input type="text" required /></div>
                    <div className="form-group"><label>Last Name</label><input type="text" required /></div>
                  </div>
                  <div className="form-group"><label>Work Email</label><input type="email" required /></div>
                  <div className="form-group"><label>Company</label><input type="text" required /></div>
                  <div className="form-group"><label>Message</label><textarea rows={4} required></textarea></div>
                  <button type="submit" className="btn-blue">Submit</button>
                </form>
              </div>
            </div>
          </section>
          <GridTiles tiles={[
            { kicker: "Email Us", title: "hello@algonox.com", subtitle: "For general inquiries and partnerships.", link: "#" },
            { kicker: "Call Us", title: "+91 98765 43210", subtitle: "Monday to Friday, 9am to 6pm IST.", link: "#" },
          ]} />
        </>
      )}
    </>
  );
}

// ============================================================
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
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ListingPage groupKey="products" />} />
            <Route path="/ai-solutions" element={<ListingPage groupKey="ai" />} />
            <Route path="/automation-solutions" element={<ListingPage groupKey="automation" />} />
            <Route path="/solutions" element={<ListingPage groupKey="solutions" />} />
            <Route path="/industries" element={<ListingPage groupKey="industries" />} />
            <Route path="/use-cases" element={<ListingPage groupKey="usecases" />} />
            {Object.values(groups).flatMap((group) =>
              group.items.map(([_, href]) => {
                const slug = href.replace("/", "");
                return <Route key={href} path={href} element={<DetailPage slug={slug} />} />;
              })
            )}
            <Route path="/about" element={<StaticPage slug="about" />} />
            <Route path="/resources" element={<StaticPage slug="resources" />} />
            <Route path="/contact" element={<StaticPage slug="contact" />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}