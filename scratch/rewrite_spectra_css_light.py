css_light_code = """
/* ============================================================
   SPECTRA PRO DETAIL PAGE (Apple Light-Mode Theme & Animations)
   ============================================================ */
.spectra-pro-container {
  background-color: #f5f5f7;
  color: #1d1d1f;
  min-height: 100vh;
  overflow-x: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  padding-bottom: 80px;
}

.spectra-pro-container * {
  box-sizing: border-box;
}

/* 1. HERO SECTION */
.spectra-pro-hero {
  position: relative;
  padding: 180px 24px 100px;
  text-align: center;
  overflow: hidden;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
}

.spectra-pro-hero-glow {
  position: absolute;
  top: -150px;
  left: 50%;
  transform: translateX(-50%);
  width: 900px;
  height: 600px;
  background: radial-gradient(circle, rgba(94, 92, 230, 0.06) 0%, rgba(191, 90, 242, 0.04) 30%, rgba(100, 210, 255, 0.02) 60%, transparent 100%);
  filter: blur(80px);
  pointer-events: none;
  z-index: 1;
}

.spectra-pro-hero-content {
  position: relative;
  z-index: 2;
  max-width: 960px;
  margin: 0 auto;
}

.spectra-pro-kicker {
  font-size: 14px;
  font-weight: 700;
  color: #86868b;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 24px;
}

.spectra-pro-hero-title {
  font-size: 110px;
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 0.95;
  margin: 0 0 24px;
  background: linear-gradient(90deg, #1d1d1f 0%, #5e5ce6 35%, #bf5af2 70%, #ff2d55 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent !important;
}

.spectra-pro-hero-subtitle {
  font-size: 26px;
  font-weight: 500;
  color: #515154;
  line-height: 1.35;
  max-width: 780px;
  margin: 0 auto 48px;
  letter-spacing: -0.015em;
}

.spectra-pro-hero-ctas {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin-bottom: 72px;
}

.btn-pro-solid {
  font-size: 16px;
  font-weight: 600;
  background: #1d1d1f;
  color: #ffffff;
  padding: 12px 28px;
  border-radius: 980px;
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-pro-solid:hover {
  background: #272729;
  transform: scale(1.02);
}

.btn-pro-outline {
  font-size: 16px;
  font-weight: 600;
  border: 1px solid #0071e3;
  color: #0071e3;
  background: transparent;
  padding: 11px 28px;
  border-radius: 980px;
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-pro-outline:hover {
  background: rgba(0, 113, 227, 0.04);
  transform: scale(1.02);
}

/* Connected Channels Marquee */
.spectra-pro-hero-marquee {
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-top: 40px;
}

.spectra-pro-hero-marquee .marquee-label {
  font-size: 11px;
  font-weight: 700;
  color: #86868b;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.spectra-pro-hero-marquee .marquee-track {
  display: flex;
  width: max-content;
  gap: 56px;
  animation: marquee-scroll 30s linear infinite;
}

.spectra-pro-hero-marquee .marquee-track span {
  font-size: 15px;
  font-weight: 600;
  color: rgba(29, 29, 31, 0.4);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* 2. GENERAL SECTION STYLING */
.spectra-pro-section {
  padding: 120px 24px;
  position: relative;
}

.spectra-pro-section-kicker {
  font-size: 12px;
  font-weight: 700;
  color: #0071e3;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 12px;
  display: block;
}

.spectra-pro-section-title {
  font-size: 48px;
  font-weight: 700;
  color: #1d1d1f;
  letter-spacing: -0.03em;
  line-height: 1.15;
  margin-bottom: 24px;
}

.spectra-pro-section-desc {
  font-size: 18px;
  line-height: 1.5;
  color: #86868b;
  max-width: 600px;
  margin-bottom: 32px;
}

.spectra-pro-section-desc.centered {
  margin: 0 auto 32px;
  text-align: center;
}

/* Challenge Split Layout */
.spectra-pro-challenge-section {
  background: #ffffff;
}

.spectra-pro-split {
  display: grid;
  grid-template-columns: 1.1fr 1.3fr;
  gap: 64px;
  align-items: start;
}

.spectra-pro-split-left {
  position: sticky;
  top: 120px;
}

.spectra-pro-challenge-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.spectra-pro-challenge-card {
  background: #f5f5f7;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  gap: 20px;
  transition: all 0.3s ease;
}

.spectra-pro-challenge-card:hover {
  background: #ffffff;
  border-color: rgba(0, 0, 0, 0.12);
  box-shadow: 0 10px 30px rgba(0,0,0,0.04);
  transform: translateY(-2px);
}

.challenge-icon-box {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 45, 85, 0.1);
  color: #ff2d55;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
}

.challenge-text-box h4 {
  font-size: 18px;
  font-weight: 700;
  color: #1d1d1f;
  margin: 0 0 6px;
}

.challenge-text-box p {
  font-size: 14px;
  line-height: 1.45;
  color: #86868b;
  margin: 0;
}

.spectra-pro-challenge-quote {
  margin-top: 100px;
  background: #f5f5f7;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 28px;
  padding: 60px 40px;
  text-align: center;
}

.spectra-pro-challenge-quote h3 {
  font-size: 20px;
  font-weight: 600;
  color: #86868b;
  margin-bottom: 12px;
}

.spectra-pro-challenge-quote h2 {
  font-size: 32px;
  font-weight: 700;
  color: #1d1d1f;
  line-height: 1.3;
  margin: 0;
  letter-spacing: -0.015em;
  background: linear-gradient(135deg, #1d1d1f 30%, #515154 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* 3. APPROACH SECTION */
.spectra-pro-approach-container {
  max-width: 1000px;
  margin: 0 auto;
}

.spectra-pro-approach-toggle {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 40px;
}

.spectra-pro-approach-toggle button {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  color: #86868b;
  padding: 12px 28px;
  border-radius: 980px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.spectra-pro-approach-toggle button:hover {
  color: #1d1d1f;
  border-color: rgba(0, 0, 0, 0.15);
}

.spectra-pro-approach-toggle button.active {
  background: #1d1d1f;
  color: #ffffff;
  border-color: #1d1d1f;
}

.spectra-pro-approach-card {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 28px;
  padding: 48px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
}

.spectra-pro-approach-card.spectra-card {
  border-color: rgba(94, 92, 230, 0.15);
  box-shadow: 0 15px 40px rgba(94, 92, 230, 0.03);
}

.approach-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.approach-col h4 {
  font-size: 18px;
  font-weight: 700;
  color: #1d1d1f;
  margin: 0 0 12px;
}

.approach-col p {
  font-size: 14px;
  line-height: 1.5;
  color: #86868b;
  margin: 0;
}

.spectra-approach-icon {
  font-size: 32px;
  margin-bottom: 16px;
}

/* 4. HOW SPECTRA WORKS - STEPS FLOW */
.spectra-pro-works-section {
  background: #ffffff;
}

.spectra-pro-works-flow {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  max-width: 1250px;
  margin: 0 auto;
}

.spectra-pro-works-card {
  background: #f5f5f7;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 24px;
  padding: 32px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: relative;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  min-height: 360px;
}

.spectra-pro-works-card:hover,
.spectra-pro-works-card.active {
  background: #ffffff;
  transform: translateY(-8px);
  border-color: rgba(94, 92, 230, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
}

.works-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.works-num {
  font-size: 14px;
  font-weight: 700;
  color: #0071e3;
  font-family: monospace;
}

.works-emoji {
  font-size: 24px;
}

.spectra-pro-works-card h4 {
  font-size: 18px;
  font-weight: 700;
  color: #1d1d1f;
  margin: 0;
}

.spectra-pro-works-card p {
  font-size: 13px;
  line-height: 1.45;
  color: #86868b;
  margin: 0;
  flex: 1;
}

.works-card-meta {
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.meta-tag {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  color: #bf5af2;
}

.meta-val {
  font-size: 13px;
  font-weight: 600;
  color: #1d1d1f;
}

.works-card-border-glow {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  border-radius: 0 0 24px 24px;
  background: linear-gradient(90deg, #0071e3, #5e5ce6);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.spectra-pro-works-card:hover .works-card-border-glow,
.spectra-pro-works-card.active .works-card-border-glow {
  opacity: 1;
}

/* 5. CAPABILITIES BENTO GRID */
.spectra-pro-bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1100px;
  margin: 0 auto;
}

.bento-card {
  position: relative;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 28px;
  padding: 40px;
  overflow: hidden;
  min-height: 320px;
  transition: all 0.45s cubic-bezier(0.25, 1, 0.5, 1);
}

.bento-card:hover {
  transform: translateY(-4px);
  border-color: rgba(0, 0, 0, 0.12);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.04);
}

.bento-card.bento-wide {
  grid-column: span 2;
}

.bento-glow-spot {
  position: absolute;
  bottom: -40px;
  right: -40px;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(94, 92, 230, 0.06) 0%, transparent 70%);
  filter: blur(20px);
  pointer-events: none;
}

.bento-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.bento-icon {
  font-size: 32px;
  margin-bottom: 20px;
}

.bento-content h3 {
  font-size: 22px;
  font-weight: 700;
  color: #1d1d1f;
  margin: 0 0 10px;
}

.bento-content p {
  font-size: 14px;
  line-height: 1.5;
  color: #86868b;
  margin: 0 0 24px;
  max-width: 90%;
}

.bento-visual {
  margin-top: auto;
}

/* Bento Visuals */
.mock-chart {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  height: 60px;
}

.chart-bar {
  flex: 1;
  background: rgba(0,0,0,0.05);
  border-radius: 4px;
}

.chart-bar.active {
  background: linear-gradient(0deg, #5e5ce6, #0071e3);
}

.alert-box {
  background: rgba(255, 45, 85, 0.05);
  border: 1px solid rgba(255, 45, 85, 0.15);
  border-radius: 12px;
  padding: 12px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
}

.alert-badge {
  font-size: 12px;
  color: #ff2d55;
}

.alert-metric {
  font-size: 12px;
  color: #1d1d1f;
}

.platform-strip {
  display: flex;
  gap: 10px;
}

.platform-strip span {
  font-size: 11px;
  font-weight: 700;
  background: rgba(0,0,0,0.03);
  border: 1px solid rgba(0,0,0,0.06);
  padding: 6px 12px;
  border-radius: 8px;
}

.workflow-strip {
  display: flex;
  align-items: center;
  gap: 8px;
}

.step-point {
  font-size: 12px;
  font-weight: 600;
  color: #86868b;
}

.step-point.active {
  color: #30d158;
}

.step-arrow {
  color: rgba(0,0,0,0.15);
}

.dashboard-mock {
  display: flex;
  gap: 12px;
}

.mock-widget {
  flex: 1;
  background: rgba(0,0,0,0.03);
  border: 1px solid rgba(0,0,0,0.05);
  padding: 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
}

/* Bento Themes Overrides for light mode */
.bento-card.theme-dark {
  background: #f5f5f7;
  color: #1d1d1f;
}

.bento-card.theme-dark h3 {
  color: #1d1d1f;
}

.bento-card.theme-dark p {
  color: #86868b;
}

.bento-card.theme-blue {
  background: linear-gradient(145deg, #5e5ce6, #0071e3);
  color: #ffffff;
}

.bento-card.theme-blue h3 {
  color: #ffffff;
}

.bento-card.theme-blue p {
  color: rgba(255, 255, 255, 0.85);
}

.bento-card.theme-blue .bento-icon {
  background: rgba(255, 255, 255, 0.15) !important;
  border-color: rgba(255, 255, 255, 0.25) !important;
}

.bento-card.theme-light {
  background: #ffffff;
  color: #1d1d1f;
  border: 1px solid rgba(0, 0, 0, 0.06);
}

.bento-card.theme-gradient {
  background: linear-gradient(135deg, #f5f5f7 0%, #e4e7f0 100%);
  color: #1d1d1f;
}

.bento-card.theme-gradient h3 {
  color: #1d1d1f;
}

.bento-card.theme-gradient p {
  color: #86868b;
}

.bento-card.theme-gradient .bento-icon {
  background: rgba(0, 0, 0, 0.02) !important;
  border-color: rgba(0, 0, 0, 0.05) !important;
}

/* 6. WHO SPECTRA IS FOR */
.spectra-pro-person-section {
  background: #ffffff;
}

.spectra-pro-persona-container {
  max-width: 1000px;
  margin: 0 auto;
}

.persona-tabs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  padding-bottom: 24px;
}

.persona-tab-btn {
  background: transparent;
  border: none;
  color: #86868b;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
}

.persona-tab-btn:hover {
  color: #1d1d1f;
}

.persona-tab-btn.active {
  color: #1d1d1f;
  background: rgba(0, 0, 0, 0.04);
}

.persona-content-panel {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 28px;
  padding: 48px;
  min-height: 400px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.02);
}

.persona-panel-inner {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 48px;
}

.persona-info-col h3 {
  font-size: 24px;
  font-weight: 700;
  color: #1d1d1f;
  margin: 0 0 16px;
}

.persona-desc-text {
  font-size: 16px;
  line-height: 1.5;
  color: #86868b;
  margin-bottom: 28px;
}

.persona-features-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.persona-feature-item {
  display: flex;
  gap: 12px;
  font-size: 14px;
  color: #515154;
}

.check-bullet {
  color: #30d158;
  font-weight: 700;
}

.persona-metric-display {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.persona-metric-card {
  background: #f5f5f7;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.met-label {
  font-size: 12px;
  font-weight: 700;
  color: #86868b;
  text-transform: uppercase;
}

.met-val {
  font-size: 32px;
  font-weight: 700;
  color: #1d1d1f;
}

.met-diff {
  font-size: 12px;
  font-weight: 600;
  color: #30d158;
}

/* 7. BUSINESS OUTCOMES */
.spectra-pro-outcomes-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1100px;
  margin: 0 auto 56px;
}

.spectra-pro-outcome-card {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 24px;
  padding: 40px 24px;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.spectra-pro-outcome-card:hover {
  background: #ffffff;
  border-color: rgba(94, 92, 230, 0.15);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.04);
  transform: translateY(-4px);
}

.outcome-glow {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(94, 92, 230, 0.04) 0%, transparent 70%);
  filter: blur(20px);
}

.outcome-val {
  font-size: 56px;
  font-weight: 800;
  color: #1d1d1f;
  margin: 0 0 8px;
  letter-spacing: -0.02em;
  background: linear-gradient(180deg, #1d1d1f, #0071e3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.outcome-label {
  font-size: 16px;
  font-weight: 700;
  color: #1d1d1f;
  margin: 0 0 12px;
}

.outcome-desc {
  font-size: 13px;
  line-height: 1.45;
  color: #86868b;
  margin: 0;
}

.spectra-pro-outcomes-list {
  max-width: 850px;
  margin: 80px auto 0;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 28px;
  padding: 48px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.02);
}

.spectra-pro-outcomes-list .list-title {
  font-size: 20px;
  font-weight: 700;
  color: #1d1d1f;
  margin: 0 0 28px;
  text-align: center;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.benefit-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.benefit-item .bullet {
  color: #0071e3;
  font-weight: 700;
}

.benefit-item p {
  font-size: 14px;
  line-height: 1.45;
  color: #515154;
  margin: 0;
}

/* 8. COMPARISON TABLE */
.spectra-pro-why-section {
  background: #ffffff;
}

.spectra-pro-comparison-table-wrapper {
  max-width: 1000px;
  margin: 0 auto;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 10px 45px rgba(0, 0, 0, 0.02);
}

.spectra-pro-comparison-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.spectra-pro-comparison-table th,
.spectra-pro-comparison-table td {
  padding: 24px 32px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  font-size: 15px;
}

.spectra-pro-comparison-table th {
  background: rgba(0, 0, 0, 0.02);
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  color: #86868b;
  letter-spacing: 0.05em;
}

.spectra-pro-comparison-table tbody tr:hover {
  background: rgba(0, 0, 0, 0.01);
}

.spectra-pro-comparison-table td.old-tool {
  color: #86868b;
}

.spectra-pro-comparison-table td.new-tool {
  color: #1d1d1f;
  font-weight: 500;
}

.spectra-pro-comparison-table td .spark {
  color: #0071e3;
  margin-right: 6px;
}

/* 9. VISION & FINAL CTA */
.spectra-pro-vision-section {
  position: relative;
  overflow: hidden;
  padding: 160px 24px;
  background: #f5f5f7;
}

.spectra-pro-vision-glow {
  position: absolute;
  bottom: -200px;
  left: 50%;
  transform: translateX(-50%);
  width: 1000px;
  height: 600px;
  background: radial-gradient(circle, rgba(191, 90, 242, 0.05) 0%, rgba(94, 92, 230, 0.03) 40%, transparent 100%);
  filter: blur(80px);
  pointer-events: none;
}

.spectra-pro-vision-heading {
  font-size: 40px;
  font-weight: 700;
  color: #1d1d1f;
  line-height: 1.25;
  max-width: 900px;
  margin: 0 auto 28px;
  letter-spacing: -0.02em;
}

.spectra-pro-vision-sub {
  font-size: 20px;
  line-height: 1.5;
  color: #86868b;
  max-width: 800px;
  margin: 0 auto 48px;
}

.spectra-pro-vision-tagline-box {
  max-width: 850px;
  margin: 0 auto;
  border-top: 1px solid rgba(0,0,0,0.08);
  border-bottom: 1px solid rgba(0,0,0,0.08);
  padding: 40px 20px;
}

.spectra-pro-vision-tagline-box h3 {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.35;
  margin: 0;
  background: linear-gradient(90deg, #0071e3, #bf5af2, #ff2d55);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* RESPONSIVE DESIGN */
@media (max-width: 1024px) {
  .spectra-pro-hero-title {
    font-size: 80px;
  }
  .spectra-pro-split {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .spectra-pro-split-left {
    position: relative;
    top: 0;
  }
  .spectra-pro-works-flow {
    grid-template-columns: repeat(3, 1fr);
  }
  .spectra-pro-bento-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .spectra-pro-outcomes-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .benefits-grid {
    grid-template-columns: 1fr;
  }
  .persona-panel-inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

@media (max-width: 768px) {
  .spectra-pro-hero-title {
    font-size: 56px;
  }
  .spectra-pro-hero-subtitle {
    font-size: 20px;
  }
  .spectra-pro-hero-ctas {
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    margin: 0 auto 48px;
  }
  .spectra-pro-hero-ctas a {
    width: 100%;
  }
  .spectra-pro-works-flow {
    grid-template-columns: 1fr;
  }
  .spectra-pro-bento-grid {
    grid-template-columns: 1fr;
  }
  .bento-card.bento-wide {
    grid-column: span 1;
  }
  .spectra-pro-outcomes-grid {
    grid-template-columns: 1fr;
  }
  .spectra-pro-comparison-table-wrapper {
    overflow-x: auto;
  }
  .spectra-pro-comparison-table th,
  .spectra-pro-comparison-table td {
    padding: 16px 20px;
    font-size: 13px;
  }
  .spectra-pro-vision-heading {
    font-size: 28px;
  }
  .spectra-pro-vision-sub {
    font-size: 16px;
  }
  .spectra-pro-challenge-quote h2 {
    font-size: 22px;
  }
  .approach-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
"""

with open("src/App.css", "r", encoding="utf-8") as f:
    content = f.read()

# Locate the beginning of the SPECTRA PRO DETAIL PAGE section
start_idx = content.find("/* ============================================================\\n   SPECTRA PRO DETAIL PAGE")
if start_idx == -1:
    start_idx = content.find("/* ============================================================\n   SPECTRA PRO DETAIL PAGE")

if start_idx == -1:
    print("Warning: Target styling section not found. Appending to end of file.")
    new_content = content + "\\n" + css_light_code
else:
    new_content = content[:start_idx] + css_light_code.strip()

with open("src/App.css", "w", encoding="utf-8") as f:
    f.write(new_content)

print("App.css has been successfully updated with the new Spectra light-mode detail page styles!")
