import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { corePages } from "../data";
import { Tile } from "../App";
import "./About.css";

export default function About() {
  const page = corePages.find((p) => p.path === "/about");
  if (!page) {
    return (
      <section className="hero light-mode-hero">
        <div className="hero-content">
          <h1 className="title-large">Page not found</h1>
          <Link to="/" className="btn-solid-blue">
            Go home
          </Link>
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
            <Link to="/contact" className="btn-solid-blue">
              Schedule a Demo
            </Link>
            <Link to="/" className="btn-outline-blue">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Tile
        kicker="Our Mission"
        title="Intelligent automation for every enterprise."
        subtitle="We help organizations modernize operations through AI, low-code automation, and cognitive workflows."
        ctaText="Meet the Team"
        ctaLink="/contact"
      />
      <Tile
        kicker="Global Presence"
        title="Serving enterprises worldwide."
        subtitle="From banking to healthcare, our solutions power compliance-driven operations across continents."
        ctaText="View Case Studies"
        ctaLink="/resources"
      />
    </>
  );
}
