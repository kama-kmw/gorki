const gallery = () => {
  const glightbox = GLightbox({
    selector: '.glightbox',
  });

  const galleeryLightbox = GLightbox({
    selector: '.galleery-lightbox',
  });

  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    // delay: 400,
    delay: 200,

    // reset: true,
  });

  sr.reveal('.gallery', { delay: 400, origin: 'bottom' });
  // sr.reveal('.about', { scale: 0.35 });
};

export default gallery;
