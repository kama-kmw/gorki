const aosFile = () => {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    // delay: 400,
    delay: 200,

    // reset: true,
  });

  sr.reveal('.category-bottom', { delay: 200, origin: 'bottom' });
  sr.reveal('.category-bottom-x4', { delay: 400, origin: 'bottom' });

  // sr.reveal('.category-left', { delay: 200, origin: 'left' });
  // sr.reveal('.category-right', { delay: 200, origin: 'right' });
  sr.reveal('.category-scale', { scale: 0.5 });


  // sr.reveal('.about', { scale: 0.35 });
};

export default aosFile;
