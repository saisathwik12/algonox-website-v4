import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { corePages } from "../data";
import { GridTiles } from "../App";
import "./Contact.css";

export default function Contact() {
  const page = corePages.find((p) => p.path === "/contact");
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

      <section className="contact-form">
        <div className="container">
          <div className="form-card">
            <h2>Get in Touch</h2>
            <p>Fill out the form below and our team will reach out within 24 hours.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! We will contact you soon.");
              }}
              className="form"
            >
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" required />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" required />
                </div>
              </div>
              <div className="form-group">
                <label>Work Email</label>
                <input type="email" required />
              </div>
              <div className="form-group">
                <label>Company</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows={4} required></textarea>
              </div>
              <button type="submit" className="btn-blue">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <GridTiles
        tiles={[
          {
            kicker: "Email Us",
            title: "hello@algonox.com",
            subtitle: "For general inquiries and partnerships.",
            link: "#",
          },
          {
            kicker: "Call Us",
            title: "+91 98765 43210",
            subtitle: "Monday to Friday, 9am to 6pm IST.",
            link: "#",
          },
        ]}
      />
    </>
  );
}
