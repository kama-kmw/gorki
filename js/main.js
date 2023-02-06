import slyderSwiper from './slyder.js';
import portfolio from './modules/portfolio.js';
import cta from './modules/cta.js';
import gallery from './modules/gallery.js';
import toggle from './modules/toggle.js';

window.addEventListener('DOMContentLoaded', () => {
  slyderSwiper();
  portfolio();
  gallery();
  cta();
  toggle();
});
