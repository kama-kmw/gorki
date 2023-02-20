const toggle = () => {
  const btnToggle = document.querySelector('.toggle');
  btnToggle.addEventListener('click', toggle);
  function toggle() {
    let toglleClick = document.querySelector('.navigation-sub');
    toglleClick.classList.toggle('active');
    /* клик на тоглл*/
  }
};

export default toggle;
