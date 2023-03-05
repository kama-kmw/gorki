import toggle from './modules/toggle.js';
import modalsContact from './modules/modal-contact.js';
// import gallery from './modules/gallery.js';
import sendBd from './modules/send_data_on_bd.js';
import loadExcursion from './modules/load_exursion.js';

window.addEventListener('DOMContentLoaded', () => {
  toggle();
  modalsContact();
  loadExcursion();
  // sendBd();
  // gallery();
});
