// analytics.js (you can create this)
import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-3HGGP2GV4R'); // Your GA4 ID
};

export const trackPageview = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};
