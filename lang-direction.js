// Detects language changes (e.g., by Google Translate) and applies RTL layout if needed
function setDirectionByLang(lang) {
  // List of RTL language codes
  const rtlLangs = ['ar', 'he', 'fa', 'ur'];
  if (rtlLangs.includes(lang)) {
    document.documentElement.setAttribute('dir', 'rtl');
    document.body.classList.add('rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.body.classList.remove('rtl');
  }
}

// Initial check
setDirectionByLang(document.documentElement.lang);

// Observe changes to the <html> lang attribute (Google Translate changes this)
const observer = new MutationObserver(() => {
  setDirectionByLang(document.documentElement.lang);
});
observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });