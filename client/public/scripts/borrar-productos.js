const borrarProducto = async (id) => {
  if (!confirm('¿Eliminar producto?')) return;

  await fetch(`http://localhost:3000/api/productos/${id}`, {
    method: 'DELETE'
  });

  location.reload();
};