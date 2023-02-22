const modalsContact = () => {
  const btnOpen = document.querySelector('.toggle');
  const popapModal = document.querySelector('.popup-contact');
  const btnClose = document.querySelector('.popup-contact__close');
  const popapContainer = document.querySelector('.popup-contact');

  openModal(btnOpen, popapModal, btnClose);
  function openModal(trigger, modal, closeBtn) {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      if (modal.style.display == 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      } else {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
      }
    });

    // closeBtn.addEventListener('click', () => {
    //   modal.style.display = 'none';
    //   document.body.style.overflow = 'hidden';
    // });

    // popapContainer.addEventListener('click', () => {
    //   modal.style.display = 'none';
    //   document.body.style.overflow = '';
    // });
  }
};

export default modalsContact;
