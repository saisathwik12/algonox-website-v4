import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { corePages } from "../data";
import { GridTiles } from "../App";
import "./Resources.css";

export default function Resources() {
  const page = corePages.find((p) => p.path === "/resources");
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

      <GridTiles
        tiles={[
          {
            kicker: "Whitepaper",
            title: "Enterprise AI Playbook",
            subtitle: "A comprehensive guide to implementing AI at scale.",
            link: "/contact",
          },
          {
            kicker: "Case Study",
            title: "Banking Transformation",
            subtitle: "How a leading bank reduced processing time by 90%.",
            link: "/contact",
          },
          {
            kicker: "Guide",
            title: "IDP Best Practices",
            subtitle: "Essential patterns for document automation success.",
            link: "/contact",
          },
          {
            kicker: "Webinar",
            title: "Future of Automation",
            subtitle: "Expert insights on next-gen enterprise workflows.",
            link: "/contact",
          },
        ]}
      />
    </>
  );
}
