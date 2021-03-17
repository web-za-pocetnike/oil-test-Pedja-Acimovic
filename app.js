const hamburgerMenu = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const skill = document.querySelector(".hero-text");

hamburgerMenu.addEventListener("click", function () {
 hamburgerMenu.classList.toggle("active");
 menu.classList.toggle("active");
 skill.classList.toggle("hide");
}

);

// hero section control

const  heroImage = [
{
 id: 1,
 img: src="./olives-4567293_1920.jpg",
 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sint temporibus a exercitationem suscipit officiis esse dignissimos deleniti atque voluptatem."
},
{
 id: 2,
 img: src="./plantation-4454758_1920.jpg",
 text: "Tenetur voluptatem, consectetur, minus odio, adipisci non accusamus commodi magnam reprehenderit placeat suscipit!"
}];

// select hero image

const img = document.querySelector(".hero-img");
const heroText = document.querySelector(".skill");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function() {
  const item = heroImage[currentItem];
 img.src = item.img;
 heroText.textContent = item.text;
});

function showImage () {
 const item = heroImage[currentItem];
 img.src = item.img;
 heroText.textContent = item.text;
};

nextBtn.addEventListener("click", function() {
  currentItem++;
  if(currentItem > heroImage.length - 1){
     currentItem = 0;
  }
  showImage(currentItem);
 });

//show prev hero image
prevBtn.addEventListener("click" , function() {
 currentItem--;
 if(currentItem < 0) {
  currentItem = heroImage.length - 1;
 }
 showImage(currentItem);
});



// Product section control

const  productImage = [
{
 id: 1,
 img: src="./unnamed.jpg",
 title: "Impedit sed dicta",
 text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur sequi neque nostrum, maxime eveniet optio atque? Sequi iste reiciendis corporis provident quisquam alias repudiandae earum exercitationem debitis autem excepturi maxime voluptas magni, tenetur aperiam assumenda illum qui praesentium harum at beatae eveniet veritatis, perferendis blanditiis? Maiores repellendus accusamus placeat debitis aut sed facilis sint, cum sequi nemo! Vel sed amet, natus, at blanditiis reiciendis vitae ex ducimus atque alias nam temporibus, obcaecati culpa consectetur fugiat eligendi facere veniam iure adipisci impedit veritatis? Impedit sed dicta, consequatur temporibus ipsam quae hic, dolorem assumenda repudiandae expedita omnis ducimus modi aspernatur maiores? Illum officiis officia velit! Veniam quibusdam sapiente, quis exercitationem molestias quaerat enim necessitatibus? Fugit, alias! Dolore vel nostrum obcaecati numquam facilis quaerat eius aut explicabo? Perspiciatis mollitia quo necessitatibus fuga maiores tempore illo fugiat quasi, corporis dolores a cupiditate reiciendis, optio consectetur earum eum! Nobis autem, accusantium dolorem tenetur omnis similique blanditiis tempora, fugit quis, eaque cum. Veritatis, quod tempore nobis fuga cupiditate illum. Delectus quam neque pariatur blanditiis ducimus necessitatibus ipsa, cumque, adipisci deleniti natus fugit itaque aliquid mollitia molestias debitis hic consequatur quo? Assumenda, quo possimus. Tenetur voluptatem, consectetur, minus odio, adipisci non accusamus commodi magnam reprehenderit placeat suscipit!"
},
{
 id: 2,
 img: src="./home-06-400x371.jpg",
 title: "Lorem ipsum",
 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sint temporibus a exercitationem suscipit officiis esse dignissimos deleniti atque voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sint temporibus a exercitationem suscipit officiis esse dignissimos deleniti atque voluptatem."
}];



// select product image

const productImg = document.querySelector(".product-img");
const productTitle = document.querySelector(".product-title");
const productText = document.querySelector(".product-txt");
const prodPrevBtn = document.querySelector(".product-prev-btn");
const prodNextBtn = document.querySelector(".product-next-btn");

let currentProductItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function() {
  const item = productImage[currentProductItem];
 productImg.src = item.img;
 productTitle.textContent = item.title;
 productText.textContent = item.text;
});

function showProduct () {
 const item = productImage[currentProductItem];
 productImg.src = item.img;
 productTitle.textContent = item.title;
 productText.textContent = item.text;
};

prodNextBtn.addEventListener("click", function() {
  currentProductItem++;
  if(currentProductItem > productImage.length - 1){
     currentProductItem = 0;
  }
  showProduct(currentProductItem);
 });

//show prev hero image
prodPrevBtn.addEventListener("click" , function() {
 currentProductItem--;
 if(currentProductItem < 0) {
  currentProductItem = productImage.length - 1;
 }
 showProduct(currentProductItem);
});



// setup date
const date = (document.getElementById("date").innerHTML = new Date().getFullYear());



//turn off nab-bar after select

const navBarProd = document.querySelector(".product");

  navBarProd.addEventListener("click", function (){
  menu.classList.remove("active");
  skill.classList.remove("hide");
});

const navBarCertification = document.querySelector(".certification");

  navBarCertification.addEventListener("click", function (){
  menu.classList.remove("active");
  skill.classList.remove("hide");
});


const navBarContact = document.querySelector(".contact");

  navBarContact.addEventListener("click", function (){
  menu.classList.remove("active");
  skill.classList.remove("hide");
});

const navBarHome = document.querySelector(".home");

  navBarHome.addEventListener("click", function (){
  menu.classList.remove("active");
  skill.classList.remove("hide");
});


