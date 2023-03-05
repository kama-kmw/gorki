import gallery from './gallery.js';

const loadExcursion = () => {
  const categoryContainer = document.querySelector('.desc-excursion');

  async function loadProductinBd() {
    try {
      const url = '/php/load-data-bd.php';
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
  let allProduct = [];

  // for (let i = 1; i <= response.length; i++) {
  //   if (sessionStorage.getItem(i)) {
  //     let countProduct1 = sessionStorage.getItem(i);
  //     console.log(countProduct1);
  //   }
  // }

  loadProductinBd().then((response) => {
    for (let i = 1; i <= response.length; i++) {
      if (sessionStorage.getItem(i)) {
        response.forEach((item) => {
          if (item.id == i) {
            allProduct.push({
              id: i,
              title: item.title,
              desc: item.description,
              url1: item.url1,
              url2: item.url2,
              url3: item.url3,
              url4: item.url4,
            });
          }

          // console.log(allProduct);
        });
      }
    }

    renderAllProducts(allProduct);
    function renderAllProducts(listProducts) {
      let fragment = '';
      Object.values(listProducts).forEach((item) => {
        const li = listItemTemplate(item);
        fragment += li;
      });
      categoryContainer.insertAdjacentHTML('afterbegin', fragment);
      gallery();
    }
    function listItemTemplate({
      id,
      count,
      title,
      description,
      url1,
      subtitle1,
      text1,
      url2,
      subtitle2,
      text2,
      url3,
      subtitle3,
      text3,
      url4,
      subtitle4,
      text4,
    } = {}) {
      return `
        <div class="container">
        <h2 class='desc-excursion__title'>${title}</h2>
        <section id="gallery" class="gallery desc-excursion-gallery-js" data-aos="zoom-in">
          <div class="container">
            <div class="row no-gutters">
              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a href="/img/category/${url1}" class="galleery-lightbox" data-gallery="gallery-item">
                    <img src="/img/category/${url1}"" alt="" class="img-fluid">
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a href="/img/category/${url2}" class="galleery-lightbox" data-gallery="gallery-item">
                    <img src="/img/category/${url2}" alt="" class="img-fluid">
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a href="/img/category/${url3}" class="galleery-lightbox" data-gallery="gallery-item">
                    <img src="/img/category/${url3}" alt="" class="img-fluid">
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a href="/img/category/${url4}" class="galleery-lightbox" data-gallery="gallery-item">
                    <img src="/img/category/${url4}" alt="" class="img-fluid">
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a href="/img/gallery/gallery-5.jpg" class="galleery-lightbox" data-gallery="gallery-item">
                    <img src="/img/gallery/gallery-5.jpg" alt="" class="img-fluid">
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a href="/img/gallery/gallery-6.jpg" class="galleery-lightbox" data-gallery="gallery-item">
                    <img src="/img/gallery/gallery-6.jpg" alt="" class="img-fluid">
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a href="/img/gallery/gallery-7.jpg" class="galleery-lightbox" data-gallery="gallery-item">
                    <img src="/img/gallery/gallery-7.jpg" alt="" class="img-fluid">
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a href="/img/gallery/gallery-8.jpg" class="galleery-lightbox" data-gallery="gallery-item">
                    <img src="/img/gallery/gallery-8.jpg" alt="" class="img-fluid">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section><!-- End Gallery Section -->
      </div>
        `;
    }
  });
};

export default loadExcursion;
