// const sendBd = () => {
//   const categoryContainer = document.querySelector('.category');

//   async function loadProductinBd() {
//     try {
//       const url = '/php/load-data-bd.php';
//       const formData = new FormData();
//       const response = await fetch(url, {
//         method: 'POST',
//         body: formData,
//         headers: {
//           'Content-Type': 'text/plain;charset=UTF-8',
//         },
//       });
//       const content = await response.json();
//       console.log(content);
//       return content;
//     } catch {
//       Promise.reject(err);
//     }
//   }
//   loadProductinBd().then((response) => {
//     const objectProducts = response.reduce((acc, item) => {
//       acc[item.id] = item;
//       return acc;
//     }, {});

//     // const categoryProduct = Object.values(objectProducts).filter(
//     //   (item) => item.category == 'покушать'
//     // );

//     renderAllProducts(objectProducts);

//     function renderAllProducts(listProducts) {
//       let fragment = '';

//       Object.values(listProducts).forEach((item) => {
//         const li = listItemTemplate(item);
//         fragment += li;
//       });

//       categoryContainer.insertAdjacentHTML('afterbegin', fragment);
//     }

//     function listItemTemplate({
//       id,
//       title,
//       description,
//       url1,
//       subtitle1,
//       text1,
//       url2,
//       subtitle2,
//       text2,
//       url3,
//       subtitle3,
//       text3,
//       url4,
//       subtitle4,
//       text4,
//     } = {}) {
//       return `
//       <div class="site-section">
//       <div class="container">
//         <div class="row mb-5 category-bottom pt-5">
//           <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
//             <div class="site-section-heading ">
//               <h2>${title}</h2>
//             </div>
//           </div>
//           <div class="col-lg-5 mt-5 pl-lg-5" data-aos="fade-up" data-aos-delay="200">
//             <p class='desc__text'>${description}</p>
//           </div>
//         </div>

//         <div class="row align-items-center speaker" >
//           <div class="col-lg-6 mb-5 mb-lg-0 category-scale" data-aos="fade" data-aos-delay="100">
//             <img src="img/category/${url1}" alt="Image" class="img-fluid">
//           </div>
//           <div class="col-lg-6 ml-auto category-bottom">
//             <h2 class="mb-4 name desc__sub-title" data-aos="fade-right" data-aos-delay="200">${subtitle1}</h2>
//             <div class="bio pl-lg-5">
//               <p class="mb-4 desc__text" data-aos="fade-right" data-aos-delay="400">${text1}</p>
//               <p data-aos="fade-right" data-aos-delay="500">
//                 Follow Emely &mdash;
//                 <a href="#" class="p-2"><span class="icon-facebook"></span></a>
//                 <a href="#" class="p-2"><span class="icon-twitter"></span></a>
//                 <a href="#" class="p-2"><span class="icon-github"></span></a>
//               </p>
//             </div>
//           </div>
//         </div>

//         <div class="row align-items-center speaker" >
//           <div class="col-lg-6 mb-5 mb-lg-0 category-scale" data-aos="fade" data-aos-delay="100">
//             <img src="img/category/${url1}" alt="Image" class="img-fluid">
//           </div>
//           <div class="col-lg-6 ml-auto category-bottom">
//             <h2 class="mb-4 name desc__sub-title" data-aos="fade-right" data-aos-delay="200">${subtitle1}</h2>
//             <div class="bio pl-lg-5">
//               <p class="mb-4 desc__text" data-aos="fade-right" data-aos-delay="400">${text1}</p>
//               <p data-aos="fade-right" data-aos-delay="500">
//                 Follow Emely &mdash;
//                 <a href="#" class="p-2"><span class="icon-facebook"></span></a>
//                 <a href="#" class="p-2"><span class="icon-twitter"></span></a>
//                 <a href="#" class="p-2"><span class="icon-github"></span></a>
//               </p>
//             </div>
//           </div>
//         </div>

//         <div class="row align-items-center speaker" >
//           <div class="col-lg-6 mb-5 mb-lg-0 category-scale" data-aos="fade" data-aos-delay="100">
//             <img src="img/category/${url1}" alt="Image" class="img-fluid">
//           </div>
//           <div class="col-lg-6 ml-auto category-bottom">
//             <h2 class="mb-4 name desc__sub-title" data-aos="fade-right" data-aos-delay="200">${subtitle1}</h2>
//             <div class="bio pl-lg-5">
//               <p class="mb-4 desc__text" data-aos="fade-right" data-aos-delay="400">${text1}</p>
//               <p data-aos="fade-right" data-aos-delay="500">
//                 Follow Emely &mdash;
//                 <a href="#" class="p-2"><span class="icon-facebook"></span></a>
//                 <a href="#" class="p-2"><span class="icon-twitter"></span></a>
//                 <a href="#" class="p-2"><span class="icon-github"></span></a>
//               </p>
//             </div>
//           </div>
//         </div>


//         <div class="row align-items-center speaker" >
//           <div class="col-lg-6 mb-5 mb-lg-0 category-scale" data-aos="fade" data-aos-delay="100">
//             <img src="img/category/${url2}" alt="Image" class="img-fluid">
//           </div>
//           <div class="col-lg-6 ml-auto category-bottom">
//             <h2 class="mb-4 name desc__sub-title" data-aos="fade-right" data-aos-delay="200">${subtitle1}</h2>
//             <div class="bio pl-lg-5">
//               <p class="mb-4 desc__text" data-aos="fade-right" data-aos-delay="400">${text1}</p>
//               <p data-aos="fade-right" data-aos-delay="500">
//                 Follow Emely &mdash;
//                 <a href="#" class="p-2"><span class="icon-facebook"></span></a>
//                 <a href="#" class="p-2"><span class="icon-twitter"></span></a>
//                 <a href="#" class="p-2"><span class="icon-github"></span></a>
//               </p>
//             </div>
//           </div>
//         </div>
//         </div>
//       </div>
//       `;
//     }
//   });
// };

// export default sendBd;
