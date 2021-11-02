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

cards.addEventListener('click', async(e) =>{
  e.preventDefault();
  let resp = await fetch(url);
  let data = await resp.json();
  console.log(data);
  let idTarget = e.target.dataset.id;
  console.log(idTarget);
})




