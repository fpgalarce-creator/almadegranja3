const WhatsAppFloatingButton = () => (
  <a
    href={`https://wa.me/56958086762?text=${encodeURIComponent('Hola, me gustaría coordinar un pedido con Alma de Granja.')}`}
    target="_blank"
    rel="noopener noreferrer"
    className="sm:hidden fixed bottom-6 left-4 bg-green-600 text-white px-4 py-3 rounded-full shadow-soft flex items-center gap-2 z-30"
  >
    <span>Escríbenos</span>
  </a>
);

export default WhatsAppFloatingButton;
