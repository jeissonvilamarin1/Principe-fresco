const url = "http://localhost:4005/productos";
const cards = document.getElementById('cards');
const templateCard = document.getElementById('template-card').content;
const templateDetail = document.getElementById('template-details').content;
const templateCart = document.getElementById('template-cart').content;
const fragment = document.createDocumentFragment();
const body = document.getElementById('body');
const detailsPage = document.getElementById('details-page');
const cartPage = document.getElementById('cart-page');


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

/*<<<<<<< HEAD




const templateTable = document.getElementById('templateTable').content;
const trProductos = document.querySelector('.table');
const btnAddCar = document.querySelector('button');

btnAddCar.addEventListener('click', async(e) =>{
=======*/



const mainModal = document.getElementById('pageWrapper');

cards.addEventListener('click', async(e) =>{
  e.preventDefault();
  let resp = await fetch(url);
  let data = await resp.json();
  console.log(data);
  let idTarget = e.target.dataset.id;
  console.log(idTarget);
/*<<<<<<< HEAD

  data.forEach(product => { 
    const {id, title, image, price} = product;
   if(idTarget == id){ 
    templateTable.querySelector('img').setAttribute('src', image);
    templateTable.querySelector('h3').textContent = title;
    templateTable.querySelector('h4').textContent = `$ ${price}`;
    const node = templateTable.cloneNode(true);
    fragment.appendChild(node);
   } 
  })
    trProductos.innerHTML += "";
    trProductos.appendChild(fragment);
  
=======*/
  detailsPage.style.display = "flex";
  data.forEach(product =>{
    const movieE1 = document.createElement('div');
    const {id, title, image, price} = product;
    if(id == idTarget){
      movieE1.innerHTML = ` 
    <div class="page-inner" id="pageInner">
      <div class="row">
        <div class="el-wrapper">
          <div class="box-up">
            <img class="img" src="${image}" alt="">
            <div class="img-info">
              <div class="info-inner">
                <span class="p-name">${title}</span>
                <span class="p-company">${title}</span>
              </div>
              <div class="a-size">Talla : <span class="size">S , M , L , XL</span></div>
            </div>
          </div>
  
          <div class="box-down">
            <div class="h-bg">
              <div class="h-bg-inner"></div>
            </div>
  
            <a class="cart" href="#">
              <span class="price">${price}</span>
              <span class="add-to-cart">
                <span class="txt">Agregar al carrito</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
    ` 
      mainModal.appendChild(movieE1);
    }
  })
})

// -----------------------------------------------Menú carrito desplegable --------------------
const btnCarrito = document.getElementById('menuImg');


btnCarrito.addEventListener('click', (e) => {
  document.getElementById('contenedorSudmenu').style.display = 'block';
});

btnCarrito.addEventListener('mouseenter', (e) => {
    document.getElementById('contenedorSudmenu').style.display = 'none';
});




