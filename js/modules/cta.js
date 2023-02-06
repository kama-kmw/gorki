const cta = () => {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    // delay: 400,
    delay: 200,

    // reset: true,
  });

  // sr.reveal('.cta', { delay: 900, origin: 'bottom' });
  sr.reveal('.cta', { scale: 0.35 });
};

export default cta;
