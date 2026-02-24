const id = new URLSearchParams(location.search).get('id');

fetch(`http://localhost:3000/api/productos/${id}`)
  .then(res => res.json())
  .then(p => {
    nombre.value = p.nombre;
    categoria.value = p.categoria;
    precio.value = p.precio;
    imgUrl.value = p.imgUrl;
  });

form.addEventListener('submit', async e => {
  e.preventDefault();

  await fetch(`http://localhost:3000/api/productos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      nombre: nombre.value,
      categoria: categoria.value,
      precio: Number(precio.value),
      imgUrl: imgUrl.value
    })
  });

  window.location.href = '../index.html';
});
