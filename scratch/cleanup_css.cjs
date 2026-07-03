const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'src', 'App.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

// Normalize line endings to \n
cssContent = cssContent.replace(/\r\n/g, '\n');

// 1. Remove homepage-hero
const homepageHeroRegex = /\.homepage-hero\s*\{[^}]*sticky[^}]*\}/s;
if (homepageHeroRegex.test(cssContent)) {
  cssContent = cssContent.replace(homepageHeroRegex, '/* Moved to Home.css */');
  console.log('Removed homepage-hero');
} else {
  console.log('Could not find homepage-hero');
}

// 2. Remove contact-form block
const contactFormStart = cssContent.indexOf('.contact-form {');
const contactFormEndStr = '.form .btn-blue:active {\n  transform: translateY(0) scale(0.98);\n}';
const contactFormEnd = cssContent.indexOf(contactFormEndStr);

if (contactFormStart !== -1 && contactFormEnd !== -1) {
  cssContent = cssContent.substring(0, contactFormStart) + '/* Moved to Contact.css */\n' + cssContent.substring(contactFormEnd + contactFormEndStr.length);
  console.log('Removed contact-form');
} else {
  console.log('Could not find contact-form boundaries');
}

// 3. Remove Iris styles
// Starts with /* ============================================================
//   IRIS PRODUCT PAGE
// and ends right before /* ============================================================
//   DARK INDUSTRIES SECTION
const irisStartStr = '/* ============================================================\n   IRIS PRODUCT PAGE';
const irisEndStr = '/* ============================================================\n   DARK INDUSTRIES SECTION';
const irisStart = cssContent.indexOf(irisStartStr);
const irisEnd = cssContent.indexOf(irisEndStr);

if (irisStart !== -1 && irisEnd !== -1) {
  cssContent = cssContent.substring(0, irisStart) + '/* Moved to Iris.css */\n\n' + cssContent.substring(irisEnd);
  console.log('Removed Iris styles');
} else {
  console.log('Could not find Iris boundaries');
}

// 4. Remove Spectra styles
// Starts with /* ============================================================
//   SPECTRA PRO
// or similar. Let's look for .spectra-pro-container
const spectraStartStr = '.spectra-pro-container {';
const spectraEndStr = '/* ============================================================\n   SWEETHELLO PRO DETAIL PAGE';
const spectraStart = cssContent.indexOf(spectraStartStr);
const spectraEnd = cssContent.indexOf(spectraEndStr);

if (spectraStart !== -1 && spectraEnd !== -1) {
  cssContent = cssContent.substring(0, spectraStart) + '/* Moved to Spectra.css */\n\n' + cssContent.substring(spectraEnd);
  console.log('Removed Spectra styles');
} else {
  console.log('Could not find Spectra boundaries');
}

// 5. Remove SweetHello styles
// Starts with /* ============================================================
//   SWEETHELLO PRO DETAIL PAGE
const sweetStartStr = '/* ============================================================\n   SWEETHELLO PRO DETAIL PAGE';
const sweetStart = cssContent.indexOf(sweetStartStr);

if (sweetStart !== -1) {
  cssContent = cssContent.substring(0, sweetStart) + '/* Moved to SweetHello.css */\n';
  console.log('Removed SweetHello styles');
} else {
  console.log('Could not find SweetHello boundaries');
}

fs.writeFileSync(cssPath, cssContent, 'utf8');
console.log('App.css cleanup completed successfully.');
