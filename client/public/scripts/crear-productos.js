form.addEventListener('submit', async e => {
  e.preventDefault();

  await fetch('http://localhost:3000/api/productos', {
    method: 'POST',
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