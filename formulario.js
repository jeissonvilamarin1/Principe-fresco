let form = document.getElementById("formulario");
let url = "http://localhost:4005/productos";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let image = document.getElementById("product-image").value;
  let price = document.getElementById("price").value;
  let category = document.getElementById("dropdown").value;
  await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      name,
      image,
      price,
      category
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
});
