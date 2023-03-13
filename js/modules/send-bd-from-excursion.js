const sendBdFromExcursion = () => {
  const listContainer = document.querySelector('.excursion');

  async function loadProductinBd() {
    try {
      const url = '/php/load-data-bd-excursion.php'; 
      const formData = new FormData();
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'text/plain;charset=UTF-8',
        },
      });
      const content = await response.json();
      return content;
    } catch {
      Promise.reject(err);
    }
  }
  loadProductinBd().then((response) => {
    const objectProducts = response.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});

    renderAllProducts(objectProducts);

    function renderAllProducts(listProducts) {
      let fragment = '';

      Object.values(listProducts).forEach((item) => {
        const li = listItemTemplate(item);
        fragment += li;
      });

      listContainer.insertAdjacentHTML('afterbegin', fragment);
    }

    function listItemTemplate({ id, title, url } = {}) {
      return `
        <div class="excursion-item" id=${id}>
          <a href="desc-excursion.php" class="excursion__link excursion__djilisu-JS">
            <div class="excursion__image">
              <img src="/img/main-img/${url}" alt="">
            </div>
            <div class="excursion__title">
              <h4 class='excursion__title-name'>${title}</h4>
            </div>
          </a>
        </div>
     
        `;
    }

    //записываем экскурсии в ssesionStorage
    const btnDgiliSuExcursion = document.querySelectorAll('.excursion__link');
    btnDgiliSuExcursion.forEach((item) => {
      item.addEventListener('click', function (e) {
        const parent = this.closest('.excursion-item');
        const titleName = parent.querySelector(
          '.excursion__title-name'
        ).textContent;
        const id = parent.id;
        console.log(id);

        sessionStorage.setItem(id, titleName);
        sessionStorage.clear();
        sessionStorage.setItem(id, titleName);
      });
    });
  });
};

export default sendBdFromExcursion;
