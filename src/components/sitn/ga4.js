// ga4.js
export function initGA() {
  // This can be left empty if you load GA script in index.html
  if (window.gtag) {
    console.log('GA initialized');
  }
}

export function trackPageview(path) {
  if (window.gtag) {
    window.gtag('config', 'G-3HGGP2GV4R', { page_path: path });
    console.log('Tracked pageview:', path);
  }
}
