import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { groups } from "../data";
import { Tile, GridTiles } from "../App";
import Iris from "./Iris";
import Spectra from "./Spectra";
import SweetHello from "./SweetHello";
import Ace from "./Ace";
import "./DetailPage.css";

export default function DetailPage({ slug }: { slug: string }) {
  const ctaRef = useRef(null);
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" });
  let foundItem: any = null;
  let foundGroup: any = null;
  for (const [key, group] of Object.entries(groups)) {
    const item = group.items.find((i) => i[1] === `/${slug}`);
    if (item) {
      foundItem = item;
      foundGroup = { key, ...group };
      break;
    }
  }

  if (slug === "ace" || slug.endsWith("ace")) {
    return <Ace />;
  }

  if (!foundItem) {
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

  const [name, href, desc] = foundItem;
  const relatedItems = foundGroup.items.filter((i: any[]) => i[1] !== href).slice(0, 4);

  if (slug === "iris") {
    return <Iris />;
  }

  if (slug === "spectra") {
    return <Spectra />;
  }

  if (slug === "sweet-hello") {
    return <SweetHello />;
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
            <Link to="/contact" className="btn-solid-blue">
              Schedule a Demo
            </Link>
            <Link to={foundGroup.href} className="btn-outline-blue">
              Back to {foundGroup.label}
            </Link>
          </div>
        </div>
      </section>

      {slug.endsWith("ace") && (
        <section className="ace-architecture-section">
          <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <p className="label text-center" style={{ color: "#007aff" }}>
              Platform Blueprint
            </p>
            <h2 className="ace-architecture-title-large">ACE Architecture</h2>
            <p className="subtitle text-center" style={{ maxWidth: "640px", margin: "0 auto 3rem", color: "#86868b" }}>
              Designed for high-performance enterprise automation. Watch the execution flow below.
            </p>

            <div className="ace-video-frame-container" style={{ width: "100%", maxWidth: "960px" }}>
              <div className="ace-video-window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <video autoPlay loop muted playsInline className="ace-architecture-video">
                <source src="flow_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>
      )}

      <Tile
        kicker={`${foundItem[3]} Overview`}
        title={`${name} in action`}
        subtitle="See how it integrates with your existing enterprise workflows."
        ctaText="Watch Demo"
        ctaLink="/contact"
      />

      {relatedItems.length > 0 && (
        <section className="grid-section">
          <div className="container" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="label">Explore More</p>
            <h2 className="title-medium text-slate-900">Related {foundGroup.label}</h2>
          </div>
          <GridTiles
            tiles={relatedItems.map((item: any) => ({
              kicker: foundGroup.label,
              title: item[0],
              subtitle: item[2],
              link: item[1],
            }))}
          />
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
          <Link to="/contact" className="btn-solid-blue">
            Schedule a Demo
          </Link>
        </div>
      </section>
    </>
  );
}
