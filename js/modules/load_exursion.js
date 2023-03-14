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
              url5: item.url5,
              url6: item.url6,
              url7: item.url7,
              url8: item.url8,
              subtitle: item.subtitle,
              region: item.region,
              time: item.time,
              count: item.count,
              price: item.price,






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
      title,
      desc,
      url1,
      url2,
      url3,
      url4,
      url5,
      url6,
      url7,
      url8,
      subtitle,
      region,
      time,
      count,
      price,
      text3,
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
                <a href="/img/category/${url5}" class="galleery-lightbox" data-gallery="gallery-item">
                <img src="/img/category/${url5}" alt="" class="img-fluid">
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a href="/img/category/${url6}" class="galleery-lightbox" data-gallery="gallery-item">
                    <img src="/img/category/${url6}" alt="" class="img-fluid">
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a href="/img/category/${url7}" class="galleery-lightbox" data-gallery="gallery-item">
                    <img src="/img/category/${url7}" alt="" class="img-fluid">
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a href="/img/category/${url8}" class="galleery-lightbox" data-gallery="gallery-item">
                    <img src="/img/category/${url8}" alt="" class="img-fluid">
                  </a>
                </div>
              </div>
            </div>

            <div class='desc-bottom-container'>
            <div class="desc-content">
              <div class="desc-content-container-left">
                <h4 class='deck-excursion__desc text-black'>
                  ${desc}
                </h4>
                <div class="site-section pb-1">
                  <div class="row mb-1">
                    <div class="col-lg-4" data-aos="fade-up">
                      <div class="site-section-heading category-bottom">
                        <h2>Программа</h2>
                      </div>
                    </div>
                    <div class="col-lg-6 mt-3 pl-lg-5" data-aos="fade-up" data-aos-delay="100">
                      <!-- <p class='category__text category-bottom-x4' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus.</p> -->
                    </div>
                  </div>
    
                  <div class="row align-items-stretch program">
                    <div class="col-12 border-top border-bottom py-3 program-item category-bottom-x4"   
                      data-aos="fade" 
                      data-aos-delay="200">
                      <div class="row align-items-stretch">
                        <div class="col-md-3 text-black mb-3 mb-md-0"><span class="h4 text-black">8:00</span> <span class='text-black'>AM</span></div>
                        <div class="col-md-9">
                          <h2 class="text-black">Выезд</h2>
                          <span class='text-black'>Время может меняться</span>
                        </div>
                      </div>
                    </div>
    
                    <div class="col-12 border-bottom py-3 category-bottom-x4" data-aos="fade" data-aos-delay="300">
                      <div class="row align-items-stretch">
                        <div class="col-md-3 text-black mb-3 mb-md-0"><span class="h4 text-black">9:30</span> <span class='text-black'>AM</span></div>
                        <div class="col-md-9">
                          <h2 class="text-black">Design your open source strategy</h2>
                          <span class='text-black'>Chris Mathews</span>
                        </div>
                      </div>
                    </div>
    
                    <div class="col-12 border-bottom py-3 category-bottom-x4" data-aos="fade" data-aos-delay="400">
                      <div class="row align-items-stretch">
                        <div class="col-md-3 text-black mb-3 mb-md-0"><span class="h4 text-black">10:30</span> <span class='text-black'>AM</span></div>
                        <div class="col-md-9">
                          <h2 class="text-black">Design your open source strategy</h2>
                          <span class='text-black'>Chris Mathews</span>
                        </div>
                      </div>
                    </div>
    
                    <div class="col-12 border-bottom py-3 category-bottom-x4" data-aos="fade" data-aos-delay="500">
                      <div class="row align-items-stretch">
                        <div class="col-md-3 text-black mb-3 mb-md-0"><span class="h4 text-black">10:45</span> <span class='text-black'>NOON</span></div>
                        <div class="col-md-9">
                          <h2 class="text-black">Break With Snacks</h2>
                          <span class='text-black'>Chris Mathews</span>
                        </div>
                      </div>
                    </div>
    
                    <div class="col-12 border-bottom py-3 category-bottom-x4" data-aos="fade" data-aos-delay="600">
                      <div class="row align-items-stretch">
                        <div class="col-md-3 text-black mb-3 mb-md-0"><span class="h4 text-black">11:30</span> <span class='text-black'>AM</span></div>
                        <div class="col-md-9">
                          <h2 class="text-black">Design your open source strategy</h2>
                          <span class='text-black'>Chris Mathews</span>
                        </div>
                      </div>
                    </div>
    
                    <div class="col-12 border-bottom py-3 category-bottom-x4" data-aos="fade" data-aos-delay="700">
                      <div class="row align-items-stretch">
                        <div class="col-md-3 text-black mb-3 mb-md-0"><span class="h4 text-black">12:00</span> <span class='text-black'>NOON</span></div>
                        <div class="col-md-9">
                          <h2 class="text-black">Break For Lunch</h2>
                          <span class='text-black'>Chris Mathews</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="desc-content-container-right">
                <div class="desc-content-wrapp">
                  <div class="desc-content-order">
                    <h2 class="desc-content__title">${subtitle}</h2>
                    <ul class="desc-content-list">
                      <li class="desc-content__item">
                        <p class="desc-content__name">Регион</p>
                        <p class="desc-content__item-desk js-order-count">${region}</p>
                      </li>
                      <li class="desc-content__item">
                        <p class="desc-content__name">Продолжительность</p>
                        <p class="desc-content__item-desk js-order-price">${time}</p>
                      </li>
                      <li class="desc-content__item">
                        <p class="desc-content__name">Количесство пассажиров </p>
                        <p class="desc-content__item-desk js-order-price">${count}</p>
                      </li>
                      <li class="desc-content__item">
                      <p class="desc-content__name">Цена за человека</p>
                        <p class="desc-content__item-desk js-order-price">${price}</p>
                      </li>
                    </ul>
                    <button class="desc-content-btn js-basket__order-btn">
                      Позвонить
                    </button>
                    <p class="desc-content__sub-text">
                      Ответим на все интересующие вопросы
                    </p>
                  </div>
                </div>
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
