import slyderSwiper from './slyder.js';
import portfolio from './modules/portfolio.js';
import about from './modules/about.js';
import excursion from './modules/excursion.js';
import cta from './modules/cta.js';
import gallery from './modules/gallery.js';
import team from './modules/team.js';
import faq from './modules/faq.js';
import toggle from './modules/toggle.js';
import modalsContact from './modules/modal-contact.js';
import aosFile from './modules/aos-file.js';
import sendBdFromExcursion from './modules/send-bd-from-excursion.js';
// import sendBd from './modules/send_data_on_bd.js';

window.addEventListener('DOMContentLoaded', () => {
  slyderSwiper();
  portfolio();
  about();
  excursion();
  cta();
  gallery();
  team();
  faq();
  toggle();
  modalsContact();
  aosFile();
  sendBdFromExcursion();
  // sendBd();
});
