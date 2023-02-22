const team = () => {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    // delay: 400,
    delay: 200,

    // reset: true,
  });

  // sr.reveal('.team', { delay: 400, origin: 'bottom' });
  sr.reveal('.team', { scale: 0.35 });
};

export default team;
