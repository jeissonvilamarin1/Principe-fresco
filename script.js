const url = "http://localhost:4005/productos";
const cards = document.getElementById('cards');
const templateCard = document.getElementById('template-card').content;
const templateDetail = document.getElementById('template-details').content;
const templateCart = document.getElementById('template-cart').content;
const fragment = document.createDocumentFragment();
const body = document.getElementById('body');
const detailsPage = document.getElementById('details-page');
const cartPage = document.getElementById('cart-page');
const cart = document.getElementById('cart');


document.addEventListener('DOMContentLoaded', () => {
    cargarData(url);
})

//Traer la data y recorrer el array y cambiar los contenidos de los atributtos
//Clonar la template-card y adjuntarala como nodo al Fragment, y luego a cards
const cargarData = async(url) =>{
    const resp = await fetch(url); //GET
    const products = await resp.json();
    console.log(products);
    products.forEach(product => {
        const {id, title, image, price} = product;
        templateCard.querySelector('img').setAttribute('src', image);
        templateCard.querySelector('h3').textContent = title;
        templateCard.querySelector('h4').textContent = `$ ${price}`;
        templateCard.querySelector('button').dataset.id = id;
        templateCard.querySelector('.product-image').dataset.id = id;
        const node = templateCard.cloneNode(true);
        fragment.appendChild(node);
    })
    cards.appendChild(fragment);
}

let boton = document.getElementById("btnBuscar");

boton.addEventListener('click', async(e) => {
  e.preventDefault();
  const resp = await fetch(url);
  const data = await resp.json();
  const texto = document.getElementById("search").value;
  let busqueda = data.filter(item => item.title == texto || item.category == texto);
  console.log(busqueda)
  busqueda.forEach(product =>{
    const { id, title, image, price } = product;
    templateCard.querySelector("img").setAttribute("src", image);
    templateCard.querySelector("h3").textContent = title;
    templateCard.querySelector("h4").textContent = `$ ${price}`;
    templateCard.querySelector("button").dataset.id = id;
    templateCard.querySelector(".product-image").dataset.id = id;
    const node = templateCard.cloneNode(true);
    fragment.appendChild(node);
  })
  cards.innerHTML = "";
  cards.appendChild(fragment);
})

let boton2 = document.getElementById("btnBuscar2");

boton2.addEventListener('click', async(e) =>{
  e.preventDefault();
  const resp = await fetch(url);
  const data = await resp.json();
  let busqueda = data.filter((item) => item.category == "Comestibles");
   busqueda.forEach((product) => {
     const { id, title, image, price } = product;
     templateCard.querySelector("img").setAttribute("src", image);
     templateCard.querySelector("h3").textContent = title;
     templateCard.querySelector("h4").textContent = `$ ${price}`;
     templateCard.querySelector("button").dataset.id = id;
     templateCard.querySelector(".product-image").dataset.id = id;
     const node = templateCard.cloneNode(true);
     fragment.appendChild(node);
   });
   cards.innerHTML = "";
   cards.appendChild(fragment);
})




//Adicionar al array purchase
cards.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-purchase")) {
    const findId = e.target.dataset.id;
    let purchase = data.find((p) => p.id == findId); //devuelve el objeto que tenga el mismo ID
    console.log(purchase);
    let shoppingCart = []; //Array
    if (localStorage.getItem("Carrito")) {
      //Comprueba si hay productos añadidos al carrito, si hay objetos en el local storage
      shoppingCart = JSON.parse(localStorage.getItem("Carrito")); //Bajando
      shoppingCart.push(purchase); //Añadiendo contenido nuevo
      localStorage.setItem("Carrito", JSON.stringify(shoppingCart)); //Reescribiendo
    } else {
      //En caso de que no se haya comprado nada
      shoppingCart.push(purchase); //Añadir por primera vez contenido
      localStorage.setItem("Carrito", JSON.stringify(shoppingCart)); //Escribir
    }
  }
});


/* 
//Cuando se click a una imagen del producto
//Se lleva ese producto al localStorage y se llama la funcion getProduct que trae el detalle del producto
cards.addEventListener("click", (e) => {
  if (e.target.classList.contains("product-image")) {
    const findId = e.target.dataset.id;
    let product = data.find((p) => p.id == findId);
    localStorage.setItem("product", JSON.stringify(product));
    getProduct();
  }
});

//Muestra el detalle del producto
//lo trae del localStorage y cambia el display de 'none' a 'flex'
//Trae la data y cambia los contenidos de los atributtos
//Clonar la template-detail y adjuntarala como nodo al Fragment, y luego a details-page
function getProduct(){
    let product = JSON.parse(localStorage.getItem("product"));
    console.log(product);
    body.style.overflow= "hidden";
    detailsPage.style.display= "flex";
    const {title, image, price} = product;
    templateDetail.getElementById('card-name').textContent = title;
    templateDetail.getElementById('card-img').setAttribute('src', image);
    templateDetail.getElementById('card-title').textContent= title;
    templateDetail.getElementById('card-price').textContent= `$ ${price}`;

    const clone = templateDetail.cloneNode(true);
    fragment.appendChild(clone);
    detailsPage.appendChild(fragment);
}

cart.addEventListener("click", (e) =>{
    let product = JSON.parse(localStorage.getItem("Carrito"));
    console.log(product);
    body.style.overflow= "hidden";
    cartPage.style.display= "flex";
    product.forEach(p => {
        const {title, image, price} = p;
        console.log(p.title);
        templateCart.querySelector('img').setAttribute('src', image);
        templateCart.getElementById('cart-name').textContent = title;
        templateCart.getElementById('cart-price').textContent= `$ ${price}`;
        const clone = templateCart.cloneNode(true);
        fragment.appendChild(clone);
    })
    cartPage.appendChild(fragment);
})
 */