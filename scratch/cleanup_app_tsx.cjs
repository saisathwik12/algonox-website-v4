const fs = require('fs');
const path = require('path');

const tsxPath = path.join(__dirname, '..', 'src', 'App.tsx');
let tsxContent = fs.readFileSync(tsxPath, 'utf8');

// Normalize line endings to \n
tsxContent = tsxContent.replace(/\r\n/g, '\n');

// 1. Add page imports after import "./App.css";
const cssImport = 'import "./App.css";';
const importsToAdd = `
import Home from "./pages/Home";
import Iris from "./pages/Iris";
import Spectra from "./pages/Spectra";
import SweetHello from "./pages/SweetHello";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import ListingPage from "./pages/ListingPage";
import DetailPage from "./pages/DetailPage";`;

if (tsxContent.includes(cssImport)) {
  tsxContent = tsxContent.replace(cssImport, cssImport + '\n' + importsToAdd);
  console.log('Added page imports');
} else {
  console.log('Could not find CSS import to place imports');
}

// 2. Export shared components
const componentsToExport = [
  'function Nav',
  'function Tile',
  'function GridTiles',
  'function Hero',
  'function ScrollAnimatedSection',
  'function TrustSection',
  'function AceProductsCarousel',
  'function DarkIndustriesSection',
  'function Testimonials',
  'function Footer'
];

componentsToExport.forEach(comp => {
  if (tsxContent.includes(comp) && !tsxContent.includes('export ' + comp)) {
    tsxContent = tsxContent.replace(comp, 'export ' + comp);
    console.log(`Exported ${comp}`);
  } else {
    console.log(`Skipped/Already exported ${comp}`);
  }
});

// 3. Remove old page components
// Finds everything from '// HOME PAGE' to right before '// AMBIENT BACKGROUND GLOWS'
const homePageComment = '// HOME PAGE';
const ambientComment = '// AMBIENT BACKGROUND GLOWS';
const startIdx = tsxContent.indexOf(homePageComment);
const endIdx = tsxContent.indexOf(ambientComment);

if (startIdx !== -1 && endIdx !== -1) {
  tsxContent = tsxContent.substring(0, startIdx) + '/* Moved old page-level components to src/pages/ */\n\n' + tsxContent.substring(endIdx);
  console.log('Removed old page components range');
} else {
  console.log('Could not find range of old page components');
}

// 4. Update routing in App()
const oldRoutes = `<Route path="/" element={<HomePage />} />
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
            <Route path="*" element={<HomePage />} />`;

const newRoutes = `<Route path="/" element={<Home />} />
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
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />`;

// Helper: Normalize spacing to do comparison
const cleanStr = s => s.replace(/\s+/g, ' ').trim();
if (cleanStr(tsxContent).includes(cleanStr(oldRoutes))) {
  // Let's do a direct replace if exact match can be made, otherwise look for elements individually
  // Since formatting might differ slightly, let's find the exact string or do a chunk find
  // Let's find index of '<Route path="/" element={<HomePage />} />' and end of 'StaticPage slug="contact"'
  const routeStart = tsxContent.indexOf('<Route path="/" element={<HomePage />} />');
  const routeEndStr = '<Route path="*" element={<HomePage />} />';
  const routeEnd = tsxContent.indexOf(routeEndStr);
  if (routeStart !== -1 && routeEnd !== -1) {
    tsxContent = tsxContent.substring(0, routeStart) + newRoutes + tsxContent.substring(routeEnd + routeEndStr.length);
    console.log('Successfully updated Routes in App()');
  } else {
    console.log('Could not find Routes indices');
  }
} else {
  console.log('Old routes did not match clean comparison');
}

fs.writeFileSync(tsxPath, tsxContent, 'utf8');
console.log('App.tsx cleanup completed successfully.');
