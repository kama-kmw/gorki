const excursion = () => {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    // delay: 400,
    delay: 200,

    // reset: true,
  });

  sr.reveal('.category', { delay: 200, origin: 'bottom' });
  // sr.reveal('.about', { scale: 0.35 });
}; 

export default excursion;
