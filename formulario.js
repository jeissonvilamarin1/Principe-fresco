let form = document.getElementById("formulario");
let url = "http://localhost:4005/productos";
const btnNombre = document.getElementById("btnNombre");
const btnEditar = document.getElementById("btnEditar");
const btnEliminar = document.getElementById("btnEliminar");

//Guardar (POST)

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let title = document.getElementById("name").value;
  let image = document.getElementById("product-image").value;
  let price = document.getElementById("price").value;
  let category = document.getElementById("dropdown").value;
  await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      title,
      image,
      price,
      category,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
});

//Buscar (GET)

btnNombre.addEventListener("click", async (e) => {
  let res = await fetch(url);
  let data = await res.json();
  let name = document.getElementById("name").value;
  const search = data.find((product) => product.title == name);
  console.log(search);
  const { title, image, price, category, id } = search;
  document.getElementById("name").value = title;
  document.getElementById("product-image").value = image;
  document.getElementById("price").value = price;
  document.getElementById("dropdown").value = category;
  document.getElementById("id").value = id;
});

//Editar (PUT)

btnEditar.addEventListener("click", async () => {
  let title = document.getElementById("name").value;
  let image = document.getElementById("product-image").value;
  let price = document.getElementById("price").value;
  let category = document.getElementById("dropdown").value;
  let id = document.getElementById("id").value;

  await fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      image,
      price,
      category,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
});

<<<<<<< HEAD
//Buscar (GET)

btnNombre.addEventListener('click', async(e)=>{
  let res = await fetch(url);
  let data = await res.json();
  let name = document.getElementById("name").value;
  const search = data.find(product => product.title == name)
  console.log(search);
  const {title, image, price, category, id} = search;
  document.getElementById("name").value = title;
  document.getElementById("product-image").value = image;
  document.getElementById("price").value = price;
  document.getElementById("dropdown").value = category;
  document.getElementById("id").value = id;
})

//Editar (PUT)

btnEditar.addEventListener('click', async() =>{
  let title = document.getElementById("name").value;
  let image = document.getElementById("product-image").value;
  let price = document.getElementById("price").value;
  let category = document.getElementById('dropdown').value;
  let id = document.getElementById("id").value;

  await fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      image,
      price,
      category
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  });
})

=======
>>>>>>> 28ec2c54c2d1b0abec3175e71da5e754bddf257b
btnEliminar.addEventListener("click", async () => {
  let id = document.getElementById("id").value;
  await fetch(`${url}/${id}`, {
    method: "DELETE",
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> 28ec2c54c2d1b0abec3175e71da5e754bddf257b
