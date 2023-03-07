const categoryExcursion = () => {
  const categoryContainer = document.querySelector('.box');

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

      categoryContainer.insertAdjacentHTML('afterbegin', fragment);
    }

    function listItemTemplate({ id, title, url, description } = {}) {
      return `
      <div class="row align-items-center speaker" >
      <div class="col-lg-6 mb-5 mb-lg-0 category-scale" data-aos="fade" data-aos-delay="100">
        <img src="img/category/${url}" alt="Image" class="img-fluid">
      </div>
      <div class="col-lg-6 ml-auto category-bottom">
        <h2 class="mb-4 name category__sub-title" data-aos="fade-right" data-aos-delay="200">${title}</h2>
        <div class="bio pl-lg-5">

          <p class="mb-4 category__text" data-aos="fade-right" data-aos-delay="400">${description}</p>

          <span class="text-black text-uppercase text-primary d-block mb-3" data-aos="fade-right" data-aos-delay="300">от 3000 рублей</span>
          <a href="excursion.php" class='text-black'>Подробнее</a>
        </div>
      </div>
    </div>

        `;
    }

    //записываем экскурсии в ssesionStorage
  });
};

export default categoryExcursion;
