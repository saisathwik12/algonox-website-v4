import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { groups } from "../data";
import { Tile, GridTiles, Testimonials } from "../App";
import "./ListingPage.css";

export default function ListingPage({ groupKey }: { groupKey: string }) {
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
            <Link to="/contact" className="btn-solid-blue">
              Schedule a Demo
            </Link>
            <Link to="/" className="btn-outline-blue">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {heroItems.map((item) => (
        <Tile
          key={item[1]}
          kicker={group.label}
          title={item[0]}
          subtitle={item[2]}
          ctaText="Learn more"
          ctaLink={item[1]}
        />
      ))}

      {gridItems.length > 0 && (
        <GridTiles
          tiles={gridItems.map((item: any) => ({
            kicker: group.label,
            title: item[0],
            subtitle: item[2],
            link: item[1],
          }))}
        />
      )}
      <Testimonials />
    </>
  );
}
