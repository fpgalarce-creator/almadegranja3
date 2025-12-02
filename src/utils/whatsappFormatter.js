export const formatWhatsAppMessage = (items, customer) => {
  const lines = ['Pedido desde Alma de Granja:'];

  items.forEach((item) => {
    const subtotal = item.price * item.quantity;
    lines.push(`- ${item.name} x${item.quantity} = $${subtotal.toLocaleString('es-CL')}`);
  });

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  lines.push('', `Subtotal estimado: $${subtotal.toLocaleString('es-CL')}`, '');
  lines.push(`Nombre: ${customer.firstName || ''} ${customer.lastName || ''}`.trim());
  lines.push(`Dirección: ${customer.address || '—'}`);
  lines.push(`Comentarios: ${customer.notes || '—'}`);

  return encodeURIComponent(lines.join('\n'));
};
